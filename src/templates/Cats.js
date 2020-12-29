import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../components/Layout';
import PostItem from '../components/PostItem';
import JSONData from "../data/posts.json"
import JSONData2 from "../data/reviews.json"
import { useStaticQuery, graphql} from 'gatsby'


  const IndexPage = (props) => {


    const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        filter: { frontmatter: {active: {eq: true}} }
        ) {
        edges {
          node {
            id
            excerpt(pruneLength: 250)
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              slug
              title
              image
              categories
              content_brief
              posttype
            }
          }
        }
      }
    }
  `)
 
  // console.log(data.allMarkdownRemark.edges)
  // console.log(props)
  const {pageContext} = props;
  const {thedata} = pageContext;
  
  

  let thearray = []; //all posts with this cat goes here

  //lets start with the posts array
  
  JSONData.posts.slice(0).reverse().map((data, index) => {
            data.posttype  = 'news'
     
            data.categories.map((thecat) => {
              if (thecat.$oid === thedata._id.$oid) {
              
                thearray.push(data);
              }
        });
   
});

//lets continue with the reviews

JSONData2.reviews.slice(0).reverse().map((data, index) => {
  data.posttype  = 'review'

  data.categories.map((thecat) => {
    if (thecat.$oid === thedata._id.$oid) {
      
      thearray.push(data);
    }
});

});
thearray.sort((a, b) => b.publishedDate.$date.$numberLong - a.publishedDate.$date.$numberLong)
  return (
  <Layout>
      <Helmet
              title={thedata.metatitle ? thedata.metatitle : thedata.name }
              meta={[
                { name: 'description', content: thedata.metadescription ? thedata.metadescription : 'Posts about ' + thedata.name},
                { name: 'keywords', content: thedata.metakeywords },
              ]}
            >
           
            </Helmet>
          <section>
            <header className="major">
							<h1>{thedata.metatitle ? thedata.metatitle : thedata.name}</h1>
              <p>{thedata.metadescription ? thedata.metadescription : 'Posts about ' + thedata.name}</p>
						</header>
            <div className="posts">
          
            {data.allMarkdownRemark.edges.map(edge => {
              //finally the markdown, we filter it below.
                      for (let x = 0; x < edge.node.frontmatter.categories.length; x++) {
                        if (edge.node.frontmatter.categories[x] === thedata.key) {
                         
                          return  <PostItem key={edge.node.id} item={edge.node} />
                        }

                      }
                    
          
        
        } )}
            {thearray.map((data, index) => {
               return <PostItem item={data} key={index} />
            }
            )}
            
         	</div>
        </section>

  </Layout>
  )
};
export default IndexPage
