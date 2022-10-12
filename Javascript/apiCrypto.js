/* API COIN */
var doge = document.getElementById("dogecoin");

        var setting = {
            "async" : true,
            "scroosDomain": "true",
            "url": "https://api.coingecko.com/api/v3/simple/price?ids=dogecoin&vs_currencies=usd",
            "method": "GET",
        }
        $.ajax(setting).done(function (response){
            doge.innerHTML = response.dogecoin.usd;
            console.log(response);
        });



