// 1

function threeTimes(callback){
    callback()
  callback()
  callback()
}

function logHello(){
    console.log('Hello!')
}

// 2

threeTimes(logHello)

function inFiveSeconds(callback) {
	setTimeout(() => {
    	callback()
    },5000)
}

// 3
// first way
inFiveSeconds(ham)
function ham (){
console.log( 'Hello from five seconds ago')
}

// second way

inFiveSeconds(() =>  console.log( 'Hello from five seconds ago'))


