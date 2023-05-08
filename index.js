let hour, timer, minute, second,interval;

let getSeconds =0, getMinutes =0, getHours =0;


function stopWatch () {
    this.start= function(){
        hour = document.getElementById("hour")
        minute = document.getElementById("minute")
        second = document.getElementById("second")

        if(getSeconds >=0){
            getSeconds ++;
            second.innerHTML = getSeconds;
        }  if(getSeconds >=10){
          
            second.innerHTML = getSeconds;
        }
        if(getSeconds >=59){
            getSeconds =0;
            getMinutes ++;
            minute.innerHTML = getMinutes;
        }
      if(getMinutes <10){
        minute.innerHTML = "0"+ getMinutes+":";
    }
    if(getMinutes >=60){
        getMinutes =0;
        getHours ++;
        getHours.innerHTML = getHours;
    }
    if(getHours <10){
        hour.innerHTML = "0"+ getHours+":";
    }
    interval= setTimeout(object.start,1000)
    }
    this.stop = function(){
        clearTimeout(interval);
    } //stop the watch
    this.reset = function (){
        if(getSeconds >= 0){
            getSeconds =0;
            getMinutes =0;
            getHours =0;

            second.innerHTML = "0" + getSeconds;
            minute.innerHTML = "0" + getMinutes + " :";
            hour.innerHTML = "0" + getHours + " :";
            clearTimeout(interval);
        }
    }
}
let object = new stopWatch();