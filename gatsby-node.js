

const path = require('path');
const JSONposts = require('./src/data/posts.json');
const JSONr = require('./src/data/reviews.json');
const JSONt = require('./src/data/toplists.json');
exports.createPages = ({ actions }) => {
    const { createPage } = actions;
    const template = path.resolve(`src/templates/Generic.js`);
    const toptemplate = path.resolve(`src/templates/Toplists.js`);

    JSONposts.posts.map((data, index) => {
        if (data.state == 'published') {
        let theslug = '/news/post/' + data.slug;
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


              
//   JSONposts.posts.map((data, index) => {
//       console.log(data.slug);
//                 let theslug = '/posts/' + data.slug;
//                createPage({
//                 path: theslug,
//                 component: template,
              
//                 context: {
//                     path
//                 }
//             });
          
//         })
        
    };          

  