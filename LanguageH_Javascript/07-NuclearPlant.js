	/*
		KEYS: 0-9, "a-z"
		KEYS: INPUT
		KEYS: var_a, var_b, ...
		KEYS: true false
		KEYS: if else return abs while pow foreach in max min mod function -> f1
		KEYS: length push pop sort insert remove sort_with map
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
function AddOne() 
{
	var cin = [[0,1],[1,2],[3,6,8]];
	var cout = [[1,2],[2,3],[4,7,9]];
	_runTests(cin, cout, _f_AddOne);
}
/**
 * Return Binary into Base 10
 * @param {object[string[]]} input
 * @return {integer} max value
 */
function _f_AddOne(input) 
{ 
	var_a = input.slice();
	for(a in var_a)
	{
		var_a[a]++;
	}
	return var_a;
}

/**
 * Make sure the parantheses match up
 * @return {void} 
 */
function Positivity() 
{
	var cin = [[1], [-1,1],[1,-1,1]];
	var cout = [[true],[false,true],[true,false,true]];
	_runTests(cin, cout, _f_Positivity);
}
/**
 * Make sure the parantheses match up
 * This does not mean that there are matching pairs, but simply an equal number of each. ))(( would pass.
 * @param {integer[]} input
 * @return {integer} 
 */
function _f_Positivity(input) 
{ 
	var_a = [];
	for(a in input)
	{
		var_a.push(_f1_Positivity(input[a]));
	}
	return var_a;
}
function _f_Positivity2(input) 
{ 
	var_a = [];
	for(a in input)
	{
		var_a.push(function(x){return x>0;}(input[a]));
	}
	return var_a;
}
function _f1_Positivity(input)
{
	return input>-1;
}

/**
 * Determine if a Number is Odd or Even
 * @return {void} 
 */
function NearestToOrigin() 
{
	var cin = [[[10,12],[2,3]], [[5,3],[15,0]], [[12,3],[6,15],[1,2]]];
	var cout = [[2,3], [5,3], [1,2]];
	_runTests(cin, cout, _f_NearestToOrigin);
}
/**
 * Fill in missing numbers
 * Array's are Passed in Javascript by Reference by default.  .slice() makes a shallow copy of the array.
 * 
 * @param {integer[]} input
 * @return {integer[]} 
 */
function _f_NearestToOrigin(input) 
{ 
	comparisons = input.length;
	counter = 1;
	var_a = input[0];
	while (counter<comparisons)
	{
		var_a = _f1_NearestToOrigin(var_a, input[counter]);
		counter++;
	}
	return var_a;
}
function _f1_NearestToOrigin(point1, point2)
{
	d1=Math.pow(point1[0],2) + Math.pow(point1[1],2);
	d2=Math.pow(point2[0],2) + Math.pow(point2[1],2);
	if(d1>d2) return point2; else return point1;
}