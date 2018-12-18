import React, { Component } from 'react';
import './Footer.css';
import foot from '../images/footer.svg';
import footAlt from '../images/footerAlt.svg'
import logo from '../images/logo1alt.png';
import Newsletter from '../components/Newsletter'
class Footer extends Component {
    render() {
        return (
            <footer>
                <img className="waveAlt" src={footAlt} alt="logo" style={{ width: "100%" }} />
                <Newsletter />
                <img className="wave" src={foot} alt="logo" style={{ width: "100%" }} />
                <div className="footer py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5 px-4">
                                <a className="navbar-brand pb-3" href="/#"><img src={logo} alt="logo" height="50" /></a>
                                <p className="text-muted text-justify">Dedicated to monitoring the top 5 job demands in the 5 categories: Web, Mobile, Programming Languages, Backend</p>
                                <div className="socials text-white pt-2">
                                    <i class="fab fa-medium"></i>
                                    <i class="fab fa-twitter-square"></i>
                                    <i class="fab fa-github-square"></i>
                                </div>
                            </div>

                            <div className="credits col-md-7 px-5 text-right">
                                <h5 className="pt-2">Brought to you by</h5>
                                <ul>
                                    <a href="https://www.udemy.com/the-complete-web-developer-zero-to-mastery/"><li>Zero To Mastery</li></a>
                                    <a href="https://github.com/aneagoie"><li>Andrei Neagoie</li></a>
                                    <a href="https://github.com/anantankur"><li>Ankur Anant</li></a>
                                    <a href="https://github.com/Dhaval1403"><li>Dhaval 1403</li></a>
                                    <a href="https://github.com/MattCSmith"><li>Matt Smith</li></a>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="copyright">
                    © 2018 FullStack Trends. All Rights Reserved
                </div>

            </footer>
        );
    }
}

export default Footer;