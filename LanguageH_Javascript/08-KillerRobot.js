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
function Addition() 
{
	var cin = [[[2],[3]],[[1,2],[1,9]],[[3],[1,2]],[[5,3],[6,7],[2,1,4]],[[5,3],[6,7]]];
	var cout = [[5],[3,1],[1,5],[3,3,4],[1,2,0]];
	_runTests(cin, cout, _f_Addition);
}
/**
 * Return Binary into Base 10
 * @param {object[string[]]} input
 * @return {integer} max value
 */
function _f_Addition(input) 
{ 
	// Feed each new item into addmachine
	comparisons = input.length;
	counter = 1;
	var_a = input[0].slice();
	while (counter<comparisons)
	{
		var_a = _f1_Addition(input[counter], var_a);
		counter++;
	}
	return var_a;
}
function _f1_Addition(input, existing) 
{
	// Make arrays equal length
	inputx = input.slice();
	while (inputx.length != existing.length)
	{
		if(inputx.length<existing.length)
			inputx.splice(0,0,0);
		if(existing.length<inputx.length)
			existing.splice(0,0,0);
	}

	// Setup a coutdown and carryover	
	places = existing.length-1;
	carryover = 0;
	
	// Add up arrays
	while (places>-1)
	{
		existing[places] += inputx[places] + carryover;
		if(carryover==1) carryover--;
		if(existing[places]>9)
		{
			carryover++;
			existing[places] -= 10;
		}
		places--;
	}
	
	// If final place is greater than 10, accomodate
	if(carryover==1)
	{
		existing.splice(0,0,1);
		carryover--;
	}
	
	// Return
	return existing;
}
/**
 * Make sure the parantheses match up
 * @return {void} 
 */
function Match2() 
{
	var cin = [['']];
	var cout = [false];
	//var cin = [['(',')'],['(','[',')',']'],['(','[',']',')'],['[','(','[',']',')']];
	//var cout = [true, false, true, false];
	_runTests(cin, cout, _f_Match2);
}
/**
 * Make sure the parantheses match up
 * This does not mean that there are matching pairs, but simply an equal number of each. ))(( would pass.
 * @param {integer[]} input
 * @return {integer} 
 */
function _f_Match2(input) 
{ 
	bp = [];
	if(input.length<2) return false;
	for(a in input)
	{
		if(input[a]=='(' || input[a]=='[') 
		{
			bp.push(input[a]);
		}

		if(input[a]==')') 
		{
			bp = _f1_Match2(bp, '(') 
		}
		if(input[a]==']') 
		{
			bp = _f1_Match2(bp, '[') 
		}
	}
	return (bp.length==0);
}
function _f1_Match2(bp, var_b) 
{
	if(bp[bp.length-1]==var_b) bp.pop();
	return bp;
}