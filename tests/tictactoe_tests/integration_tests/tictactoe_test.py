import eth_tools
from nose.tools import assert_equal
from nose.exc import SkipTest

class TestTicTacToe:
    def setup(self):
        bc = eth_tools.Blockchain()
        self.contract = eth_tools.Contract(bc, "contracts/tictactoe/tictactoe.se")

    def test_creates_games(self):
        game_id = self.contract.invoke(["create", "a", "b"])[0]
        assert_equal(self.contract.invoke(["get", game_id]), [0,0,0,0,0,0,0,0,0,1,0])

    def test_moves(self):
        game_id = self.contract.invoke(["create", "a", "b"])[0]
        assert_equal(self.contract.invoke(["move",game_id,1,2]), [1])
        assert_equal(self.contract.invoke(["get",game_id]), [0,0,1,0,0,0,0,0,0,2,0])

    def test_can_store_multiple_games(self):
        game_id1 = self.contract.invoke(["create", "a", "b"])[0]
        game_id2 = self.contract.invoke(["create", "a", "b"])[0]
        self.contract.invoke(["move",game_id1,1,2])
        assert_equal(self.contract.invoke(["get", game_id1]), [0,0,1,0,0,0,0,0,0,2,0])
        assert_equal(self.contract.invoke(["get", game_id2]), [0,0,0,0,0,0,0,0,0,1,0])

    def test_only_allows_correct_player_to_move(self):
        game_id = self.contract.invoke(["create", "a", "b"])[0]
        self.contract.invoke(["move",game_id,1,2])
        assert_equal(self.contract.invoke(["move",game_id,1,1]), [0])
        assert_equal(self.contract.invoke(["get", game_id]), [0,0,1,0,0,0,0,0,0,2,0])

    def test_checks_for_win(self):
        game_id = self.contract.invoke(["create", "a", "b"])[0]
        self.contract.invoke(["move",game_id,1,0])
        self.contract.invoke(["move",game_id,2,4])
        self.contract.invoke(["move",game_id,1,1])
        self.contract.invoke(["move",game_id,2,5])
        self.contract.invoke(["move",game_id,1,2])
        assert_equal(self.contract.invoke(["get", game_id]), [1,1,1,0,2,2,0,0,0,2,1])

    def test_checks_for_tie(self):
        pass

    def test_checks_for_illegal_move(self):
        pass
