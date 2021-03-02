import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'

import Navbar from "../Navbar"
import Footer from '../Footer'
import Geral from '../../app/controls/Geral'
import Product from '../../app/models/Product'
import ShopProductCard from '../ShopProductCard'

// import { Link } from "react-router-dom"

export default class ProductPage extends Component{
	product: Product;
	products: Array<Product>;
	
	constructor(props:any){
		super(props);
		let back = () => window.location.replace("/404");
		let id_query = window.location.pathname.split("/")[2];
		let id:string = id_query;
		let products: Array<Product> = require("../../data/products.json");
		let product: Product = require("../../data/products.json").find((p: Product) => p.id == id);
		
		if(product == null || products == null) back();
		this.product = product;

		// set Randow numbers
		let arr = Geral.getRandomNumber(0, 8, 8).map((n:number) => n - 1);
		console.log(arr);
		products = [
			products[arr[0]],
			products[arr[1]],
			products[arr[2]],
			products[arr[3]],
			products[arr[4]],
			products[arr[5]],
			products[arr[6]],
			products[arr[7]],
		];

		this.products = products;
	}

	renderBadge(){
		// if(this.product != null){
		// 	if(this.product.is_new === true){
		// 		return (
		// 			<div className="badge badge-white card-badge card-badge-left text-uppercase">
		// 				New
		// 			</div>
		// 		)
		// 	}else if(this.product.is_sale === true){
		// 		return (
		// 			<div className="badge badge-primary card-badge text-uppercase">
		// 				Sale
		// 			</div>
		// 		)
		// 	}
		// }
		return "";
	}

	renderSliderImgs(){
		// if(this.product != null){
		// 	if(this.product.pictures != null){
		// 		let elements:Array<JSX.Element> = []
		// 		this.product.pictures.forEach((pic:string, index:number) => {
		// 			elements.push((
		// 				<a href={"/assets/img/products/"+pic} data-fancybox key={index}>
		// 					<img src={"/assets/img/products/"+pic} className="card-img-top" />
		// 				</a>
		// 			))
		// 		})

		// 		return elements
		// 	}
		// }
				let elements:Array<JSX.Element> = [
					(
						<a href={"/assets/img/products/product-11.jpg"} data-fancybox key={1}>
							<img src={"/assets/img/products/product-11.jpg"} className="card-img-top" />
						</a>
					),
					(
						<a href={"/assets/img/products/product-10.jpg"} data-fancybox key={2}>
							<img src={"/assets/img/products/product-10.jpg"} className="card-img-top" />
						</a>
					),
				]

				return elements
		return "";
	}

	renderSliderImgsBottom(){
		// if(this.product != null){
		// 	if(this.product.pictures != null){
		// 		let elements:Array<JSX.Element> = []
		// 		this.product.pictures.forEach((pic:string, index:number) => {
		// 			elements.push((
		// 				<div className="col-12 px-2" style={{maxWidth: "113px"}} key={index}>
		// 					{/* <!-- Image --> */}
		// 					<div className="embed-responsive embed-responsive-1by1 bg-cover" style={{backgroundImage: "url(/assets/img/products/"+pic+")"}}></div>
		// 				</div>
		// 			))
		// 		})

		// 		return elements
		// 	}
		// }
		let elements:Array<JSX.Element> = [
			(
				<div className="col-12 px-2" style={{maxWidth: "113px"}} key={1}>
					{/* <!-- Image --> */}
					<div className="embed-responsive embed-responsive-1by1 bg-cover" style={{backgroundImage: "url(/assets/img/products/product-11.jpg)"}}></div>
				</div>
			)
		]

		return elements
		return "";
	}

	renderPrice(){
		// if(this.product != null){
		// 	if(this.product.old_price != null){
		// 		return (
		// 			<div className="mb-7">
		// 				<span className="font-size-lg font-weight-bold text-gray-350 text-decoration-line-through">${this.product.old_price}</span>
		// 				<span className="ml-1 font-size-h5 font-weight-bolder text-primary">${this.product.price}</span>
		// 				<span className="font-size-sm ml-1">(In Stock)</span>
		// 			</div>
		// 		);
		// 	}else{
		// 		return (
		// 			<div className="mb-7">
		// 				<span className="ml-1 font-size-h5 font-weight-bolder text-primary">${this.product.price}</span>
		// 				<span className="font-size-sm ml-1">(In Stock)</span>
		// 			</div>
		// 		);
		// 	}
		// }
		return (
			<div className="mb-7">
				<span className="ml-1 font-size-h5 font-weight-bolder text-primary">${this.product.sell_price}</span>
				<span className="font-size-sm ml-1">(In Stock)</span>
			</div>
		);
	}

	componentDidMount(){
		// Geral.loadScripts();
	}

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
									<li className="breadcrumb-item">
										<a className="text-gray-400" href="shop.html">Women's Shoes</a>
									</li>
									<li className="breadcrumb-item active">
										Leather Sneakers
									</li>
								</ol>

							</div>
						</div>
					</div>
				</nav>

				{/* <!-- PRODUCT --> */}
				<section>
					<div className="container">
						<div className="row">
							<div className="col-12">
								<div className="row">
									<div className="col-12 col-md-6">

										{/* <!-- Card --> */}
										<div className="card">

											{/* <!-- Badge --> */}
											{this.renderBadge()}

											{/* <!-- Slider --> */}
											<div className="mb-4" data-flickity='{"draggable": false, "fade": true}' id="productSlider">

												{/* <!-- Item --> */}
												{this.renderSliderImgs()}

											</div>

										</div>

										{/* <!-- Slider --> */}
										<div className="flickity-nav mx-n2 mb-10 mb-md-0" data-flickity='{"asNavFor": "#productSlider", "contain": true, "wrapAround": false}'>

											{/* <!-- Item --> */}
											{this.renderSliderImgsBottom()}

										</div>

									</div>
									<div className="col-12 col-md-6 pl-lg-10">

										{/* <!-- Header --> */}
										<div className="row mb-1">
											<div className="col">

												{/* <!-- Preheading --> */}
												<a className="text-muted" href="/shop">{this.product.Categorie}</a>

											</div>
										</div>

										{/* <!-- Heading --> */}
										<h3 className="mb-2">{this.product.name}</h3>

										{/* <!-- Price --> */}
										{this.renderPrice()}

										{/* <!-- Form --> */}
										<form>
											<div className="form-group">

												{/* <!-- Label --> */}
												<p className="mb-5">
													Color: <strong id="colorCaption">White</strong>
												</p>

												{/* <!-- Radio --> */}
												<div className="mb-8 ml-n1">
													<div className="custom-control custom-control-inline custom-control-img">
														<input type="radio" className="custom-control-input" id="imgRadioOne" name="imgRadio" data-toggle="form-caption" data-target="#colorCaption" value="White" defaultChecked />
														<label className="custom-control-label" htmlFor="imgRadioOne">
															<span className="embed-responsive embed-responsive-1by1 bg-cover" style={{backgroundImage: "url(/assets/img/products/product-7.jpg)"}}></span>
														</label>
													</div>
													<div className="custom-control custom-control-inline custom-control-img">
														<input type="radio" className="custom-control-input" id="imgRadioTwo" name="imgRadio" data-toggle="form-caption" data-target="#colorCaption" value="Black" />
														<label className="custom-control-label" htmlFor="imgRadioTwo">
															<span className="embed-responsive embed-responsive-1by1 bg-cover" style={{backgroundImage: "url(/assets/img/products/product-49.jpg)"}}></span>
														</label>
													</div>
												</div>

											</div>
											<div className="form-group">

												{/* <!-- Label --> */}
												<p className="mb-5">
													Size: <strong><span id="sizeCaption">7.5</span> US</strong>
												</p>

												{/* <!-- Radio --> */}
												<div className="mb-2">
													<div className="custom-control custom-control-inline custom-control-size mb-2">
														<input type="radio" className="custom-control-input" name="sizeRadio" id="sizeRadioOne" value="6" data-toggle="form-caption" data-target="#sizeCaption" />
														<label className="custom-control-label" htmlFor="sizeRadioOne">6</label>
													</div>
													<div className="custom-control custom-control-inline custom-control-size mb-2">
														<input type="radio" className="custom-control-input" name="sizeRadio" id="sizeRadioTwo" value="6.5" data-toggle="form-caption" data-target="#sizeCaption" disabled />
														<label className="custom-control-label" htmlFor="sizeRadioTwo">6.5</label>
													</div>
													<div className="custom-control custom-control-inline custom-control-size mb-2">
														<input type="radio" className="custom-control-input" name="sizeRadio" id="sizeRadioThree" value="7" data-toggle="form-caption" data-target="#sizeCaption" />
														<label className="custom-control-label" htmlFor="sizeRadioThree">7</label>
													</div>
													<div className="custom-control custom-control-inline custom-control-size mb-2">
														<input type="radio" className="custom-control-input" name="sizeRadio" id="sizeRadioFour" value="7.5" data-toggle="form-caption" data-target="#sizeCaption" defaultChecked />
														<label className="custom-control-label" htmlFor="sizeRadioFour">7.5</label>
													</div>
													<div className="custom-control custom-control-inline custom-control-size mb-2">
														<input type="radio" className="custom-control-input" name="sizeRadio" id="sizeRadioFive" value="8" data-toggle="form-caption" data-target="#sizeCaption" />
														<label className="custom-control-label" htmlFor="sizeRadioFive">8</label>
													</div>
													<div className="custom-control custom-control-inline custom-control-size mb-2">
														<input type="radio" className="custom-control-input" name="sizeRadio" id="sizeRadioSix" value="8.5" data-toggle="form-caption" data-target="#sizeCaption" />
														<label className="custom-control-label" htmlFor="sizeRadioSix">8.5</label>
													</div>
													<div className="custom-control custom-control-inline custom-control-size mb-2">
														<input type="radio" className="custom-control-input" name="sizeRadio" id="sizeRadioSeven" value="9" data-toggle="form-caption" data-target="#sizeCaption" disabled />
														<label className="custom-control-label" htmlFor="sizeRadioSeven">9</label>
													</div>
													<div className="custom-control custom-control-inline custom-control-size mb-2">
														<input type="radio" className="custom-control-input" name="sizeRadio" id="sizeRadioEight" value="9.5" data-toggle="form-caption" data-target="#sizeCaption" disabled />
														<label className="custom-control-label" htmlFor="sizeRadioEight">9.5</label>
													</div>
													<div className="custom-control custom-control-inline custom-control-size mb-2">
														<input type="radio" className="custom-control-input" name="sizeRadio" id="sizeRadioNine" value="10" data-toggle="form-caption" data-target="#sizeCaption" />
														<label className="custom-control-label" htmlFor="sizeRadioNine">10</label>
													</div>
													<div className="custom-control custom-control-inline custom-control-size mb-2">
														<input type="radio" className="custom-control-input" name="sizeRadio" id="sizeRadioTen" value="10.5" data-toggle="form-caption" data-target="#sizeCaption" />
														<label className="custom-control-label" htmlFor="sizeRadioTen">10.5</label>
													</div>
													<div className="custom-control custom-control-inline custom-control-size mb-2">
														<input type="radio" className="custom-control-input" name="sizeRadio" id="sizeRadioEleven" value="11" data-toggle="form-caption" data-target="#sizeCaption" />
														<label className="custom-control-label" htmlFor="sizeRadioEleven">11</label>
													</div>
													<div className="custom-control custom-control-inline custom-control-size mb-2">
														<input type="radio" className="custom-control-input" name="sizeRadio" id="sizeRadioTwelve" value="12" data-toggle="form-caption" data-target="#sizeCaption" />
														<label className="custom-control-label" htmlFor="sizeRadioTwelve">12</label>
													</div>
													<div className="custom-control custom-control-inline custom-control-size mb-2">
														<input type="radio" className="custom-control-input" name="sizeRadio" id="sizeRadioThirteen" value="13" data-toggle="form-caption" data-target="#sizeCaption" />
														<label className="custom-control-label" htmlFor="sizeRadioThirteen">13</label>
													</div>
													<div className="custom-control custom-control-inline custom-control-size mb-2">
														<input type="radio" className="custom-control-input" name="sizeRadio" id="sizeRadioFourteen" value="14" data-toggle="form-caption" data-target="#sizeCaption" />
														<label className="custom-control-label" htmlFor="sizeRadioFourteen">14</label>
													</div>
												</div>

												{/* <!-- Size chart --> */}
												<p className="mb-8">
													<img src="/assets/img/icons/icon-ruler.svg" alt="..." className="img-fluid" /> <a className="text-reset text-decoration-underline ml-3" data-toggle="modal" href="#modalSizeChart">Size chart</a>
												</p>

												<div className="form-row mb-7">
													<div className="col-12 col-lg-auto">

														{/* <!-- Quantity --> */}
														<select className="custom-select mb-2" defaultValue="1">
															<option value="1">1</option>
															<option value="2">2</option>
															<option value="3">3</option>
															<option value="4">4</option>
															<option value="5">5</option>
														</select>

													</div>
													<div className="col-12 col-lg">

														{/* <!-- Submit --> */}
														<button type="submit" className="btn btn-block btn-dark mb-2">
															Add to Cart <i className="fe fe-shopping-bag ml-2"></i>
														</button>

													</div>
													<div className="col-12 col-lg-auto">

														{/* <!-- Wishlist --> */}
														<button className="btn btn-outline-dark btn-block mb-2" data-toggle="button">
															Wishlist <i className="fe fe-star ml-2"></i>
														</button>

													</div>
												</div>

												{/* <!-- Text --> */}
												<p>
													<span className="text-gray-500">Is your size/color sold out?</span>
													<a className="text-reset text-decoration-underline" data-toggle="modal" href="#modalWaitList">Join the Wait List!</a>
												</p>

												{/* <!-- Share --> */}
												<p className="mb-0">
													<span className="mr-4">Share:</span>
													<a className="btn btn-xxs btn-circle btn-light font-size-xxxs text-gray-350" href="#!">
														<i className="fab fa-twitter"></i>
													</a>
													<a className="btn btn-xxs btn-circle btn-light font-size-xxxs text-gray-350" href="#!">
														<i className="fab fa-facebook-f"></i>
													</a>
													<a className="btn btn-xxs btn-circle btn-light font-size-xxxs text-gray-350" href="#!">
														<i className="fab fa-pinterest-p"></i>
													</a>
												</p>

											</div>
										</form>

									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* <!-- DESCRIPTION --> */}
				<section className="pt-11">
					<div className="container">
						<div className="row">
							<div className="col-12">

								{/* <!-- Nav --> */}
								<div className="nav nav-tabs nav-overflow justify-content-start justify-content-md-center border-bottom">
									<a className="nav-link active" data-toggle="tab" href="#descriptionTab">
										Description
									</a>
									<a className="nav-link" data-toggle="tab" href="#sizeTab">
										Size & Fit
									</a>
									<a className="nav-link" data-toggle="tab" href="#shippingTab">
										Shipping & Return
									</a>
								</div>

								{/* <!-- Content --> */}
								<div className="tab-content">
									<div className="tab-pane fade show active" id="descriptionTab">
										<div className="row justify-content-center py-9">
											<div className="col-12 col-lg-10 col-xl-8">
												<div className="row">
													<div className="col-12">

														{/* <!-- Text --> */}
														<p className="text-gray-500">
															Won't herb first male seas, beast. Let upon, female upon third fifth every. Man subdue rule after years herb after
															form. And image may, morning. Behold in tree day sea that together cattle whose. Fifth gathering brought
															bearing. Abundantly creeping whose. Beginning form have void two. A whose.
														</p>

													</div>
													<div className="col-12 col-md-6">

														{/* <!-- List --> */}
														<ul className="list list-unstyled mb-md-0 text-gray-500">
															<li>
																<strong className="text-body">SKU</strong>: #61590437
															</li>
															<li>
																<strong className="text-body">Occasion</strong>: Lifestyle, Sport
															</li>
															<li>
																<strong className="text-body">Country</strong>: Italy
															</li>
														</ul>

													</div>
													<div className="col-12 col-md-6">

														{/* <!-- List --> */}
														<ul className="list list-unstyled mb-0">
															<li>
																<strong>Outer</strong>: Leather 100%, Polyamide 100%
															</li>
															<li>
																<strong>Lining</strong>: Polyester 100%
															</li>
															<li>
																<strong>CounSoletry</strong>: Rubber 100%
															</li>
														</ul>

													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="tab-pane fade" id="sizeTab">
										<div className="row justify-content-center py-9">
											<div className="col-12 col-lg-10 col-xl-8">
												<div className="row">
													<div className="col-12 col-md-6">

														{/* <!-- Text --> */}
														<p className="mb-4">
															<strong>Fitting information:</strong>
														</p>

														{/* <!-- List --> */}
														<ul className="mb-md-0 text-gray-500">
															<li>
																Upon seas hath every years have whose
																subdue creeping they're it were.
															</li>
															<li>
																Make great day bearing.
															</li>
															<li>
																For the moveth is days don't said days.
															</li>
														</ul>

													</div>
													<div className="col-12 col-md-6">

														{/* <!-- Text --> */}
														<p className="mb-4">
															<strong>Model measurements:</strong>
														</p>

														{/* <!-- List --> */}
														<ul className="list-unstyled text-gray-500">
															<li>Height: 1.80 m</li>
															<li>Bust/Chest: 89 cm</li>
															<li>Hips: 91 cm</li>
															<li>Waist: 65 cm</li>
															<li>Model size: M</li>
														</ul>

														{/* <!-- Size --> */}
														<p className="mb-0">
															<img src="/assets/img/icons/icon-ruler.svg" alt="..." className="img-fluid" />
															<a className="text-reset text-decoration-underline ml-3" data-toggle="modal" href="#modalSizeChart">Size chart</a>
														</p>

													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="tab-pane fade" id="shippingTab">
										<div className="row justify-content-center py-9">
											<div className="col-12 col-lg-10 col-xl-8">

												{/* <!-- Table --> */}
												<div className="table-responsive">
													<table className="table table-bordered table-sm table-hover">
														<thead>
															<tr>
																<th>Shipping Options</th>
																<th>Delivery Time</th>
																<th>Price</th>
															</tr>
														</thead>
														<tbody>
															<tr>
																<td>Standard Shipping</td>
																<td>Delivery in 5 - 7 working days</td>
																<td>$8.00</td>
															</tr>
															<tr>
																<td>Express Shipping</td>
																<td>Delivery in 3 - 5 working days</td>
																<td>$12.00</td>
															</tr>
															<tr>
																<td>1 - 2 day Shipping</td>
																<td>Delivery in 1 - 2 working days</td>
																<td>$12.00</td>
															</tr>
															<tr>
																<td>Free Shipping</td>
																<td>
																	Living won't the He one every subdue meat replenish
																	face was you morning firmament darkness.
																</td>
																<td>$0.00</td>
															</tr>
														</tbody>
													</table>
												</div>

												{/* <!-- Caption --> */}
												<p className="mb-0 text-gray-500">
													May, life blessed night so creature likeness their, for. <a className="text-body text-decoration-underline" href="#!">Find out more</a>
												</p>

											</div>
										</div>
									</div>
								</div>

							</div>
						</div>
					</div>
				</section>

				{/* <!-- PRODUCTS --> */}
				<section className="pt-10">
					<div className="container">
						<div className="row">
							<div className="col-12">

								{/* <!-- DESCRIPTION --> */}
								<section className="pt-11">
									<div className="container">
										<div className="row">
											<div className="col-12">

												{/* <!-- Nav --> */}
												<div className="nav nav-tabs nav-overflow justify-content-start justify-content-md-center nav-recommendations">
													<a className="nav-link nav-header mb-9 active" data-toggle="tab" href="#recommended-products">
														Recommended
													</a>
													<a className="nav-link nav-header mb-9" data-toggle="tab" href="#combined-products">
														Combined
													</a>
												</div>

												{/* <!-- Content --> */}
												<div className="tab-content">
													<div className="tab-pane fade show active" id="recommended-products">
														{/* <!-- Items --> */}
														<div className="row">
															<div className="col-6 col-sm-6 col-md-4 col-lg-3">
																<ShopProductCard product={this.products[0]} key={this.products[0].id} />
															</div>
															<div className="col-6 col-sm-6 col-md-4 col-lg-3">
																<ShopProductCard product={this.products[1]} key={this.products[1].id} />
															</div>
															<div className="col-6 col-sm-6 col-md-4 col-lg-3">
																<ShopProductCard product={this.products[2]} key={this.products[2].id} />
															</div>
															<div className="col-6 col-sm-6 col-md-4 col-lg-3 d-md-none d-lg-block">
																<ShopProductCard product={this.products[3]} key={this.products[3].id} />
															</div>
														</div>
													</div>
													<div className="tab-pane fade" id="combined-products">
														{/* <!-- Items --> */}
														<div className="row">
															<div className="col-6 col-sm-6 col-md-4 col-lg-3">
																<ShopProductCard product={this.products[4]} key={this.products[4].id} />
															</div>
															<div className="col-6 col-sm-6 col-md-4 col-lg-3">
																<ShopProductCard product={this.products[5]} key={this.products[5].id} />
															</div>
															<div className="col-6 col-sm-6 col-md-4 col-lg-3">
																<ShopProductCard product={this.products[6]} key={this.products[6].id} />
															</div>
															<div className="col-6 col-sm-6 col-md-4 col-lg-3 d-md-none d-lg-block">
																<ShopProductCard product={this.products[7]} key={this.products[7].id} />
															</div>
														</div>
													</div>
												</div>

											</div>
										</div>
									</div>
								</section>
							</div>
						</div>
					</div>
				</section>

				{/* <!-- FEATURES --> */}
				<section className="bg-light py-9">
					<div className="container">
						<div className="row">
							<div className="col-12 col-md-6 col-lg-3">

								{/* <!-- Item --> */}
								<div className="d-flex mb-6 mb-lg-0">

									{/* <!-- Icon --> */}
									<i className="fe fe-truck font-size-lg text-primary"></i>

									{/* <!-- Body --> */}
									<div className="ml-6">

										{/* <!-- Heading --> */}
										<h6 className="heading-xxs mb-1">
											Free shipping
										</h6>

										{/* <!-- Text --> */}
										<p className="mb-0 font-size-sm text-muted">
											From all orders over $100
										</p>

									</div>

								</div>

							</div>
							<div className="col-12 col-md-6 col-lg-3">

								{/* <!-- Item --> */}
								<div className="d-flex mb-6 mb-lg-0">

									{/* <!-- Icon --> */}
									<i className="fe fe-repeat font-size-lg text-primary"></i>

									{/* <!-- Body --> */}
									<div className="ml-6">

										{/* <!-- Heading --> */}
										<h6 className="mb-1 heading-xxs">
											Free returns
										</h6>

										{/* <!-- Text --> */}
										<p className="mb-0 font-size-sm text-muted">
											Return money within 30 days
										</p>

									</div>

								</div>

							</div>
							<div className="col-12 col-md-6 col-lg-3">

								{/* <!-- Item --> */}
								<div className="d-flex mb-6 mb-md-0">

									{/* <!-- Icon --> */}
									<i className="fe fe-lock font-size-lg text-primary"></i>

									{/* <!-- Body --> */}
									<div className="ml-6">

										{/* <!-- Heading --> */}
										<h6 className="mb-1 heading-xxs">
											Secure shopping
										</h6>

										{/* <!-- Text --> */}
										<p className="mb-0 font-size-sm text-muted">
											You're in safe hands
										</p>

									</div>

								</div>

							</div>
							<div className="col-12 col-md-6 col-lg-3">

								{/* <!-- Item --> */}
								<div className="d-flex">

									{/* <!-- Icon --> */}
									<i className="fe fe-tag font-size-lg text-primary"></i>

									{/* <!-- Body --> */}
									<div className="ml-6">

										{/* <!-- Heading --> */}
										<h6 className="mb-1 heading-xxs">
											Over 10,000 Styles
										</h6>

										{/* <!-- Text --> */}
										<p className="mb-0 font-size-sm text-muted">
											We have everything you need
										</p>

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