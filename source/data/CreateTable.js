var AWS = require("aws-sdk");

AWS.config.update({
  region: "us-east-1"
});

var dynamodb = new AWS.DynamoDB();

var params = {
  AttributeDefinitions: [
     {
    AttributeName: "OrgId", 
    AttributeType: "S"
   }, 
     {
    AttributeName: "Id", 
    AttributeType: "S"
   }
  ], 
  KeySchema: [
     {
    AttributeName: "OrgId", 
    KeyType: "HASH"
   }, 
     {
    AttributeName: "Id", 
    KeyType: "RANGE"
   }
  ], 
  ProvisionedThroughput: {
   ReadCapacityUnits: 5, 
   WriteCapacityUnits: 5
  }, 
  TableName: "wem-hackathon-page"
};

dynamodb.createTable(params, function(err, data) {
  if (err) console.log(err, err.stack); // an error occurred
  else     console.log(data);           // successful response
});