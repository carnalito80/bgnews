import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

import '../assets/sass/main.scss';
import Sidebar from './Sidebar';

// Functional wrapper to fetch static query data
const LayoutQuery = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);

  // Safety check to avoid flashing Loading(StaticQuery)
  if (!data || !data.site) return null;

  return children(data);
};

class Layout extends Component {
  render() {
    const { children } = this.props;

    return (
      <LayoutQuery>
        {(data) => (
          <>
            <Helmet
              title={data.site.siteMetadata.title}
              meta={[
                { name: "google-site-verification", content: "HftHEKvnrsmWPwyIvBhI39qm00ArkHOE6zNpIiJYF80" },
                {
                  name: 'description',
                  content: 'The news site that delivers relevant board game news and reviews. We also review card games and RPGs.',
                },
                {
                  name: 'keywords',
                  content: 'marvel legendary, boardgames, board game reviews, board games, terraforming mars, review, boardgame news, boardgame reviews, dominion, board game news, roleplaying, boardgame-news, boardgamenews',
                },
              ]}
            >
              <html lang="en" />
              <link
                href="https://cdn.sur.ly/widget-awards/css/surly-badges.min.css"
                rel="stylesheet"
              />
            </Helmet>

            <div className="main-body">
              <div id="wrapper">
                <Sidebar />
                <div id="main">
                  <div className="inner">{children}</div>
                </div>
              </div>
            </div>
          </>
        )}
      </LayoutQuery>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
