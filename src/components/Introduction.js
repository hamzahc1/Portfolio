/* eslint-disable max-len */

import React, { Component } from 'react';

export default class Introduction extends Component {
  render() {
    return (
      <div className="introduction-container">
        <div className="introduction">
          <h4>
            <strong><p>I'm a software engineer in London. I love solving tough engineering challenges and building awesome applications, watching them develop and advance with each iteration! Recently, I've been exploring advanced back-end scaling and efficient state management in single-page apps. </p>
            
            <p>In one of my last applications, I built a mobile application game for friends to send challenges to each other. To deploy quickly across both Android and iOS, I built the front-end views in React Native and used Redux to manage the application state. You can read more about that application, and others, below.</p></strong>
            <p>A few facts about me:</p>
            <p>1.  I speak five languages fluently and am aiming to learn a new one every year.</p>
            <p>2.  A couple of years ago I cycled 400km from the North of Jordan to the Southern most point on a child-size bike</p>
            <p>3.  I can bake over 15 different types of brownies</p>
          </h4>
        </div>
      </div>
    );
  }
}
