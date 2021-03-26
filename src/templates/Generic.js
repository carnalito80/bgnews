import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../components/Layout';

import Categories from '../components/Categories';
import Files from '../components/Files';
import parse from 'html-react-parser';

const IndexPage = props => {
  const {pageContext} = props;
  const {thedata} = pageContext;
  let salez;

  if (thedata.author.$oid === '5ce1aa379fe50a72bf2b659d') thedata.author.$oid = 'Callan Bond';
  else if (thedata.author.$oid === '5cc601b2ff87165e3136935d') thedata.author.$oid = 'William Aukes';
  else if (thedata.author.$oid === '5e7cad8d9062bd0dd4d2fd99') thedata.author.$oid = 'Jonathan Nelson';

  if(thedata.salelinks) {
          salez = thedata.salelinks.map((item) =>
          <li key={item}>
          <a href={item} target="_blank" rel="nofollow noreferrer" className='button primary'>{salename(item)}</a>
          </li>
      );
  }
 
  function salename(sale) {
    let salename = 'unknown';
    if (sale.includes('amazon')) salename = 'Amazon';
    else if(sale.includes('amzn'))  salename = 'Amazon';
    else if(sale.includes('ebay'))  salename = 'Ebay';
    else if(sale.includes('gamenerdz'))  salename = 'Gamenerdz';
    // let thereturn = '<a rel="nofollow noreferrer" target="_blank" href=' + sale + 'className="button primary">' + salename + '</a>'; 
    return salename
 } 

  let contentz = parse(thedata.content.extended)
 
  let dejt = new Intl.DateTimeFormat("en-GB", {
    year: "numeric",
    month: "long",
    day: "2-digit"
  }).format(thedata.publishedDate.$date.$numberLong);

  // console.log('====================================');
  // console.log(thedata);
  // console.log('====================================');
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
            <Categories item={thedata.categories} key={thedata.categories.$oid} />
            <ul className="alt">
            {thedata.designer ?  <li  className="jk"><span className="icon fa-user-cog"></span><strong>Designer(s): </strong> {thedata.designer} </li> : ""}
            {thedata.publisher ?   <li className="jk"><span className="icon fa-shopping-cart"></span><strong>Publisher: </strong>{thedata.publisher}</li> : ""}
            {thedata.playercount ?   <li className="jk"><span className="icon fa-shopping-cart"></span><strong>Playercount: </strong>{thedata.playercount}</li> : ""}
            {thedata.playtime ?   <li className="jk"><span className="icon fa-hourglass-half"></span><strong>Length: </strong>{thedata.playtime}</li> : ""}
            {thedata.age ?   <li className="jk"><span className="icon fa-user-plus"></span><strong>Age: </strong>{thedata.age}</li> : ""}
             
             </ul>
         
            <ul className="alt">
            <li></li>
            </ul>
          </div>
        </div>
        
        <div id="content"> {contentz}</div>


      {thedata.file && thedata.files.length > 0  ? 
       <div className="row">
        <div className="col-12">
        <section className="box">
       <h3>Files</h3>
      <Files item={thedata.files} key={thedata.files} />
      </section>
      </div>
     </div>
        : ""}
       

        {/* sales section  */}
        <div className="row gtr-200">
          <p><strong>{thedata.saletext}</strong></p>
        </div>

        <div className="row gtr-200">
          <div className="col-6 col-8-medium col-12-small">
              <ul className="actions fit">
                {salez}
            </ul>
          </div>          
        </div>
        <div className="row gtr-200">
          <p><strong>Return to <span>
          {thedata.posttype === 'news' ? <a href="/news/"> News</a> 
          : thedata.posttype === 'reviews' ? <a href="/reviews/"> Reviews</a>  
          : <a href="/reviews/"> Board game news</a>}
            
            </span></strong></p>
        </div>
      
    </article>
  </Layout>
)
  };

export default IndexPage;
