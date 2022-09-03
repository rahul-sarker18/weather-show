const url = "138c25f821b23eb43b02abf40657014b";

const apilode =search =>{
    const api =`https://api.openweathermap.org/data/2.5/weather?q=
    ${search}&appid=${url}&units=metric`
    fetch(api)
    .then(res => res.json())
    .then(data => ui(data))
}
apilode()
const ui = data =>{
    console.log(data)
    const tempr =document.getElementById('temperature');
    tempr.innerText= data.main.temp

    const city =document.getElementById('city');
    city.innerText = data.name;

    const supt =document.getElementById('supatg');
    supt.innerText=data.sys.country;

    const conditions =document.getElementById('condition')
    conditions.innerText=data.weather[0].main
    console.log(conditions)

    spin(false);
}

const searchTemperature =()=>{
    spin(true);
    const input =document.getElementById('city-name').value;
    apilode(input);

}
// spinner 
const spin =istrue =>{
    const spinner =document.getElementById('spinner')
    if(istrue === true){
        spinner.classList.remove('d-none')
    }else{
        spinner.classList.add('d-none')
    }
}

// enter 
document.getElementById('city-name').addEventListener('keypress', function(x){
   if(x.key = 'Error'){
    searchTemperature()
   }
})
