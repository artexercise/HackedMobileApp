class Hackpad:
    @staticmethod
    def Increment_me(inArg):
        """
           The Hackpad 
            H:
            input + 1;
        """
        return inArg+1

    @staticmethod
    def Positive(inArg):
        """
           The Hackpad 
            H:
            input > 0;
        """
        return inArg>0
    
    @staticmethod
    def Absolute(inArg):
        """
           The Hackpad 
            H:
            if input < 0 {
                return -input;
            }
            return input;
        """
        return inArg if inArg>0 else -inArg

    @staticmethod
    def Absolute_2(inArg):
        """
           The Hackpad 
            H:
            abs(input);
        """
        return abs(inArg)

    
