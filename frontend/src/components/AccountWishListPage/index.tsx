import React, {Component} from 'react'

import Navbar from "../Navbar"
import Footer from '../Footer'

import { Link } from "react-router-dom"

export default class AccountWishListPage extends Component{
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
										<Link className="list-group-item list-group-item-action dropright-toggle active" to="account-wishlist">
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

								{/* <!-- Products --> */}
								<div className="row">

									{/* <!-- Item --> */}
									<div className="col-6 col-md-4">
										<div className="card mb-7">

											{/* <!-- Image --> */}
											<div className="card-img">

												{/* <!-- Action --> */}
												<button className="btn btn-xs btn-circle btn-white-primary card-action card-action-right">
													<i className="fe fe-x"></i>
												</button>

												{/* <!-- Button --> */}
												<button className="btn btn-xs btn-block btn-dark card-btn" data-toggle="modal" data-target="#modalProduct">
													<i className="fe fe-eye mr-2 mb-1"></i> Quick View
												</button>

												{/* <!-- Image --> */}
												<img className="card-img-top" src="/assets/img/products/product-6.jpg" alt="..." />

											</div>

											{/* <!-- Body --> */}
											<div className="card-body font-weight-bold text-center">
												<a className="text-body" href="product.html">Cotton floral print Dress</a> <br/>
												<span className="text-muted">$40.00</span>
											</div>

										</div>
									</div>

									{/* <!-- Item --> */}
									<div className="col-6 col-md-4">
										<div className="card mb-7">

											{/* <!-- Image --> */}
											<div className="card-img">

												{/* <!-- Action --> */}
												<button className="btn btn-xs btn-circle btn-white-primary card-action card-action-right">
													<i className="fe fe-x"></i>
												</button>

												{/* <!-- Badge --> */}
												<span className="badge badge-dark card-badge card-badge-left text-uppercase">
													Sale
												</span>

												{/* <!-- Button --> */}
												<button className="btn btn-xs btn-block btn-dark card-btn" data-toggle="modal" data-target="#modalProduct">
													<i className="fe fe-eye mr-2 mb-1"></i> Quick View
												</button>

												{/* <!-- Image --> */}
												<img className="card-img-top" src="/assets/img/products/product-10.jpg" alt="..." />

											</div>

											{/* <!-- Body --> */}
											<div className="card-body font-weight-bold text-center">
												<a className="text-body" href="product.html">Suede cross body Bag</a> <br/>
												<span>
													<span className="font-size-xs text-gray-350 text-decoration-line-through">$85.00</span>
													<span className="text-primary">$49.00</span>
												</span>
											</div>

										</div>
									</div>

									{/* <!-- Item --> */}
									<div className="col-6 col-md-4">
										<div className="card mb-7">

											{/* <!-- Image --> */}
											<div className="card-img">

												{/* <!-- Action --> */}
												<button className="btn btn-xs btn-circle btn-white-primary card-action card-action-right">
													<i className="fe fe-x"></i>
												</button>

												{/* <!-- Button --> */}
												<button className="btn btn-xs btn-block btn-dark card-btn" data-toggle="modal" data-target="#modalProduct">
													<i className="fe fe-eye mr-2 mb-1"></i> Quick View
												</button>

												{/* <!-- Image --> */}
												<img className="card-img-top" src="/assets/img/products/product-32.jpg" alt="..." />

											</div>

											{/* <!-- Body --> */}
											<div className="card-body font-weight-bold text-center">
												<a className="text-reset" href="product.html">Cotton leaf print Shirt</a>
												<span className="text-muted">$65.00</span>
											</div>

										</div>
									</div>

									{/* <!-- Item --> */}
									<div className="col-6 col-md-4">
										<div className="card mb-7">

											{/* <!-- Image --> */}
											<div className="card-img">

												{/* <!-- Action --> */}
												<button className="btn btn-xs btn-circle btn-white-primary card-action card-action-right">
													<i className="fe fe-x"></i>
												</button>

												{/* <!-- Button --> */}
												<button className="btn btn-xs btn-block btn-dark card-btn" data-toggle="modal" data-target="#modalProduct">
													<i className="fe fe-eye mr-2 mb-1"></i> Quick View
												</button>

												{/* <!-- Image --> */}
												<img className="card-img-top" src="/assets/img/products/product-7.jpg" alt="..." />

											</div>

											{/* <!-- Body --> */}
											<div className="card-body font-weight-bold text-center">
												<a className="text-body" href="product.html">Leather Sneakers</a> <br/>
												<a className="text-primary" href="#">Select Options</a>
											</div>

										</div>
									</div>

									{/* <!-- Item --> */}
									<div className="col-6 col-md-4">
										<div className="card mb-7">

											{/* <!-- Image --> */}
											<div className="card-img">

												{/* <!-- Action --> */}
												<button className="btn btn-xs btn-circle btn-white-primary card-action card-action-right">
													<i className="fe fe-x"></i>
												</button>

												{/* <!-- Button --> */}
												<button className="btn btn-xs btn-block btn-dark card-btn" data-toggle="modal" data-target="#modalProduct">
													<i className="fe fe-eye mr-2 mb-1"></i> Quick View
												</button>

												{/* <!-- Image --> */}
												<img className="card-img-top" src="/assets/img/products/product-11.jpg" alt="..." />

											</div>

											{/* <!-- Body --> */}
											<div className="card-body font-weight-bold text-center">
												<a className="text-body" href="product.html">Another fine dress</a> <br/>
												<span className="text-muted">$99.00</span>
											</div>

										</div>
									</div>

								</div>

								{/* <!-- Pagination --> */}
								<nav className="d-flex justify-content-center justify-content-md-end">
									<ul className="pagination pagination-sm text-gray-400">
										<li className="page-item">
											<a className="page-link page-link-arrow" href="#">
												<i className="fa fa-caret-left"></i>
											</a>
										</li>
										<li className="page-item active">
											<a className="page-link" href="#">1</a>
										</li>
										<li className="page-item">
											<a className="page-link" href="#">2</a>
										</li>
										<li className="page-item">
											<a className="page-link" href="#">3</a>
										</li>
										<li className="page-item">
											<a className="page-link" href="#">4</a>
										</li>
										<li className="page-item">
											<a className="page-link" href="#">5</a>
										</li>
										<li className="page-item">
											<a className="page-link" href="#">6</a>
										</li>
										<li className="page-item">
											<a className="page-link page-link-arrow" href="#">
												<i className="fa fa-caret-right"></i>
											</a>
										</li>
									</ul>
								</nav>

							</div>
						</div>
					</div>
				</section>
				<Footer />
			</div>
    )
  }
}