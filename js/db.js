// Module
var db = (function() {
    //'use strict';

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
                    "image": "./img/sara.png",
                    "phone": "987546298",
                    "message": "The person was hot. The few texts you exchanged sounded good.\nBut something went wrong.\nWere you catfished?\nAre you a butcher and she’s a vegan?\n\nIt doesn’t matter, Sara is on her way."
                }
            },
            {
                "type": "altered",
                "name": "Altered",
                "contact": {
                    "name": "Robin",
                    "image": "./img/robin.png",
                    "phone": "987436738",
                    "message": "This is THE BEST NIGHT EVER, your song is playyingg and this is the best nightee of your life. You’re note even tirrred. Yuur bezt fried in the world, Roboin, is commmming. Merry furking christonchristoncs."
                }
            },
            {
                "type": "ex",
                "name": "Don't Call Your Ex",
                "contact": {
                    "name": "Christina",
                    "image": "./img/christina.png",
                    "phone": "970976784",
                    "message": "By the end of the relationship you actually wished that they died, just so you didn’t had to go through the process of a breakup. But now you just miss their big… Personality, of course! Still… You should really call Christina for advice."
                }
            },
            {
                "type": "alien",
                "name": "Alien Invasion",
                "contact": {
                    "name": "Superman",
                    "image": "./img/super.png",
                    "phone": "965371869",
                    "message": "Good heavens, something's wriggling out of the spaceship. Now it's another one, and another. They look like tentacles to you. Superman?"
                }
            },
            {
                "type": "odor",
                "name": "Odor",
                "contact": {
                    "name": "António",
                    "image": "./img/antonio.png",
                    "phone": "987650983",
                    "message": "‘Nobody speak, nobody get choked’, he said. Do you really believe it though? As the code (cadets) smell reaches your nostrils, you call him."
                }
            },
            {
                "type": "r",
                "name": "Robin",
                "contact": {
                    "name": "Audrey",
                    "image": "./img/audrey.png",
                    "phone": "999888777",
                    "message": "You thought <Academia de Código_> was the solution to all your woes. Little did you knew, that Robin would be your MC… Is he teaching you CSS? Are you having flashes of the Vietnam War you never had? Call Your Saint Now!"
                }
            }
        ]
    }

    // Internal Methods
    function _getUser() {
        
        return {
            "name": user.name, 
            "package": user.package,
            "events": user.events
        }

    }

    function _getHelp(situationIndex) {
        return {
            "name": user.events[situationIndex].contact.name,
            "image": user.events[situationIndex].contact.image,
            "phone": user.events[situationIndex].contact.phone,
            "message": user.events[situationIndex].contact.message
        }
    }

    // Public Methods
    return {
        getUser: function() {
            return _getUser();
        },

        getHelp(situation) {
            return _getHelp(situation);
        }
    }
}());

// Function Triggers
$(document).on('click', '#subscribe', function(){
    event.preventDefault();
    createUser();
});



// --------------------------------------

