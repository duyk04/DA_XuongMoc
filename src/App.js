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
import DetailsProduct from './Components/DetailsProduct';
import ScrollToTop from './hook/ScrollToTop';
import CircularIndeterminate from './hook/CircularIndeterminate';
import ScrollToTopButton from './hook/ScrollToTopButton';
import Cart from './Components/Cart';
import { CartProvider } from './Components/CartContext';

function App() {
	return (
		<div className="App">
			<CartProvider>
				<BrowserRouter>
					{/* Nav */}
					<ScrollToTop />
					<CircularIndeterminate />
					<Nav />
					<Routes	>
						<Route path='/Home' element={<Home />}></Route>
						<Route path='/Introduce' element={<Introduce />}></Route>
						{/* <Route path='/Products' element={<Products />}></Route> */}
						<Route path='/Products' element={<Products />}>
							<Route path='ListRoom' element={<ListRoom />} />
						</Route>

						{/* <Route path='/Products/ListRoom' element={<ListRoom />} /> */}
						{/* <Route path='ListRoom' element={<ListRoom />} /> */}

						<Route path='/New' element={<New />}></Route>
						<Route path='/NewDetail' element={<NewDetail />}></Route>
						<Route path='/Partner' element={<Partner />}></Route>
						<Route path='/Contact' element={<Contact />}></Route>

						<Route path='/DetailsProduct' element={<DetailsProduct />}></Route>
						<Route path='/Cart' element={<Cart />}></Route>

						<Route index element={<Navigate to='/Home' />} />
						<Route path='*' element={<NotFound />}></Route>
					</Routes>
					{/* footer */}
					<Footer />
					<ScrollToTopButton />
				</BrowserRouter>
			</CartProvider>
		</div>
	);
}

export default App;

