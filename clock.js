function getTime(){
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    let time = `${hours}:${minutes}:${seconds}`;
    document.getElementById('clock').innerHTML = time;
}
getTime();
setInterval(getTime, 1000);