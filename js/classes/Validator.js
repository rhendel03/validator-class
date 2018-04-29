class Validator {
	constructor() {
		this.rule = new Rule;
		this.errors = [];
	}

	validate(dataSubmit) {
		return this.errors.push(this.matchWithRules(dataSubmit));
	}

	matchWithRules(dataSubmit) {
		for (let key in dataSubmit) {
			let dataObj = dataSubmit[key];
			let rules = this.extractRules(dataObj.rules);
			rules.forEach(function(rule) {
				switch(rule) {
					case "required": {
						this.rule.isRequired(dataObj.value);
						break;
					}
					case "email": {
						this.rule.isEmail(dataObj.value);
						break;
					}
					default: {
						console.err('Rule not found');
					}
				}
			});

		}
	}

	extractRules(ruleString) {
		//return's an array of rules 
		return ruleString.split('|');
	}
	assignErrosToField(key, prop) {
		let errorObj = {};
		errorObj[key] = key + " is required"
		this.errors.push(errorObj);
	}
}