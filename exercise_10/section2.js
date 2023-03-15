
let cricketPlayers = ["Abdul", "Aravindhan", "Zeikin", "Gokul", "Vasanth", "Hariesh Raj", "Praveen", "Poorna Sai Tej", "Sai Charan", "Nachimuthu", "Hari Haran"];

let removedPlayer = cricketPlayers.shift();

console.log(`Get well soon ${removedPlayer}!💐`);

console.log("Now we have " + cricketPlayers.length + " in the team.");

let newPlayer = "Boobalan";

cricketPlayers.push(newPlayer);

console.log("Welcom to the team", newPlayer);

cricketPlayers.sort();

let jerseyNumbersTaken = new Set();

cricketPlayers.forEach((player) => {
    let jerseyNumber = Math.floor(Math.random() * 12);
    while (jerseyNumbersTaken.has(jerseyNumber)){
        jerseyNumber = Math.floor(Math.random() * 12);
    }
    console.log(`${player}-${jerseyNumber}`);
    jerseyNumbersTaken.add(jerseyNumber);
})

let playersJersey = cricketPlayers.map((player) => player.toUpperCase());
console.log(playersJersey);
