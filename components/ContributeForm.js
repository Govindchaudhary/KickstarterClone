import React,{Component} from 'react';
import  { Form, Button,Input,Message } from 'semantic-ui-react';
import web3 from '../ethereum/web3';
import findCampaign from '../ethereum/campaign';
import {Router} from '../routes'

class ContributeForm extends Component {
    state={contribution:'',loading:false,errorMessage:''}
    submit =async(event) => {
        event.preventDefault();
        this.setState({loading:true})
       
        try {
            const campaign = await findCampaign(this.props.address);
            const accounts = await web3.eth.getAccounts();
            await campaign.methods.contribute().send({
                from:accounts[0],
                value:web3.utils.toWei(this.state.contribution,'ether')
            });
            
            Router.replaceRoute(`/campaigns/${this.props.address}`);
            this.setState({loading:false});

        }
        catch(err) {
            this.setState({errorMessage:err.message,loading:false})
        }
        


    }
    render() {
        return(
            <Form onSubmit ={this.submit} error={!!this.state.errorMessage}>
                <Form.Field>
                    <label>Amount to Contribute</label>
                    <Input label="ether" labelPosition="right" value={this.state.contribution } onChange ={(event) => this.setState({contribution:event.target.value})}/>
                    
                </Form.Field>
                <Message negative error header="something went wrong" content={this.state.errorMessage}/>
                <Button loading={this.state.loading} primary content="Contribute"/>
            </Form>

        )
    }
}

export default ContributeForm;