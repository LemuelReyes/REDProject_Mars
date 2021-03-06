// 'use strict';
import {browserHistory} from 'react-router';

var React= require('react');

var Timer = React.createClass ({

  getInitialState: function(){
          return {
           secondsElapsed: 60
         }
  },

  tick: function() {
      this.setState({ secondsElapsed: this.state.secondsElapsed - 1 });
      if(this.state.secondsElapsed === 0){
         this.stopTimer();
       }
  },

  start: function() {
      this.interval = setInterval (this.tick, 1000);
  },

  timeDone: function() {
     if(this.state.secondsElapsed === 60) {
        return '0:00';
     } else {
        return '';
     }
  },

  timesUp: function() {
      if(this.secondsLeft === 0) {
         browserHistory.push({Rejected})
      }
   },

  componentDidMount: function() {
      setTimeout(this.start, this.props.timeout);

  },

render: function(){
   return (
       <div>
        {this.state.secondsElapsed}
       </div>
  )
}

});

module.exports= Timer;
