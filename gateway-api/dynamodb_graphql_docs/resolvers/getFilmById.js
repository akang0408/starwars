// eslint-disable-next-line @typescript-eslint/no-var-requires
const AWS = require('aws-sdk');
const dynamoDB = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
  const { filmId } = event.arguments;

  const params = {
    TableName: 'Films',
    Key: { filmId },
  };

  try {
    const data = await dynamoDB.get(params).promise();
    return data.Item;
  } catch (error) {
    console.error('Error retrieving film:', error);
    throw new Error('Error retrieving film');
  }
};
