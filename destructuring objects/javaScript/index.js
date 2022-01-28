const {name ,age}={
    name:"prince",
    age:21,
    surname:"kumar",
    height:"5 feet, 8 inches",
    skin_color:"brown",
    eye_color:"dark brown"
};
console.log(name);
console.log(age);
// console.log(intro);

const animes={
        name:"Attack On Titan",
        episodes:76,
        language:"japaneese",
        feedback:"awesome"

}

function review({name,feedback})
{
    return `${name} is literally ${feedback}!`
}

console.log(review(animes));