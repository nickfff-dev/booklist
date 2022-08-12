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




function Bookview() { 
    const [search, setSearch] = useState([]);
  return (
    <>
    
    <h2 className="text-center my-5">Book Search and Price Comparison</h2>
    <div className="d-flex flex-row flex-wrap  justify-content-evenly">
    <Form className="my-2 mb-4">
                    <InputGroup>
    <FormControl
                          placeholder="search by title"
                         
                          type="text"
                         
                          
    />
    <Button className="btn"  type="submit" value="submit" >
      search
    </Button>
  </InputGroup>
</Form >
<Form  className="my-2 mb-4">
                    <InputGroup >
    <FormControl
                          placeholder="search by author"
                         
                          type="text"
                          
                         
                          
    />
    <Button className="btn"  type="submit" value="submit" >
      search
    </Button>
  </InputGroup>
      </Form>
      <Form  className="my-2 mb-4" >
                    <InputGroup >
    <FormControl
                          placeholder="search by ISBN"
                         
                          type="text"
                          
                        
                          
    />
    <Button className="btn"  type="submit" value="submit" >
      search
    </Button>
  </InputGroup>
</Form>


      </div>
      

      <div className='text-center my-5'>
      {search.length > 0 ? (<p>search</p>):(<p>nose arch</p>)}
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
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
            <td>@fat</td>
            <td>@mdo</td>
            <td>@mdo</td>
        </tr>
        <tr>
          <td>3</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
          
        </tr>
      </tbody>
    </Table>
      </Container>
      
  </>
  )

}

export default Bookview;
