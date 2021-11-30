import logo from './images/dog_icon.svg';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import CardDog from './components/CardDog';


function App() {
  return (
    <Container >
        <Nav className="navbar navbar-expand-lg navbar-light py-4">
          <Container> 
            <a href="https://github.com/" className="navbar-brand mx-auto">
             <span className="d-flex justify-content-center align-items-center">
             <img src={logo} className="nav-logo" width="98px" height="98px" alt="logo-dog"/>
              <h3>Adopta un Dog</h3>
               </span> 
            </a>
          </Container>
        </Nav>
        <CardDog />
    </Container>
  );
}

export default App;
