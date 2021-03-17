

const getHour = () => {
    const date = new Date();
    const time = {
        hour: date.getHours(),
        minute: date.getMinutes(),
        second: date.getSeconds()
    };

    const timeNow = `${time.hour} : ${time.minute} : ${time.second}`;
    document.querySelector(".clock").innerHTML = timeNow;
};
setInterval(getHour, 1000);