import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../components/Layout';
import PostItem from '../components/PostItem';
import JSONData from "../data/posts.json"

 
  const IndexPage = props => {
  const {pageContext} = props;
  const {thedata} = pageContext;
  let thearray = []; //all posts with this cat goes here
  console.log(thedata)

  JSONData.posts.slice(0).reverse().map((data, index) => {
            data.categories.map((thecat) => {
              if (thecat.$oid == thedata._id.$oid) {
                console.log('yay');
                thearray.push(data);
              }
        });
   
});
console.log(thearray)
  return (
  <Layout>
      <Helmet
              title={thedata.metatitle ? thedata.metatitle : thedata.name }
              meta={[
                { name: 'description', content: thedata.metadescription },
                { name: 'keywords', content: thedata.metakeywords },
              ]}
            >
           
            </Helmet>
<section>
            <header className="major">
							<h1>{thedata.metatitle}</h1>
              <p>{thedata.metadescription}</p>
						</header>
            <div className="posts">
            {thearray.map((data, index) => {
               return <PostItem item={data} key={index} />
            }
            )}
            
         	</div>
        </section>

  </Layout>
  )
};
export default IndexPage
