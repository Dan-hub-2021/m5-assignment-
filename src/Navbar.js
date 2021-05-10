import React from 'react'

function Navbar() {
    return (
      <div className="App">
        <Navbar  bg="primary" variant="dark" sticky="top">
          <Navbar.Brand href="#home">Shopping Items</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        </Navbar>
          {/* <Nav>
              <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link>
          </Nav>       */}
      </div>
    );
  }   
  
export default Navbar;


