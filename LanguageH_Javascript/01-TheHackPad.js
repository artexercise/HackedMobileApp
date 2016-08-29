/**
 * Increases the Value by 1
 * @return {void} 
 */
function IncrementMe() 
{
	/*
		KEYS: 0-9
		KEYS: INPUT
		KEYS: +-
	
		Pattern IN - OUT
		2, 3
		5, 6
		8, 9
	*/
	var cin = [2, 5, 8];
	var cout = [3, 6, 9];
	_runTests(cin, cout, _f_IncrementMe);
}
/**
 * Increases the Value by 1
 * @param {integer} input
 * @return {integer} sum
 */
function _f_IncrementMe(input) { return (input+1); }

/**
 * Checks to see if a number is Positive
 * @return {void} 
 */
function Positive() 
{
	/*
		KEYS: 0-9
		KEYS: INPUT
		KEYS: + - ++ -- == != > <
	
		Pattern IN - OUT
		3, true
		-7, false
		9, true
	*/
	var cin = [3, -7, 9];
	var cout = [true, false, true];
	_runTests(cin, cout, _f_Positive);
}
/**
 * Checks to see if a number is Positive
 * @param {integer} input
 * @return {boolean} 
 */
function _f_Positive(input) { return (input>0); }

/**
 * Return the Absolute Value of a Number without the Math class
 * @return {void} 
 */
function Absolute() 
{
	/*
		KEYS: 0-9
		KEYS: INPUT
		KEYS: true false
		KEYS: if else return
		KEYS: + - ++ -- == != > <
	
		Pattern IN - OUT
		1, 1
		-2, 2
		0, 0
	*/
	var cin = [1, -2, 0];
	var cout = [1, 2, 0];
	_runTests(cin, cout, _f_Absolute);
}
/**
 * Return the Absolute Value of a Number without the Math class
 * @param {integer} input
 * @return {integer} 
 */
function _f_Absolute(input) { if(input<0) return -input; else return input; }

/**
 * Return the Absolute Value of a Number using Math.abs
 * @return {void} 
 */
function Absolute2() 
{
	/*
		KEYS: 0-9
		KEYS: INPUT
		KEYS: true false
		KEYS: if else return abs
		KEYS: + - ++ -- == != > <
	
		Pattern IN - OUT
		1, 1
		-2, 2
		0, 0
	*/
	var cin = [1, -2, 0];
	var cout = [1, 2, 0];
	_runTests(cin, cout, _f_Absolute2);
}
/**
 * Return the Absolute Value of a Number using Math.abs
 * @param {integer} input
 * @return {integer} 
 */
function _f_Absolute2(input) { return Math.abs(input); }
