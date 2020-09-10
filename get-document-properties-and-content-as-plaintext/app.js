const { PanvivaClient, ResourceApiKeys} = require('@panviva/node-sdk');
const {endpoint, instance, Key} = require('./config');

const panvivaClient = new PanvivaClient(instance, endpoint);

panvivaClient.setApiKey(ResourceApiKeys.apiKeyHeader, Key);

panvivaClient.getDocumentById(785).then((response) => {
  
  for (key in response.body){
    console.log(key,response.body[key]);
  }

}).catch((ex) => console.error(ex));
