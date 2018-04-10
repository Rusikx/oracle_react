import React, {Component} from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faPhone from '@fortawesome/fontawesome-free-solid/faPhone';

import '../../styles/static/header.css';

class Header extends Component {
    render() {
        return (
            <header className="header">
                <div className="header__logo"/>
                <div className="header__contacts">
                    <a className="header__contacts--link" href="tel:+7(727) 355 17 17">
                        <FontAwesomeIcon className='header__contacts--icon' icon={faPhone}/>
                        <div className='header__contacts--call'>
                            <p className='header__contacts--text'>Консультация по телефону</p>
                            <span className='header__contacts--phone'>+7(727)355-17-17</span>
                        </div>
                    </a>
                </div>
            </header>
        );
    }
}

export default Header;