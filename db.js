// Module
var db = (function() {
    'use strict';

    var user = {
        "id": "6",
        "name": "Diogo Rolo",
        "username":"rolomartelation",
        "password": "hammerme",
        "package": "hell",
        "events": [
            {
                "type": "date",
                "name": "Date",
                "contact": {
                    "name": "Sara",
                    "phone": "987546298"
                }
            },
            {
                "type": "ex",
                "name": "Don't Call Your Ex",
                "contact": {
                    "name": "Christina",
                    "phone": "970976784"
                }
            },
            {
                "type": "alien",
                "name": "Alien Invasion",
                "contact": {
                    "name": "Superman",
                    "phone": "965371869"
                }
            },
            {
                "type": "hostage",
                "name": "Hostage",
                "contact": {
                    "name": "Matheus",
                    "phone": "987650983"
                }
            },
            {
                "type": "r",
                "name": "R",
                "contact": {
                    "name": "A",
                    "phone": "999888777"
                }
            }
        ]
    }

    // Internal Methods
    function _getUser() {
        return selectedUser = {
            "name": user.name, 
            "package": user.package,
            "events": user.events
        }
    }

    function _getHelp(situationIndex) {
        return selectedHelp = {
            "name": user.events[situationIndex].contact.name,
            "phone": user.events[situationIndex].contact.phone
        }
    }

    // Public Methods
    return {
        getUser: function() {
            _getUser();
        },

        getHelp(situation) {
            _getHelp(situation);
        }
    }
})

// Function Triggers
$(document).on('click', '#subscribe', function(){
    event.preventDefault();
    createUser();
});