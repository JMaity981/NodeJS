const submitBtn = document.getElementById('submitBtn');
const cityName = document.getElementById('cityName');
const cityShow = document.getElementById('cityShow');
const tempShow = document.getElementById('tempShow');
const tempStatusShow = document.getElementById('tempStatusShow');

const getInfo = async (event) =>{
    event.preventDefault();
    let cityVal= cityName.value;
    if(cityVal === ""){
        cityShow.innerHTML = '<span class="text-danger">Plz write the City name before Search</span>';
    }else{
        try{
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=ef476f15881decd6024175bff5ca2eda`;
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data]
            console.log(arrData);
            cityShow.innerText = arrData[0].name + ', ' + arrData[0].sys.country;
            tempShow.innerText = arrData[0].main.temp;
            tempStatusShow.innerText = arrData[0].weather[0].main;
        }catch{
            cityShow.innerHTML = '<span class="text-danger">Plz Enter the City Name Properly</span>';
        }

    }
}

submitBtn.addEventListener('click',getInfo);