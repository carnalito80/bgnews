import React from 'react';

import Layout from '../components/Layout';
import board2 from '../assets/images/board2.jpg';



import { Link } from 'gatsby';

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
          
         </p>
          </div>
          <span className="image object">
						<img src={board2} alt="Board Game News"/>
					</span>
        </section>
        
        
    
  </Layout>
);

export default IndexPage;
