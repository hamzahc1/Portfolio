/* eslint-disable max-len */

import React, { Component } from 'react';

export default class Introduction extends Component {
  render() {
    return (
      <div className="introduction-container">
        <div className="introduction">
          <h4>I’m a full stack software engineer in San Francisco. I'm originally from a small town near Milwaukee, Wisconsin. I enjoy tackling tough engineering challenges, and I've been extra excited lately about database optimization and efficient state management in single-page apps.</h4>
          <h5>
            <strong>My skills:</strong>
            <ul>
              <li>Strong: JavaScript (ES6+), HTML/CSS, SQL, AJAX, Git, React, Redux, Node.js, Express</li>
              <li>Experienced: React Native, D3js, Angular, Material Design, Foundation, Angular, Test Driven Development</li>
              <li>Databases: MongoDB, PostgreSQL, SQLite, Firebase, Redis.</li>
            </ul>
          </h5>
          <h5>
            <strong>A grab bag of some personal achievements:</strong>
            <ul>
              <li>A year and a half ago, I had never been on a sailboat. I now have my Captain’s license.</li>
              <li>One of the first website consulting gigs I got was from a national archery organization. I used the money I made on it to buy a bow, and I’ve been shooting archery ever since.</li>
              <li>I average a book a week, and I haven’t broken my reading streak in two years.</li>
            </ul>
          </h5>
        </div>
      </div>
    );
  }
}
