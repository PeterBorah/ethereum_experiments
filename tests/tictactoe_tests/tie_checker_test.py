import eth_tools
from nose.tools import assert_equal

class TestTieChecker:
    def setup(self):
        bc = eth_tools.Blockchain()
        self.contract = eth_tools.Contract(bc, "contracts/tictactoe/tie_checker.se")

    def test_recognizes_ties(self):
        tie = [1,2,1,1,2,1,2,1,2]
        assert_equal(self.contract.invoke(tie), [1])

    def test_recognizes_nonwins(self):
        nontie1 = [0,0,0,0,0,0,0,0,0]
        nontie2 = [1,2,0,1,2,1,2,1,2]
        assert_equal(self.contract.invoke(nontie1), [0])
        assert_equal(self.contract.invoke(nontie2), [0])
