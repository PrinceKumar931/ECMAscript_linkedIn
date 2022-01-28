let course=new Map();

course.set("prince","kumar");
course.set("gaurav","yadav");

console.log(course);
console.log(course.get("gaurav"));

let details=new Map([
    [new Date(),"today"],
    ["object_key",{object_value:["prince",54,"array"]}],
    ["items",[1,1,2,4]]

]
);


details.forEach(function (item)
{
    console.log(item);
}
);