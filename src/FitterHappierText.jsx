import React from 'react'
import { debounce } from 'lodash'

const styles = {
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
}

export default class FitterHappierText extends React.Component {
  constructor () {
    super ()
    this.resize = debounce(this.resize.bind(this))
    this.state = {
      width: 256,
      height: 24
    }
  }

  resize () {
    console.log("how much is this getting called?")
    const size = elementSize(React.findDOMNode(this.refs.text))
    if (!sameSize(size, this.state)) this.setState(size)
  }

  componentDidMount () {
    this.resize()
  }

  componentWillReceiveProps () {
    this.resize()
  }

  render () {
    const text = React.createElement('text', {
      ref: 'text',
      x: '50%',
      y: this.props.baseline,
      style: styles.text
    }, this.props.text);

    return React.createElement('svg', {
      viewBox: viewbox(this.state),
      style: styles.svg
    }, text);
  }
}

FitterHappierText.defaultProps = {
  baseline: 16,
  paddingY: 0,
}

FitterHappierText.propTypes = {
  text: React.PropTypes.string,
  baseline: React.PropTypes.number,
  paddingY: React.PropTypes.number,
}


function elementSize(element) {
  const width = element.offsetWidth || element.getComputedTextLength()
  const height = element.offsetHeight | 24
  return {width, height};
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
  return [0, 0, size.width, size.height].join(' ')
}

