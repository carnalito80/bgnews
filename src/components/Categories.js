import React from "react"
// import { Link } from "gatsby"
import JSONcats from "../data/postcatagories.json"
// import parse from 'html-react-parser';

class Categories extends React.Component {
  render() {
    const cats = this.props.item
   
    {JSONcats.categories.map((data, index) => {
        cats.map((thecat) => {
            if (data._id.$oid == thecat.$oid) {
                thecat.name = data.name;
                thecat.slug = data.key;
            }   
        });
        } 
    )}
    let catz = cats.map((item) =>
    <li className="jk" key={item.$oid}>
    <a href={`/news/${item.slug}/`} target="_blank" rel="nofollow norefferer" className='button small'>{item.name}</a>
   <br></br>
    </li>
    
);
console.log(cats);
   // const count = 0 //Can use this with 1-9 to change styles
   // let contentz = parse(item.content.brief)
   // let dejt = item.publishedDate.format('MMMM Do, YYYY')
   // let dejt = Date(item.publishedDate.$date.$numberLong).replace('-', '/').split('T')[0].replace('-', '/')
   // console.log(item.publishedDate.$date.$numberLong)
    // let contentz = item.content.brief.replace(/<[^>]*>?/gm, '')
    // contentz = contentz.replace('&amp;', '').replace('&oacute;', 'ó').replace('&rsquo;', "'").replace('&nbsp;', ' ');
  //   contentz = contentz.replace(/[\u00A0-\u9999<>\&]/gim, function(i) {
  //     return '&#'+i.charCodeAt(0)+';';
  //  });
   // contentz  = contentz;
    return (
      // <article classNameName="style1">
      <ul className="alt"> {catz}</ul>
     

    )
  }
}

export default Categories