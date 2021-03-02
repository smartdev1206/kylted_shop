import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'

import Navbar from "../Navbar"
import Footer from '../Footer'

// import { Link } from "react-router-dom"
import ShopProductCard from "../ShopProductCard"

import Promo from "../Promo"

import Product from "../../app/models/Product"
import API from '../../app/models/API'
import Geral from '../../app/controls/Geral'

export default class ShopPage extends Component{
	page:any;
	brands:Array<string>;
	
	renderTags(){
		let elements: Array<JSX.Element> = [];
		let tags_container = document.getElementById("tags-container")!;


		if($('#category_type_shoes').is(":checked")){
			elements.push(
				<span className="btn btn-xs btn-light font-weight-normal text-muted mr-3 mb-3" key="category_type_shoes">
					Shoes <a className="text-reset ml-2" role="button" onClick={() => {
							$('#category_type_shoes').prop('checked', false);
							this.refreshProducts();
						}}>
						<i className="fe fe-x"></i>
					</a>
				</span>
			);
		}

		if($('#category_type_dresses').is(":checked")){
			elements.push(
				<span className="btn btn-xs btn-light font-weight-normal text-muted mr-3 mb-3" key="category_type_dresses">
					Dresses <a className="text-reset ml-2" role="button" onClick={() => {
							$('#category_type_dresses').prop('checked', false);
							this.refreshProducts();
						}}>
						<i className="fe fe-x"></i>
					</a>
				</span>
			);
		}

		if($('#category_type_tops').is(":checked")){
			elements.push(
				<span className="btn btn-xs btn-light font-weight-normal text-muted mr-3 mb-3" key="category_type_tops">
					Tops <a className="text-reset ml-2" role="button" onClick={() => {
							$('#category_type_tops').prop('checked', false);
							this.refreshProducts();
						}}>
						<i className="fe fe-x"></i>
					</a>
				</span>
			);
		}

		if($('#category_type_bags').is(":checked")){
			elements.push(
				<span className="btn btn-xs btn-light font-weight-normal text-muted mr-3 mb-3" key="category_type_bags">
					Bags <a className="text-reset ml-2" role="button" onClick={() => {
							$('#category_type_bags').prop('checked', false);
							this.refreshProducts();
						}}>
						<i className="fe fe-x"></i>
					</a>
				</span>
			);
		}

		if($('#category_type_shirts').is(":checked")){
			elements.push(
				<span className="btn btn-xs btn-light font-weight-normal text-muted mr-3 mb-3" key="category_type_shirts">
					Shirts <a className="text-reset ml-2" role="button" onClick={() => {
							$('#category_type_shirts').prop('checked', false);
							this.refreshProducts();
						}}>
						<i className="fe fe-x"></i>
					</a>
				</span>
			);
		}

		if($('#summer').is(":checked")){
			elements.push(
				<span className="btn btn-xs btn-light font-weight-normal text-muted mr-3 mb-3" key="summer">
					Summer <a className="text-reset ml-2" role="button" onClick={() => {
							$('#summer').prop('checked', false);
							this.refreshProducts();
						}}>
						<i className="fe fe-x"></i>
					</a>
				</span>
			);
		}

		if($('#winter').is(":checked")){
			elements.push(
				<span className="btn btn-xs btn-light font-weight-normal text-muted mr-3 mb-3" key="winter">
					Winter <a className="text-reset ml-2" role="button" onClick={() => {
							$('#winter').prop('checked', false);
							this.refreshProducts();
						}}>
						<i className="fe fe-x"></i>
					</a>
				</span>
			);
		}

		if($('#spring').is(":checked")){
			elements.push(
				<span className="btn btn-xs btn-light font-weight-normal text-muted mr-3 mb-3" key="spring">
					Spring <a className="text-reset ml-2" role="button" onClick={() => {
							$('#spring').prop('checked', false);
							this.refreshProducts();
						}}>
						<i className="fe fe-x"></i>
					</a>
				</span>
			);
		}

		if($('#autumn').is(":checked")){
			elements.push(
				<span className="btn btn-xs btn-light font-weight-normal text-muted mr-3 mb-3" key="autumn">
					Autumn <a className="text-reset ml-2" role="button" onClick={() => {
							$('#autumn').prop('checked', false);
							this.refreshProducts();
						}}>
						<i className="fe fe-x"></i>
					</a>
				</span>
			);
		}

		if($('#3xs').is(":checked")){
			elements.push(
				<span className="btn btn-xs btn-light font-weight-normal text-muted mr-3 mb-3" key="3xs">
					3XS <a className="text-reset ml-2" role="button" onClick={() => {
							$('#3xs').prop('checked', false);
							this.refreshProducts();
						}}>
						<i className="fe fe-x"></i>
					</a>
				</span>
			);
		}

		if($('#2xs').is(":checked")){
			elements.push(
				<span className="btn btn-xs btn-light font-weight-normal text-muted mr-3 mb-3" key="2xs">
					2XS <a className="text-reset ml-2" role="button" onClick={() => {
							$('#2xs').prop('checked', false);
							this.refreshProducts();
						}}>
						<i className="fe fe-x"></i>
					</a>
				</span>
			);
		}

		if($('#xs').is(":checked")){
			elements.push(
				<span className="btn btn-xs btn-light font-weight-normal text-muted mr-3 mb-3" key="xs">
					XS <a className="text-reset ml-2" role="button" onClick={() => {
							$('#xs').prop('checked', false);
							this.refreshProducts();
						}}>
						<i className="fe fe-x"></i>
					</a>
				</span>
			);
		}

		if($('#s').is(":checked")){
			elements.push(
				<span className="btn btn-xs btn-light font-weight-normal text-muted mr-3 mb-3" key="s">
					S <a className="text-reset ml-2" role="button" onClick={() => {
							$('#s').prop('checked', false);
							this.refreshProducts();
						}}>
						<i className="fe fe-x"></i>
					</a>
				</span>
			);
		}

		if($('#m').is(":checked")){
			elements.push(
				<span className="btn btn-xs btn-light font-weight-normal text-muted mr-3 mb-3" key="m">
					M <a className="text-reset ml-2" role="button" onClick={() => {
							$('#m').prop('checked', false);
							this.refreshProducts();
						}}>
						<i className="fe fe-x"></i>
					</a>
				</span>
			);
		}

		if($('#l').is(":checked")){
			elements.push(
				<span className="btn btn-xs btn-light font-weight-normal text-muted mr-3 mb-3" key="l">
					L <a className="text-reset ml-2" role="button" onClick={() => {
							$('#l').prop('checked', false);
							this.refreshProducts();
						}}>
						<i className="fe fe-x"></i>
					</a>
				</span>
			);
		}

		if($('#xl').is(":checked")){
			elements.push(
				<span className="btn btn-xs btn-light font-weight-normal text-muted mr-3 mb-3" key="xl">
					XL <a className="text-reset ml-2" role="button" onClick={() => {
							$('#xl').prop('checked', false);
							this.refreshProducts();
						}}>
						<i className="fe fe-x"></i>
					</a>
				</span>
			);
		}

		if($('#2xl').is(":checked")){
			elements.push(
				<span className="btn btn-xs btn-light font-weight-normal text-muted mr-3 mb-3" key="2xl">
					2XL <a className="text-reset ml-2" role="button" onClick={() => {
							$('#2xl').prop('checked', false);
							this.refreshProducts();
						}}>
						<i className="fe fe-x"></i>
					</a>
				</span>
			);
		}

		if($('#3xl').is(":checked")){
			elements.push(
				<span className="btn btn-xs btn-light font-weight-normal text-muted mr-3 mb-3" key="3xl">
					3XL <a className="text-reset ml-2" role="button" onClick={() => {
							$('#3xl').prop('checked', false);
							this.refreshProducts();
						}}>
						<i className="fe fe-x"></i>
					</a>
				</span>
			);
		}

		if($('#4xl').is(":checked")){
			elements.push(
				<span className="btn btn-xs btn-light font-weight-normal text-muted mr-3 mb-3" key="4xl">
					4XL <a className="text-reset ml-2" role="button" onClick={() => {
							$('#4xl').prop('checked', false);
							this.refreshProducts();
						}}>
						<i className="fe fe-x"></i>
					</a>
				</span>
			);
		}

		if($('#one_size').is(":checked")){
			elements.push(
				<span className="btn btn-xs btn-light font-weight-normal text-muted mr-3 mb-3" key="one_size">
					One Size <a className="text-reset ml-2" role="button" onClick={() => {
							$('#one_size').prop('checked', false);
							this.refreshProducts();
						}}>
						<i className="fe fe-x"></i>
					</a>
				</span>
			);
		}

		if($('#black').is(":checked")){
			elements.push(
				<span className="btn btn-xs btn-light font-weight-normal text-muted mr-3 mb-3" key="black">
					Black <a className="text-reset ml-2" role="button" onClick={() => {
							$('#black').prop('checked', false);
							this.refreshProducts();
						}}>
						<i className="fe fe-x"></i>
					</a>
				</span>
			);
		}

		if($('#white').is(":checked")){
			elements.push(
				<span className="btn btn-xs btn-light font-weight-normal text-muted mr-3 mb-3" key="white">
					White <a className="text-reset ml-2" role="button" onClick={() => {
							$('#white').prop('checked', false);
							this.refreshProducts();
						}}>
						<i className="fe fe-x"></i>
					</a>
				</span>
			);
		}

		if($('#blue').is(":checked")){
			elements.push(
				<span className="btn btn-xs btn-light font-weight-normal text-muted mr-3 mb-3" key="blue">
					Blue <a className="text-reset ml-2" role="button" onClick={() => {
							$('#blue').prop('checked', false);
							this.refreshProducts();
						}}>
						<i className="fe fe-x"></i>
					</a>
				</span>
			);
		}

		if($('#red').is(":checked")){
			elements.push(
				<span className="btn btn-xs btn-light font-weight-normal text-muted mr-3 mb-3" key="red">
					Red <a className="text-reset ml-2" role="button" onClick={() => {
							$('#red').prop('checked', false);
							this.refreshProducts();
						}}>
						<i className="fe fe-x"></i>
					</a>
				</span>
			);
		}

		if($('#brown').is(":checked")){
			elements.push(
				<span className="btn btn-xs btn-light font-weight-normal text-muted mr-3 mb-3" key="brown">
					Brown <a className="text-reset ml-2" role="button" onClick={() => {
							$('#brown').prop('checked', false);
							this.refreshProducts();
						}}>
						<i className="fe fe-x"></i>
					</a>
				</span>
			);
		}

		if($('#gray').is(":checked")){
			elements.push(
				<span className="btn btn-xs btn-light font-weight-normal text-muted mr-3 mb-3" key="gray">
					Gray <a className="text-reset ml-2" role="button" onClick={() => {
							$('#gray').prop('checked', false);
							this.refreshProducts();
						}}>
						<i className="fe fe-x"></i>
					</a>
				</span>
			);
		}

		if($('#cyan').is(":checked")){
			elements.push(
				<span className="btn btn-xs btn-light font-weight-normal text-muted mr-3 mb-3" key="cyan">
					Cyan <a className="text-reset ml-2" role="button" onClick={() => {
							$('#cyan').prop('checked', false);
							this.refreshProducts();
						}}>
						<i className="fe fe-x"></i>
					</a>
				</span>
			);
		}

		if($('#pink').is(":checked")){
			elements.push(
				<span className="btn btn-xs btn-light font-weight-normal text-muted mr-3 mb-3" key="pink">
					Pink <a className="text-reset ml-2" role="button" onClick={() => {
							$('#pink').prop('checked', false);
							this.refreshProducts();
						}}>
						<i className="fe fe-x"></i>
					</a>
				</span>
			);
		}

		if($('#brand_a').is(":checked")){
			elements.push(
				<span className="btn btn-xs btn-light font-weight-normal text-muted mr-3 mb-3" key="brand_a">
					Brand a <a className="text-reset ml-2" role="button" onClick={() => {
							$('#brand_a').prop('checked', false);
							this.refreshProducts();
						}}>
						<i className="fe fe-x"></i>
					</a>
				</span>
			);
		}

		if($('#brand_b').is(":checked")){
			elements.push(
				<span className="btn btn-xs btn-light font-weight-normal text-muted mr-3 mb-3" key="brand_b">
					Brand b <a className="text-reset ml-2" role="button" onClick={() => {
							$('#brand_b').prop('checked', false);
							this.refreshProducts();
						}}>
						<i className="fe fe-x"></i>
					</a>
				</span>
			);
		}

		if($('#trussardi').is(":checked")){
			elements.push(
				<span className="btn btn-xs btn-light font-weight-normal text-muted mr-3 mb-3" key="trussardi">
					Trussardi <a className="text-reset ml-2" role="button" onClick={() => {
							$('#trussardi').prop('checked', false);
							this.refreshProducts();
						}}>
						<i className="fe fe-x"></i>
					</a>
				</span>
			);
		}

		if($('#priceOne').is(":checked")){
			elements.push(
				<span className="btn btn-xs btn-light font-weight-normal text-muted mr-3 mb-3" key="priceOne">
					$10.00 - $49.99 <a className="text-reset ml-2" role="button" onClick={() => {
							$('#priceOne').prop('checked', false);
							this.refreshProducts();
						}}>
						<i className="fe fe-x"></i>
					</a>
				</span>
			);
		}

		if($('#priceTwo').is(":checked")){
			elements.push(
				<span className="btn btn-xs btn-light font-weight-normal text-muted mr-3 mb-3" key="priceTwo">
					$50.00 - $99.99 <a className="text-reset ml-2" role="button" onClick={() => {
							$('#priceTwo').prop('checked', false);
							this.refreshProducts();
						}}>
						<i className="fe fe-x"></i>
					</a>
				</span>
			);
		}

		if($('#priceThree').is(":checked")){
			elements.push(
				<span className="btn btn-xs btn-light font-weight-normal text-muted mr-3 mb-3" key="priceThree">
					$100 - $199.99 <a className="text-reset ml-2" role="button" onClick={() => {
							$('#priceThree').prop('checked', false);
							this.refreshProducts();
						}}>
						<i className="fe fe-x"></i>
					</a>
				</span>
			);
		}

		if($('#priceFour').is(":checked")){
			elements.push(
				<span className="btn btn-xs btn-light font-weight-normal text-muted mr-3 mb-3" key="priceFour">
					$200 to Up <a className="text-reset ml-2" role="button" onClick={() => {
							$('#priceFour').prop('checked', false);
							this.refreshProducts();
						}}>
						<i className="fe fe-x"></i>
					</a>
				</span>
			);
		}

		ReactDOM.render(elements, tags_container);
	}

	refreshUrlArg(){
		var urlParams = new URLSearchParams(window.location.search);
		
		//Category
		let $category = $('input[name="category"]:checked');
		let category:any = $category.val();
		if(category != 0)	urlParams.set('Categorie', category);
		else urlParams.delete('Categorie');
		
		//SubCategory
		let $subcategories: any = $('input[name="subcategory"]:checked');
		urlParams.delete('Sottocategorie');
		if($subcategories.length > 0){
			$subcategories.each((index:number, subcategoryElement:any) => {
				let subcategory:any = $(subcategoryElement).val();
				urlParams.append('Sottocategorie', subcategory);
			});
		}else urlParams.delete('Sottocategorie');
		
		//Sizes
		let $sizes: any = $('input[name="size"]:checked');
		urlParams.delete('model_size');
		if($sizes.length > 0){
			$sizes.each((index:number, model_sizeElement:any) => {
				let model_size:any = $(model_sizeElement).val();
				urlParams.append('model_size', model_size);
			});
		}else urlParams.delete('model_size');
		
		//Color
		let $colors: any = $('input[name="color"]:checked');
		urlParams.delete('color');
		if($colors.length > 0){
			$colors.each((index:number, colorElement:any) => {
				let color:any = $(colorElement).val();
				urlParams.append('color', color);
			});
		}else urlParams.delete('color');
		
		//Brand
		let $brands: any = $('input[name="brand"]:checked');
		urlParams.delete('brand');
		if($brands.length > 0){
			$brands.each((index:number, brandElement:any) => {
				let brand:any = $(brandElement).val();
				urlParams.append('brand', brand);
			});
		}else urlParams.delete('brand');
		
		//Season
		let $season = $('input[name="season"]:checked');
		let season:any = $season.val();
		if(season != 0)	urlParams.set('season', season);
		else urlParams.delete('season');

		//Price
		let $prices: any = $('input[name="price_checkbox"]:checked');
		urlParams.delete('price');
		if($prices.length > 0){
			$prices.each((index:number, priceElement:any) => {
				let price:any = $(priceElement).val();
				urlParams.append('price', price);
			});
		}else urlParams.delete('price');

		let $rangeOne = $('#price_one');
		let min:any = $rangeOne.val();
		if(min != 0)	urlParams.set('min_price', min);
		else urlParams.delete('min_price');

		let $rangeTwo = $('#price_two');
		let max:any = $rangeTwo.val();
		if(max != 0)	urlParams.set('max_price', max);
		else urlParams.delete('max_price');
		
		window.history.replaceState("", "", "?"+urlParams.toString())
	}

	constructor(props: any){
		super(props);
		this.page = 1;
		this.brands = [];
	}

	renderSubcategories(subcategories:Array<string>) {
		let elements: any =  $('input[name="subcategory"]:checked');
		let selecteds:Array<string> = [];
		if(elements.length > 0){
			let values:Array<any> = [];
			elements.each((index:number, element:JQuery<HTMLElement>) => {
				let value:any = $(element).val();
				values.push(value);
			});
			
			values = values.sort().reverse();
			
			values.forEach(value => {
				let sub = subcategories.find(s => s == value);
				if(sub != null)
					subcategories = subcategories.filter(s => s != value)
				subcategories.unshift(value);
				selecteds.push(value);
			})
		}

		let reactElements:Array<JSX.Element> = [];
		subcategories.forEach(subcategory => {
			let is_select:boolean = selecteds.find(se => se == subcategory) != null;
			let e = (
				<div className="custom-control custom-checkbox mb-3" key={subcategory}>
					<input className="custom-control-input" name="subcategory" id={subcategory} value={subcategory} type="checkbox" onChange={() => this.refreshProducts()} defaultChecked={is_select} />
					<label className="custom-control-label" htmlFor={subcategory}>
						{subcategory}
					</label>
				</div>
			)
			reactElements.push(e);
		})

		ReactDOM.render(reactElements, document.getElementById("subCategoryGroup"));
	}
	
	renderBrands() {
		let brands = this.brands.filter(brand => {
			let text:any = $('#search-brand').val();
			if(text == null || text == "") return true
			else return brand.includes(text);
		})
		let elements: any =  $('input[name="brand"]:checked');
		let selecteds:Array<string> = [];
		if(elements.length > 0){
			let values:Array<any> = [];
			elements.each((index:number, element:JQuery<HTMLElement>) => {
				let value:any = $(element).val();
				values.push(value);
			});
			values = values.sort().reverse();

			values.forEach(value => {
				let sub = brands.find(s => s == value);
				if(sub != null)
					brands = brands.filter(s => s != value)
				brands.unshift(value);
				selecteds.push(value);
			})
		}

		let reactElements:Array<JSX.Element> = [];
		brands.forEach(brand => {
			let is_select:boolean = selecteds.find(se => se == brand) != null;
			let e = (
				<div className="custom-control custom-checkbox mb-3" key={brand}>
					<input className="custom-control-input" name="brand" id={brand} value={brand} type="checkbox" {...(is_select == true) ? "defaultChecked" : ""} onChange={() => this.refreshProducts()} />
					<label className="custom-control-label" htmlFor={brand}>
						{brand}
					</label>
				</div>
			)
			reactElements.push(e);
		})

		ReactDOM.render(reactElements, document.getElementById("brand-container"));
	}
	
	renderSizes() {
		API.get_sizes()
		.then((sizes:Array<string>) => {
				let reactElements:Array<JSX.Element> = [];
				sizes.forEach(size => {
					if(size != ""){
						let e = (
							<div className="custom-control custom-control-inline custom-control-size mb-2" key={size} onClick={() => this.refreshProducts()}>
								<input className="custom-control-input" name="size" id={size} value={size} type="checkbox" />
								<label className="custom-control-label" htmlFor={size}>
									{size}
								</label>
							</div>
						)
						reactElements.push(e);
					}
				})
				ReactDOM.render(reactElements, document.getElementById("sizes-container"));
			})

	}

	refreshProducts(){
		this.refreshUrlArg()
		this.renderTags();
		//Get Products from api
		API.get_products(9, this.page, Geral.getAllUrlParams()).then((data:any)=>{
			if(data != null && document != null){
				let product_container = document.getElementById("products-container")!;
				let elements:Array<JSX.Element> = [];
				
				data.products.forEach((product:Product) => {
					let e = (
						<div className="col-6 col-md-4" key={product.product_id}>
							<ShopProductCard product={product} />
						</div>
					);
					elements.push(e);
				});
				ReactDOM.render(elements, product_container);
				this.renderSubcategories(data.subcategories);

				this.brands = data.brands;
				this.renderBrands();
			}
		})
	}

	componentDidMount(){
		$('input[type="radio"], input[type="checkbox"]').on('click', (event) => {
			this.refreshProducts()
		})
		this.refreshProducts();
		this.renderSizes();
	}

  render(){
    return (
			<div className="accountorderspage">
				<Navbar />
				<Promo />
				
				{/* <!-- CONTENT --> */}
				<section className="py-11">
					<div className="container">
						<div className="row">
							<div className="col-12 col-md-4 col-lg-3">

								{/* <!-- Filters --> */}
								<form className="mb-10 mb-md-0">
									<ul className="nav nav-vertical" id="filterNav">
										<li className="nav-item">

											{/* <!-- Toggle --> */}
											<a className="nav-link dropdown-toggle font-size-lg text-reset border-bottom mb-6" data-toggle="collapse" href="#categoryCollapse">
												Categories
											</a>

											{/* <!-- Collapse --> */}
											<div className="collapse show" id="categoryCollapse" data-toggle="simplebar" data-target="#categoryGroup">
												<div className="form-group form-group-overflow mb-6" id="categoryGroup">
													<div className="custom-control custom-radio mb-3">
														<input className="custom-control-input" type="radio" name="category" id="all_categories" value={0} defaultChecked />
														<label className="custom-control-label" htmlFor="all_categories">
															All
														</label>
													</div>
													<div className="custom-control custom-radio mb-3">
														<input className="custom-control-input" type="radio" name="category" id="shoes" value={Product.SHOES} />
														<label className="custom-control-label" htmlFor="shoes">
															Shoes
														</label>
													</div>
													<div className="custom-control custom-radio mb-3">
														<input className="custom-control-input" type="radio" name="category" id="bags" value={Product.BAGS} />
														<label className="custom-control-label" htmlFor="bags">
															Bags
														</label>
													</div>
													<div className="custom-control custom-radio mb-3">
														<input className="custom-control-input" type="radio" name="category" id="accessories" value={Product.ACCESSORIES} />
														<label className="custom-control-label" htmlFor="accessories">
															Accessories
														</label>
													</div>
													<div className="custom-control custom-radio mb-3">
														<input className="custom-control-input" type="radio" name="category" id="shirts" value={Product.SHIRTS} />
														<label className="custom-control-label" htmlFor="shirts">
															Shirts
														</label>
													</div>
												</div>
											</div>

										</li>
										<li className="nav-item">

											{/* <!-- Toggle --> */}
											<a className="nav-link dropdown-toggle font-size-lg text-reset border-bottom mb-6" data-toggle="collapse" href="#subCategoryCollapse">
												SubCategories
											</a>

											{/* <!-- Collapse --> */}
											<div className="collapse show" id="subCategoryCollapse" data-toggle="simplebar" data-target="#subCategoryGroup">
												<div className="form-group form-group-overflow mb-6" id="subCategoryGroup">
													{/* <div className="custom-control custom-checkbox mb-3">
														<input className="custom-control-input" id="summer" type="checkbox" />
														<label className="custom-control-label" htmlFor="summer">
															Summer
														</label>
													</div> */}
												</div>
											</div>

										</li>
										<li className="nav-item">
											{/* <!-- Toggle --> */}
											<a className="nav-link dropdown-toggle font-size-lg text-reset border-bottom mb-6" data-toggle="collapse" href="#seasonCollapse">
												Season
											</a>

											{/* <!-- Collapse --> */}
											<div className="collapse show" id="seasonCollapse" data-toggle="simplebar" data-target="#seasonGroup">
												<div className="form-group form-group-overflow mb-6" id="seasonGroup">
													<div className="custom-control custom-radio mb-3">
														<input className="custom-control-input" type="radio" name="season" id="all_season" defaultChecked value={0} />
														<label className="custom-control-label" htmlFor="all_season">
															All
														</label>
													</div>
													<div className="custom-control custom-radio mb-3">
														<input className="custom-control-input" type="radio" name="season" id="all_year" value={Product.ALL_YEAR} />
														<label className="custom-control-label" htmlFor="all_year">
															All Year
														</label>
													</div>
													<div className="custom-control custom-radio mb-3">
														<input className="custom-control-input" type="radio" name="season" id="fall_winter" value={Product.FALL_WINTER} />
														<label className="custom-control-label" htmlFor="fall_winter">
															Fall/Winter
														</label>
													</div>
													<div className="custom-control custom-radio mb-3">
														<input className="custom-control-input" type="radio" name="season" id="spring_summer" value={Product.SPRING_SUMMER} />
														<label className="custom-control-label" htmlFor="spring_summer">
															Spring/Summer
														</label>
													</div>
												</div>
											</div>

										</li>
										<li className="nav-item">

											{/* <!-- Toggle --> */}
											<a className="nav-link dropdown-toggle font-size-lg text-reset border-bottom mb-6" data-toggle="collapse" href="#sizeCollapse">
												Size
											</a>

											{/* <!-- Collapse --> */}
											<div className="collapse show" id="sizeCollapse" data-toggle="simplebar" data-target="#sizeGroup">
												<div className="form-group form-group-overlow mb-6" id="sizeGroup">
													<div className="sizes-control" id="sizes-container" style={{maxHeight: "200px", overflow: 'auto'}}>
														{/* <div className="custom-control custom-control-inline custom-control-size mb-2">
															<input className="custom-control-input" id="3xs" type="checkbox" />
															<label className="custom-control-label" htmlFor="3xs">
																3XS
															</label>
														</div> */}
													</div>
												</div>
											</div>

										</li>
										<li className="nav-item">

											{/* <!-- Toggle --> */}
											<a className="nav-link dropdown-toggle font-size-lg text-reset border-bottom mb-6" data-toggle="collapse" href="#colorCollapse">
												Color
											</a>

											{/* <!-- Collapse --> */}
											<div className="collapse show" id="colorCollapse" data-toggle="simplebar" data-target="#colorGroup">
												<div className="form-group form-group-overflow mb-6" id="colorGroup">
													<div className="custom-control custom-control-color mb-3">
														<input className="custom-control-input" name="color" id="black" type="checkbox" value={Product.BLACK} />
														<label className="custom-control-label text-dark" htmlFor="black">
															<span className="text-body">Black</span>
														</label>
													</div>
													<div className="custom-control custom-control-color mb-3">
														<input className="custom-control-input" name="color" id="white" type="checkbox" value={Product.WHITE} />
														<label className="custom-control-label" style={{color: "#f9f9f9"}} htmlFor="white">
															<span className="text-body">White</span>
														</label>
													</div>
													<div className="custom-control custom-control-color mb-3">
														<input className="custom-control-input" name="color" id="blue" type="checkbox" value={Product.BLUE} />
														<label className="custom-control-label text-info" htmlFor="blue">
															<span className="text-body">Blue</span>
														</label>
													</div>
													<div className="custom-control custom-control-color mb-3">
														<input className="custom-control-input" name="color" id="red" type="checkbox" value={Product.RED} />
														<label className="custom-control-label" style={{color: "#F00"}} htmlFor="red">
															<span className="text-body">Red</span>
														</label>
													</div>
													<div className="custom-control custom-control-color mb-3">
														<input className="custom-control-input" name="color" id="brown" type="checkbox" value={Product.BROWN} />
														<label className="custom-control-label" htmlFor="brown" style={{color: "#795548"}}>
															<span className="text-body">Brown</span>
														</label>
													</div>
													<div className="custom-control custom-control-color mb-3">
														<input className="custom-control-input" name="color" id="gray" type="checkbox" value={Product.GRAY} />
														<label className="custom-control-label text-gray-300" htmlFor="gray">
															<span className="text-body">Gray</span>
														</label>
													</div>
													<div className="custom-control custom-control-color mb-3">
														<input className="custom-control-input" name="color" id="cyan" type="checkbox" value={Product.CYAN} />
														<label className="custom-control-label" htmlFor="cyan" style={{color: "#17a2b8"}}>
															<span className="text-body">Cyan</span>
														</label>
													</div>
													<div className="custom-control custom-control-color">
														<input className="custom-control-input" name="color" id="pink" type="checkbox" value={Product.PINK} />
														<label className="custom-control-label" htmlFor="pink" style={{color: "#e83e8c"}}>
															<span className="text-body">Pink</span>
														</label>
													</div>
												</div>
											</div>

										</li>
										<li className="nav-item">

											{/* <!-- Toggle --> */}
											<a className="nav-link dropdown-toggle font-size-lg text-reset border-bottom mb-6" data-toggle="collapse" href="#brandCollapse">
												Brand
											</a>

											{/* <!-- Collapse --> */}
											<div className="collapse show" id="brandCollapse" data-toggle="simplebar" data-target="#brandGroup">

												{/* <!-- Search --> */}
												<div data-toggle="lists" data-options='{"valueNames": ["name"]}'>

													{/* <!-- Input group --> */}
													<div className="input-group input-group-merge mb-6">
														<input className="form-control form-control-xs search" type="search" placeholder="Search Brand" id="search-brand" onKeyUp={() => this.renderBrands()} />

														{/* <!-- Button --> */}
														<div className="input-group-append">
															<button className="btn btn-outline-border btn-xs">
																<i className="fe fe-search"></i>
															</button>
														</div>

													</div>

													{/* <!-- Form group --> */}
													<div className="form-group form-group-overflow mb-6" id="brandGroup">
														<div className="list" id="brand-container">
															{/* <div className="custom-control custom-checkbox mb-3">
																<input className="custom-control-input" id="brand_a" type="checkbox" />
																<label className="custom-control-label name" htmlFor="brand_a">
																	Brand a
																</label>
															</div> */}
														</div>
													</div>

												</div>

											</div>

										</li>
										<li className="nav-item">

											{/* <!-- Toggle --> */}
											<a className="nav-link dropdown-toggle font-size-lg text-reset border-bottom mb-6" data-toggle="collapse" href="#priceCollapse">
												Price
											</a>

											{/* <!-- Collapse --> */}
											<div className="collapse show" id="priceCollapse" data-toggle="simplebar" data-target="#priceGroup">

												{/* <!-- Form group--> */}
												<div className="form-group form-group-overflow mb-6" id="priceGroup">
													<div className="custom-control custom-checkbox mb-3">
														<input className="custom-control-input" id="priceOne" name="price_checkbox" type="checkbox" value={Product.TEN_FIFTY} />
														<label className="custom-control-label" htmlFor="priceOne">
															$10.00 - $49.99
														</label>
													</div>
													<div className="custom-control custom-checkbox mb-3">
														<input className="custom-control-input" id="priceTwo" name="price_checkbox" type="checkbox" value={Product.FIFTY_HUNDRED} />
														<label className="custom-control-label" htmlFor="priceTwo">
															$50.00 - $99.99
														</label>
													</div>
													<div className="custom-control custom-checkbox mb-3">
														<input className="custom-control-input" id="priceThree" name="price_checkbox" type="checkbox" value={Product.HUNDRED_TWO_HUNDRED} />
														<label className="custom-control-label" htmlFor="priceThree">
															$100.00 - $199.99
														</label>
													</div>
													<div className="custom-control custom-checkbox">
														<input className="custom-control-input" id="priceFour" name="price_checkbox" type="checkbox" value={Product.TWO_HUNDRED_UP} />
														<label className="custom-control-label" htmlFor="priceFour">
															$200.00 and Up
														</label>
													</div>
												</div>

												{/* <!-- Range --> */}
												<div className="d-flex align-items-center">

													{/* <!-- Input --> */}
													<input type="number" className="form-control form-control-xs" placeholder="$10.00" min="10" max="1000" id="price_one" onKeyUp={() => {this.refreshProducts()}} />

													{/* <!-- Divider --> */}
													<div className="text-gray-350 mx-2">‒</div>

													{/* <!-- Input --> */}
													<input type="number" className="form-control form-control-xs" placeholder="$1000.00" max="1000" min="10" id="price_two" onKeyUp={() => {this.refreshProducts()}} />

												</div>

											</div>

										</li>
									</ul>
								</form>

							</div>
							<div className="col-12 col-md-8 col-lg-9">
								{/* <!-- Header --> */}
								<div className="row align-items-center mb-7">
									<div className="col-12 col-md">

										{/* <!-- Heading --> */}
										<h3 className="mb-1">Womens' Clothing</h3>

										{/* <!-- Breadcrumb --> */}
										<ol className="breadcrumb mb-md-0 font-size-xs text-gray-400">
											<li className="breadcrumb-item">
												<a className="text-gray-400" href="index.html">Home</a>
											</li>
											<li className="breadcrumb-item active">
												Women's Clothing
											</li>
										</ol>

									</div>
									<div className="col-12 col-md-auto">

										{/* <!-- Select --> */}
										<select className="custom-select custom-select-xs" defaultValue="most_popular">
											<option value="most_popular">Most popular</option>
										</select>

									</div>
								</div>

								{/* <!-- Tags --> */}
								<div className="row mb-7">
									<div className="col-12" id="tags-container">
									</div>
								</div>

								{/* <!-- Products --> */}
								<div className="row" id="products-container">
								</div>

								{/* <!-- Slider --> */}
								<div className="flickity-page-dots-inner mb-9" data-flickity='{"pageDots": true}'>

									{/* <!-- Item --> */}
									<div className="w-100">
										<div className="card bg-h-100 bg-left" style={{backgroundImage: "url(assets/img/covers/cover-24.jpg)"}}>
											<div className="row" style={{minHeight: "400px"}}>
												<div className="col-12 col-md-10 col-lg-8 col-xl-6 align-self-center">
													<div className="card-body px-md-10 py-11">

														{/* <!-- Heading --> */}
														<h4>
															2020 Summer Collection
														</h4>

														{/* <!-- Button --> */}
														<a className="btn btn-link px-0 text-body" href="shop.html">
															View Collection <i className="fe fe-arrow-right ml-2"></i>
														</a>

													</div>
												</div>
												<div className="col-12 col-md-2 col-lg-4 col-xl-6 d-none d-md-block bg-cover" style={{backgroundImage: "url(assets/img/covers/cover-16.jpg)"}}></div>
											</div>
										</div>
									</div>


									{/* <!-- Item --> */}
									<div className="w-100">
										<div className="card bg-cover" style={{backgroundImage: "url(assets/img/covers/cover-29.jpg)"}}>
											<div className="row align-items-center" style={{minHeight: "400px"}}>
												<div className="col-12 col-md-10 col-lg-8 col-xl-6">
													<div className="card-body px-md-10 py-11">

														{/* <!-- Heading --> */}
														<h4 className="mb-5">Get -50% from Summer Collection</h4>

														{/* <!-- Text --> */}
														<p className="mb-7">
															Appear, dry there darkness they're seas. <br/>
															<strong className="text-primary">Use code 4GF5SD</strong>
														</p>

														{/* <!-- Button --> */}
														<a className="btn btn-outline-dark" href="shop.html">
															Shop Now <i className="fe fe-arrow-right ml-2"></i>
														</a>

													</div>
												</div>
											</div>
										</div>
									</div>

									{/* <!-- Item --> */}
									<div className="w-100">
										<div className="card bg-cover" style={{backgroundImage: "url(assets/img/covers/cover-30.jpg)"}}>
											<div className="row align-items-center" style={{minHeight: "400px"}}>
												<div className="col-12">
													<div className="card-body px-md-10 py-11 text-center text-white">

														{/* <!-- Preheading --> */}
														<p className="text-uppercase">Enjoy an extra</p>

														{/* <!-- Heading --> */}
														<h1 className="display-4 text-uppercase">50% off</h1>

														{/* <!-- Link --> */}
														<a className="link-underline text-reset" href="shop.html">Shop Collection</a>

													</div>
												</div>
											</div>
										</div>
									</div>

								</div>

								{/* <!-- Pagination --> */}
								<div className="row">
									<div className="col-12">

										{/* <!-- Progress --> */}
										<div className="row justify-content-center mt-7">
											<div className="col-12 text-center">

												{/* <!-- Caption --> */}
												<p className="font-size-sm text-muted">
													Showing 8 of 8 products
												</p>

												{/* <!-- Progress --> */}
												<div className="progress mx-auto mb-7" style={{maxWidth: "250px"}}>
													<div className="progress-bar bg-dark" role="progressbar" style={{width: "100%"}}></div>
												</div>

												{/* <!-- Button --> */}
												<a className="btn btn-sm btn-outline-dark disabled" href="#!">
													Load more
												</a>

											</div>
										</div>

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