// Login
$(document).on("click", "#login", function() {
  $("#modalLogin").addClass("is-active");
});

$(document).on("click", "#modalBtnClose", function() {
  $("#modalLogin").removeClass("is-active");
});

$(document).on("click", "#modalBtnCancel", function() {
  $("#modalLogin").removeClass("is-active");
});

$(document).on("click", "#modalBtnLogin", function() {
  window.open("./app.html", '_self');
});
