'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Rule = function () {
	function Rule() {
		_classCallCheck(this, Rule);
	}

	_createClass(Rule, [{
		key: 'isRequired',
		value: function isRequired(data) {
			return data != '';
		}
	}, {
		key: 'isEmail',
		value: function isEmail() {}
	}, {
		key: 'isMin',
		value: function isMin() {}
	}, {
		key: 'isMax',
		value: function isMax() {}
	}]);

	return Rule;
}();
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Validator = function () {
	function Validator() {
		_classCallCheck(this, Validator);

		this.rule = new Rule();
		this.errors = [];
	}

	_createClass(Validator, [{
		key: "validate",
		value: function validate(dataSubmit) {
			return this.errors.push(this.matchWithRules(dataSubmit));
		}
	}, {
		key: "matchWithRules",
		value: function matchWithRules(dataSubmit) {
			var _this = this;

			var _loop = function _loop(key) {
				var dataObj = dataSubmit[key];
				var rules = _this.extractRules(dataObj.rules);
				rules.forEach(function (rule) {
					switch (rule) {
						case "required":
							{
								this.rule.isRequired(dataObj.value);
								break;
							}
						case "email":
							{
								this.rule.isEmail(dataObj.value);
								break;
							}
						default:
							{
								console.err('Rule not found');
							}
					}
				});
			};

			for (var key in dataSubmit) {
				_loop(key);
			}
		}
	}, {
		key: "extractRules",
		value: function extractRules(ruleString) {
			//return's an array of rules 
			return ruleString.split('|');
		}
	}, {
		key: "assignErrosToField",
		value: function assignErrosToField(key, prop) {
			var errorObj = {};
			errorObj[key] = key + " is required";
			this.errors.push(errorObj);
		}
	}]);

	return Validator;
}();
