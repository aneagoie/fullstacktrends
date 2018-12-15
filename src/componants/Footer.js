import React, { Component } from 'react';
import './Footer.css';

class Header extends Component {
    render() {
        return (
            <footer class="bg-white">
                <div class="container py-5">

                    <ul class="nav justify-content-center footLinks">
                        <li class="nav-item">
                            <a class="nav-link active" href="https://zerotomastery.io">Zero To Mastery</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="https://fullstacktrends.com">Newsletter</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="https://fullstacktrends.com">Data</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="https://fullstacktrends.com">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="https://fullstacktrends.com">Repo</a>
                        </li>
                    </ul>


                    <div class="text-center pt-3 footSocial">
                        <a href="https://www.twitter.com" class="mx-3"><i class="fab fa-twitter"></i></a>
                        <a href="https://www.facebook.com" class="mx-3"><i class="fab fa-facebook text-facebook" aria-hidden="true"></i></a>
                        <a href="https://www.instagram.com" class="mx-3"><i class="fab fa-instagram text-instagram" aria-hidden="true"></i></a>
                        <a href="https://www.pintrest.com" class="mx-3"><i class="fab fa-pinterest text-pinterest" aria-hidden="true"></i></a>
                        <a href="https://www.google.com" class="mx-3"><i class="fab fa-google text-google" aria-hidden="true"></i></a>
                    </div>
                </div>

                <div className="bg-dark text-center text-secondary p-2">
                    © 2018 FullStack Trends. All Rights Reserved
                </div>
            </footer>
        );
    }
}

export default Header;