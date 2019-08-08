var userList = [];
var lastAvailableId = 1;

var user = {
    "id": "",
    "userName":"",
    "birthDate":"",
    "cellphone":"",
    "address":"",
    "userEmergencyContact": [{
        "name":"",
        "email":"",
        "cellphone":"",
        "address":""
    }],
    "usertMedicalInfo": {
        "userDiseases": [],
        "userBloodType":""
    }
}

function getNewId() {
    let id = lastAvailableId;
    lastAvailableId++
    return id;
}

function save(user) {
    user.id = getNewId();
    userList.push(user);
    console.log(userList);
}

function createUser() {
    var user = new Object();
    user.name = $('#name').val();
    user.dateOfBirth = $('#birthDate').val();
    user.cellphone = $('#cellphone').val();
    user.address = $('#address').val();
    user.userEmergencyContact.name = $('#contactName').val();
    user.userEmergencyContact.email = $('#contactEmail').val();
    user.userEmergencyContact.cellphone = $('#contactCellphone').val();
    user.userEmergencyContact.address = $('#contactAdress').val();


    save(user);
}

function findUser(id) {
    return userList.filter(user => user.id === id);
}



// Function Triggers
$(document).on('click', '#subscribe', function(){
    event.preventDefault();
    createUser();
})

$(document).on('click', )