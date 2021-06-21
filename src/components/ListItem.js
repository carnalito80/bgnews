import React from "react"
import parse from 'html-react-parser';

class ListItem extends React.Component {

  render() {
    const thedata = this.props.item
    let contentz = parse( thedata.gametext)
    let salez;

    if(thedata.salelinks) {
            salez = thedata.salelinks.map((item) =>
            <li key={item}>
            <a href={item} target="_blank" rel="nofollow noreferrer" className='button primary'>{salename(item)}</a>
            </li>
        );
    }
 
      function salename(sale) {
        let salename = 'unknown';
        if (sale.includes('amazon')) salename = 'Amazon';
        else if(sale.includes('amzn'))  salename = 'Amazon';
        else if(sale.includes('ebay'))  salename = 'Ebay';
        else if(sale.includes('gamenerdz'))  salename = 'Gamenerdz';
        // let thereturn = '<a rel="nofollow noreferrer" target="_blank" href=' + sale + 'className="button primary">' + salename + '</a>'; 
        return salename
    } 
  
   
   
  
    return (

      <section>
        <h3>{ thedata.gametitle}</h3>
        
        <div className="row gtr-200">
          <div className="col-5 col-5-medium col-12-small">
            <span className="image fit">
              <img src={ thedata.image.secure_url} alt={ thedata.name} />
            </span>
          </div>
          <div className="col-7 col-7-medium col-12-small">
             <div className="text-wrapper">{ contentz}</div>
             <ul className="alt">
            {thedata.designer ?  <li  className="jk"><span className="icon fa-user-cog"></span><strong>Designer(s): </strong> {thedata.designer} </li> : ""}
            {thedata.publisher ?   <li className="jk"><span className="icon fa-shopping-cart"></span><strong>Publisher: </strong>{thedata.publisher}</li> : ""}
            {thedata.playercount ?   <li className="jk"><span className="icon fa-shopping-cart"></span><strong>Playercount: </strong>{thedata.playercount}</li> : ""}
            {thedata.playtime ?   <li className="jk"><span className="icon fa-hourglass-half"></span><strong>Length: </strong>{thedata.playtime}</li> : ""}
            {thedata.age ?   <li className="jk"><span className="icon fa-user-plus"></span><strong>Age: </strong>{thedata.age}</li> : ""}
            {thedata.cost ?   <li className="jk"><span className="icon fa-shopping-cart"></span><strong>Cost: </strong>{thedata.cost}</li> : ""}
        </ul>
          </div>
        </div>
        <div className="row gtr-200">
        
        </div>         
                     
                      <div className="row gtr-200">
        <p><strong>{thedata.saletext}</strong></p>
        </div>
        <div className="row gtr-200">
          <div className="col-6 col-8-medium col-12-small">
              <ul className="actions fit">
                {salez}
            </ul>
          </div>          
        </div>     
      </section>

    )
  }
}

export default ListItem
