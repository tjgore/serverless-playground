import * as dynamoDbLib from "./libs/dynamodb";
import { success, failure } from "./libs/response";

export async function main(event, context) {

  const params = {
    TableName: process.env.tableName,
  };

  try {
    const result = await dynamoDbLib.call("scan", params);
    // Return the matching list of items in response body
    return success(result.Items);
  } catch (e) {
    console.log(e);
    return failure({ status: false });
  }
}