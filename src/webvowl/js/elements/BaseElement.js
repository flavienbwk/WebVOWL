/**
 * The base element for all visual elements of webvowl.
 */
module.exports = (function () {

	var DEFAULT_LABEL = "DEFAULT_LABEL";

	var Base = function (graph) {
		// Basic attributes
		var equivalents = [],
			id,
			label,
			type,
			iri,
			links,
		// Additional attributes
			annotations,
			attributes = [],
			visualAttribute,
			comment,
			description,
			equivalentBase,
		// Style attributes
			focused = false,
			indications = [],
			mouseEntered = false,
			styleClass,
			visible = true,
		// Other
			languageTools = require("../util/languageTools")();


		// Properties
		this.attributes = function (p) {
			if (!arguments.length) return attributes;
			attributes = p;
			return this;
		};

		this.annotations = function (p) {
			if (!arguments.length) return annotations;
			annotations = p;
			return this;
		};

		this.comment = function (p) {
			if (!arguments.length) return comment;
			comment = p;
			return this;
		};

		this.description = function (p) {
			if (!arguments.length) return description;
			description = p;
			return this;
		};

		this.equivalents = function (p) {
			if (!arguments.length) return equivalents;
			equivalents = p || [];
			return this;
		};

		this.equivalentBase = function (p) {
			if (!arguments.length) return equivalentBase;
			equivalentBase = p;
			return this;
		};

		this.focused = function (p) {
			if (!arguments.length) return focused;
			focused = p;
			return this;
		};

		this.id = function (p) {
			if (!arguments.length) return id;
			id = p;
			return this;
		};

		this.indications = function (p) {
			if (!arguments.length) return indications;
			indications = p;
			return this;
		};

		this.iri = function (p) {
			if (!arguments.length) return iri;
			iri = p;
			return this;
		};

		this.label = function (p) {
			if (!arguments.length) return label;
			label = p || DEFAULT_LABEL;
			return this;
		};

		this.links = function (p) {
			if (!arguments.length) return links;
			links = p;
			return this;
		};

		this.mouseEntered = function (p) {
			if (!arguments.length) return mouseEntered;
			mouseEntered = p;
			return this;
		};

		this.styleClass = function (p) {
			if (!arguments.length) return styleClass;
			styleClass = p;
			return this;
		};

		this.type = function (p) {
			if (!arguments.length) return type;
			type = p;
			return this;
		};

		this.visible = function (p) {
			if (!arguments.length) return visible;
			visible = p;
			return this;
		};

		this.visualAttribute = function (p) {
			if (!arguments.length) return visualAttribute;
			visualAttribute = p;
			return this;
		};


		this.commentForCurrentLanguage = function () {
			return languageTools.textInLanguage(this.comment(), graph.language());
		};

		/**
		 * @returns {string} the css class of this node..
		 */
		this.cssClassOfNode = function () {
			return "node" + this.id();
		};

		this.descriptionForCurrentLanguage = function () {
			return languageTools.textInLanguage(this.description(), graph.language());
		};

		this.defaultLabel = function () {
			return languageTools.textInLanguage(this.label(), "default");
		};

		this.indicationString = function () {
			return this.indications().join(", ");
		};

		this.labelForCurrentLanguage = function () {
			return languageTools.textInLanguage(this.label(), graph.language());
		};
	};

	Base.prototype.constructor = Base;

	Base.prototype.equals = function(other) {
		return other instanceof Base && this.id() === other.id();
	};


	return Base;
}());
