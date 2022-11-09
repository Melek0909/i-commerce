import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Iphone11 from 'C:/Users/melek/OneDrive/Bureau/I-commerce project/icommerce-project/src/components/Iphone11.jpg';

function Productcard (){
    const productlist = [
        {
        id:0 ,
        name: 'Iphone11',
        price: 1800,
        image: {Iphone11},
        },
        {
        id:1 ,
        name: 'Iphone14',
        price: 3000,
        image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.tunisianet.com.tn%2Fsmartphone-mobile-4g-tunisie%2F52705-smartphone-apple-iphone-11-64-go-noir.html&psig=AOvVaw0U6oIjnXSjXSQ11OvT_md3&ust=1667936750388000&source=images&cd=vfe&ved=0CAkQjRxqFwoTCPisluHqnPsCFQAAAAAdAAAAABAE',
        },
        {
        id:2 ,
        name: 'samsung-A71',
        price: 1500,
        image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.tunisianet.com.tn%2Fsmartphone-mobile-4g-tunisie%2F52705-smartphone-apple-iphone-11-64-go-noir.html&psig=AOvVaw0U6oIjnXSjXSQ11OvT_md3&ust=1667936750388000&source=images&cd=vfe&ved=0CAkQjRxqFwoTCPisluHqnPsCFQAAAAAdAAAAABAE',
        },
        {
        id:3 ,
        name: 'Huawei-Y9',
        price: 800,
        image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.tunisianet.com.tn%2Fsmartphone-mobile-4g-tunisie%2F52705-smartphone-apple-iphone-11-64-go-noir.html&psig=AOvVaw0U6oIjnXSjXSQ11OvT_md3&ust=1667936750388000&source=images&cd=vfe&ved=0CAkQjRxqFwoTCPisluHqnPsCFQAAAAAdAAAAABAE',
        },
    ]
return(
<div className='row' style={{ display:"flex", justifyContent:"space-between", }}>
    {productlist.map((el, key) => (
        <div className=' col-3' key={key}>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={el.image} />
                <Card.Body>
                    <Card.Title>{el.name}</Card.Title>
                    <Card.Text>
                        {el.price}TND;
                    </Card.Text>
                    <Button variant="primary"> add this product</Button>
                </Card.Body>
            </Card>
        </div>
    ))}
</div>
    )
}

export default Productcard;