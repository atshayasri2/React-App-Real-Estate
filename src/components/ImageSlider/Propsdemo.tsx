import React from 'react';
import ReactDOM from 'react-dom';


interface personDetails {
  name: string;
}

// function Propsdemo({name}:personDetails){

// }
export default class Propsdemo extends React.Component<personDetails, {}> {
  render() {
    return <h1>{this.props.name}</h1>;
  }
}
{/* <Propsdemo foo="bar" />; // ok */}

// ReactDOM.render(
//   element,
//   document.getElementById('root')
// );