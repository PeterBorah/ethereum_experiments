import serpent
from pyethereum import transactions, blocks, processblock, utils

class Blockchain(object):
    def __init__(self):
        self.key = utils.sha3('cow')
        self.addr = utils.privtoaddr(self.key)
        self.genesis = blocks.genesis({ self.addr: 10**18 })
        self.nonce = 0

class Contract(object):
    def __init__(self, blockchain, filename):
        self.blockchain = blockchain

        code = serpent.compile(open(filename).read())
        tx1 = transactions.contract(self.blockchain.nonce,10**12,100000,0,code).sign(self.blockchain.key)
        result, self.contract = processblock.apply_transaction(self.blockchain.genesis,tx1)

        self.blockchain.nonce += 1

    def invoke(self, arg_list):
        tx2 = transactions.Transaction(self.blockchain.nonce,10**12,10000,self.contract,0,serpent.encode_datalist(arg_list)).sign(self.blockchain.key)
        result, ans = processblock.apply_transaction(self.blockchain.genesis,tx2)
        self.blockchain.nonce += 1
        return serpent.decode_datalist(ans)
