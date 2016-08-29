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
 * return the Max value in an Array of Integers
 * @return {void} 
 */
function Anagrams() 
{
	var cin = [[['d', 'a', 'd'], ['a', 'd', 'd']], [['a', 't', 'e'],['e', 'a', 't'],['t', 'e', 'a']], [['n', 'o', 't'],['o', 'n', 'e']]];
	var cout = [true, true, false];
	_runTests(cin, cout, _f_Anagrams);
}
/**
 * return the Max value in an Array of Integers
 * @param {object[string[]]} input
 * @return {integer} max value
 */
function _f_Anagrams(input) 
{ 
	var_c = true;
	if(input.length==1) return true;
	var_a = input[0].sort();
	for(a in input)
	{
		var_b =0;
		input[a].sort();
		if(var_a.length!=input[a].length) return false;
		for(b in input[a])
		{
			if(var_a[var_b]!=input[a][b]) var_c = false;
			var_b++;
		}
	}
	return var_c;
}

/**
 * Return the Max value of an array using Math.max
 * @return {void} 
 */
function BringSomeOrd() 
{
	var cin = [['c', 'b', 'a'], ['d', 'g', 'e', 'h', 'f'], ['z', 'x', 'y', 'w']];
	var cout = [['a', 'b', 'c'], ['d', 'e', 'f', 'g', 'h'], ['w', 'x', 'y', 'z']];
	_runTests(cin, cout, _f_BringSomeOrd);
}
/**
 * Return the Max value of an array using Math.max
 * @param {integer[]} input
 * @return {integer} 
 */
function _f_BringSomeOrd(input) 
{ 
	var f = 0; // Counter In
	var s; // Storage Switch
	
	while (f < input.length)
	{
		c=0;
		while (c < input.length)
		{
			if(c>0)
			{
				if(input[c-1]>input[c])
				{
					s=input[c];
					input[c]=input[c-1];
					input[c-1]=s;
				}
			}
			c++;
		}
		f++;
	}
	return input;
}

/**
 * Determine if a Number is Odd or Even
 * @return {void} 
 */
function MissingNumbers() 
{
	var cin = [[0,3,2], [1,3], [4,2,3]];
	var cout = [[1], [0,2], [0,1]];
	_runTests(cin, cout, _f_MissingNumbers);
}
/**
 * Fill in missing numbers
 * @param {integer[]} input
 * @return {integer[]} 
 */
function _f_MissingNumbers(input) 
{ 
			var c = 0;
			var tb = [];

			input.sort();
			var u = input.pop();
			input.push(u);
			
			while (c<u)
			{
				var ina = false;
				for(x in input)
				{
					if(c==input[x]) ina=true;
				}
				if(!ina)tb.push(c);
				c++;
			}
			return tb;
}