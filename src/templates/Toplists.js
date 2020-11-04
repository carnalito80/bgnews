import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../components/Layout';
import ListItem from '../components/ListItem';

import JSONData from "../data/listitems.json"
import parse from 'html-react-parser';

const IndexPage = props => {
  const {pageContext} = props;
  const {thedata} = pageContext;
  let contentz = parse(thedata.description)
  let thearray = [];

  let dejt = Date(thedata.publishedDate.$date.$numberLong).replace('-', '/').split('T')[0].replace('-', '/')
// let dejt = year + '-' + month + '-' + date;
  console.log('====================================');
  console.log(thedata);
  console.log(JSONData);
  console.log('====================================');

  JSONData.items.map((data, index) => {
    thedata.listitems.map((theitem) => {
        if (data._id.$oid == theitem.$oid) thearray.push(data);
   });
});
console.log( thearray);

  return (

  <Layout>
     <Helmet
              title={thedata.metatitle ? thedata.metatitle : thedata.title }
              meta={[
                { name: 'description', content: thedata.metadescription },
                { name: 'keywords', content: thedata.metakeywords },
              ]}
            >
            
            </Helmet>
   <article>
      <header>
      <h1 className="jk">{thedata.title}</h1>
          <p>
          {thedata.metadescription}
          </p>
        </header>
        
        <div className="row gtr-200">
          <div className="col-6 col-12-small">
            <span className="image main">
              <img src={thedata.image.secure_url} alt={thedata.title} />
            </span>
          </div>
          
          <div className="col-6 col-12-small">
            <h5>Posted { dejt } by {thedata.author.$oid}</h5>
        
          </div>
        </div>
        
        <section id="intro"> {contentz}</section>

            
            {thearray.map((data, index) => {
               return <ListItem item={data} key={index} />
            }
            )}
             
           
            </article>


       
    
  </Layout>
)
  };

export default IndexPage;
