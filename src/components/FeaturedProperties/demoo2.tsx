import React from 'react'
import ListItem from './demo3';

export default class demoo2 extends React.Component {

// Dummy data for the table
state = {
   data: [{
  id: 1,
  name:"Villa",
  imgURL:"https://dammedia.ledvance.info/media/img/asset-4086347//c,x,0,y,1058,w,4165,h,2342/s,x,1600,y,0/iStock-185270129.jpg",
  title: "Guaranteed modern home",
  location: "14 Tottenham Road, London",
  price: "$389.000",
  type: "For Sale",
  squarefeet:3060,
  noOfBeds: 3,
  noOfBaths: 3,
  taxiAvailability:" Yes"
}
  , {
    id: 2,
    name:"House",
  imgURL:"https://dammedia.ledvance.info/media/img/asset-4086347//c,x,0,y,1058,w,4165,h,2342/s,x,1600,y,0/iStock-185270129.jpg",
  title: "Luxury family home",
  location: "14 Tottenham Road, London",
  price: "$775/mo",
  type: "For Rent",
  squarefeet:3060,
  noOfBeds: 3,
  noOfBaths: 3,
  taxiAvailability:" Yes"
  }, {
  id: 3,
    name:"Office",
  imgURL:"https://dammedia.ledvance.info/media/img/asset-4086347//c,x,0,y,1058,w,4165,h,2342/s,x,1600,y,0/iStock-185270129.jpg",
  title: "Awesome family home",
  location: "14 Tottenham Road, London",
  price: "$200/mo",
  type: "For Rent",
  squarefeet:3060,
  noOfBeds: 3,
  noOfBaths: 3,
  taxiAvailability:" Yes"
  }, {
  id: 4,
    name:"Apartment",
  imgURL:"https://dammedia.ledvance.info/media/img/asset-4086347//c,x,0,y,1058,w,4165,h,2342/s,x,1600,y,0/iStock-185270129.jpg",
  title: "Guaranteed modern home",
  location: "14 Tottenham Road, London",
  price: "$4,200/mo",
  type: "For Rent",
  squarefeet:3060,
  noOfBeds: 3,
  noOfBaths: 3,
  taxiAvailability:" Yes"
  }, {
    id: 5,
    name:"Apartment",
  imgURL:"https://dammedia.ledvance.info/media/img/asset-4086347//c,x,0,y,1058,w,4165,h,2342/s,x,1600,y,0/iStock-185270129.jpg",
  title: "Luxury family home",
  location: "14 Tottenham Road, London",
  price: "$299.000",
  type: "For Sale",
  squarefeet:3060,
  noOfBeds: 3,
  noOfBaths: 3,
  taxiAvailability:" Yes"
  },
  {
  id: 6,
    name:"Apartment",
  imgURL:"https://dammedia.ledvance.info/media/img/asset-4086347//c,x,0,y,1058,w,4165,h,2342/s,x,1600,y,0/iStock-185270129.jpg",
  title: "Awesome family home",
  location: "14 Tottenham Road, London",
  price: "$439.000",
  type: "For Sale",
  squarefeet:3060,
  noOfBeds: 3,
  noOfBaths: 3,
  taxiAvailability:" Yes"
  }]
}

getData = (rowData: any) => {

  console.log(rowData);
}

render(){
     return(
          <div>                 
                   <ListItem rowData={this.state.data} handleClick={this.getData}/>

       </div>               
        );
    }
}


