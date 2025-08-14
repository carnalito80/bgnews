import React from "react"
import parse from 'html-react-parser';

class PostItem extends React.Component {
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
    let posttype
  

 //JSON stuff here
    if (item.content) {
      posttype = item.posttype
      if (posttype === 'review' || posttype === 'reviews') slug = '/reviews/details/' + item.slug
      else if (posttype === 'news') slug = '/news/post/' + item.slug
      else slug = '/news/post/' + item.slug
      posttype = posttype.charAt(0).toUpperCase() + posttype.slice(1)
      contentz = parse(item.content.brief)
      ismark = false
      dejt = Date(item.publishedDate.$date.$numberLong).replace('-', '/').split('T')[0].replace('-', '/')
      dejt = new Intl.DateTimeFormat("en-GB", {
        year: "numeric",
        month: "long",
        day: "2-digit"
      }).format(item.publishedDate.$date.$numberLong)

      imageurl =item.image.secure_url
      author  = item.author.$oid
      if (item.image.title && item.image.title.length > 0) imagealt = item.image.title
      else imagealt = item.title
      title = item.title

      

    }
        
//Markdown
    else {
      if (item.frontmatter.posttype && item.frontmatter.posttype.length > 0) {
      posttype = item.frontmatter.posttype
      posttype = posttype.charAt(0).toUpperCase() + posttype.slice(1)
      }
      else posttype = 'News'
      ismark = true
      if (item.frontmatter.content_brief.length > 5)  contentz =item.frontmatter.content_brief
      else contentz = item.excerpt
      dejt = item.frontmatter.date
      title = item.frontmatter.title
      slug = item.frontmatter.slug
      imageurl = item.frontmatter.image
      imagealt = item.frontmatter.title

    }
    return (
  
      <article>
      <a href={slug} className="image"><img src={imageurl} alt={imagealt} /></a>
                   <h3>{title}</h3>
                   <i>{posttype} posted {dejt } by {author} </i><br></br>
                      <div className="text-wrapper">
                    
                       <div className="paragraph">
                       {ismark? <p> {contentz} </p> : contentz }
                        </div>
                      
                      
                      </div>
                      <span className="fadeout"></span>
                    <ul className="actions">
                      <li><a href={slug} className="button">Read On</a></li>
                    </ul> 
      </article>

    )
  }
}

export default PostItem
