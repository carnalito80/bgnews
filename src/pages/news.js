import React from 'react';

import Layout from '../components/Layout';
import PostItem from '../components/PostItem';
import JSONData from "../data/posts.json"

const JSONbuildtime = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => (
  <Layout>
<section>
            <header className="major">
							<h1>News</h1>
              <p>Good ol' news. Except that they're new(ish).</p>
						</header>
            <div className="posts">
            {edges.map(edge => {
            
              return    <PostItem key={edge.node.id} item={edge.node} />
       
      } )}  
            {JSONData.posts.slice(0).reverse().map((data, index) => {
              data.posttype = 'news'
             return    <PostItem item={data} key={index} />
       
      }
      )}
         
    
           
         	</div>
        </section>

  </Layout>//
)
export default JSONbuildtime

export const pageQuery = graphql`
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
            content_brief
          }
        }
      }
    }
  }
`