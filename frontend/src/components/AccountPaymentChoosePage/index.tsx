import React, {Component} from 'react'

import Navbar from "../Navbar"
import Footer from '../Footer'

import { Link } from "react-router-dom"

export default class AccountPaymentEditPage extends Component{
  render(){
    return (
			<div className="accountorderspage">
				<Navbar className="border-bottom" />

				{/* <!-- BREADCRUMB --> */}
				<nav className="py-5">
					<div className="container">
						<div className="row">
							<div className="col-12">

								{/* <!-- Breadcrumb --> */}
								<ol className="breadcrumb mb-0 font-size-xs text-gray-400">
									<li className="breadcrumb-item">
										<a className="text-gray-400" href="index.html">Home</a>
									</li>
									<li className="breadcrumb-item active">
										My Account
									</li>
								</ol>

							</div>
						</div>
					</div>
				</nav>

				{/* <!-- CONTENT --> */}
				<section className="pt-7 pb-12">
					<div className="container">
						<div className="row">
							<div className="col-12 text-center">

								{/* <!-- Heading --> */}
								<h3 className="mb-10">My Account</h3>

							</div>
						</div>
						<div className="row">
							<div className="col-12 col-md-3">

								{/* <!-- Nav --> */}
								<nav className="mb-10 mb-md-0">
									<div className="list-group list-group-sm list-group-strong list-group-flush-x">
										<a className="list-group-item list-group-item-action dropright-toggle " href="account-orders.html">
											Orders
										</a>
										<a className="list-group-item list-group-item-action dropright-toggle " href="account-wishlist.html">
											Widhlist
										</a>
										<a className="list-group-item list-group-item-action dropright-toggle " href="account-personal-info.html">
											Personal Info
										</a>
										<a className="list-group-item list-group-item-action dropright-toggle " href="account-address.html">
											Addresses
										</a>
										<a className="list-group-item list-group-item-action dropright-toggle active" href="account-payment.html">
											Payment Methods
										</a>
										<a className="list-group-item list-group-item-action dropright-toggle" href="#!">
											Logout
										</a>
									</div>
								</nav>


							</div>
							<div className="col-12 col-md-9 col-lg-8 offset-lg-1">

								{/* <!-- Form --> */}
								<form>

									{/* <!-- Card --> */}
									<div className="form-group card card-sm border">
										<div className="card-body">

											{/* <!-- Radio --> */}
											<div className="custom-control custom-radio">

												{/* <!-- Input --> */}
												<input className="custom-control-input collapsed" id="checkoutPaymentCard" name="payment" type="radio" defaultChecked />

												{/* <!-- Label --> */}
												<label className="custom-control-label d-flex justify-content-between font-size-sm text-body text-nowrap" htmlFor="checkoutPaymentCard">
													I want to add Debit / Credit Card <img className="ml-2" src="assets/img/brands/color/cards.svg" alt="..." />
												</label>

											</div>

										</div>
									</div>

									{/* <!-- Card --> */}
									<div className="form-group card card-sm border">
										<div className="card-body">

											{/* <!-- Radio --> */}
											<div className="custom-control custom-radio">

												{/* <!-- Input --> */}
												<input className="custom-control-input" id="checkoutPaymentPaypal" name="payment" type="radio" />

												{/* <!-- Label --> */}
												<label className="custom-control-label d-flex justify-content-between font-size-sm text-body text-nowrap" htmlFor="checkoutPaymentPaypal">
													I want to add PayPall <img src="assets/img/brands/color/paypal.svg" alt="..." />
												</label>

											</div>

										</div>
									</div>

									{/* <!-- Button --> */}
									<button className="btn btn-dark" type="submit">
										Continue <i className="fe fe-arrow-right ml-2"></i>
									</button>

								</form>

							</div>
						</div>
					</div>
				</section>
				
				<Footer />
			</div>
    )
  }
}