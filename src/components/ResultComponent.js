import React from 'react';
import PropTypes from 'prop-types';
import Styles from '../styles/Styles';

const propTypes = {
    count: PropTypes.number.isRequired,
    current: PropTypes.number,
};

const defaultProps = {
    current: 0,
};

class ResultComponent extends React.Component {

    render() {
        const { count, current } = this.props;
        let html = [];
        for(let i = 0; i < count; i++) {
            const element = (
                <span key={i}>
                    {current > i ? '*' : '_'}&nbsp;
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