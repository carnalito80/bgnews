import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../components/Layout';
import PostItem from '../components/PostItem';
import JSONData from "../data/posts.json"
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
            }
          }
        }
      }
    }
  `)
 
  console.log(data.allMarkdownRemark.edges)
  console.log(props)
  const {pageContext} = props;
  const {thedata} = pageContext;
  

  let thearray = []; //all posts with this cat goes here
  console.log(thedata);
  

  JSONData.posts.slice(0).reverse().map((data, index) => {
            data.categories.map((thecat) => {
              if (thecat.$oid == thedata._id.$oid) {
                console.log('yay');
                thearray.push(data);
              }
        });
   
});
console.log(thearray)
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
            
            return    <PostItem key={edge.node.id} item={edge.node} />
        
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
