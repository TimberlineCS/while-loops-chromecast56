var height = 50;
var width = 50;
var gridSize = 10;
var rows = 0, cols = 0;


makeGrid();
stairUp()

function numHeads(streak) {
    var count = 0; 
    var cur = 0;
    while(cur !=streak) {
        if(heads) {
            count++;
            cur++;
        } else {
        count++;
        cur = 0;
        }
    }
    return count;
}

function isPalindrome(str) {
    var strR = "";
    for (var i = str.length-1;i>=0;i--)
        strR += str.substring(i,i+1);
    return (str == strR);
}

/**
 * Creates a button and appends it to the page
 * @param cols column location of button
 * @param rows row location of button
 */
function makeButton(cols, rows){

    b = document.createElement("button");
    b.style.position = "absolute";
    b.style.width = width + "px";
    b.style.height = height + "px";
    b.style.top = height*rows + "px";
    b.style.left = width*cols + "px";
    b.id = rows+""+cols;
    document.body.append(b);
    return b;
}

/**
 * Creates a grid of buttons
 */
function makeGrid(){

    while(rows <= gridSize){
        while(cols <= gridSize){
            var b = makeButton(cols, rows); 
	        b.style.backgroundColor = "RED";
            cols++;
        }
    cols = 0;
    rows++;
    }
}

/**
 * TODO: Complete the verticalStripes function
 */
function verticalStripes(){
    rows = 0;
    cols = 0;
    while(rows <= gridSize) {
        while(cols <= gridSize) {
            var cur = document.getElementById(rows+""+cols);
            if (cols%2==0)
                cur.style.backgroundColor = "BLUE";
            cols++;
        }
        cols = 0;
        rows++;
    }
}

/**
 * TODO: Complete the horizontalStripes function
 */
function horizontalStripes(){
    rows = 0;
    cols = 0;
    while(rows <= gridSize) {
        while(cols <= gridSize) {
            var cur = document.getElementById(rows+""+cols);
            if (rows%2==0)
                cur.style.backgroundColor = "BLUE";
            cols++;
        }
        cols = 0;
        rows++;
    }
}

/**
 * TODO: Complete the checkerBoard function
 */
function checkerBoard(){
    rows = 0;
    cols = 0;
    while(rows <= gridSize) {
        while(cols <= gridSize) {
            var cur = document.getElementById(rows+""+cols);
            if ((rows+cols)%2==0)
                cur.style.backgroundColor = "BLUE";
            cols++;
        }
        cols = 0;
        rows++;
    }
}


/**
 * TODO:  Complete the stairDown function
 */
function stairDown(){
    rows = 0;
    cols = 0;
    while(rows <= gridSize) {
        while(cols <= gridSize) {
            var cur = document.getElementById(rows+""+cols);
            if (rows >= cols)
                cur.style.backgroundColor = "BLUE";
            cols++;
        }
        cols = 0;
        rows++;
    }
}


/**
 * TODO: Complete the stairUp function
 */
function stairUp(){
    rows = 0;
    cols = 0;
    while(rows <= gridSize) {
        while(cols <= gridSize) {
            var cur = document.getElementById(rows+""+cols);
            if ((rows+cols) >= gridSize)
                cur.style.backgroundColor = "BLUE";
            cols++;
        }
        cols = 0;
        rows++;
    }
}

/**
 * TODO: Complete the stairDown2 function
 */
function stairDown2(){
    rows = 0;
    cols = 0;
    while(rows <= gridSize) {
        while(cols <= gridSize) {
            var cur = document.getElementById(rows+""+cols);
            if (rows <= cols)
                cur.style.backgroundColor = "BLUE";
            cols++;
        }
        cols = 0;
        rows++;
    }
}



