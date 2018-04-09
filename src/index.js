import React from 'react';
import PropTypes from 'prop-types';
import Styles from './styles/Styles';
import SquareComponent from './components/SquareComponent';
import ResultComponent from './components/ResultComponent';

const propTypes = {
    passcode: PropTypes.number.isRequired,
    onFailed: PropTypes.func,
    onSuccess: PropTypes.func,
    onSquareClick: PropTypes.func,
    onBackClick: PropTypes.func,
    randomize: PropTypes.bool,
    refreshWhenFailed: PropTypes.bool,
};

const defaultProps = {
    randomize: true,
    refreshWhenFailed: true,
};

class PasscodeComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            current: 0,
            currentPasscode: '',
            numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
        };

        this._onSquareClickHandler = this._onSquareClickHandler.bind(this);
        this._onBackHandler = this._onBackHandler.bind(this);
    }

    componentWillMount() {
        if(!this.props.randomize) {
            return;
        }

        const shuffleArray = arr => (
            arr
            .map(a => [Math.random(), a])
            .sort((a, b) => a[0] - b[0])
            .map(a => a[1])
        );
          
        const numbers = shuffleArray(this.state.numbers);
        this.setState({ numbers });
    }

    _onSquareClickHandler(number) {
        const current = this.state.current + 1;
        const currentPasscode = this.state.currentPasscode + number.toString();
        this.setState({ current, currentPasscode });
        
        if(this.props.onSquareClick) {
            this.props.onSquareClick({ number });
        }

        if(this.props.passcode == currentPasscode && this.props.onSuccess) {
            this.props.onSuccess();
        } else if(currentPasscode.length == this.props.passcode.toString().length
                    && this.props.onFailed) {
            this.props.onFailed({
                wrong: currentPasscode,
            });

            if(this.props.refreshWhenFailed) {
                this._reset();
            }
        }
    }

    _onBackHandler() {
        if(this.state.current == 0) {
            return;
        }
        
        this._reset();

        if(this.props.onBackClick) {
            this.props.onBackClick();
        }
    }

    _reset() {
        this.setState({ 
            current: 0,
            currentPasscode: ''
        });
    }

    _generateSquares(disableEvent) {
        let squares = [];
        const numbers = this.state.numbers;

        for(let i = 0; i < numbers.length; i++) {
            const spacer = i > 0 && i % 5 == 0 ? <br /> : null;
            const onClickEvent = !disableEvent ? this._onSquareClickHandler : null;
            const square = (
                <React.Fragment key={numbers[i]}>
                    {spacer}
                    <SquareComponent label={numbers[i]} onClick={onClickEvent}/>
                </React.Fragment>
            );

            squares.push(square);
        }
        
        return squares;
    }
    
    render() {
        const { passcode } = this.props;
        
        if(passcode == undefined || passcode == '') {
            return null;
        }

        const charCount = passcode.toString().length;
        const disableEvent = this.state.current >= charCount;
        const squares = this._generateSquares(disableEvent);

        return (
            <div style={Styles.main}>
                <ResultComponent count={charCount} current={this.state.current} />
                <div style={Styles.squareContainer}>
                    {squares}
                </div>

                <SquareComponent label={'Back'} onClick={this._onBackHandler}/>
            </div>
        );
    }
}

PasscodeComponent.propTypes = propTypes;
PasscodeComponent.defaultProps = defaultProps;

export default PasscodeComponent;