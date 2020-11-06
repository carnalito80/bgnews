import React from 'react';

import Layout from '../components/Layout';
import ReviewItem from '../components/ReviewItem';
import JSONData from "../data/reviews.json"

const JSONbuildtime = () => (
  <Layout>
<section>
            <header className="major">
							<h1>Reviews</h1>
              <p>of great games. Mostly.</p>
						</header>
            <div className="posts">      
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
