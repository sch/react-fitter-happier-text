'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var styles = {
  svg: {
    width: '100%',
    maxHeight: '100%',
    fill: 'currentcolor',
    overflow: 'visible'
  },
  text: {
    fontFamily: 'inherit',
    fontSize: '1rem',
    fontWeight: 'inherit',
    textAnchor: 'middle'
  }
};

var FitterHappierText = (function (_React$Component) {
  _inherits(FitterHappierText, _React$Component);

  function FitterHappierText() {
    _classCallCheck(this, FitterHappierText);

    _get(Object.getPrototypeOf(FitterHappierText.prototype), 'constructor', this).call(this);
    this.resize = (0, _lodash.debounce)(this.resize.bind(this));
    this.state = {
      width: 256,
      height: 24
    };
  }

  _createClass(FitterHappierText, [{
    key: 'resize',
    value: function resize() {
      console.log("how much is this getting called?");
      var size = elementSize(_react2['default'].findDOMNode(this.refs.text));
      if (!sameSize(size, this.state)) this.setState(size);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.resize();
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps() {
      this.resize();
    }
  }, {
    key: 'render',
    value: function render() {
      var text = _react2['default'].createElement('text', {
        ref: 'text',
        x: '50%',
        y: this.props.baseline,
        style: styles.text
      }, this.props.text);

      return _react2['default'].createElement('svg', {
        viewBox: viewbox(this.state),
        style: styles.svg
      }, text);
    }
  }]);

  return FitterHappierText;
})(_react2['default'].Component);

exports['default'] = FitterHappierText;

FitterHappierText.defaultProps = {
  baseline: 16,
  paddingY: 0
};

FitterHappierText.propTypes = {
  text: _react2['default'].PropTypes.string,
  baseline: _react2['default'].PropTypes.number,
  paddingY: _react2['default'].PropTypes.number
};

function elementSize(element) {
  var width = element.offsetWidth || element.getComputedTextLength();
  var height = element.offsetHeight | 24;
  return { width: width, height: height };
}

function sameSize(sizeA, sizeB) {
  return sameWidth(sizeA, sizeB) && sameHeight(sizeA, sizeB);
}

function sameWidth(sizeA, sizeB) {
  return sizeA.width === sizeB.width;
}

function sameHeight(sizeA, sizeB) {
  return sizeA.height === sizeB.height;
}

function viewbox(size) {
  return [0, 0, size.width, size.height].join(' ');
}
module.exports = exports['default'];