// 'use strict';

var React= require('react');
import {browserHistory} from 'react-router';

var Timer = require('./countdownclock.jsx');
var Questions = require('./question.jsx');

var QuestionScreen = React.createClass ({

render: function(){
   return (
     <div className="wrapper">

      <div className="clock-button">
        <Timer/>
      </div>
    <Questions/>
    </div> //ends wrapper div
  )
}

});

module.exports= QuestionScreen;
