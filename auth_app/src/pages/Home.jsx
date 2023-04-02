import React from "react";
import { Button, Container, Navbar } from "react-bootstrap";

export default function Home({ submitLogout }) {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Authentication App</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <form onSubmit={(e) => submitLogout(e)}>
                <Button type="submit" variant="light">
                  Log out
                </Button>
              </form>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="center">
        <h2>You're logged in!</h2>
      </div>
    </div>
  );
}
