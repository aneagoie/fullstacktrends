import React, { Component } from 'react';
import './Footer.css';
import foot from '../images/footer.svg';
import logo from '../images/logo1alt.png';

class Footer extends Component {
    render() {
        return (
            <footer>
                <img className="wave bg-white" src={foot} alt="logo" style={{ width: "100%" }} />
                <div className="container my-5">
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

                        <div className="col-md-7 px-5">
                            <h2 className="text-white pt-2">Newsletter</h2>
                            <p className="text-muted pt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec lacinia risus. Proin placerat massa vestibulum, fringilla nunc a, blandit orci.</p>
                            <div class="input-group  py-3 w-75 ml-2">
                                <div class="input-group-prepend">
                                    <div class="input-group-text"><i class="fas fa-envelope-open"></i></div>
                                </div>
                                <input type="text" class="form-control" id="inlineFormInputGroup" placeholder="Username" />
                                <button className="btn btn-outline-submit">Submit</button>
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