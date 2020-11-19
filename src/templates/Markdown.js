import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../components/Layout';
import { graphql } from "gatsby"
import Files from '../components/Files';
import Categories from '../components/Categories';


//import Categories from '../components/Categories';
// import Files from '../components/Files';


// const IndexPage = props => {
//   const {pageContext} = props;
//   const {frontmatter. = pageContext;
//   let salez;

//   if (frontmatter.author.$oid == '5ce1aa379fe50a72bf2b659d') frontmatter.author.$oid = 'Callan Bond';
//   else if (frontmatter.author.$oid == '5cc601b2ff87165e3136935d') frontmatter.author.$oid = 'William Aukes';
//   else if (frontmatter.author.$oid == '5e7cad8d9062bd0dd4d2fd99') frontmatter.author.$oid = 'Jonathan Nelson';

//   if(frontmatter.salelinks) {
//           salez = frontmatter.salelinks.map((item) =>
//           <li key={item}>
//           <a href={item} target="_blank" rel="nofollow noreferrer" className='button primary'>{salename(item)}</a>
//           </li>
//       );
//   }
 
//   function salename(sale) {
//     let salename = 'unknown';
//     if (sale.includes('amazon')) salename = 'Amazon';
//     else if(sale.includes('amzn'))  salename = 'Amazon';
//     else if(sale.includes('ebay'))  salename = 'Ebay';
//     else if(sale.includes('gamenerdz'))  salename = 'Gamenerdz';
//     // let thereturn = '<a rel="nofollow noreferrer" target="_blank" href=' + sale + 'className="button primary">' + salename + '</a>'; 
//     return salename
//  } 

//   let contentz = parse(frontmatter.content.extended)
 
//   let dejt = new Intl.DateTimeFormat("en-GB", {
//     year: "numeric",
//     month: "long",
//     day: "2-digit"
//   }).format(frontmatter.publishedDate.$date.$numberLong);

//   console.log('====================================');
//   console.log(frontmatter.;
//   console.log('====================================');
//   return (

//   <Layout>
//      <Helmet
//               title={frontmatter.metatitle ? frontmatter.metatitle : frontmatter.title }
//               meta={[
//                 { name: 'description', content: frontmatter.metadescription },
//                 { name: 'keywords', content: frontmatter.metakeywords },
//               ]}
//             >
           
//             </Helmet>
//     <article>
     
//       <header>
//       <h1 className="jk">{frontmatter.title}</h1>
//           <p>
//           {frontmatter.metadescription}
//           </p>
//         </header>
        
//         <div className="row gtr-200">
//           <div className="col-6 col-12-small">
//             <span className="image main">
//               <img src={frontmatter.image.secure_url} alt={frontmatter.title} />
//             </span>
//           </div>
          
//           <div className="col-6 col-12-small">
//             <h5>Posted { dejt } by {frontmatter.author.$oid}</h5>
//             <Categories item={frontmatter.categories} key={frontmatter.categories.$oid} />
//             <ul className="alt">
//             {frontmatter.designer ?  <li  className="jk"><span className="icon fa-user-cog"></span><strong>Designer(s): </strong> {frontmatter.designer} </li> : ""}
//             {frontmatter.publisher ?   <li className="jk"><span className="icon fa-shopping-cart"></span><strong>Publisher: </strong>{frontmatter.publisher}</li> : ""}
//             {frontmatter.playercount ?   <li className="jk"><span className="icon fa-shopping-cart"></span><strong>Playercount: </strong>{frontmatter.playercount}</li> : ""}
//             {frontmatter.playtime ?   <li className="jk"><span className="icon fa-hourglass-half"></span><strong>Length: </strong>{frontmatter.playtime}</li> : ""}
//             {frontmatter.age ?   <li className="jk"><span className="icon fa-user-plus"></span><strong>Age: </strong>{frontmatter.age}</li> : ""}
             
//              </ul>
         
//             <ul className="alt">
//             <li></li>
//             </ul>
//           </div>
//         </div>
        
//         <div id="content"> {contentz}</div>


//       {frontmatter.files.length > 0  ? 
//        <div className="row">
//         <div className="col-12">
//         <section className="box">
//        <h3>Files</h3>
//       <Files item={frontmatter.files} key={frontmatter.files} />
//       </section>
//       </div>
//      </div>
//         : ""}
       

//         {/* sales section  */}
//         <div className="row gtr-200">
//           <p><strong>{frontmatter.saletext}</strong></p>
//         </div>

//         <div className="row gtr-200">
//           <div className="col-6 col-8-medium col-12-small">
//               <ul className="actions fit">
//                 {salez}
//             </ul>
//           </div>          
//         </div>
//         <div className="row gtr-200">
//           <p><strong>Return to <span>
//           {frontmatter.posttype == 'news' ? <a href="/news/"> News</a> 
//           : frontmatter.posttype == 'reviews' ? <a href="/reviews/"> Reviews</a>  
//           : <a href="/reviews/"> Board game news</a>}
            
//             </span></strong></p>
//         </div>
      
//     </article>
//   </Layout>
// )
//   };

function salename(sale) {
  let salename = 'unknown';
  if (sale.includes('amazon')) salename = 'Amazon';
  else if(sale.includes('amzn'))  salename = 'Amazon';
  else if(sale.includes('ebay'))  salename = 'Ebay';
  else if(sale.includes('gamenerdz'))  salename = 'Gamenerdz';
  // let thereturn = '<a rel="nofollow noreferrer" target="_blank" href=' + sale + 'className="button primary">' + salename + '</a>'; 
  return salename
} 


  export default function Template({
    data, // this prop will be injected by the GraphQL query below.
  }) {
    const { markdownRemark } = data // data.markdownRemark holds your post data
    const { frontmatter, html } = markdownRemark
    console.log(frontmatter.categories);
    console.log(frontmatter.salelinks)
   let salez
    if(frontmatter.salelinks) {

      salez = frontmatter.salelinks.map((item) =>
      <li key={item}>
      <a href={item} target="_blank" rel="nofollow noreferrer" className='button primary'>{salename(item)}</a>
      </li>
    );
    }
 
    return (

   <Layout>
     <Helmet
              title={frontmatter.metatitle ? frontmatter.metatitle : frontmatter.title }
              meta={[
                { name: 'description', content: frontmatter.metadescription },
                { name: 'keywords', content: frontmatter.metakeywords },
              ]}
            >
           
    </Helmet>
    <article>
      <header>
       <h1 className="jk">{frontmatter.title}</h1>
          <p>
          {frontmatter.metadescription}
          </p>
      </header>
        
        <div className="row gtr-200">
          <div className="col-6 col-12-small">
            <span className="image main">
              <img src={frontmatter.image} alt={frontmatter.title} />
            </span>
          </div>
          <div className="col-6 col-12-small">
            <h5>Posted { frontmatter.date } by {frontmatter.author}</h5>
            {<Categories item={frontmatter.categories} key={frontmatter.categories} /> }
            <ul className="alt">
            {frontmatter.designer ?  <li  className="jk"><span className="icon fa-user-cog"></span><strong>Designer(s): </strong> {frontmatter.designer} </li> : ""}
            {frontmatter.publisher ?   <li className="jk"><span className="icon fa-shopping-cart"></span><strong>Publisher: </strong>{frontmatter.publisher}</li> : ""}
            {frontmatter.playercount ?   <li className="jk"><span className="icon fa-shopping-cart"></span><strong>Playercount: </strong>{frontmatter.playercount}</li> : ""}
            {frontmatter.playtime ?   <li className="jk"><span className="icon fa-hourglass-half"></span><strong>Length: </strong>{frontmatter.playtime}</li> : ""}
            {frontmatter.age ?   <li className="jk"><span className="icon fa-user-plus"></span><strong>Age: </strong>{frontmatter.age}</li> : ""}
             
             </ul>
         
            <ul className="alt">
            <li></li>
            </ul>
          </div>
        </div>
        <div id="content"  dangerouslySetInnerHTML={{ __html: html }}></div>

        {frontmatter.files.length > 4  ? 
       <div className="row">
        <div className="col-12">
        <section className="box">
       <h3>Files</h3>
      <Files item={frontmatter.files} key={frontmatter.files} />
      </section>
      </div>
     </div>
        : ""}
       

        {/* sales section  */}
        <div className="row gtr-200">
          <p><strong>{frontmatter.saletext}</strong></p>
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
          {frontmatter.posttype == 'news' ? <a href="/news/"> News</a> 
          : frontmatter.posttype == 'reviews' ? <a href="/reviews/"> Reviews</a>  
          : <a href="/reviews/"> Board game news</a>}
            
            </span></strong></p>
        </div>
    </article>
    </Layout>
     
    )
  }

  export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        author
        categories
        image
        metakeywords
        metadescription
        content_brief
        salelinks
        saletext
        files
        posttype

      }
    }
  }
  `  