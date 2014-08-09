var viewModel = {
	firstName:ko.observable("init")
	,lastName:ko.observable("init")
	,capitalizeLastName:function(){
		var currentVal = this.lastName();
		this.lastName(currentVal.toUpperCase());
	}	
};
var add = function (){
	return parseInt(this.firstName(),10)  + parseInt(this.lastName(),10);
}
var subtract =function(){
	return parseInt(this.firstName(),10)  - parseInt(this.lastName(),10);
}
var historical =function (){
	return parseInt(this.firstName(),10)  * parseInt(this.lastName(),10);
}
var rid =function (){
	return parseInt(this.firstName(),10)  / parseInt(this.lastName(),10);
}

viewModel.fullName = ko.computed(function(){
	return this.firstName() + "	" + this.lastName();
},viewModel);
//console.log(viewModel.firstName);
//var ar =[];
ko.applyBindings(viewModel);