exports.handler = async function (event, context) {
    console.log("I am Serverles function");
    let value = event.multiValueQueryStringParameters;
    console.log(event.multiValueQueryStringParameters);
  return {
    statusCode: 200,
    body: JSON.stringify({
      ...value,
      path: event.path,
    }),
  };
};
