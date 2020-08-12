import React from 'react';

import config from '../../config';
export default function Footer() {
  const cities = combine(config.cities);
  const jobs = combine(config.work);
  return (
    <header id="header">
      <h1><span role="img">👋</span> My name is {config.authorName}</h1> 
      <p>I'm an engineer living in {cities}. I <a href="https://www.linkedin.com/in/yukifartlek">work</a> for {jobs}, and I'm into <a href="https://www.strava.com/athletes/yukifartlek">running</a> and <a href="https://www.goodreads.com/user/show/6328696-george-leontiev">reading</a>.</p>
      <nav>
        <ul>
          {config.socialLinks.map(social => {
            const { icon, name, url } = social;
            return (
              <li>
                <a href={url} class={`icon ${icon}`}>
                  <span class="label">{name}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}

function combine(arr) {
  const stuff = arr.map((elem, index) =>
    (index === arr.length - 1) ? <span> {elem}</span> : <s> {elem}</s>
  );

  return stuff;
}
