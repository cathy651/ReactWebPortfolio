import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import './index.css';


class Landing extends Component {
  render() {
    return(
      <div>
        <div >
      // preload
    <div class="header-img">

    </div>

    <header class="header">
        <div class="header__logo-box">
            // <img src="img/logo-white.png" alt="Aaron" class="header__logo"></img>
        </div>
        <div class="header-text-box">
            <h1 class="heading-primary">
                <img src="."></img>
                <span class="heading-primary--main">Aaron Pietsch</span>
                <span class="heading-primary--sub">Front End Engineer</span>
            </h1>

            <a href="#projects" class="btn btn--white btn--animated smooth-goto">See Projects</a>
        </div>
    </header>

    <div>
        <section class="section-about">
            <div class="u-center-text u-margin-bottom-big">
                <h2 class="heading-secondary">
                    Front End Focused

                </h2>
            </div>

            <div class="row">
                <div class="col-1-of-2">
                    <h3 class="heading-tertiary u-margin-bottom-small">Motivated To Produce Results</h3>
                    <p class="paragraph">
                        As a tenacious self-taught programmer, I use continuous iteration to produce results quickly and continuously improve products.
                    </p>
                    <h3 class="heading-tertiary u-margin-bottom-small">An Agile Collaborator</h3>
                    <p class="paragraph">
                        I have contributed to open source projects, worked on engineering teams, and always stay attuned to the newest frameworks.
                    </p>

                </div>
                <div class="col-1-of-2">
                    <div class="composition">
                        // <img src="img/javascript.png" alt="JS" class="composition__photo composition__photo--p1"></img>
                        // <img src="img/nodejs.png" alt="Node" class="composition__photo composition__photo--p3"></img>
                        // <img src="img/react.png" alt="React" class="composition__photo composition__photo--p2"></img>
                    </div>
                </div>
            </div>

        </section>

        <section class="section-features">
            <div class="row">
                <div class="col-1-of-4">
                    <div class="feature-box">
                        <i class="feature-box__icon icon-basic-webpage"></i>
                        <h3 class="heading-tertiary u-margin-bottom-small">Front End</h3>
                        <p class="feature-box__text">
                            <ul>
                                <li>HTML5</li>
                                <li>CSS3 | SASS</li>
                                <li>JavaScript</li>
                                <li>React | Redux</li>
                            </ul>
                        </p>
                    </div>
                </div>
                <div class="col-1-of-4">
                    <div class="feature-box">
                        <i class="feature-box__icon icon-basic-share"></i>
                        <h3 class="heading-tertiary u-margin-bottom-small">Server</h3>
                        <p class="feature-box__text">
                            <ul>
                                <li>NodeJS</li>
                                <li>Express</li>
                                <li>Koa</li>
                                <li>Python</li>
                            </ul>
                        </p>
                    </div>
                </div>
                <div class="col-1-of-4">
                    <div class="feature-box">
                        <i class="feature-box__icon icon-basic-server2"></i>
                        <h3 class="heading-tertiary u-margin-bottom-small">Database</h3>
                        <p class="feature-box__text">
                            <ul>
                                <li>PostgreSQL</li>
                                <li>mySQL</li>
                                <li>MongoDB</li>
                                <li>Cassandra</li>
                            </ul>
                        </p>
                    </div>
                </div>
                <div class="col-1-of-4">
                    <div class="feature-box">
                        <i class="feature-box__icon icon-basic-cloud"></i>
                        <h3 class="heading-tertiary u-margin-bottom-small">Deployment</h3>
                        <p class="feature-box__text">
                            <ul>
                                <li>System Design</li>
                                <li>AWS ECS | SQS</li>
                                <li>Docker</li>
                                <li>Git</li>
                            </ul>
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <div class="section-tours" id="projects">
            <div class="u-center-text u-margin-bottom-big">
                <h2 class="heading-secondary">
                    Project Portfolio
                </h2>
            </div>
            <div class="row">
                <div class="col-1-of-3">
                    <div class="card">
                        <div class="card__side card__side--front card__side--front-1">
                            <div class="card__picture card__picture--1">
                                &nbsp;
                            </div>
                            // <img src="img/gear.png" class="card__svg-icon spin" alt=""></img>
                            <h4 class="card__heading">

                                <span class="card__heading-span--1">
                                    Booking Microservice
                                </span>
                            </h4>
                            <div class="card__details">
                                <ul>
                                    <li>AWS SQS</li>
                                    <li>Docker</li>
                                    <li>NodeJS</li>
                                    <li>Cassandra</li>
                                </ul>
                            </div>
                        </div>
                        <div class="card__side card__side--back card__side--back-1">

                            <div class="card__cta">

                                <div class="card__box">
                                    <div class="card__description">
                                        <p>
                                            A back-end booking system, handles 1500+ requests / sec
                                        </p>
                                    </div>
                                </div>
                                <a href="https://github.com/aj-4/airbnb-booking-microsvc" class="btn btn--white btn--github">Source Code</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-1-of-3">
                    <div class="card">
                        <div class="card__side card__side--front card__side--front-2">
                            <div class="card__picture card__picture--6">
                                &nbsp;
                            </div>
                            // <img src="img/bizman.gif" class="card__svg-icon card__svg-icon-6" alt=""></img>
                            <div class="card__heading">
                                <span class="card__heading-span--6">
                                    Elevator Live Stream
                                </span>
                            </div>
                            <div class="card__details">
                                <ul>
                                    <li>React | Redux</li>
                                    <li>CSS</li>
                                    <li>Express | NodeJS</li>
                                    <li>Tokbox API</li>
                                </ul>
                            </div>
                        </div>
                        <div class="card__side card__side--back card__side--back-6">
                            <div class="card__cta">
                                <div class="card__box">
                                    <div class="card__description">
                                        <p>
                                            Fully functional live stream app to practice elevator pitches
                                        </p>
                                    </div>
                                </div>
                                <a href="#popup-5" class="btn btn--white btn--github">Demo</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-1-of-3">
                    <div class="card">
                        <div class="card__side card__side--front card__side--front-3">
                            <div class="card__picture card__picture--3">
                                &nbsp;
                            </div>
                            // <img src="img/chat.gif" class="card__svg-icon card__svg-icon-3" alt=""></img>
                            <div class="card__heading">
                                <span class="card__heading-span--3">
                                    Paywall Chat and Pay
                                </span>
                            </div>
                            <div class="card__details">
                                <ul>
                                    <li>React | Redux</li>
                                    <li>Socket.io</li>
                                    <li>Express | NodeJS</li>
                                    <li>PostgreSQL</li>
                                </ul>
                            </div>
                        </div>
                        <div class="card__side card__side--back card__side--back-3">
                            <div class="card__cta">
                                <div class="card__box">
                                    <div class="card__description">
                                        <p>
                                            Payment app with live messaging, notifications, friends list
                                        </p>
                                    </div>
                                </div>
                                <a href="#popup-3" class="btn btn--white btn--github">Demo</a>
                            </div>
                        </div>
                    </div>

                </div>

                // --second row--
                <div class="row">
                    <div class="col-1-of-3 single-col">
                        <div class="card">

                            <div class="card__side card__side--back card__side--back-4">
                                <div class="card__cta">
                                    <div class="card__box">
                                        <div class="card__description">
                                            <p>
                                                Data populated and cached with REST API calls to USDA database
                                            </p>
                                        </div>
                                    </div>
                                    <a href="#popup-4" class="btn btn--white btn--github">DEMO</a>
                                </div>
                            </div>
                        </div>
                    </div>

                <div class="col-1-of-3">
                    <div class="card">

                        <div class="card__side card__side--back card__side--back-2">
                            <div class="card__cta">
                                <div class="card__box">
                                    <div class="card__description">
                                        <p>
                                            Instagram-inspired picture app with feed, profiles, followers
                                        </p>
                                    </div>
                                </div>
                                <a href="#popup-2" class="btn btn--white btn--github">Demo</a>
                            </div>
                        </div>
                    </div>
                </div>

                    <div class="col-1-of-3 single-col">
                        <div class="card">

                            <div class="card__side card__side--back card__side--back-5">
                                <div class="card__cta">
                                    <div class="card__box">
                                        <div class="card__description">
                                            <p>
                                                Stock data pulled in real time from Yahoo Finance API
                                            </p>
                                        </div>
                                    </div>
                                    <a href="https://github.com/aj-4/stock_trader" class="btn btn--white btn--github">source code</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>

    </div>

    <footer class="footer">
        <div class="footer__logo-box">
            <a href="#top">
                // <img src="img/logo-white.png" alt="Logo" class="footer__logo smooth-goto"></img>
            </a>
        </div>
        <div class="row">
            <div class="col-1-of-2">
                <div class="footer__navigation">
                    <ul class="footer__list">
                        <li class="footer__item">
                            <a href="https://github.com/aj-4/" class="footer__link">GitHub</a>
                        </li>
                        <li class="footer__item">
                            <a href="https://www.linkedin.com/in/apietsch/" class="footer__link">LinkedIn</a>
                        </li>
                        <li class="footer__item">
                            <a href="#" class="footer__link">Resume</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="col-1-of-2">
                <p class="footer__copyright">
                    Site by
                    <a class="footer__link"> Aaron Pietsch </a>
                </p>
            </div>
        </div>
    </footer>

    <div class="popup" id="popup-2">
        <div class="popup__content">
            <div class="popup__left">
                // <a href="#projects"><img src="img/il_demo.gif" alt="Instalava Demo" class="popup__img"></img></a>
            </div>
            <div class="popup__right">
                <a href="#section-tours" class="popup__close">&times;</a>
                <h3 class="heading-secondary-sm popup__header-2">Instalava</h3>
                <h3 class="heading-tertiary u-margin-bottom-small">React, Express, PostgreSQL</h3>
                <div class="popup__text u-margin-bottom-medium">
                    <p>
                        Live feed, profile pages, followers.
                    </p>
                </div>
                <a href="https://github.com/aj-4/lawa-ig" class="btn popup__btn-2">Source Code</a>
            </div>
        </div>
    </div>

    <div class="popup" id="popup-3">
        <div class="popup__content">
            <div class="popup__left">
                // <a href="#projects"><img src="img/pw_demo.gif" alt="Paywaal Demo" class="popup__img"></img></a>
            </div>
            <div class="popup__right">
                <a href="#section-tours" class="popup__close">&times;</a>
                <h3 class="heading-secondary-sm popup__header-3">Paywaal</h3>
                <h3 class="heading-tertiary u-margin-bottom-small">React, Redux, Socket.io</h3>
                <div class="popup__text u-margin-bottom-medium">
                    <p>
                        Chat, notifications, add friends. Live.
                    </p>
                </div>
                <a href="https://github.com/aj-4/hrpaymo" class="btn popup__btn-3">Source Code</a>
            </div>
        </div>
    </div>

    <div class="popup" id="popup-4">
        <div class="popup__content">
            <div class="popup__left">
                // <a href="#projects"><img src="img/pp_demo.gif" alt="Perfect Plate Demo" class="popup__img"></img></a>
            </div>
            <div class="popup__right">
                <a href="#section-tours" class="popup__close">&times;</a>
                <h3 class="heading-secondary-sm popup__header-4">Perfect Plate</h3>
                <h3 class="heading-tertiary u-margin-bottom-small">React, CSS, Express</h3>
                <div class="popup__text u-margin-bottom-medium">
                    <p>
                        Instant nutrition info for any food. Create plates.
                    </p>
                </div>
                <a href="https://github.com/aj-4/perfect-plate" class="btn popup__btn-4">Source Code</a>
            </div>
        </div>
    </div>

    <div class="popup" id="popup-5">
        <div class="popup__content">
            <div class="popup__left">
                <a href="#projects">
// <img src="https://media.giphy.com/media/EBnTOYz5LFZesguqtI/giphy.gif" alt="Elevator Demo" class="popup__img"></img>
                </a>
            </div>
            <div class="popup__right">
                <a href="#section-tours" class="popup__close">&times;</a>
                <h3 class="heading-secondary-sm popup__header-5">Elevator</h3>
                <h3 class="heading-tertiary u-margin-bottom-small">React, Redux, Tokbox API</h3>
                <div class="popup__text u-margin-bottom-medium">
                    <p>
                        Practice your pitch for your company or yourself. Live stream. Get immediate feedback. Watch yourself improve.
                    </p>
                </div>
                <a href="https://github.com/aj-4/elevator" class="btn popup__btn-5">Source Code</a>
            </div>
        </div>
    </div>
    </div>
</div>
</div>
</div>

    )
  }
}

export default Landing;
