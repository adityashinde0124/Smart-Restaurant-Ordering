import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext.jsx";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const { cart, total, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [tableNo, setTableNo] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("Cash");
  const [loading, setLoading] = useState(false);

  const placeOrder = async () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    if (!name || !phone || !tableNo) {
      alert("Please fill all details");
      return;
    }

    const orderData = {
      items: cart.map((i) => ({
        menuItem: i._id,
        qty: i.qty,
      })),
      customerName: name,
      phone: phone,
      tableNo: Number(tableNo),
      paymentMethod: paymentMethod,
      total: total,
    };

    try {
      setLoading(true);
      await api.post("/api/orders", orderData);
      alert("✅ Order placed successfully!");
      clearCart();
      setName("");
      setPhone("");
      setTableNo("");
      setPaymentMethod("Cash");
    } catch (error) {
      console.error(error);
      alert("❌ Failed to place order");
    } finally {
      setLoading(false);
    }
  };



  return (
    <>
      {/* Navbar */}
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand>
            <h1 style={{ fontSize: "48px", fontWeight: "bold" }}>Tasty Bites</h1>
          </Navbar.Brand>
        </Container>
      </Navbar>

      
      <div style={{ backgroundColor: "black", width: "100%", display: "flex", justifyContent: "center" }}>
        <div
          style={{
            height: "11vh",
            width: "90%",
            backgroundColor: "orange",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "20px",
            marginTop: "40px",
          }}
        >
          <h1 className="fw-bold">Checkout</h1>
        </div>
      </div>

      
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "flex-start", 
          backgroundColor: "black",
          paddingBottom: "40px",
        }}
      >
        
        <div
          style={{
            backgroundColor: "rgb(46, 45, 45)",
            color: "white",
            width: "42%",
            height: "500px",
            margin: "30px 0",
            borderRadius: "20px",
          }}
        >

          <Form className="m-5 w-75 mx-auto">
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control value={name} onChange={(e) => setName(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control value={phone} onChange={(e) => setPhone(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Table No</Form.Label>
              <Form.Control value={tableNo} onChange={(e) => setTableNo(e.target.value)} />
            </Form.Group>

            <Form.Label>Payment Method</Form.Label>
            <Form.Select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
              <option value="Cash">Cash 💵</option>
              <option value="Card">Card 💳</option>
            </Form.Select>

            <br />

            <Button variant="outline-warning" disabled={loading} onClick={placeOrder}>
              {loading ? "Placing Order..." : "Place Order"}
            </Button>
          </Form>
        </div>

        
        <div
          style={{
            backgroundColor: "rgb(46, 45, 45)",
            color: "white",
            width: "42%",
            height: "500px",
            margin: "30px 0",
            borderRadius: "20px",
            padding: "20px",
            overflowY: "auto",
          }}
        >
          <h2>Order Summary</h2>

          {cart.length === 0 && <p>No items in cart</p>}

          {cart.map((i) => (
            <p key={i._id} style={{ fontSize: "22px" }}>
              {i.name} × {i.qty}
            </p>
          ))}

          <hr />
          <h3>Total: ₹{total}</h3>

          <button
            onClick={() => navigate("/")}
            style={{ backgroundColor: "#FFA500", width: "200px" }}
            className="btn btn-warning btn-lg rounded-pill mt-3"
          >
            Start new order
          </button>
        </div>
      </div>


          <div style={{height:"8vh", backgroundColor:"rgb(46, 45, 45)", display:"flex", justifyContent:"space-evenly", alignItems:"center", flexDirection:"column",color:"white" }}>
        <p style={{margin:"5px",fontSize:"14px"}}>TM & Copyright 2026 Tasty Bites Company LLC. All Rights Reserved.</p>
      </div>


    </>
  );
}




export default Checkout;
