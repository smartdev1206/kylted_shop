import React, {Component} from 'react'

import Navbar from "../Navbar"
import Footer from '../Footer'

import { Link } from "react-router-dom"

export default class AccountAddressPage extends Component{
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

								<nav className="mb-10 mb-md-0">
									<div className="list-group list-group-sm list-group-strong list-group-flush-x">
										<Link className="list-group-item list-group-item-action dropright-toggle" to="account-orders">
											Orders
										</Link>
										<Link className="list-group-item list-group-item-action dropright-toggle" to="account-wishlist">
											Wishlist
										</Link>
										<Link className="list-group-item list-group-item-action dropright-toggle" to="account-personal-info">
											Personal Info
										</Link>
										<Link className="list-group-item list-group-item-action dropright-toggle active" to="account-address">
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
								<div className="row">
									<div className="col-12 col-lg-6">

										{/* <!-- Card --> */}
										<div className="card card-lg bg-light mb-8">
											<div className="card-body">

												{/* <!-- Heading --> */}
												<h6 className="mb-6">
													Shipping Address
												</h6>

												{/* <!-- Text --> */}
												<p className="text-muted mb-0">
													Daniel Robinson <br/>
													3997 Raccoon Run <br/>
													Kingston <br/>
													45644 <br/>
													United States <br/>
													6146389574
												</p>

												{/* <!-- Action --> */}
												<div className="card-action card-action-right">

													{/* <!-- Button --> */}
													<Link className="btn btn-xs btn-circle btn-white-primary" to="account-address-edit">
														<i className="fe fe-edit-2"></i>
													</Link>

													{/* <!-- Button --> */}
													<button className="btn btn-xs btn-circle btn-white-primary">
														<i className="fe fe-x"></i>
													</button>

												</div>

											</div>
										</div>

									</div>
									<div className="col-12 col-lg-6">

										{/* <!-- Card --> */}
										<div className="card card-lg bg-light mb-8">
											<div className="card-body">

												{/* <!-- Heading --> */}
												<h6 className="mb-6">
													Billing Address
												</h6>

												{/* <!-- Text --> */}
												<p className="text-muted mb-0">
													Daniel Robinson <br/>
													3997 Raccoon Run <br/>
													Kingston <br/>
													45644 <br/>
													United States <br/>
													6146389574
												</p>

												{/* <!-- Action --> */}
												<div className="card-action card-action-right">

													{/* <!-- Button --> */}
													<Link className="btn btn-xs btn-circle btn-white-primary" to="account-address-edit">
														<i className="fe fe-edit-2"></i>
													</Link>

													{/* <!-- Button --> */}
													<button className="btn btn-xs btn-circle btn-white-primary">
														<i className="fe fe-x"></i>
													</button>

												</div>

											</div>
										</div>

									</div>
									<div className="col-12">

										{/* <!-- Button --> */}
										<Link className="btn btn-block btn-lg btn-outline-border" to="account-address-edit">
											Add Address <i className="fe fe-plus"></i>
										</Link>

									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<Footer />
			</div>
    )
  }
}