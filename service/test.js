const http = require('http')

var url = 'http://m.lowes.com/CatalogServices/product/nvalue/v1_0?nValue=4294857975&maxResults=6&showURL=1&rollUpVariants=1&showUrl=true&storeNumber=0595&priceFlag=rangeBalance&showMarketingBullets=1';


http.get(url, (res) => {
    console.log(res);
    const { statusCode } = res;
    const contentType = res.headers['content-type'];

    let error;
    if (statusCode !== 200) {
      error = new Error('Request Failed\n' +
                        `Status Code: ${statusCode}`);
    } else if (!/^application\/json/.test(contentType)) {
      error = new Error('Invalid content-type.\n' +
                        `Expect application/json But what we get is ${contentType}`);
    }
    if (error) {
      console.error(error.message);
      res.resume();
      return;
    }
  const http = require('http')
    res.setEncoding('utf8');
    let rawData = '';
    res.on('data', (chunk) => { rawData += chunk; });
    res.on('end', () => {
      try {
        const parsedData = JSON.parse(rawData);
        console.log(parsedData);
      } catch (e) {
        console.error(e.message);
      }
    });
  }).on('error', (e) => {
    console.error(`Error: ${e.message}`);
  });
