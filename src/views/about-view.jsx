import React from 'react';

const AboutView = () => {
  return (
    <div className="about-view">
      <div className="about-view__container">
        <header>
          <h1>About Survey System</h1>
          <p>This is about page for the survey system</p>
        </header>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur iusto officia veritatis, doloremque soluta totam nihil veniam libero voluptate eveniet, animi perspiciatis ab placeat similique accusantium iure harum dignissimos assumenda!
        </p>
        <p>Author: Melissa Gatoni
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/melissa-gattoni-54975b49/" rel='noopener noreferrer' target="_blank">LinkedIn</a>
            </li>
            <li>
              <a href="https://github.com/meligatt" rel='noopener noreferrer' target="_blank">Github</a>
            </li>
            <li>
              <a href="https://twitter.com/meligatt" rel='noopener noreferrer' target="_blank">Twitter</a>
            </li>
          </ul>
        </p>

      </div>
    </div>
  );
}
export default AboutView;
