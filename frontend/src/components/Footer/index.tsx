import React, {Component} from 'react'
import Logo from "../../assets/img/logo_white.png";

export default class Footer extends Component{
  render(){
    return (
			<div className="footer">
				{/* <!-- FOOTER --> */}
				<footer className="bg-dark bg-cover @@classList">
					<div className="py-12 border-bottom border-gray-700">
						<div className="container">
							<div className="row">
								<div className="col-12 col-md-3">

									{/* <!-- Heading --> */}
									<img src={Logo} className="nav-logo mb-6"/>

									{/* <!-- Social --> */}
									<ul className="list-unstyled list-inline mb-7 mb-md-0 text-gray-350">
										<li className="list-inline-item">
											<a href="#!" className="text-reset">
												<i className="fab fa-facebook-f"></i>
											</a>
										</li>
										<li className="list-inline-item">
											<a href="#!" className="text-reset">
												<i className="fab fa-youtube"></i>
											</a>
										</li>
										<li className="list-inline-item">
											<a href="#!" className="text-reset">
												<i className="fab fa-twitter"></i>
											</a>
										</li>
										<li className="list-inline-item">
											<a href="#!" className="text-reset">
												<i className="fab fa-instagram"></i>
											</a>
										</li>
										<li className="list-inline-item">
											<a href="#!" className="text-reset">
												<i className="fab fa-medium"></i>
											</a>
										</li>
									</ul>

								</div>
								<div className="col-6 col-sm">

									{/* <!-- Heading --> */}
									<h6 className="heading-xxs mb-4 text-white">
										Support
									</h6>

									{/* <!-- Links --> */}
									<ul className="list-unstyled mb-7 mb-sm-0">
										<li>
											<a className="text-gray-300" href="/contact-us.html">Contact Us</a>
										</li>
										<li>
											<a className="text-gray-300" href="/faq.html">FAQs</a>
										</li>
										<li>
											<a className="text-gray-300" data-toggle="modal" href="#modalSizeChart">Size Guide</a>
										</li>
										<li>
											<a className="text-gray-300" href="/shipping-and-returns.html">Shipping & Returns</a>
										</li>
									</ul>

								</div>
								<div className="col-6 col-sm">

									{/* <!-- Heading --> */}
									<h6 className="heading-xxs mb-4 text-white">
										Shop
									</h6>

									{/* <!-- Links --> */}
									<ul className="list-unstyled mb-7 mb-sm-0">
										<li>
											<a className="text-gray-300" href="/shop.html">Men's Shopping</a>
										</li>
										<li>
											<a className="text-gray-300" href="/shop.html">Women's Shopping</a>
										</li>
										<li>
											<a className="text-gray-300" href="/shop.html">Discounts</a>
										</li>
									</ul>

								</div>
								<div className="col-6 col-sm">

									{/* <!-- Heading --> */}
									<h6 className="heading-xxs mb-4 text-white">
										Company
									</h6>

									{/* <!-- Links --> */}
									<ul className="list-unstyled mb-0">
										<li>
											<a className="text-gray-300" href="/about.html">Our Story</a>
										</li>
										<li>
											<a className="text-gray-300" href="#!">Careers</a>
										</li>
										<li>
											<a className="text-gray-300" href="#!">Terms & Conditions</a>
										</li>
										<li>
											<a className="text-gray-300" href="#!">Privacy & Cookie policy</a>
										</li>
									</ul>

								</div>
								<div className="col-6 col-sm">

									{/* <!-- Heading --> */}
									<h6 className="heading-xxs mb-4 text-white">
										Contact
									</h6>

									{/* <!-- Links --> */}
									<ul className="list-unstyled mb-0">
										<li>
											<a className="text-gray-300" href="#!">1-202-555-0105</a>
										</li>
										<li>
											<a className="text-gray-300" href="#!">1-202-555-0106</a>
										</li>
										<li>
											<a className="text-gray-300" href="#!">help@shopper.com</a>
										</li>
									</ul>

								</div>
							</div>
						</div>
					</div>
					<div className="py-6">
						<div className="container">
							<div className="row">
								<div className="col">

									{/* <!-- Copyright --> */}
									<p className="mb-3 mb-md-0 font-size-xxs text-muted">
										© 2019 All rights reserved. Designed by Unvab.
									</p>

								</div>
								<div className="col-auto">

									{/* <!-- Payment methods --> */}
									<img className="footer-payment" src="/assets/img/payment/mastercard.svg" alt="..." />
									<img className="footer-payment" src="/assets/img/payment/visa.svg" alt="..." />
									<img className="footer-payment" src="/assets/img/payment/amex.svg" alt="..." />
									<img className="footer-payment" src="/assets/img/payment/paypal.svg" alt="..." />
									<img className="footer-payment" src="/assets/img/payment/maestro.svg" alt="..." />
									<img className="footer-payment" src="/assets/img/payment/klarna.svg" alt="..." />

								</div>
							</div>
						</div>
					</div>
				</footer>
			</div>
    )
  }
}