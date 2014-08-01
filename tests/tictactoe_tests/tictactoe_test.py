import eth_tools
from nose.tools import assert_equal

class TestTicTacToe:
    def setup(self):
        bc = eth_tools.Blockchain()
        self.contract = eth_tools.Contract(bc, "contracts/tictactoe/tictactoe.se")

    def test_creates_games(self):
        assert_equal(self.contract.invoke(["create", "a", "b"]), [1])
        assert_equal(self.contract.invoke(["get", 1]), [0,0,0,0,0,0,0,0,0,1])
