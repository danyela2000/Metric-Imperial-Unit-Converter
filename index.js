/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const convertBtn = document.getElementById("btn-el")
const inputEl = document.getElementById("input-el")
const div1 = document.getElementById("div-1")
const div2 = document.getElementById("div-2")
const div3 = document.getElementById("div-3")

convertBtn.addEventListener("click", function(){
    
    
    if(inputEl.value === ""){

       alert('Please, enter a non-empty value!')
       
    } else if(inputEl.value < 0) {

        alert('Please, enter a positive value!')

    } else {

        function unitConv(firstUnit, secondUnit, unitConvert){
            return `<p>${inputEl.value} ${firstUnit} = ${(inputEl.value * unitConvert).toFixed(3)} ${secondUnit} | ${inputEl.value} ${secondUnit} = ${(inputEl.value/unitConvert).toFixed(3)} ${firstUnit}</p>`
        }
        
        div1.innerHTML = `<h3>Length (Meter/Feet)</h3>` + unitConv("meters", "feets", 3.281)
        
        div2.innerHTML = `<h3>Volume (Liters/Gallons)</h3>` + unitConv("liters", "gallons", 0.264)
        
        div3.innerHTML = `<h3>Mass (Kilograms/Pounds)</h3>` + unitConv("kilos", "pounds", 2.204)
    }
     
    
})
