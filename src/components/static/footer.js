import React, {PureComponent} from 'react';

import '../../styles/static/footer.css';

class Footer extends PureComponent {
    render() {
        return (
            <footer className="footer">
                <div className="footer__oracle">
                    <div className="footer__social">
                        <a href="http://vkontakte.ru/club4826211"><i className="fa fa-vk"/></a>
                        <a href="https://www.facebook.com/prodengi.kz?ref=hl"><i className="fa fa-facebook-f"/></a>
                        <a href="http://twitter.com/prodengi_kz"><i className="fa fa-twitter"/></a>
                    </div>
                    <p>© 2008-{(new Date()).getFullYear()} Интернет портал prodengi.kz. г. Алматы, мкр. Алатау, ул.
                        Алмалы бак 11А, 050023</p>
                </div>
            </footer>
        );
    }
}

export default Footer;