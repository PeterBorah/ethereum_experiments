import eth_tools
from nose.tools import assert_equal
from nose.exc import SkipTest

class TestMoveMaker:
    def setup(self):
        bc = eth_tools.Blockchain()
        self.contract = eth_tools.Contract(bc, "contracts/tictactoe/move_maker.se")

    def test_makes_moves(self):
        raise SkipTest

        before = [2,1,2,1,2,1,0,1,2,1,123,456]
        after = [2,1,2,1,2,1,1,1,2,2,123,456]
        assert_equal(self.contract.invoke(before + [1, 6]), after)
