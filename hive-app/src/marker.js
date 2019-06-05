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
// import {markerList} from './data/markerData'

const starMarkerStyle = {
  position: 'absolute',
  width: M_WIDTH,
  height: M_HEIGHT,
  left: -M_WIDTH / 2,
  top: -M_HEIGHT / 2,

  border: '5px solid #ecbf42',
  borderRadius: M_HEIGHT,
  backgroundColor: STAR_COLOR,
  display: 'flex',
  justifyContent:'center',
  alignItems:'center',
  color: 'white',
  fontSize: 14,
  fontWeight: 'bold',
  padding: 4,
};

const markerStyleHover = {
  ...starMarkerStyle,
  border: '5px solid black',
  color: 'black',
  backgroundColor: 'white',
  borderRadius: 50,
  width: M_WIDTH*2,
  height: M_HEIGHT*2,
  left: -M_WIDTH*2/ 2,
  top: -M_HEIGHT*2 / 2,
  zIndex: 1,
};

const microMarkerStyle = {
  ...starMarkerStyle,
  backgroundColor: MICRO_COLOR,
  borderColor: MICRO_COLOR,
  color: 'black',
}

const midMarkerStyle = {
  ...starMarkerStyle,
  backgroundColor: MID_COLOR,
  borderColor: MID_COLOR,
  color: 'black',
}

const macroMarkerStyle = {
  ...starMarkerStyle,
  backgroundColor: MACRO_COLOR,
  borderColor: MACRO_COLOR,
}


export default class Marker extends Component {
  static propTypes = {
    text: PropTypes.string,
    handle: PropTypes.string,
    influence: PropTypes.string,
    hover: PropTypes.bool,
    user: PropTypes.string,
    followers: PropTypes.number,
    influencerScore: PropTypes.number,
    location: PropTypes.string,
    lat: PropTypes.number,
    lng: PropTypes.number,
  };

  static defaultProps = {
    handle: 'handle',
  };

  constructor(props) {
    super(props);
  }

  render() {

    let style;

    // marker is influence color
    if (this.props.marker.influence === "micro") {
      style = microMarkerStyle;
    } else if (this.props.marker.influence === "mid") {
      style = midMarkerStyle;
    } else if (this.props.marker.influence === "macro") {
      style = macroMarkerStyle;
    } else if (this.props.marker.influence === "star") {
      style = starMarkerStyle;
    }

    // changes style if you hover
    style = this.props.$hover ? markerStyleHover : style;
    // changes style if you click
    if ((this.props.activeMarker.Handle === this.props.marker.Handle)) {
      style = markerStyleHover;
    }


    return (
      <a>
        <div style={style}>
          {this.props.text}
        </div>
      </a>
    );
  }
}
