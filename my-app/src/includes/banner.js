import React, { Component } from 'react';

class banner extends Component {
	render (){
		return (
			<div className="content--banner">
				<div className="banner--fixed">
					<div className="fixed--clear"></div>
					<div className="fixed--title">
						<p>Узнайте решение</p>
						<span>и получите кредит</span>
						<p>всего в 3 шага</p>
						<div className="angle--down">
							<i className="fas fa-angle-double-down"></i>
						</div>
					</div>
					<div className="fixed--list">
						<div className="list--application">
							<div className="application--img">
								<i className="fas fa-tv"></i>
							</div>
							<div className="application--text">
								<p>Оставьте заявку</p>
							</div>
						</div>
						<div className="list--decision">
							<div className="decision--img">
								<i className="far fa-clock"></i>
							</div>
							<div className="decision--text">
								<p>Узнайте решение</p>
							</div>
						</div>
						<div className="list--get">
							<div className="get--img">
								<i className="far fa-money-bill-alt"></i>
							</div>
							<div className="get--text">
								<p>Получите деньги в&nbsp;банке</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default banner;