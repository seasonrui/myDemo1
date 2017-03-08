var  Waterfall= function (config) {
	this.element = document.querySelector('#'+config.gallary);
	this.boxs = document.querySelectorAll('.'+config.box);
	this.boxWidth = config.minWidth;
}

Waterfall.prototype.init = function () {
	var that = this;
	this.getColum();
	window.onresize = function () {
		that.element.innerHTML = '';
		that.getColum();
	}
}
Waterfall.prototype.getColum = function () {
	this.colum = Math.floor(this.element.offsetWidth/this.boxWidth);
	this.columWidth = (100 / this.colum) + '%';
	this.createColum();

}
Waterfall.prototype.createColum = function () {
	for(var i = 0; i < this.colum; i++) {
		var ul = document.createElement('ul');
    	ul.className = 'wf_col';
		ul.style.width = this.columWidth;
    	this.element.appendChild(ul);
	}
	this.addbox();

}
Waterfall.prototype.addbox = function () {
	var that = this;
	this.boxs.forEach(function(item) {
		var liElment = document.createElement('li');
		liElment.appendChild(item);

		that.getMinhColumn().appendChild(liElment);
	})
}

Waterfall.prototype.getMinhColumn = function () {
	var oColumns = document.querySelectorAll('.wf_col');
	var j = 0;
	var minColumn = oColumns[0];
	for(var i = 1;i < oColumns.length;i++){
		if(oColumns[i].offsetHeight < minColumn.offsetHeight){
			minColumn = oColumns[i];
			j = i;
		}
		
	}
	return minColumn;
}
