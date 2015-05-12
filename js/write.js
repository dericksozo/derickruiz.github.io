$(function () {

	rangy.init();

	function Highlighter() {
	    this.button = document.createElement('button');
	    this.button.className = 'medium-editor-action';
	    this.button.textContent = 'Mark';
	    this.button.onclick = this.onClick.bind(this);
	    this.classApplier = rangy.createCssClassApplier("highlight", {
	        elementTagName: 'mark',
	        normalize: true
	    });
	}
	Highlighter.prototype.onClick = function() {
	    this.classApplier.toggleSelection();
	};
	Highlighter.prototype.getButton = function() {
	    return this.button;
	};
	Highlighter.prototype.checkState = function (node) {
	    if(node.tagName == 'MARK') {
	        this.button.classList.add('medium-editor-button-active');
	    }
	};

	var editor = new MediumEditor('.editable', {
	    buttons: ['highlight'],
	    extensions: {
	        'highlight': new Highlighter()
	    }
	});
});