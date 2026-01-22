import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";

function Landing() {

  const navigate = useNavigate();


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

      <div style={{ height: '10px' , backgroundColor:'rgb(245, 231, 198)' }}></div>

      <div style={{ height: '30px' , backgroundColor:'orange' }}></div>

      
      <div style={{ height: '600px' , backgroundColor:'black' , display:'flex' , justifyContent:'space-evenly'}}>

        <div style={{ width: '35%' , height:'55vh', backgroundColor:'black',color:'white', marginTop:'100px'}}>
          <h1 style={{fontWeight:"bold"}}>
            Food that makes your mouth water!
          </h1><br />
          <h4 style={{fontWeight:"bold"}}>Good food creates good memories, and we make sure every order becomes a moment worth enjoying.</h4><br />
          <p>
            Craving something delicious? You’re in the right place. Explore mouth-watering pizzas, juicy burgers, crispy fries, and refreshing drinks, all prepared with care and served with speed. Sit back, order in seconds, and let us handle the rest while you enjoy every bite. 
          </p><br />
          <button onClick={() => navigate("/menu")} style={{backgroundColor:'#FFA500' ,width:"200px" }} className='btn btn-warning btn-lg rounded-pill ' >Order Now!</button>
        </div>

        <div style={{ width: '55%' , height:'55vh', backgroundColor:'white', marginTop:'100px'}}>
          <img style={{width:'100%',height:'100%'}}  src="https://static.vecteezy.com/system/resources/thumbnails/035/993/789/small/ai-generated-delicious-and-juicy-burger-with-melted-cheese-ai-generative-photo.jpg" alt="..." />
        </div>

      </div>



      <div style={{ height: '500px' , backgroundColor:'black' , display:'flex' , justifyContent:'space-evenly'}}>

        <div style={{ width: '55%' , height:'55vh', backgroundColor:'white'}}>
          <img style={{width:'100%',height:'100%'}}  src="https://thumbs.dreamstime.com/b/delicious-pizza-stretching-cheese-black-background-fire-smoke-delicious-pizza-stretching-cheese-black-302835421.jpg" alt="..." />
        </div>

        <div style={{ width: '35%' , height:'55vh', backgroundColor:'black',color:'white'}}>
          <h1>
            Hungry? We got you!
          </h1><br />
          <p>
            Looking for food that truly satisfies? Explore our delicious range of freshly prepared meals, order in seconds, and enjoy fast, hassle-free service while we bring your favorites straight to you.
            <br /><br />
            Good food brings people together, and great taste creates lasting memories. From freshly baked pizzas to juicy burgers and crispy fries, every meal is prepared with care and passion. Order effortlessly, sit back, and enjoy food that makes you smile with every bite.
          </p><br />
          
        </div>

      </div>

      
      <div style={{height:"8vh", backgroundColor:"rgb(46, 45, 45)", display:"flex", justifyContent:"space-evenly", alignItems:"center", flexDirection:"column",color:"white" }}>
        <p style={{margin:"5px",fontSize:"14px"}}>TM & Copyright 2026 Tasty Bites Company LLC. All Rights Reserved.</p>

      </div>



      
      
    </>
    
  );
}

export default Landing;
