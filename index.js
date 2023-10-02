
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://realtime-database-2333e-default-rtdb.firebaseio.com/"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const endorsementsInDB = ref(database, "endorsements")

const inputFieldEl = document.querySelector("input")
const fromInput = document.querySelector("#from-input")
const toInput = document.querySelector("#to-input")

const endorsementsEl = document.querySelector("#endorsements")
const publishEl = document.querySelector("#publish-btn")

publishEl.addEventListener("click", function() {
    let inputValue = inputFieldEl.value
    push(endorsementsInDB, inputValue)
    inputValue = ""
})
onValue(endorsementsInDB, function(snapshot) {
    let endorsementsArray = Object.entries(snapshot.val()) // creates entries with [0] being key and [1] being value
    //onvalue runs whenever change to database is made , snapshot is created
    for (let i = 0; i < endorsementsArray.length; i++) {
        let currentEndorsement = endorsementsArray[i]
        let currentID = currentEndorsement[0]
        let currentVal = currentEndorsement[1]

        appendEndorsementToEndorsementsInDB(currentEndorsement)

    }

    // clear endorsements in order to render newest endorsements
    //render endorsements in database

    // create an onclick function that will add endorsement to database and make it so endorsement is 

    // create onclick function that will add like to database and make it so you can only have one like

    // create onclick function that will delete endorsement


})

function appendEndorsementToEndorsementsInDB(item) {

    let endorsementID = item[0]
    let endorsementVal = item[1]
    endorsementsEl.innerHTML += `
    <div class="message">
        <p class="to"><strong> To ${toInput.value}</strong></p>
        <p class="body-message">${inputFieldEl.value}</p>
        <p class="from"><strong>From ${fromInput.value}</strong></p>
    </div>
    `


    

}
