VCO.Slide = VCO.Class.extend({
	
	includes: [VCO.Events],
	_container: {},
	_content_container: {},
	_content: {},
	
	options: {
		stroke: true,
		color: '#0033ff',
		weight: 5,
		opacity: 0.5,

		fill: false,
		fillColor: null, //same as color by default
		fillOpacity: 0.2
	},

	initialize: function (id, options) {
		VCO.Util.setOptions(this, options);
		this._container = VCO.Dom.get(id);
		this._initLayout();
	},

	onAdd: function (map) {
		
	},

	onRemove: function (map) {
		
	},

	_initLayout: function () {
		trace(" _initLayout");
		
		var container = this._container;
		container.className += ' vco-slide';
		div.vco-content-container
			div.vco-content
		// Create Layout
		this._content_container		= VCO.Dom.create('div', 'vco-content-container', this._container);
		this._content		= VCO.Dom.create('div', 'vco-content', this._content_container);
		
	}
	
});
