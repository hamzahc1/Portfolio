import React, { Component, PropTypes } from 'react';

export default class Footer extends Component {
  render() {
    const { personalInfo } = this.props;
    return (
      <footer>
        <span id="footer-text-wrap">
        Copyright {personalInfo.name}, 2016.
        </span>
      </footer>
    );
  }
}

Footer.propTypes = {
  personalInfo: PropTypes.object.isRequired
};
