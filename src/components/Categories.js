import React from "react"

import JSONcats from "../data/postcatagories.json"


class Categories extends React.Component {
  render() {
    const cats = this.props.item
    var catsmark = []
    //var x = 0
    {JSONcats.categories.map((data, index) => {
        cats.map((thecat) => {
          if (thecat.$oid) {
            if (data._id.$oid === thecat.$oid) {
                thecat.name = data.name;
                thecat.slug = data.key;
            }
          }
          else {
            
            if (data.key === thecat) {
              var current = {}
              current.name = data.name
              current.slug = data.key
              current.$oid = data._id.$oid

             catsmark.push(current);
            }

          }
         
        });
        } 
    )}

    let catz
    if (catsmark.length > 0 ) catz = catsmark.map((item) =>
    <li className="jk" key={item.slug}>
    <a href={`/news/${item.slug}/`}  className='button small'>{item.name}</a>
   <br></br>
    </li>);
    else catz = cats.map((item) =>
    <li className="jk" key={item.$oid}>
    <a href={`/news/${item.slug}/`}  className='button small'>{item.name}</a>
   <br></br>
    </li>);
  // console.log(catz)
    return (
      // <article classNameName="style1">
      <ul className="alt"> {catz}</ul>
     

    )
  }
}

export default Categories