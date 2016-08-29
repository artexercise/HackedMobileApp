	/*
		KEYS: 0-9, "a-z"
		KEYS: INPUT
		KEYS: var_a, var_b, ...
		KEYS: true false
		KEYS: if else return abs while pow foreach in max min mod
		KEYS: length push pop sort insert remove sort_with
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
function Complete() 
{
	var cin = [[0,1],[1,2],[3,4,5]];
	var cout = [[0,1], [0,1,2], [0,1,2,3,4,5]];
	_runTests(cin, cout, _f_Complete);
}
/**
 * Return Binary into Base 10
 * @param {object[string[]]} input
 * @return {integer} max value
 */
function _f_Complete(input) 
{ 
	var_c = input.slice();
	var_c.sort();
	var_a=var_c[var_c.length-1];
	var_b=0;
	while(var_b<var_a)
	{
		if(var_c[var_b]!=var_b) var_c.splice(var_b,0,var_b);
		var_b++;
	}
	return var_c;
}

/**
 * Make sure the parantheses match up
 * @return {void} 
 */
function Match() 
{
	var cin = [['(',')'], ['(','(',')'], ['(','(',')',')'], [')','(']];
	var cout = [true, false, true, false];
	_runTests(cin, cout, _f_Match4);
}
/**
 * Make sure the parantheses match up
 * This does not mean that there are matching pairs, but simply an equal number of each. ))(( would pass.
 * @param {integer[]} input
 * @return {integer} 
 */
function _f_Match(input) 
{ 
	var_a=0;
	var_b=0;
	for(a in input)
	{
		if(input[a]=='(') var_a++;
		if(input[a]==')') var_b++;
	}
	return var_a==var_b;
}
function _f_Match2(input) 
{ 
	var_a=0;
	for(a in input)
	{
		if(input[a]=='(') var_a++;
		if(input[a]==')') var_a--;
	}
	return var_a==0;
}
function _f_Match3(input) 
{ 
	var_a=0;
	for(a in input)
	{
		if(input[a]=='(') var_a++;
		if(input[a]==')' && var_a!=0) var_a--;
	}
	return var_a==0;
}
function _f_Match4(input) 
{ 
	var_a=false;
	var_b=0;
	for(a in input)
	{
		if(input[a]=='(') 
		{
			var_b++;
			var_a = false;
		}
		if(input[a]==')' && !var_a) 
		{
			var_b--;
			if(var_b==0) var_a=true;
		}
	}
	return var_a;
}

/**
 * Determine if a Number is Odd or Even
 * @return {void} 
 */
function Rotate() 
{
	var cin = [[2,5], [3,8,4], [6,2,9,1]];
	var cout = [[5,2], [8,4,3], [2,9,1,6]];
	_runTests(cin, cout, _f_Rotate);
}
/**
 * Fill in missing numbers
 * Array's are Passed in Javascript by Reference by default.  .slice() makes a shallow copy of the array.
 * 
 * @param {integer[]} input
 * @return {integer[]} 
 */
function _f_Rotate(input) 
{ 
	var_a = input.slice();
	var_b = var_a.splice(0,1)[0]; // splice returns an array
	var_a.push(var_b);
	return var_a;
}