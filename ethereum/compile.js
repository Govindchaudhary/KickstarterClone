const path = require('path');
const solc = require('solc');
const fs = require('fs-extra');


/*
-------------for single run compilation-----------------
delete entire 'build' folder
read campaign.sol from contracts folder
compile both contracts with solidity compiler
write output in json format in build directory

*/

const buildPath = path.resolve(__dirname,'build');
fs.removeSync(buildPath);

const campaignPath = path.resolve(__dirname,'contracts' , 'Campaign.sol');
const source = fs.readFileSync(campaignPath,'utf-8');
const output = solc.compile(source,1).contracts;

fs.ensureDirSync(buildPath)  //check build folder exist or not if not it makes one.

for (let contract in output) {
    fs.outputJSONSync(
        path.resolve(buildPath, contract.replace(':',"") + '.json'),
        output[contract]
    );
}