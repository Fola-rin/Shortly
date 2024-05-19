const API_ENDPOINT = 'https://cleanuri.com/api/v1/shorten';

const getUrl = async (request, context) => {
  try {
    // construct headers
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    //get query from url
    const query = new URL(request.url).searchParams;
    let urlString = encodeURI(query.get('url'));

    if (!urlString || typeof urlString !== 'string' || urlString.length > 100) {
      return new Response(JSON.stringify({ error: 'Invalid URL' }), { status: 400 });
    }

    // check if passed url contains valid protocol
    const containsProtocol = urlString.startsWith('https://') || urlString.startsWith('http://');
    urlString = urlString.includes(".") ? containsProtocol ? urlString : 'http://' + urlString : '';

    try {      
      // to test if the url is valid
      const testUrl = new URL(urlString);

      // send request to cleanurl endpoint
      const response = await fetch(API_ENDPOINT, {
        method: 'POST',
        headers: myHeaders,
        body : JSON.stringify({url:urlString}),
        redirect: 'follow'
      });
      const data = await response.json();
      
      // return valid response
      if (data.error) {
        // return error message
        return Response.json({ error: data.error}, { status: 500 });
      }
      else {
        return new Response(
          JSON.stringify({data: data, ok: true}),
          {
            headers: {
              'Access-Control-Allow-Origin': `${process.env.REACT_APP_URL}`,
              'Access-Control-Allow-Headers': "Content-Type",
              'Access-Control-Allow-Methods': "GET, POST, OPTIONS"
            }
          }
        );
      }
    } catch (error) {
      console.log(error);
      // return error message if url is invalid
      return Response.json({ error: 'URL is invalid' }, { status: 500 });
    }
  } catch (error) {
    console.log(error);
    // Catch any other errors
    return Response.json({ error: 'Failed fetching data' }, { status: 500 });
  }
};
export default getUrl;