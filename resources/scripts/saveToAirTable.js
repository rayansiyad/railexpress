
  const submitButton = document.querySelectorAll("[data-label='submitButton']")[0]
  console.log("myButton ", submitButton)

function initAirtable(){
var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer keyT4ptuR1XC31DcM");
myHeaders.append("Content-Type", "application/json");
//myHeaders.append("Cookie", "brw=brwraKhvt4LfM8oqT");
var Name = localStorage.getItem('Name');
var Gender = localStorage.getItem('Gender');
var Age = localStorage.getItem('Age');
var Email = localStorage.getItem('Email');
var TaskStart = localStorage.getItem('TaskStart');
var TaskEnd = localStorage.getItem('TaskEnd');
var QuizStart = localStorage.getItem('QuizStart');
var QuizEnd = localStorage.getItem('QuizEnd');
var Q1 = localStorage.getItem('Q1');
var Q2 = localStorage.getItem('Q2');
var Q3 = localStorage.getItem('Q3');
var Q4 = localStorage.getItem('Q4');
var Q5 = localStorage.getItem('Q5');
var Q6 = localStorage.getItem('Q6');
var Q7 = localStorage.getItem('Q7');
var raw = JSON.stringify({
  "records": [
    {
      "fields": {
        "Name": Name,
        "Gender": Gender,
        "Email": Email,
        "Age": Age,
        "Start time": TaskStart,
        "End time": TaskEnd,
        "Quiz start time": QuizStart,
        "Quiz end time": QuizEnd,
        "Q1": Q1,
        "Q2": Q2,
        "Q3": Q3,
        "Q4": Q4,
        "Q5": Q5,
        "Q6": Q6,
        "Q7": Q7
      }
    }
  ]
});
  console.log(raw)
var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};
  
fetch("https://api.airtable.com/v0/app7I9liWgNMvmgcw/User%20Responses", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
}

function saveData(){
	setTimeout(initAirtable, 3000);
}

submitButton.addEventListener("click", saveData)
