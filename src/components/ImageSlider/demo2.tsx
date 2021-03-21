import React from 'react';

type PersonProp = {
    personName: string,
    Age: number;
        

}

export default function demo2({personName,Age}:PersonProp) {
    return <h1>Name: {personName}</h1>
}


