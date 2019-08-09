// Date
$(document).on('click', '#btnDate', function(){
    updateModal(db.getHelp(0).name, 'Release me!', 'I\'m desperate!');
    updateHelper(0);
    cleanBtnCancel();
})

// Altered
$(document).on('click', '#btnAltered', function(){
    updateModal('Altered', 'Helepejjp. me', 'Sbooze!');
    updateHelper(1);
    cleanBtnCancel();
})

// Ex
$(document).on('click', '#btnMyEx', function(){
    updateModal('My Ex', 'Let\'s go for a ride!', 'Think before continuing');
    updateHelper(2);
    $('#modalBtnCancel').addClass('btnOpenLink');
})
    // Open link on new tab (Only for Ex - others need cleanBtnCancel though)
    $(document).on('click', '.btnOpenLink', function() {
        window.open('https://bit.ly/2ZUmGFu', '_blank');
    })

// Hostage
$(document).on('click', '#btnHostage', function(){
    updateModal('Hostage', 'SUPERMAN!', 'Wanna be a hero!');
    updateHelper(4);
    cleanBtnCancel();
})

// Alien
$(document).on('click', '#btnAlien', function(){
    updateModal('Alien', 'They want to stick a probe in my WHAT?!', '⏃⌰⏁ ⊑⏃⟟⌰☌.');
    updateHelper(3);
    cleanBtnCancel();
})

// ;-)
$(document).on('click', '#btnR', function(){
    updateModal('R', 'A', ';-)');
    updateHelper(5);
    cleanBtnCancel();
})

/* Removes class is-active when a .closeModal button is clicked
 * so the modal disappears when closed
 * */
$(document).on('click', '.closeModal', function(){
    $('#modalBox').removeClass('is-active');
})

/**
 * Update the name and message of the modal when active
 * @param {*} eventIndex 
 */
function updateHelper(eventIndex) {
    $('#modalText').text(db.getHelp(eventIndex).message);
    $('#helperImage').attr('src', db.getHelp(eventIndex).image);
}

/**
 * Update the modal with those three arguments, triggered everytime a modal is clicked
 * @param {*} heroName 
 * @param {*} buttonSuccess 
 * @param {*} buttonCancel 
 */
function updateModal(heroName, buttonSuccess, buttonCancel) {
    $('#modalBox').addClass('is-active');
    $('#modalTitle').text(heroName);
    $('#modalBtnSuccess').text(buttonSuccess);
    $('#modalBtnCancel').text(buttonCancel);
};

/**
 * Auxiliary method to clean the cancel button otherwise all of them would lead user to PH
 */
function cleanBtnCancel() {
    $('#modalBtnCancel').removeClass('btnOpenLink');
}