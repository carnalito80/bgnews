import React from 'react';

import Layout from '../components/Layout';
import board2 from '../assets/images/board2.jpg';

const IndexPage = () => (
  <Layout>
          <h1>Welcome to Boardgame-news.com</h1>
        <section id="banner">
        <div className="content">
          <header>
          
            <p>
             Hey guys, welcome to the new site!
            </p>
          </header>
          <p>For those of you who pops in here every now and then you might have noticed the site has been down for 3 days straight, and this is due to the hosting providers server being down. <br />
            Strangely enough they havent responded to emails or phone calls so I decided to rebuild the site with a new, faster, cheaper platform. <br />
            For those of you of a technical interest this means that the site will be running staticly with gatsbyJS under the hood rather than a node.js + mongoDB + bootstrap3 solution. <br />
            With that said, i hope you bear with me as I continue to rebuild the site. <br />
            Start using the site by clicking on the menu on the upper left, or go directly to <a href="https://www.boardgame-news.com/news/">news</a> or <a href="https://www.boardgame-news.com/reviews/">reviews</a> right here. <br /><br />

            We also have a section of toplists which can be found the in the menu, or you could jump directly to the <a href="https://www.boardgame-news.com/top/the-best-marvel-legendary-expansions">Best Marvel: Legendary Expansion (top list)</a>
            <br />
            Cheers, <br />
            Jay
          
         </p>
          </div>
          <span className="image object">
						<img src={board2} alt="Board Game News"/>
					</span>
        </section>
        
        
    
  </Layout>
);

export default IndexPage;
