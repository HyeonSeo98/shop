/* eslint-disable */ /*<<노란줄지워줌*/ 
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, Row, Col} from 'react-bootstrap';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import data from './components/data';
import Best from './pages/Best';
import Main from './components/Main';
import About from './pages/About';
import History from './pages/History';
import Inform from './pages/Inform';

function App() {

  const navigate = useNavigate()

  return (
    <>
      <div className="App">
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand onClick={() => navigate('/')}>삼진어묵</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link onClick={()=> navigate('/about')}>회사소개 </Nav.Link>
              <Nav.Link onClick={()=> navigate('/best')}>베스트</Nav.Link>
              <Nav.Link href="#features">장바구니</Nav.Link>
              <Nav.Link href="#pricing">로그인</Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        {/* <Link to={'/'}>HOME</Link>
        <Link to={'/best'} target='_blank'>BEST</Link> */}

        <Routes>
          <Route path='/' element={<Main/>}/>

          {/* nested_router기법 */}
          <Route path='/about' element={<About/>}>
            <Route path='history' element={<History/>}/>
            <Route path='inform' element={<Inform/>}/>
          </Route>

          <Route path='/best' element={<Best />}/>
        </Routes>

      </div>

    </>
  );
}

export default App;
