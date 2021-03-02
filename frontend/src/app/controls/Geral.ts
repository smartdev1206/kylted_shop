export default class Geral {
	static loadScripts() {
		let scripts: Array<any> = [
			"/assets/libs/flickity/dist/flickity.pkgd.min.js",
			"/assets/libs/flickity-fade/flickity-fade.js",
			"/assets/js/theme.min.js",
		]

		function addScripts(index: number) {
			if (scripts[index] != null) {
					const script = document.createElement("script");
					script.src = scripts[index];
					script.async = false;
	
					document.body.appendChild(script);
					addScripts(index + 1);
			}
		}
		addScripts(0)
	}

	static getRandomNumber(min: number, max: number, quant: number){
		let arr:Array<number> = [];
		let maxnum = max;
		while (arr.length < quant) {
			let randomnum = Math.ceil(min + Math.random() * maxnum);
			if(randomnum <= maxnum){
				arr.every(function (a) {
						return a !== randomnum;
				}) && arr.push(randomnum);
			}
		}
		return arr;
	}

	static getAllUrlParams(url?:string) {

		// get query string from url (optional) or window
		let queryString = url ? url.split('?')[1] : window.location.search.slice(1);
	
		// we'll store the parameters here
		let obj:any = {};
	
		// if query string exists
		if (queryString) {
	
			// stuff after # is not part of query string, so get rid of it
			queryString = queryString.split('#')[0];
	
			// split our query string into its component parts
			let arr = queryString.split('&');
			
			for (let i = 0; i < arr.length; i++) {
				// separate the keys and the values
				let a = arr[i].split('=');
				
				// set parameter name and value (use 'true' if empty)
				let paramName = a[0];
				let paramValue = typeof (a[1]) === 'undefined' ? true : a[1];
				
				// if the paramName ends with square brackets, e.g. colors[] or colors[2]
				if (paramName.match(/\[(\d+)?\]$/)) {
	
					// create key if it doesn't exist
					let key = paramName.replace(/\[(\d+)?\]/, '');
					if (!obj[key]) obj[key] = [];
	
					// if it's an indexed array e.g. colors[2]
					if (paramName.match(/\[\d+\]$/)) {
						// get the index value and add the entry at the appropriate position
						let index:any = /\[(\d+)\]/.exec(paramName);
						if(index != null){
							index = index[1];
							obj[key][index] = paramValue;
						}
					} else {
						// otherwise add the value to the end of the array
						obj[key].push(paramValue);
					}
				} else {
					// we're dealing with a string
					if (!obj[paramName]) {
						// if it doesn't exist, create property
						obj[paramName] = paramValue;
					} else if (obj[paramName] && typeof obj[paramName] === 'string'){
						// if property does exist and it's a string, convert it to an array
						obj[paramName] = [obj[paramName]];
						obj[paramName].push(paramValue);
					} else {
						// otherwise add the property
						obj[paramName].push(paramValue);
					}
				}
			}
		}
		
		return obj;
	}
}