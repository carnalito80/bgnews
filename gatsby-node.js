

const path = require('path');
const JSONposts = require('./src/data/posts.json');
exports.createPages = ({ actions }) => {
    const { createPage } = actions;
    const template = path.resolve(`src/pages/Generic.js`);

    JSONposts.posts.map((data, index) => {
       
        let theslug = '/news/post/' + data.slug;
        console.log(theslug);
        createPage({
            path: theslug,
            component: template,
            context: {
                thedata: data,
               
            }
        });
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

  