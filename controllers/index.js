const request = require('request');
var data = null;
var url = 'http://m.lowes.com/CatalogServices/product/nvalue/v1_0?nValue=4294857975&maxResults=6&showURL=1&rollUpVariants=1&showUrl=true&storeNumber=0595&priceFlag=rangeBalance&showMarketingBullets=1';
request(url, function (error, response, body) {
    if (!error && response.statusCode == 200) {
        var body = JSON.parse(body);
        data = body;
    }else{
        console.log(response.statusCode)
    }
})


module.exports = async(ctx, next)=>{
    ctx.render('index.html',{
        // tasks: tasks
        starPro: data.productList[0],
        proList: data.productList,
        proListStr: JSON.stringify(data.productList)
    });
}