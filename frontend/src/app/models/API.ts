import Axios from "axios";
import Product from "./Product";

export default class API {
	public static AXIOS_CONFIG = {
		headers: {
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Methods": "GET,POST,DELETE,PATCH"
		}
	};

	// public static REF  = "http://18.215.176.211:8000/api/";
	public static REF = "http://localhost:8000/api/";
	public static PRODUCT = API.REF + "v1/products";

	private static params_to_string(params: any): string {
		if (params != null) {
			let str = "";
			let keys = Object.keys(params);
			if (keys != null) {
				keys.forEach(key => {
					str += "&" + key + "=" + params[key];
				});
			}
			return str;
		}
		return "";
	}

	public static get_products(limit: number = 9, page: number = 1, params?: any): Promise<Array<Product>> {
		return new Promise((res, rej) => {
			let query = API.PRODUCT + "?record_type=PRODUCT&limit=" + limit + "&page=" + page;
			query += API.params_to_string(params);
			Axios.get(query, API.AXIOS_CONFIG)
				.then(result => {
					if(result != null){
						res(result.data.data)
					}
					else
						res([])
				})
		})
	}

	public static get_sizes(): Promise<Array<string>> {
		return new Promise((res, rej) => {
			let query = API.PRODUCT + "/sizes";
			Axios.get(query, API.AXIOS_CONFIG)
				.then(result => {
					if(result != null){
						res(result.data.data.sizes)
					}
					else
						res([])
				})
		})
	}
	// season: Array<number> - Season of the product, Summer, Winter, Spring and Autumn.
	// 	1 = Summer
	// 	2 = Winter
	// 	3 = Spring
	// 	4 = Autumn

	// color: Array<number> - Will return products that equals these colors
	// 	1 = BLACK
	// 	2 = WHITE
	// 	3 = BLUE
	// 	4 = RED
	// 	5 = BROWN
	// 	6 = GRAY
	// 	7 = CYAN
	// 	8 = PINK
	// 	9 = Yellow
	// 	10 = Green
	// 	11 = Orange

	// category: Array<number> - Will return products that equals these categories
	// 	1 = Shoes
	// 	2 = Dresses
	// 	3 = Tops
	// 	4 = Bags
	// 	5 = Shirts
	// 	...

	// style: Array<string> - Will return products that equals these styles, ex: .../?style=["Pumps & Heels", "Sandals"]

	// designer: Array<string> - Will return products that equals these designs

	// material: Array<string> - Will return products that equals these materials

	// this_week: boolean - Will return products created from today to past week

	// this_month: boolean - Will return products created from today to past month

	// last_arrivals: boolean - Will return X last created products

	// best_sellers: boolean - Will return X products, ordered By sell count

	// women: boolean - Will return just women products

	// men: boolean - Will return just men products
}