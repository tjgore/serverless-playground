import uuid from "uuid";
import * as yup from "yup";
import { success, failure } from "./libs/response";
import * as dynamoDbLib from "./libs/dynamodb";

export async function main(event, context, callback) {
  // Request body is passed in as a JSON encoded string in 'event.body'
  const data = JSON.parse(event.body);

  const schema = yup.object().shape({
    content: yup.string().required()
  });

  try {
    await schema.validate(data);
  } catch (e) {
    return failure({ status: e.errors });
  }

  const params = {
    TableName: process.env.tableName,
    Item: {
      noteId: uuid.v1(),
      content: data.content,
      createdAt: Date.now()
    }
  };

  try {
    await dynamoDbLib.call("put", params);
    return success(params.Item);
  } catch (e) {
    return failure({ status: false });
  }
}