'use strict';

module.exports.register = async event => {
  
  //console.log('Registering user');

  const userInfo = {
    name: "John",
    email: "john@example.com"
  };

    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          message: 'User Registered',
          input: event,
        },
        null,
        2
      ),
    };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
