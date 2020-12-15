function xo(str) {
	var count = 0
	var x = 0
	var o = 0
	for(var i  = 0 ; i< str.length ; i++ ){
		if('x' == str[i]){
			x += 1
		}
		if('o' == str[i]){
			o += 1
		}
	}
	if(x == o){
		console.log(true)
	}else{
		console.log(false)
	}
}
xo('xoxoxo')
xo('oxooxo')