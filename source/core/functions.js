const FAILURE = -1;
const RUNNING = 0;
const SUCCESS = 1;

function UUIDGenerator(){
	return 0;
}


function shuffle(ar,copy=true){
	var a = ar;
	if(copy){
		a = ar.slice(0);
	}
	var currentIndex = a.length;
	var temporaryValue;
	var randomIndex;

	while (0 !== currentIndex) {
	    randomIndex = Math.floor(Math.random() * currentIndex);
	    currentIndex -= 1;
	    temporaryValue = a[currentIndex];
	    a[currentIndex] = a[randomIndex];
	    a[randomIndex] = temporaryValue;
	}

	return a;
}


var op = {
		"+": 	function(a,b){return a+b},
		"-": 	function(a,b){return a-b},
		"*": 	function(a,b){return a*b},
		"/": 	function(a,b){return a/b},
		"%": 	function(a,b){return a%b},
		"==": function(a,b){return a==b},
		"===":function(a,b){return a===b},
		"!=":	function(a,b){return a!=b},
		"!==":function(a,b){return a!==b},
		">":	function(a,b){return a>b},
		">=":	function(a,b){return a>=b},
		"<":	function(a,b){return a<b},
		"<=":	function(a,b){return a<=b},
		"&&": function(a,b){return a&&b},
		"||": function(a,b){return a||b}
};

var lop = {
	"==": function(a,b){return a==b},
	"===":function(a,b){return a===b},
	"!=":	function(a,b){return a!=b},
	"!==":function(a,b){return a!==b},
	">":	function(a,b){return a>b},
	">=":	function(a,b){return a>=b},
	"<":	function(a,b){return a<b},
	"<=":	function(a,b){return a<=b},
	"&&": function(a,b){return a&&b},
	"||": function(a,b){return a||b}
}



function add(a,b){
	return a+b;
}

function sub(a,b){
	return a-b;
}

function mul(a,b){
	return a*b;
}

function div(a,b){
	return a/b;
}

function eq(a,b){
	return a==b;
}

function eqq(a,b){
	return a===b;
}

function dif(a,b){
	return a!=b;
}

function diff(a,b){
	return a!==b;
}

function mr(a,b){
	return a>b;
}

function mreq(a,b){
	return a>=b;
}

function ls(a,b){
	return a<b;
}

function lseq(a,b){
	return a<=b;
}

function and(a,b){
	return a&&b;
}

function or(a,b){
	return a||b;
}


function NodeConstructor(node){
	switch(node.type.toLowerCase()){
		case "selector":
			return new Selector(node);
		case "sequence":
			return new Sequence(node);
		case "randomSelector":
			return new RandomSelector(node);
		case "randomSequence":
			return new RandomSequence(node);
		case "inverter":
			return new Inverter(node);
		case "limit":
			return new Limit(node);
		case "condition":
			return new Condition(node);
		case "action":
			return new Action(node);
	}
	return null;
}

function getClass(type){

}
