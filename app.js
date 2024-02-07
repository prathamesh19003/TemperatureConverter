const submit = document.querySelector("#button");
        submit.addEventListener('click', convertTemp);

        function convertTemp() {
            let input = parseFloat(document.querySelector("#inputBox").value);
            let option = document.querySelector("#unit").value;
            let convertedTemperature;

            if (isNaN(input)) {
                alert("Enter a valid numeric value");
            } else {
                if (option === "celsius") {
                    convertedTemperature = (input - 32) * 5/9;
                    document.querySelector(".text").innerText = `${input} degree Fahrenheit = ${convertedTemperature.toFixed(2)} degree Celsius`;
                } else if (option === "fahrenheit") {
                    convertedTemperature = (input * 9/5) + 32;
                    document.querySelector(".text").innerText = `${input} degree Celsius = ${convertedTemperature.toFixed(2)} degree Fahrenheit`;
                } else {
                    alert("Unsupported unit selected");
                }
            }
        }
