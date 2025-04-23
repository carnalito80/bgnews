

const path = require('path');
const JSONposts = require('./src/data/posts.json');
const JSONr = require('./src/data/reviews.json');
const JSONt = require('./src/data/toplists.json');
const JSONcat = require('./src/data/postcatagories.json');

exports.createPages = async ({ actions, graphql, reporter }) => {
    const { createPage } = actions;
    const template = path.resolve(`src/templates/Generic.js`);
    const toptemplate = path.resolve(`src/templates/Toplists.js`);
    const cattemp = path.resolve(`src/templates/Cats.js`);
    const markdowntemplate = require.resolve(`./src/templates/Markdown.js`)

    JSONposts.posts.map((data, index) => {
        if (data.state == 'published') {
        let theslug = '/news/post/' + data.slug;
        data.posttype = 'news';
        console.log(theslug);
            createPage({
                path: theslug,
                component: template,
                context: {
                    thedata: data,
                
                }
            });
         }
    });
    JSONr.reviews.map((data, index) => {
       
        if (data.state == 'published') {
        let theslug = '/reviews/details/' + data.slug;
        data.posttype = 'reviews';
        console.log(theslug);
            createPage({
                path: theslug,
                component: template,
                context: {
                    thedata: data,
                    
                }
            });
    }

    });
    JSONt.toplists.map((data, index) => {
       
        if (data.state == 'published') {
        let theslug = '/top/' + data.slug;
        console.log(theslug);
            createPage({
                path: theslug,
                component: toptemplate,
                context: {
                    thedata: data,
                
                }
            });
    }

    });
    JSONcat.categories.map((data) => {
       
       
        let slugone = '/news/' + data.key;
        let slugtwo = '/reviews/' + data.key;
        console.log(slugone);
        console.log(slugtwo);
            createPage({
                path: slugone,
                component: cattemp,
                context: {
                    thedata: data,
                
                }
            });
            createPage({
                path: slugtwo,
                component: cattemp,
                context: {
                    thedata: data,
                
                }
            });
   

    });
    const result = await graphql(`
    {
      allMarkdownRemark(
        filter: { frontmatter: {active: {eq: true}} }
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              slug
              posttype
            }
          }
        }
      }
    }
  `)
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    console.log(node.frontmatter.slug);
   
    createPage({
      path: node.frontmatter.slug,
      component: markdowntemplate,
      context: {
        // additional data can be passed via context
        slug: node.frontmatter.slug,
      },
    })
  })
        
    };          

  