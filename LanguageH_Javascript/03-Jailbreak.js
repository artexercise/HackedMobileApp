/**
 * return the Max value in an Array of Integers
 * @return {void} 
 */
function Max() 
{
	/*
		KEYS: 0-9
		KEYS: INPUT
		KEYS: var_a, var_b, ...
		KEYS: true false
		KEYS: if else return abs while pow foreach in
		KEYS: length push pop
		KEYS: + - ++ -- == != > <  , || && . [ ]
	
		Pattern IN - OUT
		[3,8], 2
		[4,5,3], 3
		[6], 1
	*/
	var cin = [[3,8], [3,1], [0,99]];
	var cout = [8, 3, 99];
	_runTests(cin, cout, _f_Max);
}
/**
 * return the Max value in an Array of Integers
 * @param {integer[]} input
 * @return {integer} max value
 */
function _f_Max(input) 
{ 
	var_a = 0;
	for(a in input)
	{
		if(input[a]>var_a) var_a=input[a];
	}
	return var_a;
}

/**
 * Return the Max value of an array using Math.max
 * @return {void} 
 */
function Maxxxx() 
{
	/*
		KEYS: 0-9
		KEYS: INPUT
		KEYS: var_a, var_b, ...
		KEYS: true false
		KEYS: if else return abs while pow foreach in max min
		KEYS: length push pop
		KEYS: + - ++ -- == != > <  , || && . [ ]
	
		Pattern IN - OUT
		[3, 1, 8, 0, 2], 8
		[1, 3, 2], 3
		[9, 42, 7, 13], 42
	*/
	var cin = [[3, 1, 8, 0, 2], [1, 3, 2], [9, 42, 7, 13]];
	var cout = [8, 3, 42];
	_runTests(cin, cout, _f_Maxxxx);
}
/**
 * Return the Max value of an array using Math.max
 * @param {integer[]} input
 * @return {integer} 
 */
function _f_Maxxxx(input) 
{ 
	var_a = 0;
	for(a in input)
	{
		var_a=Math.max(input[a], var_a);
	}
	return var_a;
}

/**
 * Determine if a Number is Odd or Even
 * @return {void} 
 */
function ThisIsOdd() 
{
	/*
		KEYS: 0-9
		KEYS: INPUT
		KEYS: var_a, var_b, ...
		KEYS: true false
		KEYS: if else return abs while pow foreach in max min
		KEYS: length push pop
		KEYS: + - ++ -- == != > <  , || && . [ ]
	
		Pattern IN - OUT
		5, 1
		7, 1
		2, 0
	*/
	var cin = [5, 7, 2];
	var cout = [1, 1, 0];
	_runTests(cin, cout, _f_ThisIsOdd);
}
/**
 * Determine if a Number is Odd or Even
 * @param {integer} input
 * @return {integer} 
 */
function _f_ThisIsOdd(input) 
{ 
	var_a = Math.floor(input/2);
	return input-(var_a * 2);
}

/**
 * Determine if an array is a palindrome
 * @return {void} 
 */
function Panama() 
{
	/*
		KEYS: 0-9, "a-z"
		KEYS: INPUT
		KEYS: var_a, var_b, ...
		KEYS: true false
		KEYS: if else return abs while pow foreach in max min mod
		KEYS: length push pop
		KEYS: + - ++ -- == != > <  , || && . [ ]
	
		Pattern IN - OUT
		[c, a, t], false
		[k, a, y, a, k], true
		[b, o, b], true
	*/
	var cin = [['c', 'a', 't'], ['k', 'a', 'y', 'a', 'k'], ['b', 'o', 'b']];
	var cout = [false, true, true];
	_runTests(cin, cout, _f_Panama);
}
/**
 * Determine if an array is a palindrome
 * @param {integer} input
 * @return {integer} 
 */
function _f_Panama(input) 
{ 
	var_a = true;
	for(s in input)
	{
		if(input[s]!=input[input.length-1-s]) var_a = false;
	}
	return var_a;
}
