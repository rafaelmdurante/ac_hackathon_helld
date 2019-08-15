// Date
$(document).on("click", "#btnDate", function() {
  updateModal(db.getHelp(0).name, "Release me!", "I'm desperate!");
  updateHelper(0);
  cleanBtnCancel();
});

// Altered
$(document).on("click", "#btnAltered", function() {
  updateModal("Altered", "Helepejjp. me", "Sbooze!");
  updateHelper(1);
  cleanBtnCancel();
});

// Ex
$(document).on("click", "#btnMyEx", function() {
  updateModal("My Ex", "Call for advice!", "Think before continuing");
  updateHelper(2);
  $("#modalBtnCancel").addClass("btnOpenLink");
});

// Open link on new tab (Only for Ex - others need cleanBtnCancel though)
$(document).on("click", ".btnOpenLink", function() {
  $("#modalBox").removeClass("is-active");
  $("#modalVideo").addClass("is-active");
});

// Odor
$(document).on("click", "#btnOdor", function() {
  updateModal("Odor", "ANTONIO!", "I\'d rather smell the code.");
  updateHelper(4);
  cleanBtnCancel();
});

// Alien
$(document).on("click", "#btnAlien", function() {
  updateModal("Alien", "They want to stick a probe in my WHAT?!", "⏃⌰⏁ ⊑⏃⟟⌰☌.");
  updateHelper(3);
  cleanBtnCancel();
});

// ;-)
$(document).on("click", "#btnR", function() {
  updateModal("Robin", "Audrey", ";-)");
  updateHelper(5);
  cleanBtnCancel();
});

/* Removes class is-active when a .closeModal button is clicked
 * so the modal disappears when closed
 * */
$(document).on("click", ".closeModal", function() {
  $("#modalBox").removeClass("is-active");
});

$(document).on('click', '#modalBtnSuccessVideo', function() {
  $('#modalVideo').removeClass('is-active');
})

/**
 * Update the name and message of the modal when active
 * @param {*} eventIndex
 */
function updateHelper(eventIndex) {
  $("#modalText").text(db.getHelp(eventIndex).message);
  $("#helperImage").attr("src", db.getHelp(eventIndex).image);
}

/**
 * Update the modal with those three arguments, triggered everytime a modal is clicked
 * @param {*} heroName
 * @param {*} buttonSuccess
 * @param {*} buttonCancel
 */
function updateModal(heroName, buttonSuccess, buttonCancel) {
  $("#modalBox").addClass("is-active");
  $("#modalTitle").text(heroName);
  $("#modalBtnSuccess").text(buttonSuccess);
  $("#modalBtnCancel").text(buttonCancel);
}

/**
 * Auxiliary method to clean the cancel button otherwise all of them would lead user to PH
 */
function cleanBtnCancel() {
  $("#modalBtnCancel").removeClass("btnOpenLink");
}
