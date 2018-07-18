import React,{Component} from 'react';
import Layout from '../../../components/Layout';
import {Form,Button,Input,Message} from 'semantic-ui-react';
import findCampaign from '../../../ethereum/campaign';
import web3 from '../../../ethereum/web3';
import {Router} from '../../../routes';

class NewCampaignRequest extends Component {
    state={money:'',description:'',recipient:'',loading:false,errorMessage:''}

   static getInitialProps(props) {
        return{address:props.query.address}
    }

    submit = async(event) =>{
        event.preventDefault();
        this.setState({loading:true,errorMessage:''})
        try {
            const campaign = await findCampaign(this.props.address);
            const accounts = await web3.eth.getAccounts();
            await campaign.methods.createRequest(this.state.description,web3.utils.toWei(this.state.money,'ether'),this.state.recipient)
            .send({from:accounts[0]});

            Router.pushRoute(`/campaigns/${this.props.address}/requests`)
            this.setState({loading:false});
            


        }
        catch(err) {
            this.setState({errorMessage:err.message,loading:false})
        }
        



    }
    render()
    {
        return(
            <Layout>
                <h3>Create a Request</h3>
                <Form onSubmit = {this.submit} error={!!this.state.errorMessage} style={{width:"70%"}}>
                    <Form.Field>
                        <label>Description</label>
                        <Input action={{  icon: 'address card' }} value={this.state.description} onChange={event => this.setState({description:event.target.value})}/>
                    </Form.Field>
                    <Form.Field>
                        <label>Value in ether</label>
                        <Input value={this.state.money} onChange={event =>this.setState({money:event.target.value})}/>
                    </Form.Field>
                    <Form.Field>
                        <label>Recipient</label>
                        <Input value={this.state.recipient} onChange={event => this.setState({recipient:event.target.value})}/>
                    </Form.Field>
                    <Message negative error header="something went wrong" content={this.state.errorMessage}/>
                    <Button loading={this.state.loading}  primary content="Create!"/>
                </Form>
            </Layout>
        )
    }
}
export default NewCampaignRequest;