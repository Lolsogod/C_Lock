let HouMin = 0;
function clock()
{
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    if(hours < 10)
        hours = "0" + hours;
    if(minutes < 10)
        minutes = "0" + minutes;
    seconds = seconds*6;

    HouMin= hours + ":" + minutes;

    document.getElementById("clok").innerHTML = HouMin;
    document.getElementById("sun").style.transform = `rotate(${seconds}deg)`
    Timer = setTimeout("clock()", 1000);
}