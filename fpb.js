function fpb(angka1, angka2) {
	
	while(angka2 != 0 ){
		var c= angka1 % angka2
		angka1 = angka2
		angka2 =c 
	}
	return angka1
}
function kpk(angka1,angka2){
	var c = angka1 * angka2
	var kpk = c/fpb(angka1,angka2)
	return kpk
}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1
console.log("============")
console.log(kpk(4,6))