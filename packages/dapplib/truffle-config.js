require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid area fringe speak guard render remain prosper gesture forum force general'; 
let testAccounts = [
"0x1701f673eb466e047820c21ba3c01a4192cfdb3351b9b162f3be0ec20bd6e689",
"0x97fd692724ed7495500a40ef5f08d8186d4d833b307d740bd0de1a04f5c03c0b",
"0xe404302a0eaab22af6c359679b6a1eccb9eb1904e5752f61ce1274e37e806210",
"0x84c0289961a632d5d0ee05063b29ac67918e93d08af32c6abae6e0cf4e566eb1",
"0xc7a8dfffff028c7cca28e4d4820fd5e63196a507d105ca127400195e19019cfa",
"0xc91f47287a116ec982b9164315e4ce1d05feed6c733f62c76087eb314848f509",
"0xe383be24635a46841ae907d4592831b5759d6f7c32ca0fbe98a8e0f93b3c8420",
"0x78dbf3fae337288856e246fbfc71485fbc46af0930017995fa0a68161f01a503",
"0x19cf40d422daa2c018bd1d924a945dca68a2e2f8bf97ec406d5b8701542216bb",
"0x568c16989cffc1055d04061d5344dac7eff9ee0bf652921ea3a8ccbbd32bd733"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
