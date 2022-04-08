import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Card, Button, Table } from 'react-bootstrap'
const tblStyle = {
    width: '70%',
    marginLeft: '15%',
    marginTop: '4%'
}
const ProductsControllers = () => {
    const [data, setdata] = useState([])
    useEffect(async () => {
        await axios.get("http://localhost:3000/getdata_withQuery")
            .then(res => setdata(res.data))
            .catch((err) => console.log(err.message))
    }, [])
    let editEmp=(id)=>{
        alert(`Employee d is :${id}`)
    }
    return (
        <div>
            <div>
                <div id="cardiv">
                    {data.map(item =>
                       <Card style={{ width: '12rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>{item.emp_name}</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Button onClick={()=>editEmp(item.id)} variant="primary">Edit</Button>
                            </Card.Body>
                        </Card>
                         )}
                    </div>
               

                <Table style={tblStyle} striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td colSpan={2}>Larry the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    )
}
export default ProductsControllers

