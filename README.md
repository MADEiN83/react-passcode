# react-passcode

## Usage:
```js
<PasscodeComponent
    onSquareClick={this._squareClickHandler}
    onSuccess={this._onSuccess}
    onFailed={this._onFailed}
    onBackClick={this._onBackClick}
    passcode={123123} />
```

## Properties
name | type | comment
-- | -- | -- | --
`passcode` | `number` | The wanted passcode
`randomize` | boolean | If numbers must be generated randomly
`refreshWhenFailed` | boolean | Auto refresh current passcode when user failed

## Events
name | comment
`onSquareClick` (optional) | Event when the user has pressed a square number
`onBackClick` (optional) | Event when the user has pressed the back button
`onSuccess` (optional) | Event when the passcode is reached
`onFailed` (optional) | Event when the passcode isn't reached