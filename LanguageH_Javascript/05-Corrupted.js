	/*
		KEYS: 0-9, "a-z"
		KEYS: INPUT
		KEYS: var_a, var_b, ...
		KEYS: true false
		KEYS: if else return abs while pow foreach in max min mod
		KEYS: length push pop sort
		KEYS: + - ++ -- == != > <  , || && . [ ]
	
		Pattern IN - OUT
		[c, a, t], false
		[k, a, y, a, k], true
		[b, o, b], true
	*/

/**
 * Return Binary into Base 10
 * @return {void} 
 */
function X110101110101000101() 
{
	var cin = [[1,0,1],[0,1,0],[1,1,0]];
	var cout = [5, 2, 6];
	_runTests(cin, cout, _f_X110101110101000101);
}
/**
 * Return Binary into Base 10
 * @param {object[string[]]} input
 * @return {integer} max value
 */
function _f_X110101110101000101(input) 
{ 
	var_c = input.length-1;
	var_a = 0;
	var_b = 0;
	while(var_c>=0)
	{
		var_b += input[var_c]*Math.pow(2,var_a);
		var_c--;
		var_a++;
	}
	return var_b;
}

/**
 * Return true if input is prime
 * @return {void} 
 */
function Prime() 
{
	var cin = [3, 12, 17];
	var cout = [true, false, true];
	_runTests(cin, cout, _f_Prime);
}
/**
 * Return true if input is prime
 * @param {integer[]} input
 * @return {integer} 
 */
function _f_Prime(input) 
{ 
	var_a=2;
	var_b=true; // Assume Prime
	if (input==1) return false;
	while(var_a<input)
	{
		if((input%var_a)==0) var_b=false;
		var_a++;
	}
	return var_b;
}

/**
 * Determine if a Number is Odd or Even
 * @return {void} 
 */
function NumberInOrder() 
{
	var cin = [['f', 'o', 'r', 't', 'y'], ['d', 'o', 's'], ['q', 'u', 'a', 't', 'r', 'e']];
	var cout = [true, true, false];
	_runTests(cin, cout, _f_NumberInOrder);
}
/**
 * Fill in missing numbers
 * Array's are Passed in Javascript by Reference by default.  .slice() makes a shallow copy of the array.
 * 
 * @param {integer[]} input
 * @return {integer[]} 
 */
function _f_NumberInOrder(input) 
{ 
	var_c = true;
	if(input.length==1) return true;

	var_a = input.slice();
	var_a.sort();
	for(a in input)
	{
		if(var_a[a]!=input[a]) var_c = false;
	}
	return var_c;
}