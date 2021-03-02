import React, {Component} from 'react'

import Navbar from "../Navbar"
import Footer from '../Footer'

import { Link } from "react-router-dom"

export default class AccountPersonalInfoPage extends Component{
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
										<Link className="list-group-item list-group-item-action dropright-toggle" to="account-orders">
											Orders
										</Link>
										<Link className="list-group-item list-group-item-action dropright-toggle" to="account-wishlist">
											Wishlist
										</Link>
										<Link className="list-group-item list-group-item-action dropright-toggle active" to="account-personal-info">
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

								{/* <!-- Form --> */}
								<form>
									<div className="row">
										<div className="col-12 col-md-6">

											{/* <!-- Email --> */}
											<div className="form-group">
												<label htmlFor="accountFirstName">
													First Name *
												</label>
												<input className="form-control form-control-sm" id="accountFirstName" type="text" placeholder="First Name *" value="Daniel" required />
											</div>

										</div>
										<div className="col-12 col-md-6">

											{/* <!-- Email --> */}
											<div className="form-group">
												<label htmlFor="accountLastName">
													Last Name *
												</label>
												<input className="form-control form-control-sm" id="accountLastName" type="text" placeholder="Last Name *" value="Robinson" required />
											</div>

										</div>
										<div className="col-12">

											{/* <!-- Email --> */}
											<div className="form-group">
												<label htmlFor="accountEmail">
													Email Address *
												</label>
												<input className="form-control form-control-sm" id="accountEmail" type="email" placeholder="Email Address *" value="user@email.com" required />
											</div>

										</div>
										<div className="col-12 col-md-6">

											{/* <!-- Password --> */}
											<div className="form-group">
												<label htmlFor="accountPassword">
													Current Password *
												</label>
												<input className="form-control form-control-sm" id="accountPassword" type="password" placeholder="Current Password *" required />
											</div>

										</div>
										<div className="col-12 col-md-6">

											{/* <!-- Password --> */}
											<div className="form-group">
												<label htmlFor="AccountNewPassword">
													New Password *
												</label>
												<input className="form-control form-control-sm" id="AccountNewPassword" type="password" placeholder="New Password *" required />
											</div>

										</div>
										<div className="col-12 col-lg-6">

											{/* <!-- Birthday --> */}
											<div className="form-group">

												{/* <!-- Label --> */}
												<label>Date of Birth</label>

												{/* <!-- Inputs --> */}
												<div className="form-row">
													<div className="col-auto">

														{/* <!-- Date --> */}
														<label className="sr-only" htmlFor="accountDate">
															Date
														</label>
														<select className="custom-select custom-select-sm" id="accountDate">
															<option>10</option>
															<option>11</option>
															<option selected>12</option>
														</select>

													</div>
													<div className="col">

														{/* <!-- Date --> */}
														<label className="sr-only" htmlFor="accountMonth">
															Month
														</label>
														<select className="custom-select custom-select-sm" id="accountMonth">
															<option>January</option>
															<option selected>February</option>
															<option>March</option>
														</select>

													</div>
													<div className="col-auto">

														{/* <!-- Date --> */}
														<label className="sr-only" htmlFor="accountYear">
															Year
														</label>
														<select className="custom-select custom-select-sm" id="accountYear">
															<option>1990</option>
															<option selected>1991</option>
															<option>1992</option>
														</select>

													</div>
												</div>

											</div>

										</div>
										<div className="col-12 col-lg-6">

											{/* <!-- Gender --> */}
											<div className="form-group mb-8">
												<label>Gender</label>
												<div className="btn-group-toggle" data-toggle="buttons">
													<label className="btn btn-sm btn-outline-border active">
														<input type="radio" name="gender" defaultChecked /> Male
													</label>
													<label className="btn btn-sm btn-outline-border">
														<input type="radio" name="gender" /> Female
													</label>
												</div>
											</div>

										</div>
										<div className="col-12">

											{/* <!-- Button --> */}
											<button className="btn btn-dark" type="submit">Save Changes</button>

										</div>
									</div>
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