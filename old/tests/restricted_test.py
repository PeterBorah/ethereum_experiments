import eth_tools
from nose.tools import assert_equal

class TestRestricted:
    def setup(self):
        self.blockchain = eth_tools.Blockchain()
        self.contract = eth_tools.Contract(self.blockchain, "contracts/restricted.se")

    def test_works(self):
        self.contract.invoke(["store", 42])
        storage = hex(self.contract.invoke(["intro"])[0])[2:-1]
        assert_equal(self.blockchain.invoke(storage, []), [42])
        self.contract.invoke(["store", 43])
        assert_equal(self.blockchain.invoke(storage, []), [43])
        assert_equal(self.blockchain.invoke(storage, ["store", 41]), [2])
        assert_equal(self.blockchain.invoke(storage, []), [43])
