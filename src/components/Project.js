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
    const roleList = project.role.map((role, index) => (
      <p key={index}> - {role}</p>
    ));

    return (
      <div>
        <div className="project-container">
          <div className="project-container-rows">
            <div className="project-info">
              { project.desktop_image !== '' ? <div className="show-when-small"><img width={"320px"} src={project.desktop_image}/></div> : null }
              <h3>{project.title}
                <span className="project-icon-window">
                  <a href={project.project_url} target="_blank">
                    {project.project_url !== '' ? <i className="fa fa-external-link icon"></i> : null}
                  </a>
                </span>
                <span className="project-icon-github">
                  <a href={project.github_url} target="_blank">
                    {project.github_url !== '' ? <i className="fa fa-github icon"></i> : null}
                  </a>
                </span>
              </h3>
              <div className="project-background">{project.background}</div>

              <div className="spacing"></div> 
              <p><strong>Some of my contributions:</strong></p>
              <div>{roleList}</div>
            </div>
            <div className="screenshot-container">
              <div className="hide-when-small"><img src={project.desktop_image}/></div>
              { project.mobile_image === '' ? null : <Mobile image={project.mobile_image}/>}
            </div>
          </div>
          <div className="tech-icon-container">{techStackItems}</div>
        </div>
      </div>
    );
  }
}

Project.propTypes = {
  project: PropTypes.object.isRequired
};
