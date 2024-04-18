import { BrowserRouter, Route, Navigate, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Css/style.css'
import Nav from './Components/Nav';
import Home from './Components/Home';
import Footer from './Components/Footer';
import New from './Components/New';
import NotFound from './Components/NotFound';
import Introduce from './Components/Introduce';
import Products from './Components/Products';
import Contact from './Components/Contact';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				{/* Nav */}
				<Nav />
				<Routes	>
					<Route path='/home' element={<Home />}></Route>
					<Route path='/introduce' element={<Introduce />}></Route>
					<Route path='/products' element={<Products />}></Route>
					<Route path='/new' element={<New />}></Route>
					<Route path='/contact' element={<Contact />}></Route>

					<Route index element={<Navigate to='/home' />} />
					<Route path='*' element={<NotFound />}></Route>
				</Routes>
				{/* footer */}
				<Footer />
			</BrowserRouter>
			{/* <Nav />
			<Home />
			<Footer /> */}
		</div>
	);
}

export default App;

