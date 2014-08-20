import eth_tools
from nose.tools import assert_equal

class TestNaivePriorityQueue:
    def setup(self):
        bc = eth_tools.Blockchain()
        self.contract = eth_tools.Contract(bc, "contracts/naive_priority_queue.se")

    def test_pops(self):
        self.contract.invoke([123,42])
        self.contract.invoke([321,41])
        self.contract.invoke([111,50])
        assert_equal(self.contract.invoke([]), [111])
        assert_equal(self.contract.invoke([]), [123])
        assert_equal(self.contract.invoke([]), [321])
