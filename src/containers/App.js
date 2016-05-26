import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as BenchmarkActions from '../actions/BenchmarkActions';
import Project from '../components/Project';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Statistics from '../components/Statistics';
import { startTime } from '../index';

export default class App extends Component {
  componentDidMount() {
    const { actions } = this.props;
    actions.updateBenchmark(new Date().getTime() - startTime);
  }

  render() {
    const { projects, benchmark, personalInfo } = this.props;
    const projectEntries = projects.map((project, index) => (
      <Project key={index} project={project} />
    ));

    return (
      <div className="main-app-container">
        <Header personalInfo={personalInfo} />
        <Statistics benchmark={benchmark} />
        <div className="main-app-nav">Selected Projects</div>
          {projectEntries}
        <Footer personalInfo={personalInfo} />
      </div>
    );
  }
}

App.propTypes = {
  projects: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  benchmark: PropTypes.number.isRequired,
  personalInfo: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    projects: state.projects,
    benchmark: state.benchmark,
    personalInfo: state.personalInfo
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(BenchmarkActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
