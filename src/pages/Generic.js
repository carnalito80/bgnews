import React from 'react';

import Layout from '../components/Layout';

import Categories from '../components/Categories';
import parse from 'html-react-parser';

const IndexPage = props => {
  const {pageContext} = props;
  const {thedata} = pageContext;
  let salez;

  if(thedata.salelinks) {
          salez = thedata.salelinks.map((item) =>
          <li key={item}>
          <a href={item} target="_blank" rel="nofollow norefferer" className='button primary'>{salename(item)}</a>
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

  //     for (const sale of thedata.salelinks) {
  //       if (sale.includes('amazon')) salename = 'Amazon';
  //       else if(sale.includes('amzn'))  salename = 'Amazon';
  //       else if(sale.includes('ebay'))  salename = 'Ebay';
  //       else if(sale.includes('gamenerdz'))  salename = 'Gamenerdz';
       
  //     }
       
          // a.mx-auto.m-3.btn.btn-primary(href=sale, rel='nofollow noreferrer', target='_blank')= name					

  let contentz = parse(thedata.content.extended)
  //  var d = Date(thedata.publishedDate.$date.$numberLong);
  //  var year = d.getFullYear();
  //  var date = d.getDate();
  //  var month = d.getMonth();
  //  const months = [
  //   'January',
  //   'February',
  //   'March',
  //   'April',
  //   'May',
  //   'June',
  //   'July',
  //   'August',
  //   'September',
  //   'October',
  //   'November',
  //   'December'
  // ]
  let dejt = Date(thedata.publishedDate.$date.$numberLong).replace('-', '/').split('T')[0].replace('-', '/')
// let dejt = year + '-' + month + '-' + date;
  console.log('====================================');
  console.log(thedata);
  console.log('====================================');
  return (

  <Layout>
    <div id="main">
      <div className="inner">
        <h1>{thedata.title}</h1>
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
            <li></li>
            </ul>
          </div>
        </div>
        <div id="content"> {contentz}</div>
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
      </div>
    </div>
  </Layout>
)
  };

export default IndexPage;
