/*
 * Basic Variable for Document
 * google JSDOC for Documentation formats - http://usejsdoc.org/
*/
	var d = document;
	var br = "<br>";
	function _hr() { d.writeln("<hr>"); }

/*
 * Functions for Printing Pass in Green, Fail in Red, and Formatting the Output
*/
	function _printPass() { d.writeln("<span class='PASS'>-- pass</span>",br); }
	function _printFail() { d.writeln("<span class='FAIL'>-- fail</span>",br); }
	function _CheckInStatement(cin, fcheck) { d.writeln("IN: ",cin,", OUT: ", fcheck(cin)); }

/**
 * Run the Input and Output Values against the Function
 * @param {object[]} cin - intput Array for fCheck
 * @param {object[]} count - output Array of fCheck Values
 * @param {function} fCheck - function Name
 * @return {void} 
 */
	function _runTests(cin, cout, fCheck)
	{
		for(i=0;i<cin.length;i++)
		{
			_CheckInStatement(cin[i], fCheck);
			if(_compare(cin[i], cout[i], fCheck)) _printPass(); else _printFail();
		}
	}
	/*
	 * There is a issue with what be a more correct way to compare arrays.
	 * http://stackoverflow.com/questions/7837456/comparing-two-arrays-in-javascript
	*/
	function _compare(cin, cout, fCheck)
	{
		value1 = JSON.stringify(fCheck(cin));
		//d.writeln("{",value1,"}");
		value2 = JSON.stringify(cout);
		//d.writeln("{",value2,"}");
		if(value1==value2) return true; else return false;
	}

	function functionCalls(fList)
	{
		_hr(); 
		for(x in fList) { fList[x](); _hr(); }
	}