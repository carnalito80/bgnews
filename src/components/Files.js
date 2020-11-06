import React from "react"

import JSONfiles from "../data/files.json"


class Files extends React.Component {
  render() {

    const files = this.props.item
    console.log(files)

    JSONfiles.files.map((data) => {

        files.map((thefile) => {
            if (data._id.$oid == thefile.$oid) {
                thefile.name = data.name;
                thefile.description = data.description;
                thefile.link = data.linkedfile;
                
            }   
        });
        } 
    )
    let filez = files.map((item) =>
    <li className="jk">

    <a href={item.link}> {item.name}</a> - {item.description}
   <br></br>
    </li>
    
);
//console.log(files);
  
    return (
      // <article classNameName="style1">
      <ul className="alt"> {filez}</ul>
     

    )
  }
}

export default Files