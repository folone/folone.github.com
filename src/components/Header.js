import React from 'react';

import config from '../../config';

export default function Header() {
  return (
    <header id="header">
      <h1><span role="img">👋</span> My name is {config.authorName}</h1>
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
