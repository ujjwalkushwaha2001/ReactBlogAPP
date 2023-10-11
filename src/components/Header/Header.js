import React from 'react'
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (

    <>
      <div style={{backgroundColor:"white"}}>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Button type='button' bg="light" variant="light" style={{ backgroundColor: 'pink' }} >
            <Link to="/add-blog" style={{ textDecoration: 'none',color:"black" }}>
              Add Post
            </Link>
          </Button>
        </Container>
      </Navbar>
      </div>
      <br />
    </>

  )
}

export default Header;




