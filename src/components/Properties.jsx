import React from 'react'
import {properties} from '../data'
import { SinglePropertie } from './SinglePropertie'


export const Properties = () => {
  return (
    <div className="container shadow ">
    <div  className='d-flex justify-content-center gap-3 flex-wrap bg-light shadow'>
      <h3 className='w-100 m-2'>Aktuális ingatlan kínálatunk</h3>
    {properties.map(obj=><SinglePropertie key={obj.id} {...obj}/>)}
    </div>
    </div>
    
  )
}






 