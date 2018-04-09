import React from 'react';
import PropTypes from 'prop-types';
import Styles from '../styles/Styles';

const propTypes = {
    count: PropTypes.number.isRequired,
    current: PropTypes.number,
    emptyChar: PropTypes.string,
    fullChar: PropTypes.string,
};

const defaultProps = {
    current: 0,
    emptyChar: '_',
    fullChar: '*',
};

class ResultComponent extends React.Component {

    render() {
        const { count, current, emptyChar, fullChar } = this.props;
        let html = [];
        
        for(let i = 0; i < count; i++) {
            const element = (
                <span key={i} style={Styles.char}>
                    {current > i ? fullChar : emptyChar}&nbsp;
                </span>
            );
            html.push(element);
        }

        return (
            <div style={Styles.resultContainer}>
                {html}
            </div>
        );
    }
}

ResultComponent.propTypes = propTypes;
ResultComponent.defaultProps = defaultProps;

export default ResultComponent;