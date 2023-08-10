document.getElementById("submitBtn").addEventListener("click", submutFN);

function sendMail() {
  var data = {
    service_id: "service_l83q8e5",
    template_id: "template_ilnzm69",
    user_id: "mZQ5vk7_Rt37_M0rr",
    template_params: {
      name: document.getElementById("name").value,
      address: document.getElementById("address").value,
      phoneNumber: document.getElementById("phoneNumber").value,
      message: document.getElementById("message").value,
    },
  };

  $.ajax("https://api.emailjs.com/api/v1.0/email/send", {
    type: "POST",
    data: JSON.stringify(data),
    contentType: "application/json",
  })
    .done(function () {
      alert("Your mail is sent!");
    })
    .fail(function (error) {
      alert("Oops... " + JSON.stringify(error));
    });
}

function submutFN(e) {
  e.preventDefault();

  sendMail();
}
