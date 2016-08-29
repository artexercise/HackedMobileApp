/**
 * return the square of a number without the Math class
 * @return {void} 
 */
function Power() 
{
	/*
		KEYS: 0-9
		KEYS: INPUT
		KEYS: var_a, var_b, ...
		KEYS: true false
		KEYS: if else return abs while
		KEYS: + - ++ -- == != > <
	
		Pattern IN - OUT
		2, 4
		3, 9
		4, 16
	*/
	var cin = [2, 3, 4];
	var cout = [4, 9, 16];
	_runTests(cin, cout, _f_Power);
}
/**
 * return the square of a number without the Math class
 * @param {integer} input
 * @return {integer} square
 */
function _f_Power(input) 
{ 
	var_a = 1;
	var_b = input;
	while (var_a<input)
	{
		var_b+=input;
		var_a++;
	}
	return var_b;
}

/**
 * Return the Square of a number using Math.abs
 * @return {void} 
 */
function Power2() 
{
	/*
		KEYS: 0-9
		KEYS: INPUT
		KEYS: var_a, var_b, ...
		KEYS: true false
		KEYS: if else return abs while pow
		KEYS: + - ++ -- == != > <  , || &&
	
		Pattern IN - OUT
		2, 4
		3, 9
		4, 16
	*/
	var cin = [2, 3, 4];
	var cout = [4, 9, 16];
	_runTests(cin, cout, _f_Power2);
}
/**
 * Return the Square of a number using Math.abs
 * @param {integer} input
 * @return {boolean} 
 */
function _f_Power2(input) { return Math.pow(input, 2); }

/**
 * Return the Length of an array
 * @return {void} 
 */
function Length() 
{
	/*
		KEYS: 0-9
		KEYS: INPUT
		KEYS: var_a, var_b, ...
		KEYS: true false
		KEYS: if else return abs while pow foreach in
		KEYS: + - ++ -- == != > <  , || &&
	
		Pattern IN - OUT
		[3,8], 2
		[4,5,3], 3
		[6], 1
	*/
	var cin = [[3,8], [4,5,3], [6]];
	var cout = [2, 3, 1];
	_runTests(cin, cout, _f_Length);
}
/**
 * Return the Length of an array
 * Language H = foreach; Language Javascript = for
 *
 * @param {object[]} input
 * @return {integer} 
 */
function _f_Length(input) 
{ 
	var_a = 0;
	for(a in input)
	{
		var_a++;
	}
	return var_a;
}

/**
 * Return an Array of integers up to the length provided exclusive.
 * @return {void} 
 */
function PushIt() 
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
	var cin = [5, 2, 0];
	var cout = [[0,1,2,3,4], [0,1], []];
	_runTests(cin, cout, _f_PushIt);
}
/**
 * Return an Array of integers up to the length provided exclusive.
 * @param {integer} input
 * @return {integer} 
 */
function _f_PushIt(input) 
{ 
	var_a = [];
	var_b = 0;
	while (var_b<input)
	{
		var_a.push(var_b);
		var_b++;
	}
	return var_a;
}
