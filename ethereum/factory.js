import web3 from './web3';

import compiledFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(JSON.parse(compiledFactory.interface),'0x544DB0A91A260925035343262B7d99af0f1c2904');

export default instance;