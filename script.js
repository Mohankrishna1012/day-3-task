var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all");
request.send();
request.onload=function(){
    var restcountries = JSON.parse(request.response);
    for(let i=0;i<restcountries.length;i++){
        console.log(restcountries[i].flag);
    }

};
