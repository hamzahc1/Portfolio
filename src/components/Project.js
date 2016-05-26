/* eslint-disable max-len */
import React, { Component, PropTypes } from 'react';
import Mobile from './projectComponents/Mobile.js';
import TechStackItem from './projectComponents/TechStackItem';

export default class Project extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { project } = this.props;
    const techStackItems = project.tech_stack.map((tech, index) => (
      <TechStackItem key={index} tech={tech}/>
    ));

    return (
      <div>
        <div className="project-container">
          <div className="project-container-rows">
            <div className="project-info">
                { project.mobile_image !== '' ? <div className="show-when-small"><img width={"320px"} src={project.desktop_image}/></div> : null }
              <a href={project.project_url} target="_blank">
                <h2>{project.title}</h2>
              </a>
              <a href={project.github_url} target="_blank">
                {project.github_url !== '' ? 'Github' : null}
              </a>
              <div>{project.date}</div>
              <h3>Background</h3>
              <div>{project.background}</div>
              <h3>Role</h3>
              <div>{project.role}</div>
            </div>
            <div className="screenshot-container">
              { project.mobile_image !== '' ? <div className="hide-when-small"><img src={project.desktop_image}/></div> : null }
              { project.mobile_image !== '' ? <Mobile image={project.mobile_image}/> : null }
            </div>
          </div>
          <h3>Tech Stack</h3>
          <div className="tech-icon-container">{techStackItems}</div>
        </div>
      </div>
    );
  }
}

Project.propTypes = {
  project: PropTypes.object.isRequired
};
