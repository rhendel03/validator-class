'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Rule = function () {
	function Rule() {
		_classCallCheck(this, Rule);
	}

	_createClass(Rule, null, [{
		key: 'isRequired',
		value: function isRequired(data) {
			return data != '';
		}
	}, {
		key: 'isEmail',
		value: function isEmail(data) {
			var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			return emailRegex.test(data) === true;
		}
	}, {
		key: 'isSizeBetween',
		value: function isSizeBetween(data, min, max) {
			return data.length <= max && data >= min;
		}
	}]);

	return Rule;
}();
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Validator = function () {
	function Validator() {
		_classCallCheck(this, Validator);
	}

	_createClass(Validator, [{
		key: 'validate',
		value: function validate(dataSubmit) {
			return this.matchWithRules(dataSubmit);
		}
	}, {
		key: 'matchWithRules',
		value: function matchWithRules(dataSubmit) {
			var errors = [];

			for (var key in dataSubmit) {
				var dataObj = dataSubmit[key];
				var rules = this.extractRules(dataObj.rules);

				for (var _key in rules) {
					if (rules[_key] === 'required' && !Rule.isRequired(dataObj.value)) {
						var validated = {
							selector: dataObj.selector,
							message: 'this is required'
						};
						errors.push(validated);
						break;
					}
					if (rules[_key] === 'email' && !Rule.isEmail(dataObj.value)) {
						var _validated = {
							selector: dataObj.selector,
							message: 'this should be a valid email format'
						};
						errors.push(_validated);
						break;
					}
					if (rules[_key].includes('size_between:')) {
						var ruleValue = this.extractDynamicRuleVal(rules[_key]);
						var range = this.extractRange(ruleValue);
						var min = range[0];
						var max = range[1];

						if (!Rule.isSizeBetween(dataObj.value, min, max)) {
							var _validated2 = {
								selector: dataObj.selector,
								message: 'value should be between ' + min + ' and ' + max
							};
							errors.push(_validated2);
							break;
						}
					}
				}
			}
			return errors;
		}

		//return's an array of rules 

	}, {
		key: 'extractRules',
		value: function extractRules(ruleString) {
			return ruleString.split('|');
		}

		//return's the value for dynamic rule

	}, {
		key: 'extractDynamicRuleVal',
		value: function extractDynamicRuleVal(rule) {
			return rule.substr(rule.indexOf(':') + 1, rule.length - 1);
		}

		//return's an array min/max

	}, {
		key: 'extractRange',
		value: function extractRange(range) {
			return range.split(',');
		}
	}]);

	return Validator;
}();
