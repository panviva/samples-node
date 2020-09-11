const { PanvivaClient, ResourceApiKeys} = require('@panviva/node-sdk');
const {endpoint, instance, key , fromDate} = require('./config');

const panvivaClient = new PanvivaClient(instance, endpoint);
panvivaClient.setApiKey(ResourceApiKeys.apiKeyHeader, key);

const date = new Date();
const month = ("0" + (date.getMonth() + 1)).slice(-2);
const year = date.getFullYear()

const mergeDoc = async () => {

  var query = "data.attributes.updatedDate:["+ year +"-"+ month +"-01 TO *]";
  const doc = await panvivaClient.search(query)
  return {...doc.body}
}

mergeDoc()
  .then(console.log)