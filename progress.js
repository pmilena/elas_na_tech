document.addEventListener("DOMContentLoaded", function () {
    const numbers = ["number1", "number2", "number3", "number4", "number5"];
    
    numbers.forEach((numberId, index) => {
        const numberElement = document.getElementById(numberId);
        let counter = 0;

        function updateCounter() {
            if (counter === [65, 60, 50, 50, 40][index]) {
                clearInterval(interval);
            } else {
                counter += 1;
                numberElement.innerHTML = counter + "%";
            }
        }

        updateCounter();

        const interval = setInterval(updateCounter, 20);
    });
});


