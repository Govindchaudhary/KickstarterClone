import React,{Component} from 'react';
import Layout from '../../components/Layout';
import findCampaign from '../../ethereum/campaign'
import web3 from '../../ethereum/web3';
import {Card,Grid,Button} from 'semantic-ui-react';
import ContributeForm from '../../components/ContributeForm';
import {Link} from '../../routes';

class CampaignShow extends Component {

   static async getInitialProps(props) {
       const campaign = await findCampaign(props.query.address);
       const campaignSummary = await campaign.methods.getSummary().call();
       
       return {
           minContribution:campaignSummary[0],
           balance:campaignSummary[1],
           requestsCount:campaignSummary[2],
           approversCount:campaignSummary[3],
           manager:campaignSummary[4],
           address:props.query.address


    };
}

displayCampaign() {
    const items = [
    {
        header:this.props.manager,
        meta:'Address of Manager',
        description:'the manager created this campaign and can create requests to withdraw money',
        style:{overflowWrap:'break-word'}
    },
    {
        header:this.props.minContribution ,
        meta:'Minimum Contribution (wei)',
        description:'You must have to contribute this much wei to become an approver'
    },
    {
        header:this.props.requestsCount,
        meta:'Number of Requests',
        description:'A request tries to withdraw the money from the contract and it must be approved by approvers'
    },
    {
        header:this.props.approversCount,
        meta:'Number of Approvers',
        description:'number of people who have already contributed to this campaign '
    },
    {
        header:web3.utils.fromWei(this.props.balance,'ether'),
        meta:'Campaign Balance(ether)',
        description:'the balance is how much money this campaign has left to spend'
    }
];
  return <Card.Group items={items}/>;
}
    render() {
        return(
           <Layout>
               <Grid>
                   <Grid.Row>
                       <Grid.Column width={10}>
                          {this.displayCampaign()}
                       </Grid.Column>
                
                       <Grid.Column width={6}>
                          <ContributeForm address={this.props.address} />
                       </Grid.Column>
                    </Grid.Row>
                    <Grid.Row style={{marginLeft:"1%"}}>
                        <Link route={`/campaigns/${this.props.address}/requests`}>
                        <a><Button primary content="View Requests"/></a>
                        </Link>
                    </Grid.Row>
              </Grid>
           </Layout>
        );
    }
}

export default CampaignShow;