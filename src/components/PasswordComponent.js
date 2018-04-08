import React from 'react';
import PropTypes from 'prop-types';
import Styles from '../styles/Styles';
import SquareComponent from './SquareComponent';
import ResultComponent from './ResultComponent';

const propTypes = {
    
};

const defaultProps = {
    
};

class PasswordComponent extends React.Component {
    state = {
        current: 0,
    };

    constructor(props) {
        super(props);

        this._onClickHandler = this._onClickHandler.bind(this);
    }

    _onClickHandler(number) {
        let current = this.state.current + 1;
        this.setState({ current });
    }

    _generateSquares() {
        let squares = [];

        for(let i = 0; i < 10; i++) {
            let spacer = i > 0 && i % 5 == 0 ? <br /> : null;
            let square = (
                <React.Fragment key={i}>
                    {spacer}
                    <SquareComponent label={i} onClick={this._onClickHandler}/>
                </React.Fragment>
            );

            squares.push(square);
        }
        
        return squares;
    }
    
    render() {
        let squares = this._generateSquares();

        return (
            <React.Fragment>
                <ResultComponent count={5} current={this.state.current} />
                <div style={Styles.squareContainer}>
                    {squares}
                </div>
            </React.Fragment>
        );
    }
}

PasswordComponent.propTypes = propTypes;
PasswordComponent.defaultProps = defaultProps;

export default PasswordComponent;