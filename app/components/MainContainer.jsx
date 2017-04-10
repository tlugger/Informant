import React from 'react';
import Header from './layout/Header.jsx';
import Footer from './layout/Footer.jsx';
import InfoStory from './InfoStory.jsx';
import RightPanel from './layout/RightPanel.jsx';
import LeftPanel from './layout/LeftPanel.jsx';
import ControlPanel from './layout/ControlPanel.jsx';
var io = require('socket.io-client');
//import Fonts from '../assets/styles/global.css';


var MainContainer = React.createClass({
  getInitialState() {
    return {
      style: 'slideMenuBarButton'
    }
  },
  componentWillReceiveProps(newProps) {
    console.log(newProps);
    if(newProps.open) {
      this.state.style += ' clicked';
    } else {
      this.state.style = 'slideMenuBarButton';
    }
  },
  render() {
    return (
        <div>
          <button className={this.state.style} onMouseDown={this.props.togglePanel}>
            <div id={'topBar'}></div>
            <div id={'middleBar'}></div>
            <div id={'bottomBar'}></div>
          </button>
          <p className={'LiveStream'}>{this.props.tweet}</p>
          <InfoStory data={this.props.data}/>
          <ControlPanel updateData={this.props.updateData} incrementData={this.props.incrementData} decrementData={this.props.decrementData}/>
        </div>
    )
  }
});

module.exports = MainContainer;
