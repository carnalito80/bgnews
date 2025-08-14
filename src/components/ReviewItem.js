import React from "react"
import parse from 'html-react-parser';

class ReviewItem extends React.Component {
  render() {
    const item = this.props.item
    let contentz
    let dejt
    let imageurl = '/images/static.jpg'
    let imagealt
    let author = 'Jay Kay'
    let title
    let slug
    let ismark

    
     //JSON stuff here
     if (item.content) {
       ismark = false
      contentz = parse(item.content.brief)
      dejt = Date(item.publishedDate.$date.$numberLong).replace('-', '/').split('T')[0].replace('-', '/')
      dejt = new Intl.DateTimeFormat("en-GB", {
        year: "numeric",
        month: "long",
        day: "2-digit"
      }).format(item.publishedDate.$date.$numberLong)
      imageurl = item.image.secure_url
      author  = item.author.$oid
      imagealt = item.image.title
      title = item.title
      slug = '/reviews/details/' + item.slug

    if (item.author.$oid === '5ce1aa379fe50a72bf2b659d') author = 'Callan Bond';
    else if (item.author.$oid === '5cc601b2ff87165e3136935d') author = 'William Aukes';
    else if (item.author.$oid === '5e7cad8d9062bd0dd4d2fd99') author = 'Jonathan Nelson';
     }
     //Markdown
     else {
       ismark = true
      if (item.frontmatter.content_brief.length > 5)  contentz =item.frontmatter.content_brief
      else contentz = item.excerpt
      
      dejt = item.frontmatter.date
      title = item.frontmatter.title
      slug = item.frontmatter.slug
      imageurl = item.frontmatter.image

    }

    return (
    
      <article>
      <a href={slug} className="image"><img src={imageurl} alt={imagealt} /></a>
                   <h3>{title}</h3>
                   <i>Posted {dejt } by {author}</i><br></br>
                      <div className="text-wrapper">
                       {ismark? <p> {contentz} </p> : contentz }
                      </div>
                      <span className="fadeout"></span>
                    <ul className="actions">
                      <li><a href={slug} className="button">Read On</a></li>
                    </ul> 
      </article>

    )
  }
}

export default ReviewItem
