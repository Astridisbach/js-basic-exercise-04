"use strict";

const greetingMessage = "I'm learning to code with JavaScript"; // Konstant variabel med en startværdi

// tildel en ny værdi til konstanten
try {
  greetingMessage = "I want to become a good JavaScript programmer"; // Dette vil skabe en fejl, da en konstant ikke kan ændres
} catch (error) {
  console.log("Error:", error.message); // Fang og udskriv fejlen
}

console.log("Greeting message remains:", greeting); // Udskriv den originale værdi for at vise, at den ikke blev ændret