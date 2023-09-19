import React from "react";
import css from './Feedback.module.css'

class Feedback extends React.Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }
   
    onButtonClick = (key) => {
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
        return (<>
            <h2 className='text'>Please leave feedback</h2>
                <div className={css.buttonWrapper}>
                    <button type="button" onClick={()=>this.onButtonClick('good')} className={css.button}>Good</button>
                    <button type="button" onClick={()=>this.onButtonClick('neutral')} className={css.button}>Neutral</button>
                    <button type="button" onClick={()=>this.onButtonClick('bad')}className={css.button}>Bad</button>
                </div>
                <p className={css.text}>Statistics</p>
                <div>
                    <p className={css.textStatistics}>Good: {this.state.good}</p>
                    <p className={css.textStatistics}>Neutral: {this.state.neutral}</p>
                    <p className={css.textStatistics}>Bad: {this.state.bad}</p>
                    <p className={css.textStatistics}>Total: {this.countTotalFeedback()}</p>
                    <p className={css.textStatistics}>Positive feedback: {this.countPositiveFeedbackPercentage()} %</p>
                </div>
            </>
        )
    }
  
  }


export default Feedback;