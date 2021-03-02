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
										<Link className="list-group-item list-group-item-action dropright-toggle" to="/account-orders">
											Orders
										</Link>
										<Link className="list-group-item list-group-item-action dropright-toggle" to="/account-wishlist">
											Wishlist
										</Link>
										<Link className="list-group-item list-group-item-action dropright-toggle" to="/account-personal-info">
											Personal Info
										</Link>
										<Link className="list-group-item list-group-item-action dropright-toggle" to="/account-address">
											Addresses
										</Link>
										<Link className="list-group-item list-group-item-action dropright-toggle active" to="/account-payment">
											Payment Methods
										</Link>
										<Link className="list-group-item list-group-item-action dropright-toggle" to="/login">
											Logout
										</Link>
									</div>
								</nav>
							</div>
							<div className="col-12 col-md-9 col-lg-8 offset-lg-1">

								{/* <!-- Heading --> */}
								<h6 className="mb-7">
									Add Debit / Credit Card
								</h6>

								{/* <!-- Form --> */}
								<form>
									<div className="row">
										<div className="col-12 col-md-6">
											<div className="form-group">
												<label htmlFor="cardNumber">Card Number *</label>
												<input className="form-control" id="cardNumber" type="text" placeholder="Card Number" required />
											</div>
										</div>
										<div className="col-12 col-md-6">
											<div className="form-group">
												<label htmlFor="nameOnCard">Name on Card *</label>
												<input className="form-control" id="nameOnCard" type="text" placeholder="Name on Card" required />
											</div>
										</div>
										<div className="col-12">

											{/* <!-- Label --> */}
											<label>
												Expiry Date *
											</label>

										</div>
										<div className="col-12 col-md-4">
											<div className="form-group">
												<label className="sr-only" htmlFor="paymentMonth">Month</label>
												<select className="custom-select" id="paymentMonth" required>
													<option selected disabled value="">Month *</option>
													<option>January</option>
													<option>February</option>
													<option>March</option>
												</select>
											</div>
										</div>
										<div className="col-12 col-md-4">
											<div className="form-group">
												<label className="sr-only" htmlFor="paymentCardYear">Year</label>
												<select className="custom-select" id="paymentCardYear" required>
													<option selected disabled value="">Year *</option>
													<option>2017</option>
													<option>2018</option>
													<option>2019</option>
												</select>
											</div>
										</div>
										<div className="col-12 col-md-4">
											<div className="form-group">
												<div className="input-group input-group-merge">
													<input className="form-control" id="paymentCardCVV" type="text" placeholder="CVV *" required />
													<div className="input-group-append">
														<span className="input-group-text" data-toggle="popover" data-placement="top" data-trigger="hover" data-content="The CVV Number on your credit card or debit card is a 3 digit number on VISA, MasterCard and Discover branded credit and debit cards." data-original-title="" title="">
															<i className="fe fe-help-circle"></i>
														</span>
													</div>
												</div>
											</div>
										</div>
										<div className="col-12">
											<div className="form-group">
												<div className="custom-control custom-checkbox mb-3">
													<input type="checkbox" className="custom-control-input" id="defaultPaymentMethod" />
													<label className="custom-control-label" htmlFor="defaultPaymentMethod">Default payment method</label>
												</div>
											</div>
										</div>
									</div>

									{/* <!-- Button --> */}
									<button className="btn btn-dark" type="submit">
										Add Card
									</button>

								</form>

							</div>
						</div>
					</div>
				</section>				<Footer />
			</div>
    )
  }
}