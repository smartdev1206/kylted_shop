import React from 'react';
import ReactDOM from 'react-dom';
import './assets/scss/index.scss';

import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import AccountOrdersPage from './components/AccountOrdersPage';
import AccountOrderPage from './components/AccountOrderPage';
import AccountWishListPage from './components/AccountWishListPage';
import AccountPersonalInfoPage from './components/AccountPersonalInfoPage';
import AccountAddressPage from './components/AccountAddressPage';
import AccountAddressEditPage from './components/AccountAddressEditPage';
import AccountPaymentPage from './components/AccountPaymentPage';
import AccountPaymentEditPage from './components/AccountPaymentEditPage';
import AccountPaymentChoosePage from './components/AccountPaymentChoosePage';
import ShopPage from './components/ShopPage';
import ProductPage from './components/ProductPage';
import NotFoundPage from './components/NotFoundPage';
import ShoppingCardPage from './components/ShoppingCardPage';
import CheckoutPage from './components/CheckoutPage';
import OrderCompletedPage from './components/OrderCompletedPage';
import ShippingAndReturnsPage from './components/ShippingAndReturnsPage';
import AboutPage from './components/AboutPage';
import ContactUsPage from './components/ContactUsPage';
import FaqPage from './components/FaqPage';

import reportWebVitals from './reportWebVitals';

import {
	BrowserRouter as Router,
	Switch,
	Route,
} from "react-router-dom";

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<Switch>
				<Route path="/login">
					<LoginPage />
				</Route>
				<Route path="/shop">
					<ShopPage />
				</Route>
				<Route path="/product/:id">
					<ProductPage />
				</Route>
				<Route path="/404">
					<NotFoundPage />
				</Route>
				<Route path="/shopping-cart">
					<ShoppingCardPage />
				</Route>
				<Route path="/checkout">
					<CheckoutPage />
				</Route>
				<Route path="/order-completed">
					<OrderCompletedPage />
				</Route>
				<Route path="/shipping-and-returns">
					<ShippingAndReturnsPage />
				</Route>
				<Route path="/faq">
					<FaqPage />
				</Route>
				<Route path="/faq">
					<FaqPage />
				</Route>
				<Route path="/contact-us">
					<ContactUsPage />
				</Route>
				<Route path="/about">
					<AboutPage />
				</Route>
				{/* Account pages */}
					<Route path="/account-orders">
						<AccountOrdersPage />
					</Route>
					<Route path="/account-order">
						<AccountOrderPage />
					</Route>
					<Route path="/account-wishlist">
						<AccountWishListPage />
					</Route>
					<Route path="/account-personal-info">
						<AccountPersonalInfoPage />
					</Route>
					<Route path="/account-address">
						<AccountAddressPage />
					</Route>
					<Route path="/account-address-edit">
						<AccountAddressEditPage />
					</Route>
					<Route path="/account-payment">
						<AccountPaymentPage />
					</Route>
					<Route path="/account-payment-edit">
						<AccountPaymentEditPage />
					</Route>
					<Route path="/account-payment-choose">
						<AccountPaymentChoosePage />
					</Route>
				{/* ------ */}
				<Route exact path="/">
					<HomePage />
				</Route>
			</Switch>
		</Router>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(null);