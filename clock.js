class Clock {
    constructor(time, setTime) {
        this.time = time;
        this.setTime = setTime;
    }

    setTime() {
        this.time = getCurentTime()
    }

    getTime() {
        this.time = getCurentTime();
        return this.time;
    }

    tellTime() {
        console.log(this.getTime());
    }

}

const Clock = new Clock();