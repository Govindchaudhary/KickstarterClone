import compiledCampaign from './build/Campaign.json';
import web3 from './web3';

export default async(address) => {
    const campaign = await new web3.eth.Contract(JSON.parse(compiledCampaign.interface),address);
    return campaign;

}