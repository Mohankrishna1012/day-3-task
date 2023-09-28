var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload=function(){
    var restcountries = JSON.parse(request.response); 
    console.log(restcountries.map((country) => country.region));
    console.log(restcountries.map((country) => country.subregion));
    console.log(restcountries.map((country) => country.population));
    console.log(restcountries.map((country) => country.name.common));
 
};
