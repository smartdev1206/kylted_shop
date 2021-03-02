import React, {Component} from 'react'

import { Link } from "react-router-dom"
import Logo from "../../assets/img/logo.png";

export default class Navbar extends Component<{className?:string}>{

  render(){
    return (
			<div className="loginpage">
				{/* <!-- NAVBAR --> */}
				<div className="navbar navbar-topbar navbar-expand-xl navbar-light bg-light navbar-first">
					<div className="container">

						{/* <!-- Toggler --> */}
						<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#topbarCollapse" aria-controls="topbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
							<span className="navbar-toggler-icon"></span>
						</button>

						{/* <!-- Collapse --> */}
						<div className="collapse navbar-collapse" id="topbarCollapse">

							{/* <!-- Nav --> */}
							<ul className="nav nav-divided navbar-nav mr-auto">
								<li className="nav-item dropdown">

									{/* <!-- Toggle --> */}
									<a className="nav-link" href="#">
										<img className="mb-1 mr-1" src="/assets/img/flags/usa.svg" alt="..." /> United States
									</a>

									{/* <!-- Menu --> */}
									<div className="dropdown-menu minw-0">
										<a className="dropdown-item" href="#!">
											<img className="mb-1 mr-2" src="/assets/img/flags/usa.svg" alt="USA" />United States
										</a>
										<a className="dropdown-item" href="#!">
											<img className="mb-1 mr-2" src="/assets/img/flags/canada.svg" alt="Canada" />Canada
										</a>
										<a className="dropdown-item" href="#!">
											<img className="mb-1 mr-2" src="/assets/img/flags/germany.svg" alt="Germany" />Germany
										</a>
									</div>

								</li>
								<li className="nav-item dropdown">

									{/* <!-- Toggle --> */}
									<a className="nav-link" href="#">English</a>

									{/* <!-- Menu --> */}
									<div className="dropdown-menu minw-0">
										<a className="dropdown-item" href="#">English</a>
										<a className="dropdown-item" href="#">French</a>
										<a className="dropdown-item" href="#">German</a>
									</div>

								</li>
							</ul>

							{/* <!-- Nav --> */}
							<ul className="nav navbar-nav">
								<li className="nav-item">
									<a className="nav-link" href="/shipping-and-returns.html">Shipping</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="/faq.html">FAQ</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="/contact-us.html">Contact</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
				{/* <!-- NAVBAR --> */}
				<nav className={"navbar navbar-expand-lg navbar-light bg-white"+((this.props.className != null) ? " "+this.props.className : "")}>
					<div className="container">
						{/* <!-- Toggler --> */}
						<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
							<span className="navbar-toggler-icon"></span>
						</button>

						{/* <!-- Brand --> */}
						<div className="navbar-brand-div">
							<a className="navbar-brand" href="/">
								<img src={Logo} className="nav-logo"/>
							</a>
						</div>
						
						{/* <!-- Nav --> */}
						<ul className="navbar-nav flex-row navbar-icons-mobile">
							<li className="nav-item">
								<a className="nav-link" data-toggle="modal" href="#modalSearch">
									<i className="fe fe-search"></i>
								</a>
							</li>
							<li className="nav-item ml-lg-n4">
								<a className="nav-link" data-toggle="modal" href="#modalShoppingCart">
									<span>
										<i className="fe fe-shopping-bag"></i>
									</span> 
								</a>
							</li>
						</ul>


						{/* <!-- Collapse --> */}
						<div className="collapse navbar-collapse" id="navbarCollapse">

							{/* <!-- Nav --> */}
							<ul className="navbar-nav mx-auto navbar-logo-link-container">
								<li className="nav-item dropdown position-static">

									{/* <!-- Toggle --> */}
									<a className="nav-link" data-toggle="dropdown" href="#">New in</a>

									{/* <!-- Menu --> */}
									<div className="dropdown-menu" style={{width: "500px"}}>

										{/* <!-- Tabs --> */}
										<form className="mb-2 mb-lg-0 border-bottom-lg">
											<div className="container">
												<div className="row">
													<div className="col-12">

														{/* <!-- Nav --> */}
														<nav className="nav nav-tabs nav-overflow font-size-xs border-bottom border-bottom-lg-0">
															<a className="nav-link text-uppercase active" data-toggle="tab" href="#navTab">
																Women
															</a>
															<a className="nav-link text-uppercase" data-toggle="tab" href="#navTab">
																Men
															</a>
														</nav>

													</div>
												</div>
											</div>
										</form>

										{/* <!-- Tab content --> */}
										<div className="card card-sm">
											<div className="card-body">
												<div className="tab-content">
													<div className="tab-pane fade show active" id="navTab">
														<div className="container">
															<div className="row">
																<div className="col-12 col-md">

																	{/* <!-- Heading --> */}
																	<div className="mb-5 font-weight-bold">Shop By</div>

																	{/* <!-- Links --> */}
																	<ul className="list-styled mb-6 mb-md-0 font-size-sm">
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop?new_in=1&#season">Season</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop?new_in=1&this_week=1">This Week</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop?new_in=1&this_month=1">This Month</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop?new_in=1&color=[1,2,3,4,5,6,7,8,9,10,11]">Color</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop?new_in=1&last_arrivals=1">Last arrivals</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop?new_in=1&best_sellers=1">Best Sellers</a>
																		</li>
																	</ul>

																</div>
																<div className="col-8 d-none d-lg-block">

																	{/* <!-- Card --> */}
																	<div className="card">

																		{/* <!-- Image --> */}
																		<img className="card-img" src="/assets/img/products/product-110.jpg" alt="..." />

																		{/* <!-- Overlay --> */}
																		<div className="card-img-overlay bg-dark-0 bg-hover align-items-center">
																			<div className="text-center">
																				<a className="btn btn-white stretched-link" href="/shop">
																					Shop Sweaters <i className="fe fe-arrow-right ml-2"></i>
																				</a>
																			</div>
																		</div>

																	</div>

																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>

									</div>
								</li>
								<li className="nav-item dropdown position-static">

									{/* <!-- Toggle --> */}
									<a className="nav-link" data-toggle="dropdown" href="#">Shoes</a>

									{/* <!-- Menu --> */}
									<div className="dropdown-menu" style={{width: "80%"}}>

										{/* <!-- Tabs --> */}
										<form className="mb-2 mb-lg-0 border-bottom-lg">
											<div className="container">
												<div className="row">
													<div className="col-12">

														{/* <!-- Nav --> */}
														<nav className="nav nav-tabs nav-overflow font-size-xs border-bottom border-bottom-lg-0">
															<a className="nav-link text-uppercase active" data-toggle="tab" href="#navTab">
																Women
															</a>
															<a className="nav-link text-uppercase" data-toggle="tab" href="#navTab">
																Men
															</a>
														</nav>

													</div>
												</div>
											</div>
										</form>

										{/* <!-- Tab content --> */}
										<div className="card card-lg">
											<div className="card-body">
												<div className="tab-content">
													<div className="tab-pane fade show active" id="navTab">
														<div className="container">
															<div className="row">
																<div className="col-6 col-md">

																	{/* <!-- Heading --> */}
																	<div className="mb-5 font-weight-bold">Style</div>

																	{/* <!-- Links --> */}
																	<ul className="list-styled mb-6 mb-md-0 font-size-sm">
																		<li className="list-styled-item">
																			<a className="list-styled-link" href='/shop?category=[1]&style=["Ankle Boots"]'>Ankle Boots</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href='/shop?category=[1]&style=["Boots"]'>Boots</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href='/shop?category=[1]&style=["Flip Flops"]'>Flip Flops</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href='/shop?category=[1]&style=["Mocasins"]'>Mocasins</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href='/shop?category=[1]&style=["Pumps & Heels"]'>Pumps & Heels</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href='/shop?category=[1]&style=["Sandals"]'>Sandals</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href='/shop?category=[1]&style=["Wedges"]'>Wedges</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href='/shop?category=[1]'>All Style</a>
																		</li>
																	</ul>

																</div>
																<div className="col-6 col-md">

																	{/* <!-- Heading --> */}
																	<div className="mb-5 font-weight-bold">Featured Designers</div>

																	{/* <!-- Links --> */}
																	<ul className="list-styled mb-6 mb-md-0 font-size-sm">
																		<li className="list-styled-item">
																			<a className="list-styled-link" href='/shop?category=[1]&design=["Gucci"]'>Gucci</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href='/shop?category=[1]&design=["Trussardi"]'>Trussardi</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href='/shop?category=[1]&design=["Prada"]'>Prada</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href='/shop?category=[1]&design=["Valentino"]'>Valentino</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href='/shop?category=[1]&design=["Dc Martens"]'>Dc Martens</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href='/shop?category=[1]&design=["UGG"]'>UGG</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href='/shop?category=[1]'>All Designers</a>
																		</li>
																	</ul>

																</div>
																<div className="col-6 col-md">

																	{/* <!-- Heading --> */}
																	<div className="mb-5 font-weight-bold">Tags</div>

																	{/* <!-- Links --> */}
																	<ul className="list-styled mb-6 mb-md-0 font-size-sm">
																		<li className="list-styled-item">
																			<a className="list-styled-link" href='/shop?category=[1]&color=[1]'>Black</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href='/shop?category=[1]&material=["Leather"]'>Leather</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href='/shop?category=[1]&color=[5]'>Brown</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href='/shop?category=[1]&season=[2]'>Fall Winter</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href='/shop?category=[1]&color=[2]'>White</a>
																		</li>
																	</ul>

																</div>
																<div className="col-4 d-none d-lg-block">

																	{/* <!-- Card --> */}
																	<div className="card">

																		{/* <!-- Image --> */}
																		<img className="card-img" src="/assets/img/products/product-110.jpg" alt="..." />

																		{/* <!-- Overlay --> */}
																		<div className="card-img-overlay bg-dark-0 bg-hover align-items-center">
																			<div className="text-center">
																				<a className="btn btn-white stretched-link" href="/shop">
																					Shop Sweaters <i className="fe fe-arrow-right ml-2"></i>
																				</a>
																			</div>
																		</div>

																	</div>

																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>

									</div>
								</li>
								<li className="nav-item dropdown position-static">

									{/* <!-- Toggle --> */}
									<a className="nav-link" data-toggle="dropdown" href="#">Sneakers</a>

									{/* <!-- Menu --> */}
									<div className="dropdown-menu" style={{width: "80%"}}>

										{/* <!-- Tabs --> */}
										<form className="mb-2 mb-lg-0 border-bottom-lg">
											<div className="container">
												<div className="row">
													<div className="col-12">

														{/* <!-- Nav --> */}
														<nav className="nav nav-tabs nav-overflow font-size-xs border-bottom border-bottom-lg-0">
															<a className="nav-link text-uppercase active" data-toggle="tab" href="#navTab">
																Women
															</a>
															<a className="nav-link text-uppercase" data-toggle="tab" href="#navTab">
																Men
															</a>
														</nav>

													</div>
												</div>
											</div>
										</form>

										{/* <!-- Tab content --> */}
										<div className="card card-lg">
											<div className="card-body">
												<div className="tab-content">
													<div className="tab-pane fade show active" id="navTab">
														<div className="container">
															<div className="row">
																<div className="col-6 col-md">

																	{/* <!-- Heading --> */}
																	<div className="mb-5 font-weight-bold">Featured Designers</div>

																	{/* <!-- Links --> */}
																	<ul className="list-styled mb-6 mb-md-0 font-size-sm">
																		<li className="list-styled-item">
																			<a className="list-styled-link" href='/shop?category=[6]&design=["Nike"]'>Nike</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href='/shop?category=[6]&design=["Bikkembers"]'>Bikkembers</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href='/shop?category=[6]&design=["Adidas"]'>Adidas</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href='/shop?category=[6]&design=["Prada"]'>Prada</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href='/shop?category=[6]&design=["Saucony"]'>Saucony</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href='/shop?category=[6]'>All Designers</a>
																		</li>
																	</ul>

																</div>
																<div className="col-6 col-md">

																	{/* <!-- Heading --> */}
																	<div className="mb-5 font-weight-bold">Tags</div>

																	{/* <!-- Links --> */}
																	<ul className="list-styled mb-6 mb-md-0 font-size-sm">
																		<li className="list-styled-item">
																			<a className="list-styled-link" href='/shop?category=[6]&color=[1]'>Black</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href='/shop?category=[6]&season=[2]'>Fall Winter</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href='/shop?category=[6]&color=[2]'>White</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href='/shop?category=[6]&this_year=1'>All Year</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href='/shop?category=[6]&last_arrivals=1'>New In</a>	
																		</li>
																	</ul>

																</div>
																<div className="col-4 d-none d-lg-block">

																	{/* <!-- Card --> */}
																	<div className="card">

																		{/* <!-- Image --> */}
																		<img className="card-img" src="/assets/img/products/product-110.jpg" alt="..." />

																		{/* <!-- Overlay --> */}
																		<div className="card-img-overlay bg-dark-0 bg-hover align-items-center">
																			<div className="text-center">
																				<a className="btn btn-white stretched-link" href="/shop">
																					Shop Sweaters <i className="fe fe-arrow-right ml-2"></i>
																				</a>
																			</div>
																		</div>

																	</div>

																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>

									</div>
								</li>
								<li className="nav-item dropdown position-static">

									{/* <!-- Toggle --> */}
									<a className="nav-link" data-toggle="dropdown" href="#">Bags</a>

									{/* <!-- Menu --> */}
									<div className="dropdown-menu" style={{width: "80%"}}>

										{/* <!-- Tabs --> */}
										<form className="mb-2 mb-lg-0 border-bottom-lg">
											<div className="container">
												<div className="row">
													<div className="col-12">

														{/* <!-- Nav --> */}
														<nav className="nav nav-tabs nav-overflow font-size-xs border-bottom border-bottom-lg-0">
															<a className="nav-link text-uppercase active" data-toggle="tab" href="#navTab">
																Women
															</a>
															<a className="nav-link text-uppercase" data-toggle="tab" href="#navTab">
																Men
															</a>
														</nav>

													</div>
												</div>
											</div>
										</form>

										{/* <!-- Tab content --> */}
										<div className="card card-lg">
											<div className="card-body">
												<div className="tab-content">
													<div className="tab-pane fade show active" id="navTab">
														<div className="container">
															<div className="row">
																<div className="col-6 col-md">

																	{/* <!-- Heading --> */}
																	<div className="mb-5 font-weight-bold">Style</div>

																	{/* <!-- Links --> */}
																	<ul className="list-styled mb-6 mb-md-0 font-size-sm">
																		<li className="list-styled-item">
																			<a className="list-styled-link" href='/shop?category=[4]&style=["Clutch Bags"]'>Clutch Bags</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href='/shop?category=[4]&style=["Handbags"]'>Handbags</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href='/shop?category=[4]&style=["Shoulder bags"]'>Shoulder bags</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href='/shop?category=[4]&style=["Shopping bags"]'>Shopping bags</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href='/shop?category=[4]&style=["Crossbody bags"]'>Crossbody bags</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href='/shop?category=[4]'>All Style</a>
																		</li>
																	</ul>

																</div>
																<div className="col-6 col-md">

																	{/* <!-- Heading --> */}
																	<div className="mb-5 font-weight-bold">Featured Designers</div>

																	{/* <!-- Links --> */}
																	<ul className="list-styled mb-6 mb-md-0 font-size-sm">
																		<li className="list-styled-item">
																			<a className="list-styled-link" href='/shop?category=[4]&design=["Prada"]'>Prada</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href='/shop?category=[4]&design=["Valentino"]'>Valentino</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href='/shop?category=[4]&design=["Trussardi"]'>Trussardi</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href='/shop?category=[4]&design=["Gucci"]'>Gucci</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href='/shop?category=[4]&design=["Michael Kors"]'>Michael Kors</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href='/shop?category=[4]&design=["Furla"]'>Furla</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href='/shop?category=[4]'>All Designers</a>
																		</li>
																	</ul>

																</div>
																<div className="col-6 col-md">

																	{/* <!-- Heading --> */}
																	<div className="mb-5 font-weight-bold">Tags</div>

																	{/* <!-- Links --> */}
																	<ul className="list-styled mb-6 mb-md-0 font-size-sm">
																		<li className="list-styled-item">
																			<a className="list-styled-link" href='/shop?category=[4]&color=[1]'>Black</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href='/shop?category=[4]&material=["Leather"]'>Leather</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href='/shop?category=[4]&color=[4]'>Red</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href='/shop?category=[4]&color=[12]'>Gold</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href='/shop?category=[4]&color=[13]'>Silver</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href='/shop?category=[4]&color=[14]'>Navy</a>
																		</li>
																	</ul>
																</div>
																<div className="col-4 d-none d-lg-block">

																	{/* <!-- Card --> */}
																	<div className="card">

																		{/* <!-- Image --> */}
																		<img className="card-img" src="/assets/img/products/product-110.jpg" alt="..." />

																		{/* <!-- Overlay --> */}
																		<div className="card-img-overlay bg-dark-0 bg-hover align-items-center">
																			<div className="text-center">
																				<a className="btn btn-white stretched-link" href="/shop">
																					Shop Sweaters <i className="fe fe-arrow-right ml-2"></i>
																				</a>
																			</div>
																		</div>

																	</div>

																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>

									</div>
								</li>
								<li className="nav-item dropdown position-static">

									{/* <!-- Toggle --> */}
									<a className="nav-link" data-toggle="dropdown" href="#">Accessories</a>

									{/* <!-- Menu --> */}
									<div className="dropdown-menu" style={{width: "80%"}}>

										{/* <!-- Tabs --> */}
										<form className="mb-2 mb-lg-0 border-bottom-lg">
											<div className="container">
												<div className="row">
													<div className="col-12">

														{/* <!-- Nav --> */}
														<nav className="nav nav-tabs nav-overflow font-size-xs border-bottom border-bottom-lg-0">
															<a className="nav-link text-uppercase active" data-toggle="tab" href="#navTab">
																Women
															</a>
															<a className="nav-link text-uppercase" data-toggle="tab" href="#navTab">
																Men
															</a>
														</nav>

													</div>
												</div>
											</div>
										</form>

										{/* <!-- Tab content --> */}
										<div className="card card-lg">
											<div className="card-body">
												<div className="tab-content">
													<div className="tab-pane fade show active" id="navTab">
														<div className="container">
															<div className="row">
																<div className="col-6 col-md">

																	{/* <!-- Heading --> */}
																	<div className="mb-5 font-weight-bold">Style</div>

																	{/* <!-- Links --> */}
																	<ul className="list-styled mb-6 mb-md-0 font-size-sm">
																		<li className="list-styled-item">
																			<a className="list-styled-link" href='/shop?category=[7]&style=["Sunglasses"]'>Sunglasses</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href='/shop?category=[7]&style=["Wallet"]'>Wallet</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href='/shop?category=[7]&style=["Watches"]'>Watches</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href='/shop?category=[7]&style=["Key chain"]'>Key chain</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href='/shop?category=[7]'>All Style</a>
																		</li>
																	</ul>

																</div>
																<div className="col-6 col-md">

																	{/* <!-- Heading --> */}
																	<div className="mb-5 font-weight-bold">Featured Designers</div>

																	{/* <!-- Links --> */}
																	<ul className="list-styled mb-6 mb-md-0 font-size-sm">
																		<li className="list-styled-item">
																			<a className="list-styled-link" href='/shop?category=[7]&design=["Prada"]'>Prada</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href='/shop?category=[7]&design=["Balenciaga"]'>Balenciaga</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href='/shop?category=[7]&design=["Dior"]'>Dior</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href='/shop?category=[7]&design=["Ermenegildo Zegna"]'>Ermenegildo Zegna</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href='/shop?category=[7]&design=["Dsquared2"]'>Dsquared2</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href='/shop?category=[7]&design=["RayBan"]'>RayBan</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href='/shop?category=[7]'>All Designers</a>
																		</li>
																	</ul>

																</div>
																<div className="col-6 col-md">

																	{/* <!-- Heading --> */}
																	<div className="mb-5 font-weight-bold">Tags</div>

																	{/* <!-- Links --> */}
																	<ul className="list-styled mb-6 mb-md-0 font-size-sm">
																		<li className="list-styled-item">
																			<a className="list-styled-link" href='/shop?category=[7]&color=[1]'>Black</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href='/shop?category=[7]&color=[12]'>Gold</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href='/shop?category=[7]&color=[2]'>White</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href='/shop?category=[7]&color=[13]'>Silver</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href='/shop?category=[7]&color=[14]'>Navy</a>
																		</li>
																	</ul>
																</div>
																<div className="col-4 d-none d-lg-block">

																	{/* <!-- Card --> */}
																	<div className="card">

																		{/* <!-- Image --> */}
																		<img className="card-img" src="/assets/img/products/product-110.jpg" alt="..." />

																		{/* <!-- Overlay --> */}
																		<div className="card-img-overlay bg-dark-0 bg-hover align-items-center">
																			<div className="text-center">
																				<a className="btn btn-white stretched-link" href="/shop">
																					Shop Sweaters <i className="fe fe-arrow-right ml-2"></i>
																				</a>
																			</div>
																		</div>

																	</div>

																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>

									</div>
								</li>
								<li className="nav-item dropdown position-static">

									{/* <!-- Toggle --> */}
									<a className="nav-link" data-toggle="dropdown" href="#" style={{color: "#FF0000"}}>Sales</a>

									{/* <!-- Menu --> */}
									<div className="dropdown-menu" style={{width: "80%"}}>

										{/* <!-- Tabs --> */}
										<form className="mb-2 mb-lg-0 border-bottom-lg">
											<div className="container">
												<div className="row">
													<div className="col-12">

														{/* <!-- Nav --> */}
														<nav className="nav nav-tabs nav-overflow font-size-xs border-bottom border-bottom-lg-0">
															<a className="nav-link text-uppercase active" data-toggle="tab" href="#navTab">
																Women
															</a>
															<a className="nav-link text-uppercase" data-toggle="tab" href="#navTab">
																Men
															</a>
														</nav>

													</div>
												</div>
											</div>
										</form>

										{/* <!-- Tab content --> */}
										<div className="card card-lg">
											<div className="card-body">
												<div className="tab-content">
													<div className="tab-pane fade show active" id="navTab">
														<div className="container">
															<div className="row">
																<div className="col-6 col-md">

																	{/* <!-- Heading --> */}
																	<div className="mb-5 font-weight-bold">Featured Designers</div>

																	{/* <!-- Links --> */}
																	<ul className="list-styled mb-6 mb-md-0 font-size-sm">
																		<li className="list-styled-item">
																			<a className="list-styled-link" href='/shop?best_sellers=1&design=["Timberland"]'>Timberland</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href='/shop?best_sellers=1&design=["Balenciaga"]'>Balenciaga</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href='/shop?best_sellers=1&design=["UGG"]'>UGG</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href='/shop?best_sellers=1&design=["Fila"]'>Fila</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href='/shop?best_sellers=1&design=["Love Moschino"]'>Love Moschino</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href='/shop?best_sellers=1'>All Designers</a>
																		</li>
																	</ul>

																</div>
																<div className="col-6 col-md">

																	{/* <!-- Heading --> */}
																	<div className="mb-5 font-weight-bold">Tags</div>

																	{/* <!-- Links --> */}
																	<ul className="list-styled mb-6 mb-md-0 font-size-sm">
																		<li className="list-styled-item">
																			<a className="list-styled-link" href='/shop?best_sellers=1&color=[1]'>Black</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href='/shop?best_sellers=1&season=[2]'>Fall Winter</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href='/shop?best_sellers=1&color=[2]'>White</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href='/shop?best_sellers=1&this_year=1'>All Year</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href='/shop?best_sellers=1&last_arrivals=1'>New In</a>	
																		</li>
																	</ul>

																</div>
																<div className="col-4 d-none d-lg-block">

																	{/* <!-- Card --> */}
																	<div className="card">

																		{/* <!-- Image --> */}
																		<img className="card-img" src="/assets/img/products/product-110.jpg" alt="..." />

																		{/* <!-- Overlay --> */}
																		<div className="card-img-overlay bg-dark-0 bg-hover align-items-center">
																			<div className="text-center">
																				<a className="btn btn-white stretched-link" href="/shop">
																					Shop Sweaters <i className="fe fe-arrow-right ml-2"></i>
																				</a>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</li>
							</ul>

							{/* <!-- Nav --> */}
							<ul className="navbar-nav flex-row navbar-icons-desktop">
								<li className="nav-item">
									<a className="nav-link" data-toggle="modal" href="#modalSearch">
										<i className="fe fe-search"></i>
									</a>
								</li>
								<li className="nav-item ml-lg-n4">
								<Link className="nav-link" to="/account-orders">
									<i className="fe fe-user"></i>
								</Link>
								</li>
								<li className="nav-item ml-lg-n4">
									<Link className="nav-link" to="/account-wishlist">
										<i className="fe fe-star"></i>
									</Link>
								</li>
								<li className="nav-item ml-lg-n4">
									<a className="nav-link" data-toggle="modal" href="#modalShoppingCart">
										<span>
											<i className="fe fe-shopping-bag"></i>
										</span> 
									</a>
								</li>
							</ul>

						</div>

					</div>
				</nav>
			</div>
    )
  }
}