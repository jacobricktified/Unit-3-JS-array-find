// code your solution here
//a function that retyrns a year the denver broncos won the super bowl
/*function superbowlWin(record) {
    //use the find method to search through the record array for an object with a result of "W"
    const win = record.find(game => game.result === "W");
    //if a win is found, return the year, otherwise return undefined
    return win ? win.year : undefined;
}   */
//use the inbuilt find method to search through the record array for an object with a result of "W" and return the year if found, otherwise return undefined
function superbowlWin(record) {
    const win = record.find(game => game.result === "W");
    return win ? win.year : undefined;
}       
