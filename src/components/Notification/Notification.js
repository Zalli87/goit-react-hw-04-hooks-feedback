import PropTypes from 'prop-types';

function Notification({ massage = 'Pleace, leave feedback' }) {
    return <p>{massage}</p>;
}

export default Notification;

Notification.protoType = {
    massage: PropTypes.string.isRequired,
};
