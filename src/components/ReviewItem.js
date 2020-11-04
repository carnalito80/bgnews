import React from "react"
import parse from 'html-react-parser';

class ReviewItem extends React.Component {
  render() {
    const item = this.props.item
    let contentz = parse(item.content.brief)
   
    let dejt = Date(item.publishedDate.$date.$numberLong).replace('-', '/').split('T')[0].replace('-', '/')
  
    return (
    
      <article>
      <a href={`/reviews/details/${item.slug}/`} className="image"><img src={item.image.secure_url} alt={item.image.title} /></a>
                   <h3>{item.title}</h3>
                   <i>Posted { dejt }</i><br></br>
                      <div className="text-wrapper">
                      { contentz}
                      
                      </div>
                      <span className="fadeout"></span>
                    <ul className="actions">
                      <li><a href={`/reviews/details/${item.slug}/`} className="button">Read On</a></li>
                    </ul> 
      </article>

    )
  }
}

export default ReviewItem
