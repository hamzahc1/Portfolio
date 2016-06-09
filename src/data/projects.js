/* eslint-disable max-len */

const projectsData = {
  data: [
    {
      desktop_image: 'https://github.com/Nondescript-Cheese/SumoChickn/blob/master/sumochickn%20screenshot%20copy.png?raw=true',
      mobile_image: 'https://cloud.githubusercontent.com/assets/5761911/15597196/b42d458c-2382-11e6-8c01-1efa9f639022.png',
      title: 'SumoChickn',
      // date: '2016',
      github_url: 'https://github.com/Nondescript-Cheese/SumoChickn',
      project_url: '',
      background: 'A social gaming mobile application for sending challenges to friends.',
      description: 'Users post proof of their attempts, others can then vote on whether the challenge has been successfully completed or not, resulting in the user gaining or losing points. ',
      role: [
        'Built front-end views with React Native/Flexbox for fast iOS/Android deployment and implemented Redux for application state management',
        'Led the architecture of our RESTful API in Node.js to handle database queries',
        'Used Amazon S3 Web Services to store uploaded photos/proof for challenges',
      ],
      tech_stack: ['React Native', 'Redux', 'MySQL', 'Sequelize' ,'Node.js', 'express', 'AWS', 'Facebook Developer', 'Digital Ocean']
    },
    {
      desktop_image: 'https://github.com/zestyepaulettes/Togethr/blob/master/Login.png?raw=true',
      mobile_image: 'https://github.com/Jaded-Prophet/Codify/blob/master/README_IMGS/codifyMobile.png?raw=true',
      title: 'Togethr',
      // date: '2016',
      github_url: 'https://github.com/zestyepaulettes/Togethr',
      project_url: '',
      background: 'A collaborative event planning application for hosts to split the costs and items with guests',
      description: 'Hosts can create new events and invite their friends from Facebook, assign items for each guest to bring or send out split payment requests via Venmo. There is also a live chat feature for each event.',
      role: [
        'Enhanced inherited codebase by adding real-time updates and chat feature with websockets',
        'Integrated Venmo API for automation of split payment requests',
        'Implemented Facebook login and used user friends list for invites',
      ],
      tech_stack: ['AngularJS', 'express', 'Node.js', 'Venmo', 'MySQL', 'Sequelize', 'GoogleMaps', 'socket.io' ,'Digital Ocean']
    },
    {
      desktop_image: 'https://github.com/zestyepaulettes/Rudder/blob/master/rudder%20screenshot.png?raw=true',
      mobile_image: 'https://cloud.githubusercontent.com/assets/5761911/15593941/b92c2e3a-2365-11e6-908c-536f4e16af18.gif',
      title: 'Rudder',
      // date: '2016',
      github_url: 'https://github.com/zestyepaulettes/Rudder',
      project_url: '',
      background: 'An application that matches and educates non-technical business owners with relevant developers for their tech needs',
      description: 'Users sign up as either a tech provider or a tech user. Through a series of filtering queries, users are both educated and matched with the relevant providers for their needs.',
      role: [
        'Led architecture of the front end with React and React Router',
        'Integrated Github OAuth for developers for increased security and enhanced user experience',
      ],
      tech_stack: ['React.js', 'MongoDB', 'Node.js', 'express', 'mongoose', 'GitHub', 'Passport']
    }
  ]
};

export { projectsData };
