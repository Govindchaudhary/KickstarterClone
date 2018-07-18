import React,{Component} from 'react';
import factory from '../ethereum/factory';
import {Link} from '../routes';
import Layout from '../components/Layout';
import {Card,Grid,Button} from 'semantic-ui-react';


//if we want to do the server-side rendering stuff  componentDidMount()will not be executed at server 
//we have to do our initial data loading in the getInitialProps function(lifecycle available with nextjs only)

class CampaignList extends Component {

    static async getInitialProps() {
        const campaigns =   await factory.methods.getDeployedCampaigns().call();
        return {campaigns:campaigns};  //this object will be provided to our component as props
    }

    renderCampaigns() {
      const items =  this.props.campaigns.map((address) => {
          return({
              header:address,
              description:<Link route={`/campaigns/${address}`}><a>View Campaign</a></Link>,
              fluid:true
          })

        });

        return <Card.Group items={items}/>
    }

     render() {
         return(

        <Layout>
            <Grid>
               
                <Grid.Column width={10}>
                    {this.renderCampaigns()}
               </Grid.Column>
               <Grid.Column width={6}>
                  <Link route="/campaigns/new"><a><Button primary content='Create Campaign' icon="add circle" labelPosition="left"/></a></Link>  
               </Grid.Column>
             </Grid>
        </Layout>
         )
     }
}

export default CampaignList;