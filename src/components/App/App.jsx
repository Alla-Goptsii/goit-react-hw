import React, { Component } from 'react';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Statistics from '../Statistics/Statistics';
import { Section } from '../Section/Section';
import Box from '../App/App.styled';

// console.log(FeedbackOptions());

export class App extends Component {
  state = {
    good: 1,
    neutral: 0,
    bad: 0,
  };

  render() {
    // console.log(this.handleIncrement);

    return <Box>hello</Box>;
  }
}

// countPositiveFeedbackPercentage = () => {
//   return Math.floor(
//     (this.state.good * 100) / Number(this.countTotalFeedback())
//   );
// };
