import eth_tools
from nose.tools import assert_equal

class TestSimpleObjectStore:
    def setup(self):
        bc = eth_tools.Blockchain()
        self.contract = eth_tools.Contract(bc, "contracts/stack.se")

    def test_stores(self):
        self.contract.invoke(["push",42])
        assert_equal(self.contract.invoke([]), [42])
        self.contract.invoke(["push",43])
        assert_equal(self.contract.invoke([]), [42, 43])

    def test_pops(self):
        self.contract.invoke(["push",42])
        assert_equal(self.contract.invoke([]), [42])
        assert_equal(self.contract.invoke(["pop"]), [42])
        assert_equal(self.contract.invoke([]), [])
