import eth_tools
from nose.tools import assert_equal

class TestWinChecker:
    def setup(self):
        bc = eth_tools.Blockchain()
        self.contract = eth_tools.Contract(bc, "contracts/tictactoe/win_checker.se")

    def test_recognizes_wins(self):
        winner1 = [1,1,1,2,0,2,0,2,0]
        winner2 = [2,1,2,1,2,1,0,1,2]
        assert_equal(self.contract.invoke(winner1 + [1]), [1])
        assert_equal(self.contract.invoke(winner2 + [2]), [1])

    def test_recognizes_nonwins(self):
        nonwinner1 = [0,0,0,0,0,0,0,0,0]
        nonwinner2 = [1,2,1,1,2,1,2,1,2]
        assert_equal(self.contract.invoke(nonwinner1 + [1]), [0])
        assert_equal(self.contract.invoke(nonwinner2 + [2]), [0])
