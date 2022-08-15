import React,{useState} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from './Header';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import { useQuery } from "@apollo/client";
import { gql } from "@apollo/client";
import { useLazyQuery } from '@apollo/client';




function Bookview() { 
  
  const [searchQuery, setSearchQuery] = useState('');
  const titleQuery = gql`query byBookTitle($BookTitle: String!){byBookTitle(BookTitle: $BookTitle){BookPrice BookStore BookTitle BookAuthor BookLink BookIsbn imageLink}}`;
 
  const [getBooks, { data, loading, error }] = useLazyQuery(titleQuery)
  if (loading) return <p>Loading ...</p>;
  if (error) return <p>{`Error ${error} :(`}</p>;
  return (
    <>
    
    <h2 className="text-center my-5">Book Search and Price Comparison</h2>
    <div className="d-flex flex-row flex-wrap  justify-content-center">
        <Form className="my-2 mb-4" onSubmit={() => {
          getBooks({ variables: {BookTitle: searchQuery} });
        
    }}>
                    <InputGroup>
    <FormControl
                          placeholder="search by title"
                         value={searchQuery}
              type="text"
              onChange={(e) => setSearchQuery(e.target.value)}
                         
                          
    />
    <Button className="btn"  type="submit" value="submit" >
      search
    </Button>
  </InputGroup>
</Form >



      </div>
      

      <div className="d-flex flex-row flex-wrap justify-content-evenly">
        
      {data  && data.byBookTitle.map((book, index) => (
       <div className="card mb-3" key={index} >
       <div className="row no-gutters">
         <div className="col-md-4">
           <img src={book.imageLink} className="img-fluid card-image" alt={book.BookTitle} />
         </div>
         <div className="col-md-6">
           <div className="card-body">
             <h4 className="card-title"><strong>{book.BookAuthor}</strong></h4>
            
          
                  <h4>{ book.BookTitle}</h4><hr />
                  <div className="d-flex flex-row justify-content-between">
                  <p> price: { book.BookPrice.replace("KES", "")}</p>
               <p> Shop: { book.BookStore}</p>
               <p>Isbn: { book.BookIsbn}</p>
                    </div>
               
             
           
             
           </div>
         </div>
       </div>
     </div>
        
    ))}
        
     </div>
      <Container>
      <Table striped bordered hover responsive className="mb-5">
      <thead>
        <tr>
          <th>#</th>
          <th>Book Title</th>
          <th>Author</th>
            <th>Price</th>
            <th>ISBN</th>
            <th>Store</th>
        </tr>
      </thead>
      <tbody>
            {data && data.byBookTitle.map((book, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{book.BookTitle}</td>
                <td>{book.BookAuthor}</td>
                <td>{book.BookPrice}</td>
                <td>{book.BookIsbn}</td>
                <td>{book.BookStore}</td>
              </tr>
       
            
       ))}
      </tbody>
    </Table>
      </Container>
      
  </>
  )

}

export default Bookview;
