import PropTypes from 'prop-types';
import s from './Section.module.css';

function Section({ title, children }) {
    return (
        <section className={s.section}>
            <h2>{title}</h2>
            {children}
        </section>
    );
}

Section.protoType = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};

export default Section;
