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
