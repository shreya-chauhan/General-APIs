import AWS from 'aws-sdk';

AWS.config.update({
  region: "us-east-1"
});
let documentClient = new AWS.DynamoDB.DocumentClient();

async function addToFavourite(orgId: string , id: string, pageName: string, pageLink: string){
  let params = {
    TableName : "wem-hackathon-page",
    Item: {
       OrgId: orgId,
       Id: id,
       name: pageName,
       link:  pageLink
    }
  };

  const result = await documentClient.put(params, function(err, data) {
    if (err) return err;
    else return data;
  }).promise();
  return result;
}

async function deleteFavourite(orgId: string , id: string){
  let params = {
    TableName : 'wem-hackathon-page',
    Key: {
      "OrgId": orgId,
      "Id": id
    }
  };

  const result = await documentClient.delete(params, function(err, data) {
    if (err) return err;
    else return data;
  }).promise();
  return result;
}


async function getAllFavourite() {
  let params = {
    TableName : 'wem-hackathon-page'
  };
  
  const result = await documentClient.scan(params, function(err, data) {
    if (err) return err;
    else  if(data) {
        return data;
    } 
  }).promise();
  return result;

}

export default {addToFavourite, deleteFavourite, getAllFavourite};

