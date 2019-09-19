import React from 'react';
import './card-list.styles.css';
import { Card } from '../card/card.component';

export const CardList = props => { 
    // get the props ( basically any argument) then log it out, the props is provided in th emain app,js file
    console.log(props);
return <div className='card-list'>
{ props.monsters.map(monster => ( <Card key={monster.id} monster={monster}/>)) }</div>

// JavaScript Array map() Method
// The map() method creates a new array with the results of calling a function for every array element. The map() method calls the provided function once for each element in an array, in order. Note: map() does not execute the function for array elements without values.

};
