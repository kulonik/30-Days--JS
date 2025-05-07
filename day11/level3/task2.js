const students = ["David", ["HTML", "CSS", "JS", "React"], [98, 85, 90, 95]];

let [name, skills, scores] = students;
console.log(scores);

let [htmlScores, cssScores, jsScores, reactScores] = scores;
console.log(name, skills, jsScores, reactScores);
