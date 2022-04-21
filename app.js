const API_KEY='2230965ea9a293ce345df62e34393333';
const btn = document.querySelector('.btn-search');

btn.addEventListener('click',()=>{
    fetchWeather(document.querySelector('.search-inp').value)
    
})

document.querySelector('.search-inp').addEventListener('keyup',(e)=>{
    if (e.key=='Enter') {
        console.log(e);
        fetchWeather(document.querySelector('.search-inp').value)
        document.querySelector('.search-inp').value=''
    }
    
})


function fetchWeather(city) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`).then((response)=>{
        response.json().then((response)=>{
            console.log(response);
            setData(response);
        })
    })
}
fetchWeather('kochi')

function setData(data) {
    const time =( (data.dt+data.timezone)/(1000*60*60))
    document.querySelector('.city-name span').textContent=data.name
    document.querySelector('.ctemp ').textContent=data.main.temp + '°C'
    document.querySelector('.description').textContent=data.weather[0].description
    document.querySelector('.icons').src="http://openweathermap.org/img/w/" + data.weather[0].icon + ".png"
    document.querySelector('.humidity').textContent='Humidity : ' + data.main.humidity + '%'
    document.querySelector('.wind').textContent='Wind Speed : ' + data.wind.speed + 'km/h'
    document.querySelector('.feels-like').textContent= 'Feels Like  '+ data.main.feels_like
    document.body.style.backgroundImage="url('https://source.unsplash.com/1600x900/?"+ data.name +"')"
    document.querySelector('.innerdiv').classList.remove('loading')
    document.body.classList.remove('img-loading')
     
    console.log(time);
}