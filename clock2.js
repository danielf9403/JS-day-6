class Clock { 
    constructor(time) { 
        this.time = time; 
        this.alarmTime = 0; 
    }

    setTime() { 
        this.time = new Date().toLocaleTimeString(); 
    }
     
    setAlarmTime() { 
        this.alarmTime = new Date().getTime(); 
    }

    getTime() { 
        this.time = setTime(); 
        return this.time;
    }

    tellTime() {
        console.log(this.getTime()); 
    }

    setAlarm(duration) { 
        let futureTime = new Date().getTime() + duration;

        while (this.alarmTime < futureTime) {
            this.setAlarmTime(); 
        }
        console.log("time up! you should get up");
     }
 }
 
const clock = new Clock(); 
// console.log(clock.getTime()); 
// setTimeout(() => { 
// clock.tellTime(); 
// }, 5000); 

clock.setAlarm(5000);