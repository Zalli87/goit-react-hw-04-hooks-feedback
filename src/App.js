import './App.css';
import { useState } from 'react';
import FeedbackOptions from './components/Feedback/FeedbackOptions';
import Statistics from './components/Statistics/Statistics';
import Container from './components/Container/Container';
import Section from './components/Section/Section';
import Notification from './components/Notification/Notification';

function App() {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const handleChange = event => {
        console.log(event.target.textContent);
        let option = event.target.textContent;

        switch (option) {
            case 'Good':
                setGood(state => state + 1);
                break;
            case 'Neutral':
                setNeutral(state => state + 1);
                break;
            case 'Bad':
                setBad(state => state + 1);
                break;
            default:
                return;
        }
    };

    const countTotalFeedback = () => {
        return good + neutral + bad;
    };

    const countPositiveFeedbackPercentage = () => {
        const totalFeedback = countTotalFeedback();
        return Math.round((good / totalFeedback) * 100);
    };

    return (
        <Container>
            <Section title="Please leave feedback">
                <FeedbackOptions onLeaveFeedback={handleChange} />
            </Section>
            <Section title="Statistics">
                {countTotalFeedback() ? (
                    <Statistics
                        good={good}
                        neutral={neutral}
                        bad={bad}
                        total={countTotalFeedback()}
                        positivePercentage={countPositiveFeedbackPercentage()}
                    />
                ) : (
                    <Notification message="No feedback given" />
                )}
            </Section>
        </Container>
    );
}

export default App;
