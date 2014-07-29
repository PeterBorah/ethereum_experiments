import eth_tools
from nose.tools import assert_equal

class TestSimpleObjectStore:
    def setup(self):
        bc = eth_tools.Blockchain()
        self.contract = eth_tools.Contract(bc, "contracts/simple_object_store.se")

    def test_stores(self):
        self.contract.invoke([42])
        assert_equal(self.contract.invoke([]), [42])

    def test_stores_arrays(self):
        self.contract.invoke([42, 41, 40])
        assert_equal(self.contract.invoke([]), [42, 41, 40])
