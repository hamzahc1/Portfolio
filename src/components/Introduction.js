/* eslint-disable max-len */

import React, { Component } from 'react';

export default class Introduction extends Component {
  render() {
    return (
      <div className="introduction-container">
        <div className="introduction">
          <h4>
            <p>I am a software engineer in London. I enjoy solving tough engineering challenges, and I've been particularly interested lately in database optimization and efficient state management in single-page apps.</p>
            <p>As an example of some of my work, I recently built an IoT application that homeowners (or AirBnB hosts!) use to rent appliances to guests. To solve the challenge of managing the hardware integration, I automated API interactions with a worker I built using Node.js, Cron, and Redis. I also optimized data management across the application by implementing transactions with PostgreSQL on the back end and isolating the state on the front end with React / Redux. You can read more about that application, and others, below.</p>
          </h4>
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
