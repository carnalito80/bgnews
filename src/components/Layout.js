import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import '../assets/sass/main.scss';
import Top from './Top';
import Sidebar from './Sidebar';

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPreloaded: true,
    };
  }

  componentDidMount() {
    this.timeoutId = setTimeout(() => {
      this.setState({ isPreloaded: false });
    }, 100);
  }

  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }

  render() {
    const { children } = this.props;
    const { isPreloaded } = this.state;
    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <>
            <Helmet
          
              title={data.site.siteMetadata.title}
              meta={[
                { name: "google-site-verification", content: "HftHEKvnrsmWPwyIvBhI39qm00ArkHOE6zNpIiJYF80" },
                { name: 'description', content: 'The news site that delivers relevant board game news and reviews, We also review card games and RPGs.' },
                { name: 'keywords', content: 'marvel legendary, boardgames, board game reviews, board games, terraforming mars, review, boardgame news, boardgame reviews, dominion, board game news, roleplaying, boardgame-news, boardgamenews' },
              ]}
            >
              <html lang="en" />
              

            </Helmet>
            <div className={isPreloaded ? 'main-body is-preload' : 'main-body'}>
              <div id="wrapper">
            <Sidebar /> 
                <div id="main">
					      	<div className="inner">
                
                    <Top />
                  

                    {children}
                 
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      />
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
