import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import './index.css';
import js from './img/javascript.png';
import node from './img/nodejs.png';
import react from './img/react.png';


class Landing extends Component {
  render() {
    return(
      <div>
        <div>
          <header className="header">
            <div className="header__logo-box">
              <h1 />
            </div>
            <div className="header-text-box">
              <h1 className="heading-primary">
                <span className="heading-primary--main">Aaron Pietsch</span>
                <span className="heading-primary--sub">Front End Engineer</span>
              </h1>
              <a href="#projects" className="btn btn--white btn--animated smooth-goto">See Projects</a>
            </div>
          </header>
          <div>
            <div className="section-about">
              <div className="u-center-text u-margin-bottom-big">
                <h2 className="heading-secondary">
                  Front End Focused
                  <br />With Full Stack Experience
                </h2>
              </div>
              <div className="row">
                <div className="col-1-of-2">
                  <h3 className="heading-tertiary u-margin-bottom-small">Motivated To Produce Results</h3>
                  <p className="paragraph">
                    As a tenacious self-taught programmer, I use continuous iteration to produce results quickly and continuously improve products.
                  </p>
                  <h3 className="heading-tertiary u-margin-bottom-small">An Agile Collaborator</h3>
                  <p className="paragraph">
                    I have contributed to open source projects, worked on engineering teams, and always stay attuned to the newest frameworks.
                  </p>
                </div>
                <div className="col-1-of-2">
                  <div className="composition">
                    <img src={js} alt="JS" className="composition-1" />
                    <img src={node} alt="Node" className="composition-1" />
                    <img src={react} alt="React" className="composition-1" />
                  </div>
                </div>
              </div>

            </div>
            <div className="section-features">
              <div className="row">
                <div className="col-1-of-4">
                  <div className="feature-box">
                    <i className="feature-box__icon icon-basic-webpage" />
                    <h3 className="heading-tertiary u-margin-bottom-small">Front End</h3>
                    <p className="feature-box__text">
                    </p><ul>
                      <li>HTML5</li>
                      <li>CSS3 | SASS</li>
                      <li>JavaScript</li>
                      <li>React | Redux</li>
                    </ul>
                    <p />
                  </div>
                </div>
                <div className="col-1-of-4">
                  <div className="feature-box">
                    <i className="feature-box__icon icon-basic-share" />
                    <h3 className="heading-tertiary u-margin-bottom-small">Server</h3>
                    <p className="feature-box__text">
                    </p><ul>
                      <li>NodeJS</li>
                      <li>Express</li>
                      <li>Koa</li>
                      <li>Python</li>
                    </ul>
                    <p />
                  </div>
                </div>
                <div className="col-1-of-4">
                  <div className="feature-box">
                    <i className="feature-box__icon icon-basic-server2" />
                    <h3 className="heading-tertiary u-margin-bottom-small">Database</h3>
                    <p className="feature-box__text">
                    </p><ul>
                      <li>PostgreSQL</li>
                      <li>mySQL</li>
                      <li>MongoDB</li>
                      <li>Cassandra</li>
                    </ul>
                    <p />
                  </div>
                </div>
                <div className="col-1-of-4">
                  <div className="feature-box">
                    <i className="feature-box__icon icon-basic-cloud" />
                    <h3 className="heading-tertiary u-margin-bottom-small">Deployment</h3>
                    <p className="feature-box__text">
                    </p><ul>
                      <li>System Design</li>
                      <li>AWS ECS | SQS</li>
                      <li>Docker</li>
                      <li>Git</li>
                    </ul>
                    <p />
                  </div>
                </div>
              </div>
            </div>
            <div className="section-tours" id="projects">
              <div className="u-center-text u-margin-bottom-big">
                <h2 className="heading-secondary">
                  Project Portfolio
                </h2>
              </div>
              <div className="row">
                <div className="col-1-of-3">
                  <div className="card">
                    <div className="card__side card__side--front card__side--front-1">
                      <div className="card__picture card__picture--1">
                        &nbsp;
                      </div>
                      // <img src="img/gear.png" className="card__svg-icon spin" alt="" />
                      <h4 className="card__heading">
                        <span className="card__heading-span--1">
                          Booking Microservice
                        </span>
                      </h4>
                      <div className="card__details">
                        <ul>
                          <li>AWS SQS</li>
                          <li>Docker</li>
                          <li>NodeJS</li>
                          <li>Cassandra</li>
                        </ul>
                      </div>
                    </div>
                    <div className="card__side card__side--back card__side--back-1">
                      <div className="card__cta">
                        <div className="card__box">
                          <div className="card__description">
                            <p>
                              A back-end booking system, handles 1500+ requests / sec
                            </p>
                          </div>
                        </div>
                        <a href="https://github.com/aj-4/airbnb-booking-microsvc" className="btn btn--white btn--github">Source Code</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-1-of-3">
                  <div className="card">
                    <div className="card__side card__side--front card__side--front-2">
                      <div className="card__picture card__picture--6">
                        &nbsp;
                      </div>
                      // <img src="img/bizman.gif" className="card__svg-icon card__svg-icon-6" alt="" />
                      <div className="card__heading">
                        <span className="card__heading-span--6">
                          Elevator Live Stream
                        </span>
                      </div>
                      <div className="card__details">
                        <ul>
                          <li>React | Redux</li>
                          <li>CSS</li>
                          <li>Express | NodeJS</li>
                          <li>Tokbox API</li>
                        </ul>
                      </div>
                    </div>
                    <div className="card__side card__side--back card__side--back-6">
                      <div className="card__cta">
                        <div className="card__box">
                          <div className="card__description">
                            <p>
                              Fully functional live stream app to practice elevator pitches
                            </p>
                          </div>
                        </div>
                        <a href="#popup-5" className="btn btn--white btn--github">Demo</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-1-of-3">
                  <div className="card">
                    <div className="card__side card__side--front card__side--front-3">
                      <div className="card__picture card__picture--3">
                        &nbsp;
                      </div>
                      // <img src="img/chat.gif" className="card__svg-icon card__svg-icon-3" alt="" />
                      <div className="card__heading">
                        <span className="card__heading-span--3">
                          Paywall Chat and Pay
                        </span>
                      </div>
                      <div className="card__details">
                        <ul>
                          <li>React | Redux</li>
                          <li>Socket.io</li>
                          <li>Express | NodeJS</li>
                          <li>PostgreSQL</li>
                        </ul>
                      </div>
                    </div>
                    <div className="card__side card__side--back card__side--back-3">
                      <div className="card__cta">
                        <div className="card__box">
                          <div className="card__description">
                            <p>
                              Payment app with live messaging, notifications, friends list
                            </p>
                          </div>
                        </div>
                        <a href="#popup-3" className="btn btn--white btn--github">Demo</a>
                      </div>
                    </div>
                  </div>
                </div>
                // --second row--
                <div className="row">
                  <div className="col-1-of-3 single-col">
                    <div className="card">
                      <div className="card__side card__side--back card__side--back-4">
                        <div className="card__cta">
                          <div className="card__box">
                            <div className="card__description">
                              <p>
                                Data populated and cached with REST API calls to USDA database
                              </p>
                            </div>
                          </div>
                          <a href="#popup-4" className="btn btn--white btn--github">DEMO</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-1-of-3">
                    <div className="card">
                      <div className="card__side card__side--back card__side--back-2">
                        <div className="card__cta">
                          <div className="card__box">
                            <div className="card__description">
                              <p>
                                Instagram-inspired picture app with feed, profiles, followers
                              </p>
                            </div>
                          </div>
                          <a href="#popup-2" className="btn btn--white btn--github">Demo</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-1-of-3 single-col">
                    <div className="card">
                      <div className="card__side card__side--back card__side--back-5">
                        <div className="card__cta">
                          <div className="card__box">
                            <div className="card__description">
                              <p>
                                Stock data pulled in real time from Yahoo Finance API
                              </p>
                            </div>
                          </div>
                          <a href="https://github.com/aj-4/stock_trader" className="btn btn--white btn--github">source code</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <footer className="footer">
                <div className="footer__logo-box">
                  <a href="#top">
                    // <img src="img/logo-white.png" alt="Logo" className="footer__logo smooth-goto" />
                  </a>
                </div>
                <div className="row">
                  <div className="col-1-of-2">
                    <div className="footer__navigation">
                      <ul className="footer__list">
                        <li className="footer__item">
                          <a href="https://github.com/aj-4/" className="footer__link">GitHub</a>
                        </li>
                        <li className="footer__item">
                          <a href="https://www.linkedin.com/in/apietsch/" className="footer__link">LinkedIn</a>
                        </li>
                        <li className="footer__item">
                          <a href="#" className="footer__link">Resume</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-1-of-2">
                    <p className="footer__copyright">
                      Site by
                      <a className="footer__link"> Aaron Pietsch </a>
                    </p>
                  </div>
                </div>
              </footer>
              <div className="popup" id="popup-2">
                <div className="popup__content">
                  <div className="popup__left">
                    // <a href="#projects"><img src="img/il_demo.gif" alt="Instalava Demo" className="popup__img" /></a>
                  </div>
                  <div className="popup__right">
                    <a href="#section-tours" className="popup__close">×</a>
                    <h3 className="heading-secondary-sm popup__header-2">Instalava</h3>
                    <h3 className="heading-tertiary u-margin-bottom-small">React, Express, PostgreSQL</h3>
                    <div className="popup__text u-margin-bottom-medium">
                      <p>
                        Live feed, profile pages, followers.
                      </p>
                    </div>
                    <a href="https://github.com/aj-4/lawa-ig" className="btn popup__btn-2">Source Code</a>
                  </div>
                </div>
              </div>
              <div className="popup" id="popup-3">
                <div className="popup__content">
                  <div className="popup__left">
                    // <a href="#projects"><img src="img/pw_demo.gif" alt="Paywaal Demo" className="popup__img" /></a>
                  </div>
                  <div className="popup__right">
                    <a href="#section-tours" className="popup__close">×</a>
                    <h3 className="heading-secondary-sm popup__header-3">Paywaal</h3>
                    <h3 className="heading-tertiary u-margin-bottom-small">React, Redux, Socket.io</h3>
                    <div className="popup__text u-margin-bottom-medium">
                      <p>
                        Chat, notifications, add friends. Live.
                      </p>
                    </div>
                    <a href="https://github.com/aj-4/hrpaymo" className="btn popup__btn-3">Source Code</a>
                  </div>
                </div>
              </div>
              <div className="popup" id="popup-4">
                <div className="popup__content">
                  <div className="popup__left">
                    // <a href="#projects"><img src="img/pp_demo.gif" alt="Perfect Plate Demo" className="popup__img" /></a>
                  </div>
                  <div className="popup__right">
                    <a href="#section-tours" className="popup__close">×</a>
                    <h3 className="heading-secondary-sm popup__header-4">Perfect Plate</h3>
                    <h3 className="heading-tertiary u-margin-bottom-small">React, CSS, Express</h3>
                    <div className="popup__text u-margin-bottom-medium">
                      <p>
                        Instant nutrition info for any food. Create plates.
                      </p>
                    </div>
                    <a href="https://github.com/aj-4/perfect-plate" className="btn popup__btn-4">Source Code</a>
                  </div>
                </div>
              </div>
              <div className="popup" id="popup-5">
                <div className="popup__content">
                  <div className="popup__left">
                    <a href="#projects">
                      // <img src="https://media.giphy.com/media/EBnTOYz5LFZesguqtI/giphy.gif" alt="Elevator Demo" className="popup__img" />
                    </a>
                  </div>
                  <div className="popup__right">
                    <a href="#section-tours" className="popup__close">×</a>
                    <h3 className="heading-secondary-sm popup__header-5">Elevator</h3>
                    <h3 className="heading-tertiary u-margin-bottom-small">React, Redux, Tokbox API</h3>
                    <div className="popup__text u-margin-bottom-medium">
                      <p>
                        Practice your pitch for your company or yourself. Live stream. Get immediate feedback. Watch yourself improve.
                      </p>
                    </div>
                    <a href="https://github.com/aj-4/elevator" className="btn popup__btn-5">Source Code</a>
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
