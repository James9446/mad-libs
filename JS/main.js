// First attempt at a mad libs program

var noun;
var verb;
var adjective;

// Example story: There once was a 'handsom(adj)' 'dog(noun)' who would 'worked(verb)' really hard everyday. 

var questions = 3;
var questionsLeft = ' [' + questions + ' questions left]'
questions -= 1
noun = prompt("Enter a noun" + questionsLeft);
var questionsLeft = ' [' + questions + ' questions left]'
questions -= 1
verb = prompt("Enter a verb" + questionsLeft);
var questionsLeft = ' [' + questions + ' questions left]'
questions -= 1
adjective = prompt("Enter an adjective" + questionsLeft);

var story = "There once was a " + adjective + " " + noun + " who would " + verb + " really hard everyday.";

document.write(story);