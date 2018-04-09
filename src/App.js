import React from 'react';
import PasscodeComponent from './components/PasscodeComponent';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this._squareClickHandler = this._squareClickHandler.bind(this);
    this._onSuccess = this._onSuccess.bind(this);
    this._onFailed = this._onFailed.bind(this);
  }

  _squareClickHandler(data) {
    console.log("_squareClickHandler", data);
  }

  _onSuccess() {
    console.log("_onSuccess");
  }

  _onFailed(data) {
    console.log("_onFailed", data);
  }

  _onBackClick() {
    console.log("_onBackClick");
  }

  render() {
    return (
      <React.Fragment>
        <PasscodeComponent
          onSquareClick={this._squareClickHandler}
          onSuccess={this._onSuccess}
          onFailed={this._onFailed}
          onBackClick={this._onBackClick}
          passcode={123123} />
      </React.Fragment>
    );
  }
}