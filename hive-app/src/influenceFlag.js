import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  M_WIDTH,
  M_HEIGHT,
  MICRO_COLOR,
  MID_COLOR,
  MACRO_COLOR,
  STAR_COLOR,
} from './data/numbers'
import './fonts.css'

const INFLUENCE_FLAG_LENGTH = M_WIDTH * 2;

const starInfluenceStyle = {
  // position: 'absolute',
  width: INFLUENCE_FLAG_LENGTH*2,
  height: INFLUENCE_FLAG_LENGTH,
  'min-width': INFLUENCE_FLAG_LENGTH*2,

  display: 'flex',
  justifyContent:'center',
  alignItems:'center',
  paddingLeft: 4,

  // color
  backgroundColor: '#ecbf42',
  color: 'black',

  // font
  color: 'black',
  fontSize: 16,
  fontWeight: 'bold',
  fontFamily: 'Roboto Condensed',
  letterSpacing: 2,
};

const microInfluenceStyle = {
  ...starInfluenceStyle,
  backgroundColor: MICRO_COLOR,
}

const midInfluenceStyle = {
  ...starInfluenceStyle,
  backgroundColor: MID_COLOR,
}

const macroInfluenceStyle = {
  ...starInfluenceStyle,
  backgroundColor: MACRO_COLOR,
}


export default class InfluenceFlag extends Component {
  static propTypes = {
    influence: PropTypes.number,
    text: PropTypes.string,
  };

  static defaultProps = {
    influence: 1,
  };

  constructor(props) {
    super(props);
  }

  render() {
    let influenceText;
    let style;
    if (this.props.influence === "micro") {
      influenceText = "MICRO";
      style = microInfluenceStyle;
    } else if (this.props.influence === "mid") {
      influenceText = "MID";
      style = midInfluenceStyle;
    } else if (this.props.influence === "macro") {
      influenceText = "MACRO";
      style = macroInfluenceStyle;
    } else if (this.props.influence === "star") {
      influenceText = "STAR";
      style = starInfluenceStyle;
    }

    return (
      <a>
        <div style={style}>
          {influenceText}
        </div>
      </a>
    );
  }
}