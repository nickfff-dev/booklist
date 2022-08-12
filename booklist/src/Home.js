import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from './Header';



function Home() {
    return (
        <>
            <Header/>
        <Container>
            <Row>
                <Col>
                    <h1>Welcome to the Booklist</h1>
                    <p>This is a simple booklist app. It allows you to add, edit, and delete books.</p>
                </Col>
            </Row>
        </Container>
        </>
    );
}


export default Home;
