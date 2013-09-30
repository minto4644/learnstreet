//Snakes and Ladders Project
// The game consists of a 10x10 playing board of squares.
function createBoardCode() {
    // This method creates and returns an array of objects representing
    // the playing board. Each object has only one property, ".end", which
    // defaults to the number or index of that object (or square). But what
    // makes this game what it is are the special behaviors at specific squares,
    // where landing on the square 'teleports' the user forward or backward in
    // big leaps (see the picture for the UI). An example will be
    //      board[13].end = 47, meaning 14th square ends up in square 48.
    // The special squares, by index and their .end points, are as follows...
    // The "Ladders": 14->48, 19->60, 55->76, 69->90, 78->97.
    // The "Snakes": 99->29. 47->18, 25->7.
    "REPLACE THIS CODE WITH YOUR METHOD"
    var board = [];
    for( var i=1; i<=99; i++)
    {   var object = new Object();
        object.end = i;
        board[i] = object;
        if( i == 14 )
        {
            board[13].end = 47;
        }
        
        if( i == 19 )
        {
            board[18].end = 59;
        }
        if( i == 25 )
        {
            board[24].end = 6;
        }
        if( i == 47 )
        {
            board[46].end = 17;
        }
        if( i == 55 )
        {
            board[54].end = 75;
        }
        if( i == 69 )
        {
            board[68].end = 89;
        }
        if( i == 78 )
        {
            board[77].end = 96;
        }
        if( i == 99 )
        {
            board[98].end = 28;
        }

        
    }
    return board;
}

function getSteps() {
    // Select a random number from 1-6 and return that number.
    // This simulates the rolling of a single die.
    "REPLACE THIS CODE WITH YOUR METHOD"
    return Math.floor(Math.random()*(6 - 1 + 1) + 1);

}

function makeMove(playerPos, steps1, steps2) {
    // This method will move a player's piece across the board.
    // Imagine the player rolling two dice -- i.e., two calls to the getSteps()
    // method above. The values of those two rolls are "steps1" and "steps2".
    // The player's current board position is passed in as "playerPos".
    // This method adds steps1 and steps2 to playerPos. You will also need to
    // check the new player position against 99, which is as far as the board can go.
	"REPLACE THIS CODE WITH YOUR METHOD"
    steps1 = getSteps();
    steps2 = getSteps();
    playerPos += parseInt(steps1 + steps2);
    playerPos = Math.min(99,playerPos);
    return playerPos;
    
    
    
}