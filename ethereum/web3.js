const Web3 = require('web3');
let web3;

//since we are making use of server side rendering 
//hence our complete react code is rendered at server
//and our server sends our browser the html code got after executing react code at server side
//hence it is very fast in comparison to create-react-app 

if(typeof window!=='undefined' && typeof window.web3!=='undefined')
{
    //we are in the browser and metamask is running(2nd condition is we are checking if the metamask has already injected web3)
    web3 = new Web3(window.web3.currentProvider);
}
else{
    //we are on server or metamask is not installed in this case we have to make our own provider
    //we are making our own provider which is accessing the network by this url
    const provider = new Web3.providers.HttpProvider(
        'https://rinkeby.infura.io/3VVQx8fMEasaAFtBDewd'
    );
    web3 = new Web3(provider)
}


export default web3;