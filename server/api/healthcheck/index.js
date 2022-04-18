
exports.handler =  async function() {
  return {
    statusCode: 200,
    headers: {
        "Access-Control-Allow-Origin" : process.env.CORS_ORIGIN,
    },
    body: "SUCCEED",
  }
}  
  
