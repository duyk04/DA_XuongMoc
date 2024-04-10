import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Home from './Components/Home';
import Footer from './Components/Footer';

function App() {
	return (
		<div className="App">
			<Navbar expand="lg" className="bg-body-tertiary py-0" style={{ height: 110, }}>
                <Container className="px-0 navbar mx-0 ">
                    <Navbar.Brand href="#home"><img src='../../images/AnhCatTC/logo.png'></img></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className='al float-end flex-grow-0'>
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Trang Chủ</Nav.Link>
                            <Nav.Link href='#gioiThieu'>Giới Thiệu</Nav.Link>
                            <Nav.Link href='#sanPham'>Sản Phẩm</Nav.Link>
                            <Nav.Link href='#tinTuc'>Tin tức</Nav.Link>
                            <Nav.Link href='#doiTac'>Đối tác</Nav.Link>
                            <Nav.Link href='#LienHe'>Liên Hệ</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
			<Home/>

			{/* footer */}
            <Footer/>
		</div>
	);
}

export default App;
