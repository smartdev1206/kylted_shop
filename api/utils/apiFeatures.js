/* eslint-disable camelcase */
const moment = require('moment');

class APIFeatures {
	constructor(query, queryString) {
		this.query = query;
		this.queryString = queryString;
	}

	filter() {
		const queryObj = { ...this.queryString };
		const excludedFields = ['page', 'sort', 'limit', 'fields'];
		excludedFields.forEach((el) => delete queryObj[el]);
		// console.log(req.query, queryObj);
		// Another query

		// 1B)ADVACED FILTERING
		let queryStr = JSON.stringify(queryObj);

		queryStr = queryStr.replace(
			/\b(gte|gt|lte|lt|eq)\b/g,
			(match) => `$${match}`
		);

		const json = JSON.parse(queryStr);
		this.query = this.query.find(json);
		return this;

		// another
	}

	filterProducts() {
		const queryObj = { ...this.queryString };
		const excludedFields = ['page', 'sort', 'limit', 'fields'];
		excludedFields.forEach((el) => delete queryObj[el]);
		// console.log(req.query, queryObj);
		// Another query

		// 1B)ADVACED FILTERING
		let queryStr = JSON.stringify(queryObj);
		queryStr = queryStr.replace(
			/\b(gte|gt|lte|lt|eq)\b/g,
			(match) => `$${match}`
		);

		const json = JSON.parse(queryStr);

		if (json.last_week === 1) {
			const past_week = moment().subtract(1, 'weeks');

			json.createdAt = {
				$gte: new Date(past_week.toISOString()),
			};

			delete json.last_week;
		}

		if (json.last_month === 1) {
			const past_month = moment().subtract(1, 'months');

			json.createdAt = {
				$gte: new Date(past_month.toISOString()),
			};

			delete json.last_month;
		}

		//Sizes
		if (json.size != null) {
			json['models.size'] = json.size;
			delete json.size;
		}

		//Prices
		if (json.price != null) {
			let prices = json.price;
			if (typeof prices === "string") {
				prices = [prices];
			}

			json.sell_price = [];
			prices.forEach(price => {
				if (price === "ten_to_fifty") {
					json.sell_price.push({
						$gte: 10,
						$lte: 49.99
					});
				} else if (price === "fifty_to_hundred") {
					json.sell_price.push({
						$gte: 50,
						$lte: 99.99
					});
				} else if (price === "hundred_to_two_hunderd") {
					json.sell_price.push({
						$gte: 100,
						$lte: 199.99
					});
				} else if (price === "two_hunderd_up") {
					json.sell_price.push({
						$gte: 200
					});
				}
			})

			delete json.price;
		}

		this.query = this.query.find(json);
		return this;
		// another
	}

	sort() {
		if (this.queryString.sort) {
			const sortBy = this.queryString.sort.split(',').join(' ');
			this.query = this.query.sort(sortBy);
		} else {
			this.query = this.query.sort('-createdAt');
		}
		return this;
	}

	limitFields() {
		if (this.queryString.fields) {
			const fields = this.queryString.fields.split(',').join(' ');
			this.query = this.query.select(fields);
		} else {
			this.query = this.query.select('-__v');
		}
		return this;
	}

	paginate() {
		const page = this.queryString.page * 1 || 1;
		const limit = this.queryString.limit * 1 || 100;
		const skip = (page - 1) * limit;
		this.query = this.query.skip(skip).limit(limit);

		return this;
	}
}
module.exports = APIFeatures;
