/* eslint-disable max-len */

import React, { Component } from 'react';

export default class Introduction extends Component {
  render() {
    return (
      <div className="introduction-container">
        <div className="introduction">
          <h4>I am a full stack software engineer in San Francisco. I enjoy working across the full stack to solve tough engineering challenges, and I have been extra excited lately about database optimization and efficient state management in single-page apps. Most recently, I have been working a lot with JavaScript (ES6) with React / Redux, Node.js, and both SQL and NoSQL databases (particularly PostgreSQL, Redis, and MongoDB).</h4>
          <h5>
            <p><strong>Three things:</strong></p>
            <p>1.  A year and a half ago, I had never been on a sailboat. I now have my Captain license.</p>
            <p>2.  One of the first website consulting gigs I got was from a national archery organization. I used the money I made on it to buy a bow, and I have been shooting archery ever since.</p>
            <p>3.  I average a book a week, and I have not broken my reading streak in two years.</p>
          </h5>
        </div>
      </div>
    );
  }
}
