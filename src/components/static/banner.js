import React, { PureComponent } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faClock from '@fortawesome/fontawesome-free-solid/faClock';
import faTv from '@fortawesome/fontawesome-free-solid/faTv';
import faMoney from '@fortawesome/fontawesome-free-solid/faMoneyBillAlt';
import faArrows from '@fortawesome/fontawesome-free-solid/faAngleDoubleDown';

import '../../styles/static/banner.css';

class banner extends PureComponent {
	render (){
		return (
			<div className="content--banner">
				<div className="banner--fixed">
					<div className="fixed--clear"/>
					<div className="fixed--title">
						<p>Узнайте решение</p>
						<span>и получите кредит</span>
						<p>всего в 3 шага</p>
						<div className="angle--down">
                            <FontAwesomeIcon className='banner--arrows' icon={faArrows}/>
						</div>
					</div>
					<div className="fixed--list">
						<div className="list--application">
							<div className="application--img">
                                <FontAwesomeIcon className='banner--icons' icon={faTv}/>
							</div>
							<div className="application--text">
								<p>Оставьте заявку</p>
							</div>
						</div>
						<div className="list--decision">
							<div className="decision--img">
                                <FontAwesomeIcon className='banner--icons' icon={faClock}/>
							</div>
							<div className="decision--text">
								<p>Узнайте решение</p>
							</div>
						</div>
						<div className="list--get">
							<div className="get--img">
                                <FontAwesomeIcon className='banner--icons' icon={faMoney}/>
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