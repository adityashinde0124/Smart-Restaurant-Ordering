import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Card from "react-bootstrap/Card";
import { useContext } from "react";
import { CartContext } from "../context/CartContext.jsx";
import { useNavigate } from "react-router-dom";

function Cart() {
  const navigate = useNavigate();

  const { cart, total } = useContext(CartContext);

  return (
    <>
      {/* navbar */}
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">
            <h1 style={{ fontSize: "48px", fontWeight: "bold" }}>
              Tasty Bites
            </h1>
          </Navbar.Brand>
        </Container>
      </Navbar>

      <div
        style={{ backgroundColor: "black", width: "100%", minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}
      >
        
        <div
          style={{
            height: "11vh",
            width: "90%",
            backgroundColor: "orange",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            borderRadius: "20px",
            marginTop: "10px",
            color: "black",
          }}
        >
          <h1 className="fw-bold">Cart</h1>
        </div>

        
        <div
          style={{
            display: "flex", 
            justifyContent: "center", 
            paddingTop: "20px",
            width: "90%" 
          }}
        >
          
          <div
            style={{
              backgroundColor: "rgb(46, 45, 45)",
              width: "100%",
              height: "70vh",
              paddingTop: "120px",
              marginTop: "20px",
              paddingBottom: "120px",
              paddingLeft: "10px",
              paddingRight: "10px",
              borderRadius: "20px",
              color: "white",
            }}
          >
            {cart.length === 0 && <p>No items in cart</p>}
            {cart.map((item) => (
              <div key={item._id} style={{ color: "white",fontSize:"30px" }}>
                {item.name} x {item.qty} = {item.price * item.qty} Rs
              </div>
            ))}

            <hr />
            <h3 style={{ color: "orange" }}>Total: {total} Rs</h3>

            <button
              onClick={() => navigate("/checkout")}
              style={{ backgroundColor: "#FFA500", width: "200px" }}
              className="btn btn-warning btn-lg rounded-pill "
            >
              Go to Checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
}




export default Cart;
