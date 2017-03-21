var rover = {
  position: [0,0], 
  direction: "N"
};
var sequence = ""

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

  document.write("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]. ")
}
//goForward(rover);

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
 document.write("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]. ")
}
//goBackward(rover);

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
  document.write("New Rover Direction: " + rover.direction + ". ")
}
//turnLeft(rover)

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
  document.write("New Rover Direction: " + rover.direction + ". ")
}
//turnRight(rover)

function SendIt (sequence){
  var sequence = prompt("please enter a command")
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

SendIt(sequence)
