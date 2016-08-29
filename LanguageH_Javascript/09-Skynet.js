	/*
		KEYS: 0-9, "a-z"
		KEYS: INPUT
		KEYS: var_a, var_b, ...
		KEYS: true false
		KEYS: if else return abs while pow foreach in max min mod function -> f1
		KEYS: length push pop sort insert remove sort_with map is_list
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
function Tree() 
{
	var cin = [[[1,2],[3,4],5],[[1,2,3],[[4],5]],[[1],2,[[3,4,5]]]];
	var cout = [[1,2,3,4,5],[1,2,3,4,5],[1,2,3,4,5]];
	_runTests(cin, cout, _f_Tree);
}
/**
 * Return Binary into Base 10
 * @param {object[string[]]} input
 * @return {integer} max value
 */
function _f_Tree(input) 
{ 
	// [[1,2],[3,4],5]
	// Feed each new item into addmachine
	var_a = input.slice();
	var_b = [];
	var_b = _f1_Tree(var_a, var_b);
	return var_b;
}
function _f1_Tree(inArr, outArr) 
{
	for (a in inArr)
	{
		if(Array.isArray(inArr[a])) {outArr = _f1_Tree(inArr[a],outArr);}
		else {outArr.push(inArr[a]);}
	}
	return outArr;
}
