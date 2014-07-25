import serpent
from pyethereum import transactions, blocks, processblock, utils

class Contract(object):
    def __init__(self, filename):
        self.code = serpent.compile(open(filename).read())
        self.key = utils.sha3('cow')
        self.addr = utils.privtoaddr(self.key)
        self.genesis = blocks.genesis({ self.addr: 10**18 })
        tx1 = transactions.contract(0,10**12,10000,0,self.code).sign(self.key)
        result, self.contract = processblock.apply_transaction(self.genesis,tx1)

        self.nonce = 0

    def invoke(self, arg_list):
        self.nonce += 1
        tx2 = transactions.Transaction(self.nonce,10**12,10000,self.contract,0,serpent.encode_datalist(arg_list)).sign(self.key)
        result, ans = processblock.apply_transaction(self.genesis,tx2)
        return serpent.decode_datalist(ans)
