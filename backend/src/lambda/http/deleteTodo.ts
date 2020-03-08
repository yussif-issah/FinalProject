import 'source-map-support/register'
import{deleteTodo} from '../../businessLogic/todos'
import { APIGatewayProxyEvent, APIGatewayProxyResult, APIGatewayProxyHandler } from 'aws-lambda'
/*const docClient=new AWS.DynamoDB.DocumentClient()
const Table=process.env.GROUPS_TABLE*/
export const handler: APIGatewayProxyHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  const todoId = event.pathParameters.todoId
  /*await docClient.delete({
    TableName: Table,
    Key:{
  "id":todoId
  },
    ConditionExpression:"id= :val",
    ExpressionAttributeValues: {
        ":val": todoId
    }
}).promise()*/
  const results=await deleteTodo(todoId)
  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true 
      //'Access-Control-Allow-Methods': 'OPTIONS,POST,GET,PUT,DELETE',
      //'Access-Control-Allow-Headers': 'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token'
    },
    body: JSON.stringify({
      results
    })
  }
}
