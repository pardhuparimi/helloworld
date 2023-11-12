// /**
//  * A Lambda function that returns a string.
//  */
// exports.helloFromLambdaHandler = async () => {
//     // If you change this message, you will need to adjust tests in hello-from-lambda.test.js
//     const message = 'Hello from the updated Lambda!';

//     // All log statements are written to CloudWatch by default. For more information, see
//     // https://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-logging.html
//     console.log(message);

//     return message;
// };


// Importing the types from AWS Lambda
import { Handler } from 'aws-lambda';

/**
 * A Lambda function that returns a string.
 */
export const helloFromLambdaHandler: Handler = async () => {
    // If you change this message, you will need to adjust tests in hello-from-lambda.test.ts
    const message: string = 'Hello from the updated Lambda!';

    // All log statements are written to CloudWatch by default. For more information, see
    // https://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-logging.html
    console.log(message);

    return message;
};
