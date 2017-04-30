import React from 'react';
import {Link} from 'react-router';
import AboutPageLayout from '../layout/AboutPageLayout.jsx';
// import {Link} from 'react-router-component';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class About extends React.Component {
  render() {
    return (
      <div className='about'>
        <AboutPageLayout
          title={'About'}
          description={'Our Tech Stack.'}
          />
        <div className='about-image-container'>
          <img className='about-image' src={require('../assets/images/tech_stack.png')}/>
        </div>

      </div>
    );
  }
}

export default About;
