import React from 'react';
import './Project.scss'

function Project(props) {
  return (
    <div className="section project section-component" id="project">
      <div className="container project__container">
        <div className="project__title title">
          <span className="title__number">03.</span>
          <span className="title__text">My Project</span>
        </div>

        <ul className="project__list">
          <li className="project__item">
            <div className="project__item-image">
              <img src="https://raw.githubusercontent.com/BlackValentine/image-storage/main/Screen%20Shot%202022-06-01%20at%2017.23.57.png?token=GHSAT0AAAAAABVNGYMV2VEKK4INNC4M2JVEYVCUZZA" alt="Skillrank_image" />
            </div>
            <div className="project__item-content">
              <h2 className="project__item-title">Skillrank E-learning</h2>
              <div className="project__item-detail">
                <div className="project__item-detail-text">A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.</div>
              </div>
              <ul className="project__item-tech-list">
                <li className="project__item-tech-item">NextJs</li>
                <li className="project__item-tech-item">TailwindCss</li>
                <li className="project__item-tech-item">ASP.NET</li>
                <li className="project__item-tech-item">Greensock</li>
                <li className="project__item-tech-item">Github</li>
              </ul>
            </div>
          </li>

          <li className="project__item">
            <div className="project__item-image">
              <img src="https://raw.githubusercontent.com/BlackValentine/image-storage/main/Screen%20Shot%202022-05-31%20at%2010.57.40.png?token=GHSAT0AAAAAABVNGYMVMF6VUBRTVK23AVG2YVCUY4A" alt="BlackValentine__image" />
            </div>
            <div className="project__item-content">
              <h2 className="project__item-title">Black Valentine</h2>
              <div className="project__item-detail">
                <div className="project__item-detail-text">A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.</div>
              </div>
              <ul className="project__item-tech-list">
                <li className="project__item-tech-item">ReactJs</li>
                <li className="project__item-tech-item">Scss</li>
                <li className="project__item-tech-item">NodeJs</li>
                <li className="project__item-tech-item">Github</li>
              </ul>
              <div className="project__item-link">
                <a href="#123" className="project__item-link-item">
                  <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-external-link"><title>External Link</title><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                </a>
              </div>
            </div>
          </li>

          <li className="project__item">
            <div className="project__item-image">
              <img src="https://raw.githubusercontent.com/BlackValentine/image-storage/main/Screen%20Shot%202022-06-01%20at%2014.31.15.png?token=GHSAT0AAAAAABVNGYMVH7JPCYZPKZN7P3BQYVCUZLQ" alt="CasePage__image" />
            </div>
            <div className="project__item-content">
              <h2 className="project__item-title">Case Page</h2>
              <div className="project__item-detail">
                <div className="project__item-detail-text">A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.</div>
              </div>
              <ul className="project__item-tech-list">
                <li className="project__item-tech-item">HTML5</li>
                <li className="project__item-tech-item">CSS3</li>
                <li className="project__item-tech-item">Javascript</li>
                <li className="project__item-tech-item">Github</li>
              </ul>
              <div className="project__item-link">
                <a href="https://github.com/BlackValentine/CasePage" target="_blank" rel="noreferrer" className="project__item-link-item">
                  <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github"><title>GitHub</title><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                </a>
                <a href="https://case-page.vercel.app/" target="_blank" rel="noreferrer" className="project__item-link-item">
                  <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-external-link"><title>External Link</title><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                </a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Project;