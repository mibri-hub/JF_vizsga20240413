import React from 'react'
import { Card,CardTitle,CardBody,CardSubtitle,CardText} from 'reactstrap';

export const SinglePropertie= ({id,category,sellerName,createAt,imageUrl,area,rooms}) => {
    //console.log(title);
  return (
    <div>
  <Card style={{width: '18rem',height:'100%'}}>
  <img className='img'  alt={id} src={imageUrl} style={{width: 'auto', height: '200px'}}/>
  <CardBody style={{display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
    <CardTitle tag="h5">
      {category}
    </CardTitle>
   
    <CardText>
      Feladás dátuma:{createAt}
    </CardText>
    <CardText>
      Szobák száma: {rooms}
    </CardText>
    <CardText>
        Alapterület: {area}
    </CardText>

    <button className="btn custom-btn m-1">
         Eladó: {sellerName}
    </button> 
  </CardBody>
</Card>
    </div>
  )
}