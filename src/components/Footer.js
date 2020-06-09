import React from 'react';

export default function Footer() {
    return (
        <footer>
            <h3 className="footer__title">&copy; Animal DB 2020</h3>
            <h4 className="footer__cite">
                All facts borrowed from <a href="https://www.nationalgeographic.com/animals/" target="_blank" className="footer__cite__link">National Geographic</a>
            </h4>
        </footer>
    )
}
