import React from "react"
import parse from 'html-react-parser';

class PostItem extends React.Component {
  render() {
    const item = this.props.item
    let contentz = parse(item.content.brief)
   
    // let dejt = Date(item.publishedDate.$date.$numberLong).replace('-', '/').split('T')[0].replace('-', '/')
    let dejt = new Intl.DateTimeFormat("en-GB", {
      year: "numeric",
      month: "long",
      day: "2-digit"
    }).format(item.publishedDate.$date.$numberLong)

    return (
    
      <article>
      <a href={`/news/post/${item.slug}/`} className="image"><img src={item.image.secure_url} alt={item.image.title} /></a>
                   <h3>{item.title}</h3>
                   <i>Posted {dejt }</i> by {item.author.$oid} <br></br>
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
