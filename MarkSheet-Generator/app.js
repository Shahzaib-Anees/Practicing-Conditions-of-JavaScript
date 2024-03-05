let subject1 = prompt("Please enter name of First Subject");
let subject2 = prompt("Please enter name of Second Subject");
let subject3 = prompt("Please enter name of Third Subject");

let marks_subject1 = +prompt("Please enter the Marks of First Subject Obtained by Candidate");
let marks_subject2 = +prompt("Please enter the Marks of Second Subject Obtained by Candidate");
let marks_subject3 = +prompt("Please enter the Marks of Third Subject Obtained by Candidate");

let total_marks = +prompt("Please tell me the Grand Total Marks");
let subtotal_subjects = (marks_subject1 + marks_subject2 + marks_subject3);
let percentage = (subtotal_subjects * 100) / total_marks;

let grade;
let remarks;
if (percentage >= 80) {
  grade = "A-one";
  remarks="Excellent";
} else if(percentage >= 70){
    grade = "A";
    remarks="Good";
}else if (percentage  >= 60){
    grade = "B";
    remarks="You need to improve";
}else{
    grade = "Fail";
    remarks="Sorry";
}

// Documentation to write on Page 
// document.write("<h3>MarkSheet</h3>")
// document.write("<br>")
// document.write(`Total Marks : ${total_marks}`);
// document.write("<br>")
// document.write(`Marks Obtained : ${subtotal_subjects}`);
// document.write("<br>")
// document.write(`Percentage : ${percentage}`);
// document.write("<br>")
// document.write(`Grade : ${grade}`);
// document.write("<br>")
// document.write(`Remarks : ${remarks}`);

document.write(`<div id="marksheet-box">
<h3>MarkSheet</h3>
<p>Total Marks : ${total_marks}</p>
<p>Marks Obtained : ${subtotal_subjects}</p>
<p>Percentage : ${percentage}%</p>
<p>Grade : ${grade}</p>
<p>Remarks : ${remarks}</p>
</div>`)

