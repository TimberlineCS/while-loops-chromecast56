var height = 50;
var width = 50;
var gridSize = 10;
var rows = 0, cols = 0;


makeGrid();
//verticalStripes()

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

}

/**
 * TODO: Complete the horizontalStripes function
 */
function horizontalStripes(){

}

/**
 * TODO: Complete the checkerBoard function
 */
function checkerBoard(){

}


/**
 * TODO:  Complete the stairDown function
 */
function stairDown(){

}


/**
 * TODO: Complete the stairUp function
 */
function stairUp(){

}

/**
 * TODO: Complete the stairDown2 function
 */
function stairDown2(){

}



