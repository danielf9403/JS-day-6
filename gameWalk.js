/// 1

const character = createCharacter(10, 10, 'assets/green-character')

character.walkEast()
setTimeout(() =>{ character.stop()
  character.walkNorth()
  setTimeout(() =>{
    character.walkEast()
    setTimeout(() =>character.stop(),500)
    
  } ,500)
}, 500) 


 // 2



character.walkEast()
setTimeout(() =>{ character.stop()
  character.walkNorth()
  setTimeout(() =>{
    character.walkEast()
    setTimeout(() =>character.stop(),500)
    
  } ,500)
}, 500) 

// 3

const character_1 = createCharacter(10, 10, 'assets/green-character')
const character_2 = createCharacter(100, 100, 'assets/green-character')

 character_1.walkEast()
setTimeout(() =>{ character_1.stop()
  character_1.walkNorth()
  setTimeout(() =>{
    character_1.walkWest()
    setTimeout(() =>character_1.stop(),500)
    
  } ,500)
}, 750)    

character_2.walkWest()
setTimeout(() =>{ character_2.stop()
  character_2.walkSouth()
  setTimeout(() =>{
    character_2.walkEast()
    setTimeout(() =>character_2.stop(),500)
    
  } ,500)
}, 750)    

// 4

function startLoop(){
    character.walkEast() 
    setTimeout(()=>{ 
      character.walkNorth() 
      setTimeout(()=>{ 
        character.walkWest() 
        setTimeout(()=>{ 
          character.walkSouth() 
          setTimeout(()=>
            startLoop(),500) 
        },1000) 
      } ,500) 
    },1000) }