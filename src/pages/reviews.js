import React from 'react';

import Layout from '../components/Layout';
import ReviewItem from '../components/ReviewItem';
import JSONData from "../data/reviews.json"
import { graphql } from 'gatsby'

const JSONbuildtime = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => (
  <Layout>
<section>
            <header className="major">
							<h1>Reviews</h1>
              <p>of great games. Mostly.</p>
						</header>
            <div className="posts">
            {edges.map(edge => {
            
            return    <ReviewItem key={edge.node.id} item={edge.node} />
     
    } )}      
            {JSONData.reviews.slice(0).reverse().map((data, index) => {
             data.posttype = 'reviews'
             return    <ReviewItem item={data} key={index} />
       
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
      filter: { frontmatter: {active: {eq: true}, posttype: {eq: "review"} } }
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
