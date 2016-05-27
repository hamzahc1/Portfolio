import React, { Component, PropTypes } from 'react';
import Statistics from '../components/Statistics';

export default class Footer extends Component {
  render() {
    const { personalInfo, benchmark } = this.props;
    return (
      <footer>
        <span id="footer-text-wrap">
        Built by {personalInfo.name}, 2016. <a className={"link"} href="https://github.com/kmoroder/portfolio">See the code for this website here</a>
        <Statistics benchmark={benchmark} />
        </span>
      </footer>
    );
  }
}

Footer.propTypes = {
  personalInfo: PropTypes.object.isRequired,
  benchmark: PropTypes.object.isRequired
};
