const { PanvivaClient, ResourceApiKeys} = require('@panviva/node-sdk');
const {endpoint, instance, key , id} = require('./config');

const panvivaClient = new PanvivaClient(instance, endpoint);
panvivaClient.setApiKey(ResourceApiKeys.apiKeyHeader, key);

const mergeDoc = async () => {
  const doc = await panvivaClient.getDocumentById(id)
  const containers = await panvivaClient.getDocumentByIdContainers(id)
  return {...doc.body, ...containers.body}
}

mergeDoc()
  .then(console.log).catch(console.log)