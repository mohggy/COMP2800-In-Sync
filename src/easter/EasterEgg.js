import React from 'react';
import ReactHowler from 'react-howler';
import Bye from './nsync.mp3';
import './EasterEgg.css';

/* Play/Pause button functions from: https://github.com/thangngoc89/react-howler/blob/master/examples/react/src/players/OnlyPlayPauseButton.js*/ 


class EasterEgg extends React.Component {

  constructor (props) {
    super(props)

    this.state = {
      playing: false
    }
    this.handlePlay = this.handlePlay.bind(this)
    this.handlePause = this.handlePause.bind(this)
  }

  handlePlay () {
    this.setState({
      playing: true
    })
  }

  handlePause () {
    this.setState({
      playing: false
    })
  }

  render () {
    return (
      <div className="easter">
        <ReactHowler
          src={Bye}
          playing={this.state.playing}
        />
        <div className="btns-container">
        <button className="audio-btns" onClick={this.handlePlay}>Play</button>
        <button className="audio-btns" onClick={this.handlePause}>Pause</button>
        </div>
      </div>
    )
  }
}

export default EasterEgg