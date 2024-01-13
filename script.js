let response = document.getElementById('main-answer')
let timeGif = document.getElementById('time-gif');

(function () {
    const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

    let today = new Date(),
        dd = String(today.getDate()).padStart(2, "0"),
        mm = String(today.getMonth() + 1).padStart(2, "0"),
        yyyy = today.getFullYear(),
        nextYear = yyyy,
        dayMonth = "04/20/",
        leaveday = dayMonth + yyyy;

    today = mm + "/" + dd + "/" + yyyy;
    if (today > leaveday) {
        leaveday = dayMonth + nextYear;
    }

    const countDown = new Date(leaveday).getTime(),
        x = setInterval(function () {

            const now = new Date().getTime(),
                distance = countDown - now;

            document.getElementById("days").innerText = Math.floor(distance / (day)),
                document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
                document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
                document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

            if (distance < 0) {
                timeGif.src = 'https://media1.tenor.com/m/ycq2ZbotmAIAAAAC/three-finger-salute-good-luck.gif'
                response.src = 'https://i.pinimg.com/736x/0e/95/07/0e9507aa60aca253c3bccd4c4ba98c1f.jpg'
                document.getElementById("days").innerText = '00',
                    document.getElementById("hours").innerText = '00',
                    document.getElementById("minutes").innerText = '00',
                    document.getElementById("seconds").innerText = '00';
                clearInterval(x);
            }
        }, 0)
}());