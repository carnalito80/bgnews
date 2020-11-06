

const path = require('path');
const JSONposts = require('./src/data/posts.json');
const JSONr = require('./src/data/reviews.json');
const JSONt = require('./src/data/toplists.json');
const JSONcat = require('./src/data/postcatagories.json');
exports.createPages = ({ actions }) => {
    const { createPage } = actions;
    const template = path.resolve(`src/templates/Generic.js`);
    const toptemplate = path.resolve(`src/templates/Toplists.js`);
    const cattemp = path.resolve(`src/templates/Cats.js`);

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
        
    };          

  