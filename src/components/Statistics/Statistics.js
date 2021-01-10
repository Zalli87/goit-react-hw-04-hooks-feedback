import PropTypes from 'prop-types';
import s from './Statistics.module.css';

function Statistics({
    good = 0,
    neutral = 0,
    bad = 0,
    total = 0,
    positivePercentage = 0,
}) {
    return (
        <ul className={s.list}>
            <li>Good: {good}</li>
            <li>Neutral: {neutral}</li>
            <li>Bad: {bad}</li>
            <li>Total: {total}</li>
            <li>Positive Feedback: {positivePercentage}%</li>
        </ul>
    );
}

Statistics.protoType = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
