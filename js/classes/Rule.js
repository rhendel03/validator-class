class Rule {

	static isRequired (data) {
		return data != '';
	}

	static isEmail (data) {
		let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return emailRegex.test(data) === true;
	}

	static isSizeBetween (data, min, max) {
		return data.length <= max && data >= min;
	}
}