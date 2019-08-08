$(document).on('click', '#modalBtn', function(){
    $('#modalStuff').toggleClass('is-active')

} )

$(document).on('click', '.closeModal', function(){
    $('#modalStuff').removeClass('is-active')

} )