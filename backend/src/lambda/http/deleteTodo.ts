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
    statusCode: 201,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true ,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      results
    })
  }
}
