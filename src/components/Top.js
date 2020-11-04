import React from 'react';

export default function Top() {
  return (
    <header id="header">
    <a href="/" className="logo"><strong>BoardGame-News</strong> -your goto for board game news.</a>
    <ul className="icons">
      <li><a rel="nofollow" href="https://twitter.com/boardgame_news1" className="icon brands fa-twitter"><span className="label">Twitter</span></a></li>
      <li><a rel="nofollow" href="https://smashbomb.com/boardgamenews" className="icon fa-comment"><span className="label">Smashbomb</span></a></li>
      {/* <li><a href="#" className="icon brands fa-facebook-f"><span className="label">Facebook</span></a></li>
      <li><a href="#" className="icon brands fa-snapchat-ghost"><span className="label">Snapchat</span></a></li>
      <li><a href="#" className="icon brands fa-instagram"><span className="label">Instagram</span></a></li>
      <li><a href="#" className="icon brands fa-medium-m"><span className="label">Medium</span></a></li> */}
    </ul>
  </header>
  );
}
