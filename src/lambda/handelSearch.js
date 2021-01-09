const axios = require("axios");

const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.TMDB_API_KEY}`

exports.handler = async function (event, context) {
    let {query,page} = event.queryStringParameters;
    let respons = await axios.get(apiUrl + "&query=" + query + "&page=" + page)
    let data = respons.data
  return {
    statusCode: 200,
    body: JSON.stringify({
      ...data
    }),
  };
};
