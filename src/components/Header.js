import React from 'react';

import config from '../../config';
import loadable from '@loadable/component'

export default function Header() {
  const cities = combine(config.cities);
  const jobs = combine(config.work);
  const Timeline = loadable(() => import('../components/Timeline'))
  return (
    <header id="header">
      <h1><span role="img">👋</span> My name is {config.authorName} and</h1>
      <Timeline />
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
