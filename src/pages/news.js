import React from 'react';

import Layout from '../components/Layout';
import PostItem from '../components/PostItem';
import JSONData from "../data/posts.json"

const JSONbuildtime = () => (
  <Layout>
<section>
            <header className="major">
							<h1>News</h1>
              <p>Good ol' news. Except that they're new(ish).</p>
						</header>
            <div className="posts">      
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
