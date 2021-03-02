import React, {Component} from 'react'

import Navbar from "../Navbar"
import Footer from '../Footer'

import Promo from '../Promo'
import Geral from '../../app/controls/Geral'

export default class HomePage extends Component{
  render(){
    return (
			<div className="homepage"> 
				<Navbar />
				<Promo />

				{/* <!-- CONTENT --> */}
				<section className="pt-7">
					<div className="container-fluid px-3 px-md-6">
						<div className="row">
							<div className="col-12 col-md-6">

								{/* <!-- Card --> */}
								<div className="card mb-7">

									{/* <!-- Badge --> */}
									<div className="badge badge-white card-badge">
										<time className="text-uppercase" dateTime="2019-06-20">Jun 20</time>
									</div>

									{/* <!-- Image --> */}
									<img className="card-img-top" src="assets/img/blog/blog-1.jpg" alt="..." />

									{/* <!-- Body --> */}
									<div className="card-body px-0">

										{/* <!-- Heading --> */}
										<h5>So isn't land signs greater void face replenish.</h5>

										{/* <!-- Text --> */}
										<p className="mb-0 text-gray-500">
											Midst one brought greater also morning green saying had good. Open stars
											day let over gathered, grass face one every light of under.
										</p>

										{/* <!-- Button --> */}
										<a className="btn btn-link stretched-link px-0 text-reset" href="blog-post.html">
											Read More <i className="fe fe-arrow-right ml-2"></i>
										</a>

									</div>

								</div>

							</div>
							<div className="col-12 col-md-6">

								{/* <!-- Card --> */}
								<div className="card mb-7">

									{/* <!-- Badge --> */}
									<div className="badge badge-white card-badge">
										<time className="text-uppercase" dateTime="2019-06-20">Jun 20</time>
									</div>

									{/* <!-- Image --> */}
									<img className="card-img-top" src="assets/img/blog/blog-4.jpg" alt="..." />

									{/* <!-- Body --> */}
									<div className="card-body px-0">

										{/* <!-- Heading --> */}
										<h5>Sea good every which said first divided.</h5>

										{/* <!-- Text --> */}
										<p className="mb-0 text-gray-500">
											From fruit shall stars over. Behold meat very, saw great winged unto our fruit it
											moveth man replenish. Meat place is so fruit.
										</p>

										{/* <!-- Button --> */}
										<a className="btn btn-link stretched-link px-0 text-reset" href="blog-post.html">
											Read More <i className="fe fe-arrow-right ml-2"></i>
										</a>

									</div>

								</div>

							</div>
						</div>
					</div>
				</section>

				{/* <!-- Fashion Designers at Hand --> */}
				<section className="py-12">
					<div className="container">
						<div className="row">
							<div className="col-12">

								{/* <!-- Heading --> */}
								<h2 className="mb-10 text-center display-4">Fashion Designers at Hand</h2>

							</div>
						</div>
					</div>
					<div className="flickity-page-dots-progress fashion-designers-container" data-flickity='{"pageDots": true}'>

						{/* <!-- Item --> */}
						<div className="col" style={{maxWidth: "300px"}}>
							<div className="card">

								{/* <!-- Image --> */}
								<div className="card-img">

									{/* <!-- Action --> */}
									<button className="btn btn-xs btn-circle btn-white-primary card-action card-action-right" data-toggle="button">
										<i className="fe fe-star"></i>
									</button>

									{/* <!-- Button --> */}
									<button className="btn btn-xs btn-block btn-dark card-btn" data-toggle="modal" data-target="#modalProduct">
										<i className="fe fe-eye mr-2 mb-1"></i> Quick View
									</button>

									{/* <!-- Image --> */}
									<img className="card-img-top" src="assets/img/products/product-6.jpg" alt="..." />

								</div>

								{/* <!-- Body --> */}
								<div className="card-body font-weight-bold text-center">
									<a className="text-body" href="product.html">Cotton floral print Dress</a> <br/>
									<span className="text-muted">$40.00</span>
								</div>

							</div>
						</div>

						{/* <!-- Item --> */}
						<div className="col" style={{maxWidth: "300px"}}>
							<div className="card">

								{/* <!-- Image --> */}
								<div className="card-img">

									{/* <!-- Action --> */}
									<button className="btn btn-xs btn-circle btn-white-primary card-action card-action-right" data-toggle="button">
										<i className="fe fe-star"></i>
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
									<img className="card-img-top" src="assets/img/products/product-10.jpg" alt="..." />

								</div>

								{/* <!-- Body --> */}
								<div className="card-body font-weight-bold text-center">
									<a className="text-body" href="product.html">Suede cross body Bag</a> <br/>
									<span className="font-size-xs text-gray-350 text-decoration-line-through">$85.00</span>
									<span className="text-primary">$49.00</span>
								</div>

							</div>
						</div>

						{/* <!-- Item --> */}
						<div className="col" style={{maxWidth: "300px"}}>
							<div className="card">

								{/* <!-- Image --> */}
								<div className="card-img">

									{/* <!-- Action --> */}
									<button className="btn btn-xs btn-circle btn-white-primary card-action card-action-right" data-toggle="button">
										<i className="fe fe-star"></i>
									</button>

									{/* <!-- Button --> */}
									<button className="btn btn-xs btn-block btn-dark card-btn" data-toggle="modal" data-target="#modalProduct">
										<i className="fe fe-eye mr-2 mb-1"></i> Quick View
									</button>

									{/* <!-- Image --> */}
									<img className="card-img-top" src="assets/img/products/product-32.jpg" alt="..." />

								</div>

								{/* <!-- Body --> */}
								<div className="card-body font-weight-bold text-center">
									<a className="text-body" href="product.html">Cotton leaf print Shirt</a> <br/>
									<span className="text-muted">$65.00</span>
								</div>

							</div>
						</div>

						{/* <!-- Item --> */}
						<div className="col" style={{maxWidth: "300px"}}>
							<div className="card">

								{/* <!-- Image --> */}
								<div className="card-img">

									{/* <!-- Action --> */}
									<button className="btn btn-xs btn-circle btn-white-primary card-action card-action-right" data-toggle="button">
										<i className="fe fe-star"></i>
									</button>

									{/* <!-- Button --> */}
									<button className="btn btn-xs btn-block btn-dark card-btn" data-toggle="modal" data-target="#modalProduct">
										<i className="fe fe-eye mr-2 mb-1"></i> Quick View
									</button>

									{/* <!-- Image --> */}
									<img className="card-img-top" src="assets/img/products/product-7.jpg" alt="..." />

								</div>

								{/* <!-- Body --> */}
								<div className="card-body font-weight-bold text-center">
									<a className="text-body" href="product.html">Leather Sneakers</a> <br/>
									<a className="text-primary" href="#">Select Options</a>
								</div>

							</div>
						</div>

						{/* <!-- Item --> */}
						<div className="col" style={{maxWidth: "300px"}}>
							<div className="card">

								{/* <!-- Image --> */}
								<div className="card-img">

									{/* <!-- Action --> */}
									<button className="btn btn-xs btn-circle btn-white-primary card-action card-action-right" data-toggle="button">
										<i className="fe fe-star"></i>
									</button>

									{/* <!-- Button --> */}
									<button className="btn btn-xs btn-block btn-dark card-btn" data-toggle="modal" data-target="#modalProduct">
										<i className="fe fe-eye mr-2 mb-1"></i> Quick View
									</button>

									{/* <!-- Image --> */}
									<img className="card-img-top" src="assets/img/products/product-11.jpg" alt="..." />

								</div>

								{/* <!-- Body --> */}
								<div className="card-body font-weight-bold text-center">
									<a className="text-body" href="product.html">Another fine dress</a> <br/>
									<span className="text-muted">$99.00</span>
								</div>

							</div>
						</div>

						{/* <!-- Item --> */}
						<div className="col" style={{maxWidth: "300px"}}>
							<div className="card">

								{/* <!-- Image --> */}
								<div className="card-img">

									{/* <!-- Action --> */}
									<button className="btn btn-xs btn-circle btn-white-primary card-action card-action-right" data-toggle="button">
										<i className="fe fe-star"></i>
									</button>

									{/* <!-- Button --> */}
									<button className="btn btn-xs btn-block btn-dark card-btn" data-toggle="modal" data-target="#modalProduct">
										<i className="fe fe-eye mr-2 mb-1"></i> Quick View
									</button>

									{/* <!-- Image --> */}
									<img className="card-img-top" src="assets/img/products/product-33.jpg" alt="..." />

								</div>

								{/* <!-- Body --> */}
								<div className="card-body font-weight-bold text-center">
									<a className="text-body" href="product.html">Baseball Cap</a> <br/>
									<span className="text-muted">$10.00</span>
								</div>

							</div>
						</div>

						{/* <!-- Item --> */}
						<div className="col" style={{maxWidth: "300px"}}>
							<div className="card">

								{/* <!-- Image --> */}
								<div className="card-img">

									{/* <!-- Action --> */}
									<button className="btn btn-xs btn-circle btn-white-primary card-action card-action-right" data-toggle="button">
										<i className="fe fe-star"></i>
									</button>

									{/* <!-- Button --> */}
									<button className="btn btn-xs btn-block btn-dark card-btn" data-toggle="modal" data-target="#modalProduct">
										<i className="fe fe-eye mr-2 mb-1"></i> Quick View
									</button>

									{/* <!-- Image --> */}
									<img className="card-img-top" src="assets/img/products/product-49.jpg" alt="..." />

								</div>

								{/* <!-- Body --> */}
								<div className="card-body font-weight-bold text-center">
									<a className="text-body" href="product.html">Leather sneakers</a> <br/>
									<span className="text-muted">$19.00</span>
								</div>

							</div>
						</div>
					</div>
					{/* <!-- Button --> */}
					<a className="btn btn-sm btn-outline-dark design-by-hand-button-bottom" href="#!">
						Load more
					</a>
				</section>

				{/* <!-- CONTENT --> */}
				<section className="pt-7">
					<div className="container-fluid px-3 px-md-6">
						<div className="row">
							<div className="col-12 col-md-6">

								{/* <!-- Card --> */}
								<div className="card mb-7">

									{/* <!-- Badge --> */}
									<div className="badge badge-white card-badge">
										<time className="text-uppercase" dateTime="2019-06-20">Jun 20</time>
									</div>

									{/* <!-- Image --> */}
									<img className="card-img-top" src="assets/img/blog/blog-1.jpg" alt="..." />

									{/* <!-- Body --> */}
									<div className="card-body px-0">

										{/* <!-- Heading --> */}
										<h5>So isn't land signs greater void face replenish.</h5>

										{/* <!-- Text --> */}
										<p className="mb-0 text-gray-500">
											Midst one brought greater also morning green saying had good. Open stars
											day let over gathered, grass face one every light of under.
										</p>

										{/* <!-- Button --> */}
										<a className="btn btn-link stretched-link px-0 text-reset" href="blog-post.html">
											Read More <i className="fe fe-arrow-right ml-2"></i>
										</a>

									</div>

								</div>

							</div>
							<div className="col-12 col-md-6">

								{/* <!-- Card --> */}
								<div className="card mb-7">

									{/* <!-- Badge --> */}
									<div className="badge badge-white card-badge">
										<time className="text-uppercase" dateTime="2019-06-20">Jun 20</time>
									</div>

									{/* <!-- Image --> */}
									<img className="card-img-top" src="assets/img/blog/blog-4.jpg" alt="..." />

									{/* <!-- Body --> */}
									<div className="card-body px-0">

										{/* <!-- Heading --> */}
										<h5>Sea good every which said first divided.</h5>

										{/* <!-- Text --> */}
										<p className="mb-0 text-gray-500">
											From fruit shall stars over. Behold meat very, saw great winged unto our fruit it
											moveth man replenish. Meat place is so fruit.
										</p>

										{/* <!-- Button --> */}
										<a className="btn btn-link stretched-link px-0 text-reset" href="blog-post.html">
											Read More <i className="fe fe-arrow-right ml-2"></i>
										</a>

									</div>

								</div>

							</div>
						</div>
					</div>
				</section>

				{/* <!-- Fashion Designers at Hand --> */}
				<section className="py-12">
					<div className="container">
						<div className="row">
							<div className="col-12">

								{/* <!-- Heading --> */}
								<h2 className="mb-10 text-center display-4">Fashion Designers at Hand</h2>

							</div>
						</div>
					</div>
					<div className="flickity-page-dots-progress fashion-designers-container" data-flickity='{"pageDots": true}'>

						{/* <!-- Item --> */}
						<div className="col" style={{maxWidth: "300px"}}>
							<div className="card">

								{/* <!-- Image --> */}
								<div className="card-img">

									{/* <!-- Action --> */}
									<button className="btn btn-xs btn-circle btn-white-primary card-action card-action-right" data-toggle="button">
										<i className="fe fe-star"></i>
									</button>

									{/* <!-- Button --> */}
									<button className="btn btn-xs btn-block btn-dark card-btn" data-toggle="modal" data-target="#modalProduct">
										<i className="fe fe-eye mr-2 mb-1"></i> Quick View
									</button>

									{/* <!-- Image --> */}
									<img className="card-img-top" src="assets/img/products/product-6.jpg" alt="..." />

								</div>

								{/* <!-- Body --> */}
								<div className="card-body font-weight-bold text-center">
									<a className="text-body" href="product.html">Cotton floral print Dress</a> <br/>
									<span className="text-muted">$40.00</span>
								</div>

							</div>
						</div>

						{/* <!-- Item --> */}
						<div className="col" style={{maxWidth: "300px"}}>
							<div className="card">

								{/* <!-- Image --> */}
								<div className="card-img">

									{/* <!-- Action --> */}
									<button className="btn btn-xs btn-circle btn-white-primary card-action card-action-right" data-toggle="button">
										<i className="fe fe-star"></i>
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
									<img className="card-img-top" src="assets/img/products/product-10.jpg" alt="..." />

								</div>

								{/* <!-- Body --> */}
								<div className="card-body font-weight-bold text-center">
									<a className="text-body" href="product.html">Suede cross body Bag</a> <br/>
									<span className="font-size-xs text-gray-350 text-decoration-line-through">$85.00</span>
									<span className="text-primary">$49.00</span>
								</div>

							</div>
						</div>

						{/* <!-- Item --> */}
						<div className="col" style={{maxWidth: "300px"}}>
							<div className="card">

								{/* <!-- Image --> */}
								<div className="card-img">

									{/* <!-- Action --> */}
									<button className="btn btn-xs btn-circle btn-white-primary card-action card-action-right" data-toggle="button">
										<i className="fe fe-star"></i>
									</button>

									{/* <!-- Button --> */}
									<button className="btn btn-xs btn-block btn-dark card-btn" data-toggle="modal" data-target="#modalProduct">
										<i className="fe fe-eye mr-2 mb-1"></i> Quick View
									</button>

									{/* <!-- Image --> */}
									<img className="card-img-top" src="assets/img/products/product-32.jpg" alt="..." />

								</div>

								{/* <!-- Body --> */}
								<div className="card-body font-weight-bold text-center">
									<a className="text-body" href="product.html">Cotton leaf print Shirt</a> <br/>
									<span className="text-muted">$65.00</span>
								</div>

							</div>
						</div>

						{/* <!-- Item --> */}
						<div className="col" style={{maxWidth: "300px"}}>
							<div className="card">

								{/* <!-- Image --> */}
								<div className="card-img">

									{/* <!-- Action --> */}
									<button className="btn btn-xs btn-circle btn-white-primary card-action card-action-right" data-toggle="button">
										<i className="fe fe-star"></i>
									</button>

									{/* <!-- Button --> */}
									<button className="btn btn-xs btn-block btn-dark card-btn" data-toggle="modal" data-target="#modalProduct">
										<i className="fe fe-eye mr-2 mb-1"></i> Quick View
									</button>

									{/* <!-- Image --> */}
									<img className="card-img-top" src="assets/img/products/product-7.jpg" alt="..." />

								</div>

								{/* <!-- Body --> */}
								<div className="card-body font-weight-bold text-center">
									<a className="text-body" href="product.html">Leather Sneakers</a> <br/>
									<a className="text-primary" href="#">Select Options</a>
								</div>

							</div>
						</div>

						{/* <!-- Item --> */}
						<div className="col" style={{maxWidth: "300px"}}>
							<div className="card">

								{/* <!-- Image --> */}
								<div className="card-img">

									{/* <!-- Action --> */}
									<button className="btn btn-xs btn-circle btn-white-primary card-action card-action-right" data-toggle="button">
										<i className="fe fe-star"></i>
									</button>

									{/* <!-- Button --> */}
									<button className="btn btn-xs btn-block btn-dark card-btn" data-toggle="modal" data-target="#modalProduct">
										<i className="fe fe-eye mr-2 mb-1"></i> Quick View
									</button>

									{/* <!-- Image --> */}
									<img className="card-img-top" src="assets/img/products/product-11.jpg" alt="..." />

								</div>

								{/* <!-- Body --> */}
								<div className="card-body font-weight-bold text-center">
									<a className="text-body" href="product.html">Another fine dress</a> <br/>
									<span className="text-muted">$99.00</span>
								</div>

							</div>
						</div>

						{/* <!-- Item --> */}
						<div className="col" style={{maxWidth: "300px"}}>
							<div className="card">

								{/* <!-- Image --> */}
								<div className="card-img">

									{/* <!-- Action --> */}
									<button className="btn btn-xs btn-circle btn-white-primary card-action card-action-right" data-toggle="button">
										<i className="fe fe-star"></i>
									</button>

									{/* <!-- Button --> */}
									<button className="btn btn-xs btn-block btn-dark card-btn" data-toggle="modal" data-target="#modalProduct">
										<i className="fe fe-eye mr-2 mb-1"></i> Quick View
									</button>

									{/* <!-- Image --> */}
									<img className="card-img-top" src="assets/img/products/product-33.jpg" alt="..." />

								</div>

								{/* <!-- Body --> */}
								<div className="card-body font-weight-bold text-center">
									<a className="text-body" href="product.html">Baseball Cap</a> <br/>
									<span className="text-muted">$10.00</span>
								</div>

							</div>
						</div>

						{/* <!-- Item --> */}
						<div className="col" style={{maxWidth: "300px"}}>
							<div className="card">

								{/* <!-- Image --> */}
								<div className="card-img">

									{/* <!-- Action --> */}
									<button className="btn btn-xs btn-circle btn-white-primary card-action card-action-right" data-toggle="button">
										<i className="fe fe-star"></i>
									</button>

									{/* <!-- Button --> */}
									<button className="btn btn-xs btn-block btn-dark card-btn" data-toggle="modal" data-target="#modalProduct">
										<i className="fe fe-eye mr-2 mb-1"></i> Quick View
									</button>

									{/* <!-- Image --> */}
									<img className="card-img-top" src="assets/img/products/product-49.jpg" alt="..." />

								</div>

								{/* <!-- Body --> */}
								<div className="card-body font-weight-bold text-center">
									<a className="text-body" href="product.html">Leather sneakers</a> <br/>
									<span className="text-muted">$19.00</span>
								</div>

							</div>
						</div>
					</div>
					{/* <!-- Button --> */}
					<a className="btn btn-sm btn-outline-dark design-by-hand-button-bottom" href="#!">
						Load more
					</a>
				</section>

				{/* <!-- NEWSLETTER --> */}
				<section className="py-12">
					<div className="container">
						<div className="row">
							<div className="col-12 text-center">

								{/* <!-- Heading --> */}
								<h3>
									Subscribe to our Newsletter
								</h3>

								{/* <!-- Subheading --> */}
								<p className="mb-7 font-size-lg text-gray-500">
									Receive an exclusive 10% discount code when you signup.
								</p>

							</div>
						</div>
						<div className="row justify-content-center">
							<div className="col-12 col-md-8 col-lg-6">

								{/* <!-- Form --> */}
								<form>
									<div className="input-group">

										{/* <!-- Input --> */}
										<input className="form-control form-control-underline form-control-sm border-dark" type="email" placeholder="Enter Email *" />

										{/* <!-- Button --> */}
										<div className="input-group-append">
											<button className="btn btn-underline btn-sm border-dark" type="button">Subscribe</button>
										</div>

									</div>
								</form>

							</div>
						</div>
					</div>
				</section>

				{/* <!-- FEATURES --> */}
				<section className="py-9">
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