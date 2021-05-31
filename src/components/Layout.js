import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import '../assets/sass/main.scss';
import TopGeneric from './TopGeneric';
import TopLegendary from './TopLegendary';
import Sidebar from './Sidebar';

// var topadd = <TopGeneric />;
// const url = typeof window !== 'undefined' ? window.location.href : '';
// if (url.search('legendary') >= 0 ) topadd =  <TopLegendary />;
// console.log(topadd);
// console.log(url);
// console.log(url.search('legendary'))
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
    }, 100); //changed 100 to 150 in hope that static queries will load
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
                description
               
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
                  
               
                  <TopGeneric />
                
                   
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
