import React,{Component} from 'react';
import Layout from '../../components/Layout';
import  { Form, Button,Input,Message } from 'semantic-ui-react';
import factory from '../../ethereum/factory';
import web3 from '../../ethereum/web3';
import {Route} from '../../routes';

class CampaignNew extends Component {
    state = {minContribution:'',loading:false,errorMessage:''}

    create = async(event) => {

        event.preventDefault();
        this.setState({loading:true,errorMessage:''});
        
        try {
            const accounts = await web3.eth.getAccounts();
            await factory.methods.createCampaign(this.state.minContribution).send({from:accounts[0]});
            this.setState({loading:false,errorMessage:''});
            Route.pushRoute('/')
            


        }
        catch(err)
        {
            this.setState({errorMessage:err.message,loading:false})

        }
       


    }
    //if errorMessage is empty then we won't show anything note that empty is considered as false in javascript
    render() {
        return(
            
              <Layout>
                  <h3>Create a Campaign</h3>
                  
                  <Form onSubmit={this.create} error={!!this.state.errorMessage} >
                      <Form.Field>
                          <label>Minimum Contribution</label>
                          <Input label="wei" labelPosition="right" style={{width:"80%"}} value={this.state.minContribution} onChange={(event)=> this.setState({minContribution:event.target.value})} />
                     </Form.Field>
                     <Message error negative>
                        <Message.Header>Something went wrong</Message.Header>
                        <p>{this.state.errorMessage}</p>
                        </Message>
                     <Button loading={this.state.loading}  primary content="Create"/>
                  </Form>

                 
              </Layout>
            
            
        );
    }
}

export default CampaignNew;