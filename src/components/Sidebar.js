import React from 'react';

// import logo from '../assets/img/website-icon.svg';


class SideBar extends React.Component {
	
	constructor(props) {
    super(props);
    this.state = {
			isMenuVisible:false,
			isToplistsVisible:true,
			width: 800,
		};
		this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
	}
	
	componentDidMount() {
		//  this.updateWindowDimensions();
		window.addEventListener('resize', this.updateWindowDimensions);
	}
	
	componentWillUnmount() {
		window.removeEventListener('resize', this.updateWindowDimensions);
	}

	updateWindowDimensions() {
		this.setState({ width: window.innerWidth});
		if (window.innerWidth > 1280 ) this.setState({ isMenuVisible:true });
		if (window.innerWidth <= 1280 ) this.setState({ isMenuVisible:false });

	}

	toggleMenu = () => {	this.setState(prevState => ({ isMenuVisible: !prevState.isMenuVisible })); }

	toggleToplist = (e) => {this.setState(prevState => ({ isToplistsVisible: !prevState.isMenuVisible })); }
	

  render() {

	const { isMenuVisible } = this.state
	const { isToplistsVisible } = this.state
 
  return (
    <>
    	<div id="sidebar" className={` ${isMenuVisible ? "active" : "inactive"}`} >
						<div className="inner">
            {/* <a
            href="#menu"
            onClick={e => {
              e.preventDefault();
              onMenuClick();
            }}
          >
            Hide
          </a> */}

						{/* Search */}
								{/* <section id="search" className="alt">
									<form method="post" action="#">
										<input type="text" name="query" id="query" placeholder="Search" />
									</form>
								</section> */}

                {/* Menu */}
								<nav id="menu">
									<header className="major">
										<h2>Menu</h2>
									</header>
									<ul>
										<li><a href="/">Home</a></li>
										<li><a href="/news/">News</a></li>
										<li><a href="/reviews/">Reviews</a></li>
										<li>
											<span className={`opener ${isToplistsVisible ? "active" : "inactive"}`} >Toplists</span>
											<ul>
												<li><a href="/top/7-wonders-expansions">Best 7 Wonders expansions</a></li>
												<li><a href="/top/terraforming-mars-expansions">Best Terraforming Mars Expansions</a></li>
												<li><a href="/top/terraforming-mars-sleeves">Best Sleeves for Terraforming Mars</a></li>
												<li><a href="/top/one-vs-many">Top one vs many board games</a></li>
											</ul>
										</li>
										
									</ul>
								</nav>

		{/* Sections */}
									<section>
									<header className="major">
										<h2>Get in touch</h2>
									</header>
									<p>Any questions you might have regarding the content or the site itself, feel free to reach out. Just say Hi works too. :) </p>
									<ul className="contact">
										<li className="icon solid fa-envelope">jk@boardgame-news.com</li>
										<li className="icon solid fa-star"><a href="https://smashbomb.com/boardgamenews">smashbomb profile</a></li>
										<li className="icon solid brands fa-twitter"><a rel="nofollow norefferer" href="https://twitter.com/boardgame_news1">@boardgame_news1</a></li>
										{/* <li className="icon solid fa-briefcase"><a rel="norefferer" href="https://jooble.org">Find jobs in US here</a></li> */}
									</ul>
								</section>
								<section>
									<header className="major">
										<h2>About Us</h2>
									</header>
									<p>We're a small team dedicated on bringing you quality news and reviews for card games, board games, and RPGs. We might even throw in some digital games in there, too. We're based in Sweden, Spain and the UK. boardgamenews</p>
								
								</section>
								<section>
									<header className="major">
										<h2>Selected Reviews</h2>
									</header>
									<ul className="unstyled">
									<li><a href="https://www.boardgame-news.com/reviews/details/tyrants-of-the-underdark">Tyrants of the Underdark</a></li>
									<li><a href="/top/7-wonders-expansions">7 Wonders expansions</a></li>
									<li><a href="https://www.boardgame-news.com/reviews/details/marvel-legendary-world-war-hulk">Marvel Legendary: World War Hulk</a></li>
									<li><a href="https://www.boardgame-news.com/reviews/details/biblios">Biblios</a></li>
									<li><a href="/top/terraforming-mars-expansions">Best Terraforming Mars Expansions</a></li>
									<li><a href="https://www.boardgame-news.com/top/one-vs-many">Top one vs many board games</a></li></ul>
								</section>
								<section>
									<header className="major">
										<h2>Selected News</h2>
									</header>
								
									<ul className="unstyled">
									<li><a href='/news/post/terraforming-mars-the-dice-game'> Terraforming Mars: The Dice Game</a></li>
									<li><a href='/news/post/pokemon-go-evolves'> Pokémon GO evolve guide</a></li>
									<li><a href='/news/post/dungeon-of-the-mad-mage-board-game'> Dungeon of the Mad Mage Board Game</a></li>
									<li><a href='/news/post/spirit-island-jagged-earth'> Spirit Island: Jagged Earth</a></li>
									<li><a href='/news/post/marvel-legendary-into-the-cosmos'>Marvel Legendary: Into the Cosmos</a></li>
									</ul>
								</section>
				
							

							{/* <!-- Footer --> */}
								<footer id="footer">
									<p className="copyright">&copy; 2020 boardgame-news. -your goto in the world's greatest hobby.<br /> Design: <a href=''>JayKay</a>.</p>
								</footer>

						</div>
						<a href="#sidebar"
						 
						 onClick={e => {
							 e.preventDefault();
							 this.toggleMenu();
						 }}
            className="toggle">Toggle</a>
					</div>
      {/* <header id="header">
        <div classNameName="inner">
          <Link to="/" classNameName="logo">
            <span classNameName="symbol">
              <img src={logo} alt="" />
            </span>
            <span classNameName="title">Phantom</span>
          </Link>
          <TopNav onMenuClick={() => toggleHeader(!headerOpen)} />
        </div>
      </header> */}
      {/* <div classNameName={`${headerOpen ? 'is-menu-visible' : ' '}`}>
        <Nav onClose={() => toggleHeader(!headerOpen)} />
      </div> */}
    </>
  )
}
}
export default SideBar