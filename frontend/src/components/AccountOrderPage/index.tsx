import React, {Component} from 'react'

import Navbar from "../Navbar"
import Footer from '../Footer'

import { Link } from "react-router-dom"

export default class AccountOrderPage extends Component{
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
										<Link className="list-group-item list-group-item-action dropright-toggle active" to="account-orders">
											Orders
										</Link>
										<Link className="list-group-item list-group-item-action dropright-toggle" to="account-wishlist">
											Wishlist
										</Link>
										<Link className="list-group-item list-group-item-action dropright-toggle" to="account-personal-info">
											Personal Info
										</Link>
										<Link className="list-group-item list-group-item-action dropright-toggle" to="account-address">
											Addresses
										</Link>
										<Link className="list-group-item list-group-item-action dropright-toggle" to="account-payment">
											Payment Methods
										</Link>
										<Link className="list-group-item list-group-item-action dropright-toggle" to="/login">
											Logout
										</Link>
									</div>
								</nav>


							</div>
							<div className="col-12 col-md-9 col-lg-8 offset-lg-1">

								{/* <!-- Order --> */}
								<div className="card card-lg mb-5 border">
									<div className="card-body pb-0">

										{/* <!-- Info --> */}
										<div className="card card-sm">
											<div className="card-body bg-light">
												<div className="row">
													<div className="col-6 col-lg-3">

														{/* <!-- Heading --> */}
														<h6 className="heading-xxxs text-muted">Order No:</h6>

														{/* <!-- Text --> */}
														<p className="mb-lg-0 font-size-sm font-weight-bold">
															673290789
														</p>

													</div>
													<div className="col-6 col-lg-3">

														{/* <!-- Heading --> */}
														<h6 className="heading-xxxs text-muted">Shipped date:</h6>

														{/* <!-- Text --> */}
														<p className="mb-lg-0 font-size-sm font-weight-bold">
															<time dateTime="2019-10-01">
																01 Oct, 2019
															</time>
														</p>

													</div>
													<div className="col-6 col-lg-3">

														{/* <!-- Heading --> */}
														<h6 className="heading-xxxs text-muted">Status:</h6>

														{/* <!-- Text --> */}
														<p className="mb-0 font-size-sm font-weight-bold">
															Awating Delivery
														</p>

													</div>
													<div className="col-6 col-lg-3">

														{/* <!-- Heading --> */}
														<h6 className="heading-xxxs text-muted">Order Amount:</h6>

														{/* <!-- Text --> */}
														<p className="mb-0 font-size-sm font-weight-bold">
															$259.00
														</p>

													</div>
												</div>
											</div>
										</div>

									</div>
									<div className="card-footer">

										{/* <!-- Heading --> */}
										<h6 className="mb-7">Order Items (3)</h6>

										{/* <!-- Divider --> */}
										<hr className="my-5" />

										{/* <!-- List group --> */}
										<ul className="list-group list-group-lg list-group-flush-y list-group-flush-x">
											<li className="list-group-item">
												<div className="row align-items-center">
													<div className="col-4 col-md-3 col-xl-2">

														{/* <!-- Image --> */}
														<a href="product.html"><img src="/assets/img/products/product-6.jpg" alt="..." className="img-fluid" /></a>

													</div>
													<div className="col">

														{/* <!-- Title --> */}
														<p className="mb-4 font-size-sm font-weight-bold">
															<a className="text-body" href="product.html">Cotton floral print Dress x 1</a> <br/>
															<span className="text-muted">$40.00</span>
														</p>

														{/* <!-- Text --> */}
														<div className="font-size-sm text-muted">
															Size: M <br/>
															Color: Red
														</div>

													</div>
												</div>
											</li>
											<li className="list-group-item">
												<div className="row align-items-center">
													<div className="col-4 col-md-3 col-xl-2">

														{/* <!-- Image --> */}
														<a href="product.html"><img src="/assets/img/products/product-10.jpg" alt="..." className="img-fluid" /></a>

													</div>
													<div className="col">

														{/* <!-- Title --> */}
														<p className="mb-4 font-size-sm font-weight-bold">
															<a className="text-body" href="product.html">Suede cross body Bag x 1</a> <br/>
															<span className="text-muted">$49.00</span>
														</p>

														{/* <!-- Text --> */}
														<div className="font-size-sm text-muted">
															Color: Brown
														</div>

													</div>
												</div>
											</li>

											<li className="list-group-item">
												<div className="row align-items-center">
													<div className="col-4 col-md-3 col-xl-2">

														{/* <!-- Image --> */}
														<a href="product.html"><img src="/assets/img/products/product-48.jpg" alt="..." className="img-fluid" /></a>

													</div>
													<div className="col">

														{/* <!-- Title --> */}
														<p className="mb-4 font-size-sm font-weight-bold">
															<a className="text-body" href="product.html">Sweatshirt with Pocket</a> <br/>
															<span className="text-muted">$39.00</span>
														</p>

														{/* <!-- Text --> */}
														<div className="font-size-sm text-muted">
															Size: L <br/>
															Color: Pink
														</div>

													</div>
												</div>
											</li>
										</ul>

									</div>
								</div>

								{/* <!-- Total --> */}
								<div className="card card-lg mb-5 border">
									<div className="card-body">

										{/* <!-- Heading --> */}
										<h6 className="mb-7">Order Total</h6>

										{/* <!-- List group --> */}
										<ul className="list-group list-group-sm list-group-flush-y list-group-flush-x">
											<li className="list-group-item d-flex">
												<span>Subtotal</span>
												<span className="ml-auto">$128.00</span>
											</li>
											<li className="list-group-item d-flex">
												<span>Tax</span>
												<span className="ml-auto">$0.00</span>
											</li>
											<li className="list-group-item d-flex">
												<span>Shipping</span>
												<span className="ml-auto">$8.00</span>
											</li>
											<li className="list-group-item d-flex font-size-lg font-weight-bold">
												<span>Total</span>
												<span className="ml-auto">$136.00</span>
											</li>
										</ul>

									</div>
								</div>

								{/* <!-- Details --> */}
								<div className="card card-lg border">
									<div className="card-body">

										{/* <!-- Heading --> */}
										<h6 className="mb-7">Billing & Shipping Details</h6>

										{/* <!-- Content --> */}
										<div className="row">
											<div className="col-12 col-md-4">

												{/* <!-- Heading --> */}
												<p className="mb-4 font-weight-bold">
													Billing Address:
												</p>

												<p className="mb-7 mb-md-0 text-gray-500">
													Daniel Robinson, <br/>
													3997 Raccoon Run, <br/>
													Kingston, 45644, <br/>
													United States, <br/>
													6146389574
												</p>

											</div>
											<div className="col-12 col-md-4">

												{/* <!-- Heading --> */}
												<p className="mb-4 font-weight-bold">
													Shipping Address:
												</p>

												<p className="mb-7 mb-md-0 text-gray-500">
													Daniel Robinson, <br/>
													3997 Raccoon Run, <br/>
													Kingston, 45644, <br/>
													United States, <br/>
													6146389574
												</p>

											</div>
											<div className="col-12 col-md-4">

												{/* <!-- Heading --> */}
												<p className="mb-4 font-weight-bold">
													Shipping Method:
												</p>

												<p className="mb-7 text-gray-500">
													Standart Shipping <br/>
													(5 - 7 days)
												</p>

												{/* <!-- Heading --> */}
												<p className="mb-4 font-weight-bold">
													Payment Method:
												</p>

												<p className="mb-0 text-gray-500">
													Debit Mastercard
												</p>

											</div>
										</div>

									</div>
								</div>

							</div>
						</div>
					</div>
				</section>				<Footer />
			</div>
    )
  }
}