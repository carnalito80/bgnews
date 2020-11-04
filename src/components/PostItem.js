import React from "react"
import { Link } from "gatsby"
import parse from 'html-react-parser';

class PostItem extends React.Component {
  render() {
    const item = this.props.item
    const count = 0 //Can use this with 1-9 to change styles
    let contentz = parse(item.content.brief)
   // let dejt = item.publishedDate.format('MMMM Do, YYYY')
    let dejt = Date(item.publishedDate.$date.$numberLong).replace('-', '/').split('T')[0].replace('-', '/')
    console.log(item.publishedDate.$date.$numberLong)
    // let contentz = item.content.brief.replace(/<[^>]*>?/gm, '')
    // contentz = contentz.replace('&amp;', '').replace('&oacute;', 'ó').replace('&rsquo;', "'").replace('&nbsp;', ' ');
  //   contentz = contentz.replace(/[\u00A0-\u9999<>\&]/gim, function(i) {
  //     return '&#'+i.charCodeAt(0)+';';
  //  });
   // contentz  = contentz;
    return (
      // <article classNameName="style1">
      <article>
      <a href={`/news/post/${item.slug}/`} className="image"><img src={item.image.secure_url} alt={item.image.title} /></a>
                   <h3>{item.title}</h3>
                   <i>Posted { dejt }</i><br></br>
                      <div className="text-wrapper">
                      { contentz}
                      
                      </div>
                      <span className="fadeout"></span>
                    <ul className="actions">
                      <li><a href={`/news/post/${item.slug}/`} className="button">Read On</a></li>
                    </ul> 
      </article>

    )
  }
}

export default PostItem

// export const storyFragment = graphql`
//   fragment Post on mongodbBoardgamenewsPosts {
//     id
//     slug
//     title
//     image{url}
//     content{brief}
//   }
// `