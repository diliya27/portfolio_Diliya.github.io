


// function sendMail(){
//     let parms={
//         name: document.getElementById("name").value,
//         email: document.getElementById("email").value,
//         subject: document.getElementById("subject").value,
//         message: document.getElementById("message").value,
//     };
//     emailjs.send("service_rv1suto","template_47x6gqo",parms)
//     .then(function(response){

//         alert("Email sent sucessfully");

//     })
//     .catch(function(error){
//         console.error("failed to send email",error)
//         alert("Failed to send mail: Please Try again.")
//     });


// }
function sendMail(event) {
    event.preventDefault();
    let parms = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    };
    emailjs
        .send("service_rv1suto", "template_47x6gqo", parms)
        .then(function (response) {
            alert("Email sent successfully");
        })
        .catch(function (error) {
            console.error("Failed to send email", error);
            alert("Failed to send mail: Please Try again.");
        });
}


