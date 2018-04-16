import React, {Component} from 'react';
import Condition from "../includes/condition";
import Banner from "../components/static/banner";
// import {response} from "../components/response";

class Container extends Component {
	state = {
		mounted: true
	};

	choiceProduct = event => {
		event.preventDefault();
		this.setState(this.hideElementFirstPage);
	};

	hideElementFirstPage(){
		this.hideBanner();
		this.hideInfo();
		this.hideFooter();
	}

	hideBanner(){
		document.getElementsByClassName('content--banner')[0].style.display = 'none';
	};

	hideInfo(){
		document.getElementsByClassName('condition')[0].style.display = 'none';
	};

	hideFooter(){
		document.getElementsByClassName('footer')[0].style.display = 'none';
	};

	render (){
		return (
			<div className="main-content content">
				{/*onclick="javascript:window.location='#content__want'"*/}
				<Banner/>
				<div id="content__want" className="content__want content__active">
					<div className="want__title title__step">Что вы хотите?</div>
					<div className="want__content">
						<div className="content__get" onClick={this.choiceProduct}>
							<div className="get__frame">
								<div className="get__frame--img"></div>
								<div className="get__frame--text">Кредит наличными</div>
							</div>
							<div className="get__check">
								<a><i className="fa fa-check"></i></a>
							</div>
							<input className="want__radio" type="radio" name="tmp_type" value="express" hidden="hidden" />
						</div>
						<div className="content__buy" onClick={this.choiceProduct}>
							<div className="buy__frame">
								<div className="buy__frame--img"></div>
								<div className="buy__frame--text">Автокредит</div>
							</div>
							<div className="buy__check">
								<a><i className="fa fa-check"></i></a>
							</div>
							<input className="want__radio" type="radio" name="tmp_type" value="auto" hidden="hidden" />
						</div>
						<div className="content__credline" onClick={this.choiceProduct}>
							<div className="credline__frame">
								<div className="credline__frame--img"></div>
								<div className="credline__frame--text">Кредит под залог</div>
							</div>
							<div className="credline__check">
								<a><i className="fa fa-check"></i></a>
							</div>
							<input className="want__radio" type="radio" name="tmp_type" value="credline" hidden="hidden" />
						</div>
						<div className="content__hypotec" onClick={this.choiceProduct}>
							<div className="hypotec__frame">
								<div className="hypotec__frame--img"></div>
								<div className="hypotec__frame--text">Ипотеку</div>
							</div>
							<div className="hypotec__check">
								<a><i className="fa fa-check"></i></a>
							</div>
							<input className="want__radio" type="radio" name="tmp_type" value="hypotec" hidden="hidden" />
						</div>
					</div>
				</div>
				<Condition/>
			</div>
		);
	}
}

export default Container;