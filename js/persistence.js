// 6 kyu
// Time: 304ms  

function persistence(num) {
	var count = 0;
	var product = 1;
	num = num.toString();
	console.log(num);
	while (num.length > 1) {
		for (var i = 0; i < num.length; i++) {
			product *= num[i];
		} 
		count++; 
		console.log(product);
		num = product.toString();
		product = 1;
	} return count;
}

persistence(39);

// 3 
// because 3*9 = 27, 2*7 = 14, 1*4=4
// and 4 has only one digit

// persistence(999); 
// 4 
// because 9*9*9 = 729, 7*2*9 = 126,
// 1*2*6 = 12, and finally 1*2 = 2

// persistence(4); 
// 0 
// because 4 is already a one-digit number
