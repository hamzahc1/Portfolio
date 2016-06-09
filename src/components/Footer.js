import React, { Component, PropTypes } from 'react';
import Statistics from '../components/Statistics';

export default class Footer extends Component {
  render() {
    const { personalInfo, benchmark } = this.props;
    return (
      <footer>
        <span id="footer-text-wrap">
        <Statistics benchmark={benchmark} />
        Built by {personalInfo.name}, 2016. <a className={"link"} href="https://github.com/hamzahc1/Portfolio">See the code for this website here</a>
        </span>
      </footer>
    );
  }
}

Footer.propTypes = {
  personalInfo: PropTypes.object.isRequired,
  benchmark: PropTypes.object.isRequired
};
