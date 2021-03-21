import React from 'react';
import ReactDOM from 'react-dom';


 const imagesPath = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvogqpq5YIiUNbWPsVT6p4N-ChHVPpiM6S8Q&usqp=CAU",
   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW1Z7cIao8poU-BMihB68EIPMqVgo8wF0buA&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5Nv4OjUbWeXHzHm1PGHMNqEirO8WgUCPSJg&usqp=CAU"
 ]

export default class ImageSlider extends React.Component {

    state = {
    index: 0,
    imgList: [imagesPath[0], imagesPath[1], imagesPath[2]]
  }
  onclickForward=()=> {

    if (this.state.index + 1 === this.state.imgList.length) {

      this.setState({

        index: 0

      })

    } else {

      this.setState({

        index: this.state.index + 1

      })

    }
  }

  onClickBack=()=> {

    if (this.state.index - 1 === -1) {

      this.setState({

        index: this.state.imgList.length - 1

      })

    } else {

      this.setState({

        index: this.state.index - 1

      })

    }

  
  }

  render() {
    return (
      <div>
        <img src={this.state.imgList[this.state.index]} alt="" /><br />
        <button onClick={this.onClickBack}>Back</button>

        <button onClick={this.onclickForward}>Forward</button>
      </div>
    );
  }
}