import React from "react"
import parse from 'html-react-parser';

class ReviewItem extends React.Component {
  render() {
    const item = this.props.item
    let contentz = parse(item.content.brief)
   
    let dejt = new Intl.DateTimeFormat("en-GB", {
      year: "numeric",
      month: "long",
      day: "2-digit"
    }).format(item.publishedDate.$date.$numberLong)

    if (item.author.$oid === '5ce1aa379fe50a72bf2b659d') item.author.$oid = 'Callan Bond';
    else if (item.author.$oid === '5cc601b2ff87165e3136935d') item.author.$oid = 'William Aukes';
    else if (item.author.$oid === '5e7cad8d9062bd0dd4d2fd99') item.author.$oid = 'Jonathan Nelson';
  
    return (
    
      <article>
      <a href={`/reviews/details/${item.slug}/`} className="image"><img src={item.image.secure_url} alt={item.image.title} /></a>
                   <h3>{item.title}</h3>
                   <i>Posted {dejt } by {item.author.$oid}</i><br></br>
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
