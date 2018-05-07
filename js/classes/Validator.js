class Validator {

	validate(dataSubmit) {
		return this.matchWithRules(dataSubmit);
	}

	matchWithRules(dataSubmit) {
		let errors = [];

		for (let key in dataSubmit) {
			let dataObj = dataSubmit[key];
			let rules = this.extractRules(dataObj.rules);

			for (let key in rules) {
				if (rules[key] === 'required' && !Rule.isRequired(dataObj.value)) {
					let validated = {
						selector : dataObj.selector,
						message : 'this is required'
					}
					errors.push(validated);
					break;
				}
				if (rules[key] === 'email' && !Rule.isEmail(dataObj.value)) {
					let validated = {
						selector : dataObj.selector,
						message : 'this should be a valid email format'
					}
					errors.push(validated);
					break;
				} 
				if (rules[key].includes('size_between:')) { 
					let ruleValue = this.extractDynamicRuleVal(rules[key]);
					let range = this.extractRange(ruleValue);
					let min = range[0];
					let max = range[1];
					
					if (!Rule.isSizeBetween(dataObj.value, min, max)) {
						let validated = {
							selector : dataObj.selector,
							message : 'value should be between ' + min + ' and ' + max
						};
						errors.push(validated);
						break
					}
					
				}
			}
			
		}
		return errors;
	}


	//return's an array of rules 
	extractRules(ruleString) {
		return ruleString.split('|');
	}

	//return's the value for dynamic rule
	extractDynamicRuleVal(rule) {
		return rule.substr(rule.indexOf(':') + 1, rule.length - 1);
	}

	//return's an array min/max
	extractRange(range) {
		return range.split(',');
	}
	
}