var rover = {
  position: [0, 0], 
  direction: "N"
};
var tree = {
	position: [0, 0]
}
var sequence = "";


//*** I need a CONTROL FUNCTION, in case the rover moves off the grid!****

function controlFunction(rover){ //controls the rover from moving off the grid
	if (rover.position[0]>10){
		alert("Watch out the rover is moving off the grid!");
		rover.position[0]=0;
		
	}	else if (rover.position[0]<0){
		alert("Watch out the rover is moving off the grid!");
		rover.position[0]=10;
		
	}	else if (rover.position[1]>10){
		alert("Watch out the rover is moving off the grid!");
		rover.position[1]=0;
		
	}	else if (rover.position[1]<0){
		alert("Watch out the rover is moving off the grid!");
		rover.position[1]=10;
		
	}	
}
////// CHECK IF TREE IS AROUND AND GO BACK IF SO
function CheckTree (rover){
if (rover.position[0]== 3 && rover.position[1]== 5){
	console.log("dude, you hit the tree. Back up a bit.");
	switch (rover.direction){
    case "N":
      rover.position [1]--
      break;
    case "E":
      rover.position[0]--
      break;
    case "S":
      rover.position[1]++
      break;
    case "W":
      rover.position[0]++
      break;
     };
	}
}
/////////////////////////
function goForward(rover){
  switch(rover.direction){
    case "N":
      rover.position[1]++
      break;
    case "E":
      rover.position[0]++
      break;
    case "S":
      rover.position[1]--
      break;
    case "W":
      rover.position[0]--
      break;
  };
	controlFunction(rover);//if rover moves off grid, starts at the opposite side
	CheckTree(rover)
  console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]. ")
}


/////////////////////////
function goBackward(rover){
  switch (rover.direction){
    case "N":
      rover.position [1]--
      break;
    case "E":
      rover.position[0]--
      break;
    case "S":
      rover.position[1]++
      break;
    case "W":
      rover.position[0]++
      break;
     };
	CheckTree(rover)
	controlFunction(rover)//if rover moves off grid, starts at the opposite side
	
 console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]. ")
	
}

/////////////////////////
function turnLeft(rover){
  switch (rover.direction){
      case"N":
        rover.direction = "W"
        break;
      case"E":
        rover.direction = "N"
        break;
      case"S":
        rover.direction = "E"
        break;
      case"W":
        rover.direction = "S"
        break;
       };
	CheckTree(rover)
	controlFunction(rover)//if rover moves off grid, starts at the opposite side
  console.log("New Rover Direction: " + rover.direction + ". ")
}

//turnLeft(rover)
/////////////////////////
function turnRight(rover){
  switch (rover.direction){
      case"N":
        rover.direction = "E"
        break;
      case"E":
        rover.direction = "S"
        break;
      case"S":
        rover.direction = "W"
        break;
      case"W":
        rover.direction = "N"
        break;
       };
 console.log("New Rover Direction: " + rover.direction + ". ")
}

//turnRight(rover)
/////////////////////////

var sequence = prompt()

function commands(sequence){
	for (var i = 0; i < sequence.length; i++){
	SendIt(sequence[i])	
	}
}


function SendIt(sequence){
  switch(sequence){
    case "f":
      goForward(rover)
      break;  
  	case "b":
      goBackward(rover)
      break;
  
    case "l":
      turnLeft(rover)
      break;	  
    case "r":
      turnRight(rover)
      break;
                 }
}
// MAKE THE ROVER GO:
commands(sequence)


//*** I need a CONTROL FUNCTION, in case the rover moves off the grid!****

//function controlFunction(rover){
//	if (rover.position[0]>10){
//		alert("Watch out the rover is moving off the grid!");
//		rover.position[0]=0;
//		console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]. ")
//	}	else if (rover.position[0]<0){
//		alert("Watch out the rover is moving off the grid!");
//		rover.position[0]=10;
//		console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]. ")
//	}	else if (rover.position[1]>10){
//		alert("Watch out the rover is moving off the grid!");
//		rover.position[1]=0;
//		console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]. ")
//	}	else if (rover.position[1]<0){
//		alert("Watch out the rover is moving off the grid!");
//		rover.position[1]=10;
//		console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]. ")
//	}	
//}
//
//controlFunction(rover)

////////////////////////////////
/*I need an object at position [5,3] that the rover must not hit -> display alert and move the rover back depending on the direction the rover came from.

OBJECT FUNCTION:
*/


	