// First attempt at a mad libs program

var noun;
var verb;
var adjective;

// Example story: There once was a 'handsom(adj)' 'dog(noun)' who would 'worked(verb)' really hard everyday. 

noun = prompt("Enter a noun");
verb = prompt("Enter a verb");
adjective = prompt("Enter an adjective")

var story = "There once was a " + adjective + " " + noun + " who would " + verb + " really hard everyday.";

document.write(story);