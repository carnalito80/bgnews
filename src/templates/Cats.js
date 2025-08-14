import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../components/Layout';
import PostItem from '../components/PostItem';
import JSONData from '../data/posts.json';
import JSONData2 from '../data/reviews.json';
import { useStaticQuery, graphql } from 'gatsby';

const IndexPage = (props) => {
  const { pageContext } = props;
  const { thedata } = pageContext;

  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        filter: { frontmatter: { active: { eq: true } } }
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
  `);

  // Filter Markdown posts by category
  const markdownPosts = data.allMarkdownRemark.edges
    .filter(edge => edge.node.frontmatter.categories.includes(thedata.key))
    .map(edge => <PostItem key={edge.node.id} item={edge.node} />);

  // Filter JSON posts
  const jsonPosts = [...JSONData.posts, ...JSONData2.reviews]
    .slice() // create copy to avoid mutating original
    .reverse()
    .filter(post => post.categories.some(cat => cat.$oid === thedata._id.$oid))
    .map((post, index) => {
      // add posttype if missing
      post.posttype = post.posttype || (JSONData.posts.includes(post) ? 'news' : 'review');
      return <PostItem key={index} item={post} />;
    });

  // Combine all posts
  const allPosts = [...markdownPosts, ...jsonPosts];

  return (
    <Layout>
      <Helmet
        title={thedata.metatitle || thedata.name}
        meta={[
          {
            name: 'description',
            content: thedata.metadescription || `Posts about ${thedata.name}`,
          },
          { name: 'keywords', content: thedata.metakeywords || '' },
        ]}
      />
      <section>
        <header className="major">
          <h1>{thedata.metatitle || thedata.name}</h1>
          <p>
            {thedata.metadescription || `Posts about ${thedata.name}`}
            {thedata.name.toUpperCase() === 'LEGENDARY' && (
              <span>
                . Check out our list of{' '}
                <a href="/top/the-best-marvel-legendary-expansions">
                  best marvel legendary expansions
                </a>
              </span>
            )}
          </p>
        </header>
        <div className="posts">{allPosts}</div>
      </section>
    </Layout>
  );
};

export default IndexPage;
