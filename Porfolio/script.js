function switchVisible() {
  let visible = document.getElementById("toogle-menu");
  let mainSection = document.getElementById("homepage");
  if (visible.style.display === "none") {
    visible.style.display = "block";
    mainSection.style.marginTop = "10px";
  } else {
    visible.style.display = "none";
    mainSection.style.marginTop = "30%";
  }
}

function send() {
  emailjs
    .send("service_fw25tip", "template_fc3evic", {
      from_name: document.querySelector("#fname").value,
      message: document.querySelector("#subject").value,
      reply_to: document.querySelector("#email").value,
    })
    .then((response) => {
      console.log("succes", response.status);
      alert("Message sent to Sara!");
    }),
    (error) => {
      console.log(error);
    };
}
