import eth_tools
from nose.tools import assert_equal

class TestMul2:
    def setup(self):
        bc = eth_tools.Blockchain()
        self.contract = eth_tools.Contract(bc, "contracts/mul2.se")

    def test_multiplies(self):
        assert_equal(self.contract.invoke([42]), [85])

