import React from 'react';
import SocialListItem from "./SocialListItem";
import "../css/App.css"

function Footer() {
    return (
        <footer>
            <a className="footer-email" href="mailto:sshung@gmail.com">sshung at gmail dot com</a>
            <ul className="social-list">
                <SocialListItem url="https://github.com/stacyhung" icon="fa-github" />
                <SocialListItem url="https://www.linkedin.com/in/stacyshung" icon="fa-linkedin" />
                <SocialListItem url="https://twitter.com/Stacy_S_Hung" icon="fa-twitter-square" />
                <SocialListItem url="https://www.facebook.com/stacysusanhung" icon="fa-facebook-square" />
            </ul>

        </footer >
    )
}

export default Footer;