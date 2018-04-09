import React from 'react';
import PropTypes from 'prop-types';
import Styles from '../styles/Styles';

const propTypes = {
    label: PropTypes.string.isRequired
};

const defaultProps = {
    
};

class SquareComponent extends React.Component {
    _onClickHandler(number) {
        if(!this.props.onClick) {
            return;
        }

        this.props.onClick(number);
    }

    render() {
        const { label, onClick } = this.props;
        const enable = onClick != undefined;
        const styles = enable ? Styles.square : Styles.disabledSquare;

        return (
            <div style={styles} onClick={() => this._onClickHandler(label)}>
                {label}
            </div>
        );
    }
}

SquareComponent.propTypes = propTypes;
SquareComponent.defaultProps = defaultProps;

export default SquareComponent;