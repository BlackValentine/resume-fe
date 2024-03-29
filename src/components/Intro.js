import { Link } from 'react-router-dom'
import './Intro.scss'

function Intro(props) {
  return (
    <div className="intro" id="intro">
      <div className="intro__container container__custom">
        <div className="intro__wrapper">
          <p className="intro__small-heading">Hi, my name is</p>
          <h2 className="intro__big-heading">Black Valentine</h2>
          <h3 className="intro__big-heading">Welcome to my secret world.</h3>
          <div className="intro__description">
            <p>I'm a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I'm working at <a href="https://www.frontfundr.com/" target="_blank" rel="noreferrer">FrontFundr</a>. We provide startups and growth companies with access to capital that helps them grow, to help Canadian entrepreneurs turn their groundbreaking ideas into reality.</p>
          </div>
          <Link to="/resume">
            <button className="intro__button button__animation">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Checkout my resume!
            </button>
          </Link>
        </div>

        <div className="intro__left">
          <div className="intro__social">
            <ul className="intro__social-list">
              <li className="intro__social-item">
                <a href="https://github.com/BlackValentine" aria-label="Github" target="_blank" rel="noreferrer" className="intro__social-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github"><title>GitHub</title><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                </a>
              </li>
              <li className="intro__social-item">
                <a href="https://www.instagram.com/imsonku/" aria-label="Instagram" target="_blank" rel="noreferrer" className="intro__social-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram"><title>Instagram</title><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
              </li>
              <li className="intro__social-item">
                <a href="/" aria-label="Twitter" target="_blank" rel="noreferrer" className="intro__social-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter"><title>Twitter</title><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                </a>
              </li>
              <li className="intro__social-item">
                <a href="https://www.linkedin.com/in/tu%E1%BA%A5n-s%C6%A1n-%C4%91%E1%BA%B7ng-292572240/" aria-label="Linkedin" target="_blank" rel="noreferrer" className="intro__social-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-linkedin"><title>LinkedIn</title><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
              </li>
              <li className="intro__social-item">
                <a href="/" aria-label="Codepen" target="_blank" rel="noreferrer" className="intro__social-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-codepen"><title>CodePen</title><polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon><line x1="12" y1="22" x2="12" y2="15.5"></line><polyline points="22 8.5 12 15.5 2 8.5"></polyline><polyline points="2 15.5 12 8.5 22 15.5"></polyline><line x1="12" y1="2" x2="12" y2="8.5"></line></svg>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="intro__right">
          <div className="intro__gmail">
            <a href="mailto:tuanson.dang1404@gmail.com">tuanson.dang1404@gmail.com</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Intro
