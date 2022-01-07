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
  console.log(visible.style.display);
}
