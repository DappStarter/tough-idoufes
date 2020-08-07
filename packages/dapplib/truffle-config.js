require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner knife flush space story rate saddle proud grace office army giant'; 
let testAccounts = [
"0x35befdfc751c4a7049d7e34a235674dfd61c0411b21ba2e553c2a2ecbb0a6053",
"0xbdcc2b3cce1953322d3a5b5f5510fa91467f56147af8cfbe3aad19c6dd3e9ebc",
"0x81a867fd9d172e09c1d46d24556db947fdb0cf6553ed8db0247b0133a68d3285",
"0xd5c293dea90eed365ba7aa984503cf863ec48cb14c560fed958119dcf8ac2f40",
"0x20744d78675944e0eadf02eed9525ed026b8d412a66a9f35f6c8b47582321a42",
"0xff7fc7da9cdb66c93c4d9d08851420cf3e3be3ae32cd65d2dbac1b5cb963c163",
"0x6bc906b7b844cfc703ff43ff89dfbc1d0e43f6299b2884377f2343874e1289c8",
"0x4e6ae9f9dd6f289b6ee01e40a0bfe5c92c02c8fa1edb361f7c4eceff1c38b7a0",
"0x0b8711fd6773ec85fc8181faf846d0164c64d268e6d8b3be079194df0e8a0193",
"0x455637a64fd7c8e6a897e3e08d46a1fa0bda9d326c63d4e95e8252664b271149"
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
