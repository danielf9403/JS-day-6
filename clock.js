class Clock {
    constructor(time) {
        this.time = time;
        this.alarmTime = 0;
    }

    setTime() {
        this.time = new Date().toLocaleTimeString();
    }

    setAlarmTime(){
        this.alarmTime = new Date().getTime();
    }

    getTime() {
        this.time = setTime();
        return this.time;
    }

    tellTime() {
        console.log(this.getTime()); 
    }

    setAlarm(durations) {
        let futureTime = new Date().getTime() + durations;
        
        while (this.alarmTime < futureTime) {
            this.setAlarmTime();
        }
        console.log("time up! you should get up!");
    }

}


const clock = new Clock();

clock.setAlarm(5000);

