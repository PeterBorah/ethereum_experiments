import eth_tools
from nose.tools import assert_equal

class TestTicTacToe:
    def setup(self):
        bc = eth_tools.Blockchain()
        self.contract = eth_tools.Contract(bc, "contracts/tictactoe/tictactoe.se")

    def test_creates_games(self):
        game_id = self.contract.invoke(["create", "a", "b"])[0]
        assert_equal(self.contract.invoke(["get", game_id]), [0,0,0,0,0,0,0,0,0,1])

    def test_moves(self):
        game_id = self.contract.invoke(["create", "a", "b"])[0]
        assert_equal(self.contract.invoke(["move",game_id,1,2]), [1])
        assert_equal(self.contract.invoke(["get",game_id]), [0,0,1,0,0,0,0,0,0,2])

    def test_can_store_multiple_games(self):
        pass

    def test_only_allows_correct_player_to_move(self):
        pass

    def test_checks_for_win(self):
        pass

    def test_checks_for_tie(self):
        pass
