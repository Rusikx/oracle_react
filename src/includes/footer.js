import React, { Component } from 'react';

class Footer extends Component {
	render (){
		return (
			<footer className="App-footer footer">
				<div className="footer__oracle">
					<div className="footer__socfishing">
						{/*onclick="return !window.open(this.href)"*/}
						<a href="http://vkontakte.ru/club4826211" ><i className="fab fa-vk"></i></a>
						{/*onclick="return !window.open(this.href)"*/}
						<a href="https://www.facebook.com/prodengi.kz?ref=hl" ><i className="fab fa-facebook-f"></i></a>
						{/*onclick="return !window.open(this.href)"*/}
						<a href="http://twitter.com/prodengi_kz" ><i className="fab fa-twitter"></i></a>
					</div>
					<p>© 2008-2018 Интернет портал prodengi.kz. г. Алматы, мкр. Алатау, ул. Алмалы бак 11А, 050023</p>
				</div>
			</footer>
		);
	}
}

export default Footer;