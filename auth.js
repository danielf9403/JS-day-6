class Authenticator {
    constructor(usreName, password) {
        this.usreName = usreName;
        this.password = password;
        passStore = {}
    }

    register(usreName, password) {
        this.passStore(usreName) = password;
        console.log("Account is created")
    }

    login(usreName, password) {
        if(this.passStore[usreName] === password) {
            console.log("thank you for coming back")
        }else {
            console.log("wrong password")
        } 
    }
}