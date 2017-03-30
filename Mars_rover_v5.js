var rover = {
  position: [0,0], 
  direction: "N"
};
var sequence = ""
/*
function goForward makes the move +1 depending on the direction it is facing 
*/
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

  console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]. ")
}
//goForward(rover);

/*
function goBackward makes the rover coordinates +1 depending on the direction it is facing
*/
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
 console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]. ")
}
//goBackward(rover);
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


	
}
commands(sequence)
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
 
function commands(sequence){
	for (var i = 0; i < sequence.length; i++){
	SendIt(sequence[i])	
	}

//*** I need a control function, in case the rover moves off the grid!****


/*
var columns = 10;
var rows = 10;

function setup () {
createCanvas(300, 300);
}

function draw() {
	background (51);

//2-dimensional array:
 function make2Darry(columns, rows){
	 var arr = new Array(cols);
	 	for(var i=0; i<arr.length; i++) {
		arr[i]= new Array(rows);
		}
 }
	*/