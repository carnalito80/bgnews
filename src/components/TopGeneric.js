import React from 'react';

let thearray;
let topadd = '';
let addtitle = '';
const url = typeof window !== 'undefined' ? window.location.href : '';
if (url.search('legendary') >= 0 ) topadd =  'legendary';

switch (topadd) {
case 'legendary':
addtitle = "Great Marvel Legendary expansions";
thearray = [
  { pictitle : 'Marvel Legendary: World war Hulk',
  title : 'World war Hulk',
  asin : 'B07DFQT7NX',
  url : '',
  src : ''
  
  },
  { pictitle : 'Marvel Legendary: Dark City',
  title : 'Dark City',
  asin : 'B00BX8J32O',
  url : '',
  src : ''
  },
  { pictitle : 'Marvel Legendary expansion Secret Wars Volume 2',
  title : 'Secret Wars volume 2',
  asin : 'B015IWS61Y',
  url : '',
  src : ''
  },
  { pictitle : 'Marvel Legendary expansion S.H.I.E.L.D',
  title : 'Marvel Legendary: S.H.I.E.L.D',
  asin : 'B07Z484WDC',
  url : '',
  src : ''
  }
  ]


break;
default:
addtitle = "Solid, alround games:";
thearray = [
{ pictitle : 'Undaunted: North Africa at Amazon',
title : 'Undaunted: North Africa',
asin : '1472837312',
url : '',
src : ''

},
{ pictitle : 'Tournament at Camelot at Amazon',
title : 'Tournament at Camelot',
asin : 'B01MTD8PIJ',
url : '',
src : ''
},
{ pictitle : 'The Crew at Amazon',
title : 'The Crew',
asin : 'B084GP7X3P',
url : '',
src : ''
},
{ pictitle : '7 Wonders at Amazon',
title : '7 Wonders',
asin : 'B08F65MX4L',
url : '',
src : ''
}
]

};

for (var x=0; x < thearray.length; x++) {
  thearray[x].url = "https://www.amazon.com/gp/product/" +  thearray[x].asin + "/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=" +  thearray[x].asin + "&linkCode=as2&tag=boardgamene01-20&linkId=d13cfe610b37b472e03cc6062a1f302e"
  thearray[x].src = "//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=" + thearray[x].asin + "&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=boardgamene01-20";
}
 


export default function TopGeneric() {
 
  return (
 
    <header id="header">
    <div  className="row">
      <div className="col-4 col-12-medium">
         <a href="/" className="logo"><strong>{addtitle}</strong></a>
      </div>
  
      {thearray.map((item) => (
        <div className="col-2 col-3-small">
           <a target="_blank" rel="nofollow noreferrer" href={item.url}>
           <figure>
            <img alt={item.pictitle} className="amazon-add" src={item.src} ></img>
           <figcaption className="figcaption-add">{item.title}</figcaption>
           </figure>
           
           </a>
        </div>

      ))}
    


    
    </div>
  </header>
  );

}
