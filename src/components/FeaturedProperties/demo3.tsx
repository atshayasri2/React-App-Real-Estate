import React from 'react';
interface IRoomDetail {
  name:string,
  imgURL:string,
  title: string,
  location: string,
  price: string,
  type: string,
  squarefeet: number,
  noOfBeds: number,
  noOfBaths: number,
  taxiAvailability: string,
}

interface IRoomDetails {
    rowData: Array<IRoomDetail>
    handleClick: (arg0: IRoomDetail) => void;
}

const demo3 = (props:IRoomDetails) => {
    return (
    <>
            {props.rowData.map((item) =>
                <div onClick={() => props.handleClick(item)}>
                 <p>{item.price}</p>
                 <p>{ item.title}</p>
          </div>)
        }
                
         </>
         
 );
}
export default demo3;

