let height = document.getElementById('height');
let weight = document.getElementById('weight');
let score = document.getElementById('check_btn');
let male_res = document.getElementById('male_sts');
let female_res = document.getElementById('female_sts');
let bmi = document.getElementById('score');


const cal_bmi = ()=>{
    let res = (weight.value / ((height.value/100)*(height.value/100)));
    // console.log(res.toFixed(2));
    bmi.innerText = res.toFixed(2);

    if(res.toFixed(2) < 18.50){
        // console.log("underweight")
        male_res.innerText = "Underweight"    
        female_res.innerText = "Underweight"
        male_res.style.background = "yellow"
        female_res.style.background = "yellow"
        bmi.style.color = "yellow"

    } else if(res.toFixed(2) > 18.5 && res.toFixed(2) < 24.9){
        // console.log("healthy")
        male_res.innerText = "Healthy"
        female_res.innerText = "Healthy"
        male_res.style.background = "green"
        female_res.style.background = "green"
        bmi.style.color = "green"
    } else if(res.toFixed(2) > 25 && res.toFixed(2) < 29.9){
        // console.log("overweight")
        male_res.innerText = "Overweight"
        female_res.innerText = "Overweight"
        male_res.style.background = "orange"
        female_res.style.background = "orange"
        bmi.style.color = "orange"
    } else {
        // console.log("obese")
        male_res.innerText = "Obese"
        female_res.innerText = "Obese"
        male_res.style.background = "red"
        female_res.style.background = "red"
        bmi.style.color = "red"
    }
}

score.addEventListener('click',()=>{
    cal_bmi();
})
