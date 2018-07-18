import React,{Component} from 'react';
import web3 from '../ethereum/web3';
import {Table,Button,Modal,Icon} from 'semantic-ui-react';
import findCampaign from '../ethereum/campaign';
import {Router} from '../routes';

class RequestRow extends Component {
    state={approverLoading:false,finalizeLoading:false,errorApprove:'',errorFinalize:'',showError:false}
    

    approve =async() => {
        this.setState({approverLoading:true,errorApprove:''});
        try{
            const campaign = await findCampaign(this.props.address);
        const accounts = await web3.eth.getAccounts()
        await campaign.methods.approveRequest(this.props.index).send({from:accounts[0]});
        Router.replaceRoute(`/campaigns/${this.props.address}/requests`);
        this.setState({approverLoading:false});

        }
        catch(err)
        {
            this.setState({errorApprove:err.message,approverLoading:false});

        }
        

    }

    onFinalize = async() => {
        this.setState({finalizeLoading:true,errorFinalize:''})
        try{
            const campaign = await findCampaign(this.props.address);
        const accounts = await web3.eth.getAccounts()
        await campaign.methods.finalizeRequest(this.props.index).send({from:accounts[0]});
        Router.replaceRoute(`/campaigns/${this.props.address}/requests`);
        this.setState({finalizeLoading:false})
            
        }
        catch(err){
            this.setState({errorFinalize:err.message,finalizeLoading:false,showError:true})
        }
        
       

    }


    render(){
        return(
            <Table.Row style={this.props.requests.complete?{color:"gray"}:null}>
            <Table.Cell>{this.props.index}</Table.Cell>
            <Table.Cell>{this.props.requests.description}</Table.Cell>
            <Table.Cell>{web3.utils.fromWei(this.props.requests.value,'ether')}</Table.Cell>
            <Table.Cell>{this.props.requests.recipient}</Table.Cell>
            <Table.Cell>{this.props.requests.approvalCount}/{this.props.approversCount}</Table.Cell>
           {
               this.props.requests.complete?null:<Table.Cell><Button loading={this.state.approverLoading} color="green" basic content="Approve" onClick ={this.approve}/></Table.Cell>
            } 
            {
                this.props.requests.complete?null:<Table.Cell><Button loading={this.state.finalizeLoading} color="teal" disabled={this.props.requests.approvalCount >(this.props.approversCount/2)?false:true } basic content="Finalize" onClick={this.onFinalize}/></Table.Cell>
            }
            <Modal open={this.state.showError} size="tiny" >
                     <Modal.Header>Oops!! something went wrong</Modal.Header>
                        <Modal.Content >
      
                          <Modal.Description style={{color:"red"}}>
        
                            {this.state.errorFinalize}
                         </Modal.Description>
                       </Modal.Content>
                       <Modal.Actions>
                           <Button color='green' onClick={()=> this.setState({showError:false})} inverted>
                                 <Icon name='checkmark' /> Ok
                            </Button>
                        </Modal.Actions>
            </Modal>
         </Table.Row>

        )
    }
}
export default RequestRow