import React from "react";
import Statistics from "components/Statistics/Statistics";
import FeedbackOptions from "components/FeedbackOptions/FeedbackOptions";
import Section from "components/Section/Section";
import Notification from "components/Notification/Notification";

class Feedback extends React.Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }
   
    onLeaveFeedback = (key) => {
        this.setState(prevState => {
            return {
                [key]: prevState[key] + 1,
            }
        })
    }

    countTotalFeedback = () => {
        return Object.values(this.state).reduce((acc, state) => acc + state, 0);
        
    }

    countPositiveFeedbackPercentage = () => {
        const totalFeedback = this.countTotalFeedback();
        if (totalFeedback === 0) {
            return 0; 
        }
        return Math.round((this.state.good * 100) / totalFeedback);
    }
   
    render() {
        const feedbackOptions = ['good', 'neutral', 'bad'];
        const { good, neutral, bad } = this.state;
        const total = good + neutral + bad;
        return (<>
                <Section title="Please leave feedback">
                <FeedbackOptions
                    options={feedbackOptions}
                    onLeaveFeedback={this.onLeaveFeedback} />
                </Section>
            
            {total > 0 ? ( 
                <Section title="Statistics">
                    <Statistics
                        good={this.state.good}
                        neutral={this.state.neutral}
                        bad={this.state.bad}
                        total={this.countTotalFeedback()}
                        positivePercentage={this.countPositiveFeedbackPercentage()} />   
                </Section>
            ) : (
          <Notification message="There is no feedback" />
        )}
            </>
        )
    }
  
  }


export default Feedback;