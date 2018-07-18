import React,{Component} from 'react';
import Layout from '../../../components/Layout';
import { Table,Grid,Button } from 'semantic-ui-react';
import {Link} from '../../../routes';
import findCampaign from '../../../ethereum/campaign';
import web3 from '../../../ethereum/web3'
import RequestRow from '../../../components/RequestRow';

class CampaignRequests extends Component {

    static async getInitialProps(props) {
        const campaign = await findCampaign(props.query.address);
        const approversCount = await campaign.methods.approversCount().call();
        const requestsCount = await campaign.methods.getRequestsCount().call();
        

       //now we want an array of all the diffrent indexes from 0 to requestCount
       //Array(n).fill()  will create an array of indices from 0 to n
       //Promise.all() creates an array of promises that resolved when all the individual promise is resolved

       const requests = await Promise.all(
           Array(parseInt(requestsCount)).fill().map((element,index) => {
               return campaign.methods.requests(index).call()
           })
       );

     
        
        return {requests:requests,approversCount:approversCount,address:props.query.address}

    }

    
     renderRows() {
       return this.props.requests.map((request,index) => {
           return(
              <RequestRow
              key={index}
               requests={request} 
               index={index} 
               approversCount={this.props.approversCount} 
               address={this.props.address}/>
           )
       })
    }


    render() {
        return(
            <Layout>
                       <h3>Requests</h3>
                    
                        <Link route={`/campaigns/${this.props.address}/requests/new`}>
                          <a>  <Button floated="right" primary content="Add Request"/></a>
                        </Link>
                    
                        <Table striped style={{marginTop:"7%"}}>
                           <Table.Header>
                               <Table.Row>
                               <Table.HeaderCell>ID</Table.HeaderCell>
                                   <Table.HeaderCell>Description</Table.HeaderCell>
                                   <Table.HeaderCell>Amount(in Ether)</Table.HeaderCell>
                                   <Table.HeaderCell>Recipient</Table.HeaderCell>
                                   <Table.HeaderCell>Approval Count</Table.HeaderCell>
                                   <Table.HeaderCell>Approve</Table.HeaderCell>
                                   <Table.HeaderCell>Finalize</Table.HeaderCell>
                                </Table.Row>
                           </Table.Header>
                           <Table.Body>
                               {this.renderRows()}
                            </Table.Body>

                        </Table>

                        <div>{this.props.requests.length==0?"No":this.props.requests.length} request found</div>
                   

            </Layout>
        )
    }
}

export default CampaignRequests;