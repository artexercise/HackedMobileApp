from Hackpad import Hackpad as H

def test_Increment_me():
    if not testitem_FunctionTest(H.Increment_me, 2, 3): return
    if not testitem_FunctionTest(H.Increment_me, 5, 6): return
    if not testitem_FunctionTest(H.Increment_me, 8, 9): return
    print("Passed: Increment_me")

def test_Positive():
    if not testitem_FunctionTest(H.Positive, 3, True): return
    if not testitem_FunctionTest(H.Positive, -7, False): return
    if not testitem_FunctionTest(H.Positive, 9, True): return
    print("Passed: Positive")

def test_Absolute():
    if not testitem_FunctionTest(H.Absolute, 1, 1): return
    if not testitem_FunctionTest(H.Absolute, -2, 2): return
    if not testitem_FunctionTest(H.Absolute, 0, 0): return
    print("Passed: Absolute")

def test_Absolute_2():
    if not testitem_FunctionTest(H.Absolute_2, 1, 1): return
    if not testitem_FunctionTest(H.Absolute_2, -2, 2): return
    if not testitem_FunctionTest(H.Absolute_2, 0, 0): return
    print("Passed: Absolute_2")

def test_Power():
    if not testitem_FunctionTest(H.Power, 2, 4): return
    if not testitem_FunctionTest(H.Power, 3, 9): return
    if not testitem_FunctionTest(H.Power, 4, 16): return
    print("Passed: Power")

def test_Power_2():
    if not testitem_FunctionTest(H.Power_2, 2, 4): return
    if not testitem_FunctionTest(H.Power_2, 3, 9): return
    if not testitem_FunctionTest(H.Power_2, 4, 16): return
    print("Passed: Power_2")

def test_Length():
    if not testitem_FunctionTest(H.Length, [3,8], 2): return
    if not testitem_FunctionTest(H.Length, [4,5,3], 3): return
    if not testitem_FunctionTest(H.Length, [6], 1): return
    print("Passed: Length")

def test_Push_it():
    if not testitem_FunctionTest(H.Push_it, 5, [0,1,2,3,4]): return
    if not testitem_FunctionTest(H.Push_it, 2, [0,1]): return
    if not testitem_FunctionTest(H.Push_it, 0, []): return
    print("Passed: Push_it")

def test_Max():
    if not testitem_FunctionTest(H.Max, [3,8], 8): return
    if not testitem_FunctionTest(H.Max, [3,1], 3): return
    if not testitem_FunctionTest(H.Max, [0,99], 99): return
    print("Passed: Max")

def test_Maxxxx():
    if not testitem_FunctionTest(H.Maxxxx, [3,1,8,0,2], 8): return
    if not testitem_FunctionTest(H.Maxxxx, [1,3,2], 3): return
    if not testitem_FunctionTest(H.Maxxxx, [9,42,7,13], 42): return
    print("Passed: Maxxxx")

def test_This_is_odd():
    if not testitem_FunctionTest(H.This_is_odd, 5, 1): return
    if not testitem_FunctionTest(H.This_is_odd, 7, 1): return
    if not testitem_FunctionTest(H.This_is_odd, 2, 0): return
    print("Passed: This_is_odd")

def test_Panama():
    if not testitem_FunctionTest(H.Panama, ['c','a','t'], False): return
    if not testitem_FunctionTest(H.Panama, ['k','a','y','a','k'], True): return
    if not testitem_FunctionTest(H.Panama, ['b','o','b'], True): return
    print("Passed: Panama")
    
def test_Anagrams():
    if not testitem_FunctionTest(H.Anagrams, [['d','a','d'],['a','d','d']], True): return
    if not testitem_FunctionTest(H.Anagrams, [['a','t','e'],['e','a','t'],['t','e','a']], True): return
    if not testitem_FunctionTest(H.Anagrams, [['n','o','t'],['o','n','e']], False): return
    print("Passed: Anagrams")

def test_Bring_some_ord():
    if not testitem_FunctionTest(H.Bring_some_ord, ['c','b','a'],['a','b','c']): return
    if not testitem_FunctionTest(H.Bring_some_ord, ['d','g','e','h','f'],['d','e','f','g','h']): return
    if not testitem_FunctionTest(H.Bring_some_ord, ['z','x','y','w'],['w','x','y','z']): return
    print("Passed: Bring_some_ord")

def test_Missing_numbers():
    if not testitem_FunctionTest(H.Missing_numbers, [0,3,2], [1]): return
    if not testitem_FunctionTest(H.Missing_numbers, [1,3], [0,2]): return
    if not testitem_FunctionTest(H.Missing_numbers, [4,2,3], [0,1]): return
    print("Passed: Missing_numbers")

def testitem_FunctionTest(inFunc, inArg, outResult):
    try:
        assert inFunc(inArg)==outResult
        return True
    except AssertionError:
        print(" -*: Failed: {2}({0}) != {1}".format(inArg, outResult, inFunc.__name__))
        return False

# -=-=- -=-=- -=-=- -=-=- -=-=-
# Test Functions
# -=-=- -=-=- -=-=- -=-=- -=-=-
test_Increment_me()
test_Positive()
test_Absolute()
test_Absolute_2()

test_Power()
test_Power_2()
test_Length()
test_Push_it()

test_Max()
test_Maxxxx()
test_This_is_odd()
test_Panama()

test_Anagrams();
test_Bring_some_ord();
test_Missing_numbers();
