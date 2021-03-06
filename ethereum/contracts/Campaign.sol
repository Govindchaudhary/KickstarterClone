pragma solidity ^0.4.17;

contract CampaignFactory {
    
    address[] public deployedCampaigns;
    
    function createCampaign(uint minimum) public {
        address newCampaign = new Campaign(minimum,msg.sender);
        deployedCampaigns.push(newCampaign);
    }
    
    function getDeployedCampaigns() public view returns(address []) {
        return deployedCampaigns;
        
    }
}

contract Campaign {
    
    struct Request {
        string description;
        uint value;
        address recipient;
        bool complete;
        uint approvalCount;
        mapping(address => bool) approvals;
    }
    
    uint public minContribution;
    address public manager;
    mapping(address => bool) public approvers;
    uint public approversCount;
    Request[] public requests;
    
    modifier restricted() {
        require(msg.sender==manager);
        _;
    } 
    
    
    constructor(uint min , address creator) public {
        manager = creator;
        minContribution = min;
    }
    
    function contribute() public payable {
        require(msg.value> minContribution);
        approvers[msg.sender]=true;
        approversCount++;
    }
    
    function createRequest(string description, uint value,address recipient) public restricted{
        Request memory newRequest = Request({
            description:description,
            value:value,
            recipient:recipient,
            complete:false,
            approvalCount:0
        });
        requests.push(newRequest);
        
    }
    
    function approveRequest(uint index) public {
        require(approvers[msg.sender]);
        require(!requests[index].approvals[msg.sender]);
        requests[index].approvals[msg.sender]=true;
        requests[index].approvalCount++;
       
    }
    
    function finalizeRequest(uint index) public restricted {
        
        require(!requests[index].complete);
        require(requests[index].approvalCount > (approversCount/2));
        
        requests[index].recipient.transfer(requests[index].value);
        
        requests[index].complete=true;
        
        
    }

    function getSummary() public view returns(uint, uint, uint, uint, address) {
        return(
            minContribution,
            this.balance,
            requests.length,
            approversCount,
            manager
        );
    }

    function getRequestsCount()  public view returns(uint) {
        return  requests.length;
    }
    
    
}

