import React from "react"

import JSONcats from "../data/postcatagories.json"


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
    <a href={`/news/${item.slug}/`}  className='button small'>{item.name}</a>
   <br></br>
    </li>
    
);
//console.log(cats);
  
    return (
      // <article classNameName="style1">
      <ul className="alt"> {catz}</ul>
     

    )
  }
}

export default Categories