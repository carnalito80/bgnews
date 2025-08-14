/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
const React = require('react');

exports.onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    // Sur.ly CSS async load
    <link
      key="surly-badges-css"
      rel="stylesheet"
      href="https://cdn.sur.ly/widget-awards/css/surly-badges.min.css"
      media="print"
      onLoad={e => { e.target.media = 'all'; }}
    />,

  ]);
};
