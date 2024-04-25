import { BrowserRouter, Route, Navigate, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Nav from './Components/Nav';
import Home from './Components/Home';
import Footer from './Components/Footer';
import New from './Components/New';
import NotFound from './Components/NotFound';
import Introduce from './Components/Introduce';
import Products from './Components/Products';
import Contact from './Components/Contact';
import Partner from './Components/Partner';
import Test from './Components/Test';
import ListRoom from './Components/ListRoom';
import NewDetail from './Components/NewDetail';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				{/* Nav */}
				<Nav />
				<Routes	>
					<Route path='/Home' element={<Home />}></Route>
					<Route path='/Introduce' element={<Introduce />}></Route>
					{/* <Route path='/Products' element={<Products />}></Route> */}
					<Route path='/Products' element={<Products />}>
						<Route path='List_Room' element={<ListRoom />} />
					</Route>

					<Route path='/New' element={<New />}></Route>
					<Route path='/NewDetail' element={<NewDetail />}></Route>
					<Route path='/Partner' element={<Partner />}></Route>
					<Route path='/Contact' element={<Contact />}></Route>

					<Route index element={<Navigate to='/Home' />} />
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

