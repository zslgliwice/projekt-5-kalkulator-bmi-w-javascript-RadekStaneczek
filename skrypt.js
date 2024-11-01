let masa = document.querySelector("#masa").value;
let wzrost = document.querySelector("#wzrost").value;
let option = document.querySelector("#option").value
function oblicz(outputdiv)
{
    if(masa != 0 && wzrost != 0)
    {
        let BMI = 0;
        let div = document.querySelector(outputdiv);

        if(option == "cm")
        {
            wzrost /= 100;
        
        }

	    BMI = masa / Math.pow(wzrost,2);

        div.innerHTML = `BMI:${BMI}<br>`;
        if(BMI < 18.5){div.innerHTML += "niedowaga";}
        else if(BMI >= 18.5 && BMI <= 24.9){div.innerHTML += "waga prawidłowa";}
        else if(BMI > 24.9 && BMI < 30){div.innerHTML += "nadwaga";}
        else if(BMI >= 30){div.innerHTML += "otyłość";}
    }
    else
    {
        div.innerHTML = "Brakuje danych";
    }
}
