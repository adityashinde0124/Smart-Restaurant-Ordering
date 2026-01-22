import { useEffect, useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";


function Menu() {

  const navigate = useNavigate();
  
  const [menu, setMenu] = useState([]);
  const { addToCart } = useContext(CartContext);

useEffect(() => {
  api.get("/api/menu")
    .then(res => setMenu(res.data))
    .catch(err => console.log(err));
}, []);


  return (

    <>

    {/* navbar */}
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">
            <h1 style={{ fontSize: "48px", fontWeight: "bold" }}>Tasty Bites</h1>
          </Navbar.Brand>
        </Container>
      </Navbar>


    <div style={{ backgroundColor: "black", width: "100%", minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>


      <div style={{height: "11vh",width:"90%",backgroundColor:"orange",justifyContent:"center",alignItems:"center",display:"flex",flexDirection:"column",borderRadius:"20px",marginTop:"40px",marginBottom:"40px",color:"black"}}>
        <h1 className="fw-bold">Menu</h1>
    </div>



      <div style={{ background: "rgb(46, 45, 45)", width: "90%", minHeight: "100vh", display: "flex", flexWrap: "wrap", justifyContent: "center", borderRadius: "20px" }}>
      {menu.map(item => (
        <Card key={item._id} style={{ width: "18rem", margin: "50px",padding:"10px" }}>
          <Card.Img variant="top" src={item.image} />
          <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>{item.description}</Card.Text>
            <h6>{item.price} Rs</h6>
            <Button onClick={() => addToCart(item)} variant="warning">
              Add +
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>


      <div style={{height: "100px",width:"90%",backgroundColor:"orange",justifyContent:"center",alignItems:"center",display:"flex",flexDirection:"column",borderRadius:"20px",marginTop:"40px",marginBottom:"40px"}}>
      <button onClick={() => navigate("/cart")} style={{backgroundColor:'#000000' ,width:"200px",color:"white" }} className='btn btn-warning btn-lg rounded-pill ' >Go to Cart</button>
    </div>


    </div>
    

    
    </>
  );
}

export default Menu;
