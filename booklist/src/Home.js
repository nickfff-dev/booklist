import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from './Header';
import Nuria from "./images/Nuria.jpg"



function Home() {
    return (
        <>
            <Header/>
       
            <div className='hero '>
                <h2 className='text-white '>Curate Your Booklist!</h2>
                <p className='text-white col-md-5'>we aggregate book and stationary prices from all major online stores so you can easily shop for the right book </p>
                <button >Create Booklist</button>
                    
            </div>
            <Container>
            <hr/>
           </Container>
            <h2 className="text-center col-md-4 offset-md-4 my-5">we aggregate books from the following major online stores, so you can find the best price for your book</h2>
            
            <Container>
            <div className='clients d-flex flex-row flex-wrap justify-content-evenly rounded'>
                <img src="https://textbookcentre.com/static/img/logo.4a06b1d89d38.svg" width="200" className="img-fluid" />
                    <img src={Nuria} width="200" className="img-fluid" />
                    <img src="https://prestigebookshop.com/wp-content/uploads/2020/09/logo-2.jpg" width="200" className="img-fluid" />

            </div>
           
           </Container>
       
        </>
    );
}


export default Home;
