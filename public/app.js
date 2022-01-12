var student1 = {
    name: "Abdul Ahad",
    fatherName: " mehtab Ali",
    age: 22,
    contact: "02239383683",
    isClearedInAllSubjects: "false", 


}
console.log (student1);

var student2 = {
    name: "Ahmed khan",
    fatherName: " mehtab Ali",
    age: 23,
    contact: "022393836831",
    isClearedInAllSubjects: "true", 
    

}

var student3 = {
    name: "Amir Qureshi",
    fatherName: " mehtab Ali",
    age:"24",
    contact: "02239383683",
    isClearedInAllSubjects: "true", 

}

var student4 = {
    name: "Abdullah",
    fatherName: " mehtab Ali",
    age:"20",
    contact: "02239383683",
    isClearedInAllSubjects: "true", 

}

var student5 = {
    name: "syeda Kainat",
    fatherName: "Yousuf Ali",
    age:"22",
    contact: "02239383683",
    isClearedInAllSubjects: "true", 

}

var studentList =[student1,student2,student3,student4,student5]
console.log(studentList);
for (var i=0; i < studentList.length; i++){
    studentList[i].rollnumber = i+1
    console.log(studentList[i]);
}

var studentData = document.getElementById("StudentData")
for(var i=0; i<studentList.length; i++){
    var obj = studentList[i];
console.log(obj)


// var studentList = [student1, student2, student3, student4, student5];
// console.log (studentList);

// for (var i=0; i < studentList.length; i++){
//     studentList[i].rollnumber = i+1
//     console.log(studentList[i]);
// }

// console.log (studentList);

// var studentData = document.getElementById("StudentData")
// for(var i=0; i<studentList.length; i++){
//     var obj = studentList[i];

   studentData.innerHTML +=
   "<tr><td>" +
   obj.rollnumber +
   "</td><td>"+
   obj.name +
   "</td><td>" +
   obj.fatherName +
   "</td><td>" +
   obj.age+
   "</td><td>"+
   obj.contact+
   "</td><td>"+
   obj.isClearedInAllSubjects+
   "</td></tr>"


// console.log (studentData);

function searchStd(){
    var inpvalue = document.getElementById("inpvalue")
    var showrollnumber = document.getElementById("showrollnumber")
    var showname = document.getElementById("showname")
    var showfathername = document.getElementById("showfathername")
    var showage = document.getElementById("showage")
    var showcontact = document.getElementById("showcontact")
    var showresult = document.getElementById("showresult")

   for(var i =0; i<studentList.length; i++){
    var std = studentList[i];  
    if (inpvalue.value == studentData.rollnumber){
       console.log (std);
       showrollnumber.innerHTML=std.rollnumber;
       showname.innerHTML=std.name;
       showfathername.innerHTML=std.fatherName;
       showage.innerHTML=std.age;
       showcontact.innerHTML=std.contact;
       showresult.innerHTML=std.isClearedInAllSubjects;
    }; 
    };
    };

};