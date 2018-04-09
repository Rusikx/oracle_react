import React, { Component } from 'react';

// import logo from '../logo.svg';

class Header extends Component {
	render (){
		return (
			<header className="App-header header">
				<div className="header__logo"></div>
				<div className="header__contacts">
					<a href="tel:+7(727) 355 17 17">
						<i className="fa fa-phone"></i>
						<p>Консультация по телефону</p>
						<span>+7(727)355-17-17</span>
					</a>
				</div>
				{/*<img src={logo} className="App-logo" alt="logo" />
				<h1 className="App-title">Welcome to React</h1>*/}
			</header>
		);
	}
}

export default Header;