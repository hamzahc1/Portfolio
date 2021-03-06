import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as BenchmarkActions from '../actions/BenchmarkActions';
import Project from '../components/Project';
import Profile from '../components/Profile';
import Introduction from '../components/Introduction';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { startTime } from '../index';

export default class App extends Component {
  componentDidMount() {
    const { actions } = this.props;
    actions.updateBenchmark(new Date().getTime() - startTime);
  }

  render() {
    const { projects, personalInfo, benchmark } = this.props;
    const projectEntries = projects.map((project, index) => (
      <Project key={index} project={project} />
    ));

    return (
      <div className="main-app-container">
        <Header personalInfo={personalInfo} />
        <Profile/>
        <h1 display="block">Hi, I'm Hamzah.</h1>
        <Introduction personalInfo={personalInfo}/>
        <h2 textAlign={"center"}>Recent Projects</h2>
        <div className="projects">
          {projectEntries}
        </div>
        <Footer personalInfo={personalInfo} benchmark={benchmark} />
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
