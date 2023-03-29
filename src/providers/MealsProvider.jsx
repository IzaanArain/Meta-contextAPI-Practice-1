import React from 'react'
import { useContext } from 'react';
import { useState } from 'react';
import { createContext } from 'react'

const MealsContext=createContext();

const todaysMeals=[
    {name:"Baked Beans",calories:200,id:1},
    {name:"Grilled Veggies",calories:80,id:2},
    {name:"Soup",calories:100,id:3},
    {name:"fried Chicked",calories:500,id:4},
    {name:"Grilled fish",calories:400,id:5},
    {name:"burger",calories:1000,id:6},
  ]
const MealsProvider = ({children}) => {
    const [meals,setMealsList]=useState(todaysMeals)

  return (
    <MealsContext.Provider value={meals}>
        {children}
    </MealsContext.Provider>
  )
}

export const useMealsListContext=()=>useContext(MealsContext)

export default MealsProvider;