document.addEventListener('DOMContentLoaded', () => {

    /*** Card Arrays ***/
    const cardArray =[
        {
            name: 'pcfrontier',
            img: 'images/pcfrontierLOGO.png'
        },
        {
            name: 'react',
            img: 'images/react.png'
        },
        {
            name: 'javafx',
            img: 'images/javafx.png'
        },
        {
            name: 'android',
            img: 'images/android.png'
        },
        {
            name: 'postgres',
            img: 'images/postgres.png'
        },
        {
            name: 'mysql',
            img: 'images/mysql.png'
        },
        {
            name: 'js',
            img: 'images/js.png'
        },
        {
            name: 'intellij',
            img: 'images/intellij.png'
        },
        {
            name: 'css',
            img: 'images/css.png'
        },
        {
            name: 'html',
            img: 'images/html.png'
        },
        {
            name: 'vs',
            img: 'images/vs.png'
        },
        {
            name: 'git',
            img: 'images/git.png'
        },
        {
            name: 'bootstrap',
            img: 'images/bootstrap.png'
        },
        {
            name: 'cpp',
            img: 'images/cpp.png'
        },
        {
            name: 'java',
            img: 'images/java.png'
        },
        {
            name: 'pcfrontier',
            img: 'images/pcfrontierLOGO.png'
        },
        {
            name: 'react',
            img: 'images/react.png'
        },
        {
            name: 'javafx',
            img: 'images/javafx.png'
        },
        {
            name: 'android',
            img: 'images/android.png'
        },
        {
            name: 'postgres',
            img: 'images/postgres.png'
        },
        {
            name: 'mysql',
            img: 'images/mysql.png'
        },
        {
            name: 'js',
            img: 'images/js.png'
        },
        {
            name: 'intellij',
            img: 'images/intellij.png'
        },
        {
            name: 'css',
            img: 'images/css.png'
        },
        {
            name: 'html',
            img: 'images/html.png'
        },
        {
            name: 'vs',
            img: 'images/vs.png'
        },
        {
            name: 'git',
            img: 'images/git.png'
        },
        {
            name: 'bootstrap',
            img: 'images/bootstrap.png'
        },
        {
            name: 'cpp',
            img: 'images/cpp.png'
        },
        {
            name: 'java',
            img: 'images/java.png'
        }
    ]
    const cardArray2 = [
        {
            name: 'pcfrontier',
            img: 'images/pcfrontierLOGO.png'
        },
        {
            name: 'react',
            img: 'images/react.png'
        },
        {
            name: 'javafx',
            img: 'images/javafx.png'
        },
        {
            name: 'android',
            img: 'images/android.png'
        },
        {
            name: 'postgres',
            img: 'images/postgres.png'
        },
        {
            name: 'mysql',
            img: 'images/mysql.png'
        },
        {
            name: 'js',
            img: 'images/js.png'
        },
        {
            name: 'intellij',
            img: 'images/intellij.png'
        },
        {
            name: 'css',
            img: 'images/css.png'
        },
        {
            name: 'html',
            img: 'images/html.png'
        },
        {
            name: 'vs',
            img: 'images/vs.png'
        },
        {
            name: 'git',
            img: 'images/git.png'
        },
        {
            name: 'bootstrap',
            img: 'images/bootstrap.png'
        },
        {
            name: 'cpp',
            img: 'images/cpp.png'
        },
        {
            name: 'java',
            img: 'images/java.png'
        }
    ]

    cardArray.sort(() => 0.5 - Math.random())
    console.log(cardArray);

    /*** Sticky Nav Bar ***/
    window.onscroll = function() {addStickyToNav()};

    let nav = document.getElementById("nav");
    let sticky = nav.offsetTop;

    function addStickyToNav() {
        if (window.pageYOffset >= sticky) {
            nav.classList.add("sticky")
        } else {
            nav.classList.remove("sticky")
        }
    }

    /*** Game variables ***/
    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    const cardWonImg = 'images/white.png'
    const cardBlankImg = 'images/blank.png'
    let isBeingTimed = false
    let cardsChosen = []
    let cardsChosenId = []
    let cardsWon = []
    let startTime
    let score = 0

    function flipLogoCard() {
        // get all child nodes from .grid, which are all img elements
        let allCards = document.querySelector('.grid').children
        // sort thru allCards and find the first instance of the pcfrontier logo
        for (let i = 0; i < cardArray.length; i++) {
            // when the first instance is found, flip the card
            if (cardArray[i].name === 'pcfrontier') {
                // record the card flip
                cardsChosen.push(cardArray[i].name)
                cardsChosenId.push(i)
                // reveal the card by setting the src attribute
                allCards[i].setAttribute('src', cardArray[i].img)
                // break from the for loop
                break
            }
        }
    }

    function createBoard(){
        for (let i = 0; i < (cardArray.length); i++){
            const card = document.createElement('img')
            card.setAttribute('src', 'images/blank.png')
            card.setAttribute('data-id', i.toString())
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
        setTimeout(flipLogoCard,200)
    }

    function flipCard(){
        /* This if statement starts the timer */
        if (isBeingTimed === false) {
            // create a method here to start the timer
            startTime = new Date()
            console.log("Start time is " + startTime.getTime())
            isBeingTimed = true
        }

        let cardId = this.getAttribute('data-id')
        console.log(cardsChosen);
        /* limits amount of cards able to be flipped over; anti-cheating measure */
        if (cardsChosen.length < 2) {
            console.log('cardsChosen.length' + cardsChosen.length)
            cardsChosen.push(cardArray[cardId].name)
            cardsChosenId.push(cardId)
            this.setAttribute('src', cardArray[cardId].img)
            if (cardsChosen.length === 2){
                setTimeout(checkForMatch, 500)
            }
        }
    }

    function updateScore() {
        let timeNow = new Date()
        let time = Math.round( (timeNow.getTime() - startTime.getTime())/1000 )

        console.log("Match made in " + time + " sec")

        if (time <= 10) {
            console.log("x15 multiplier")
            score += 150
        }
        else if (time <= 20 && time > 10) {
            console.log("x10 multiplier")
            score += 100
        }
        else if (time <= 45 && time > 20 ) {
            console.log("x7.5 multiplier")
            score += 75
        }
        else {
            console.log("x5 multiplier")
            score += 50
        }
        console.log("Score: " + score)
    }

    function checkForMatch() {
        const cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]

        if (optionOneId == optionTwoId){
            // clicked the same card twice
            alert('Please choose another card');
            cards[optionOneId].setAttribute('src', 'images/blank.png')
            cards[optionTwoId].setAttribute('src', 'images/blank.png')
        } else if (cardsChosen[0] === cardsChosen[1]){
            // point scored
            cards[optionOneId].setAttribute('src', cardWonImg)
            cards[optionTwoId].setAttribute('src', cardWonImg)
            cards[optionOneId].removeEventListener('click', flipCard)
            cards[optionTwoId].removeEventListener('click', flipCard)
            cardsWon.push(cardsChosen)
            updateScore()
        } else {
            // no point scored
            cards[optionOneId].setAttribute('src', 'images/blank.png')
            cards[optionTwoId].setAttribute('src', 'images/blank.png')
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length

        if (cardsWon.length === cardArray.length/2){
            resultDisplay.textContent = '15 Level Complete'
        }
    }

    function replay() {
        // reshuffle the cards
        cardArray.sort(() => 0.5 - Math.random())

        // reset all the cards to their blank side
        let allCards = document.getElementById('grid').children
        for (let i = 0; i < cardArray.length; i++) {
            allCards[i].setAttribute('src', 'images/blank.png')
            allCards[i].setAttribute('data-id', i)
            allCards[i].addEventListener('click', flipCard)
        }

        // reset the card variables
        cardsChosen = []
        cardsChosenId = []
        cardsWon = []
        isBeingTimed = false
        score = 0
        resultDisplay.textContent = cardsWon.length

        // flip over one logo card
        flipLogoCard()
    }

    function skip() {
        // uncover one of every type of card, slowly, for effect, if possible
        // get all the images in the grid div
        let allCards = document.getElementById('grid').children
        let cards = []

        // remove the event click listener and reveal the card
        for (let i = 0; i < cardArray.length; i++) {
            allCards[i].removeEventListener('click', flipCard)
        }

        // push one card src string of each type to the cards array
        for (let i = 0; i < cardArray2.length; i++) {
            cards.push(cardArray2[i].img)
        }

        // once a src match is found, apply the src string and splice the index from cards array
        for (let i = 0; cards.length > 0; i++) {

            for (let j = 0; j < cardArray.length; j++) {

                if (cards[i] === cardArray[allCards[j].getAttribute('data-id')].img) {

                    allCards[j].setAttribute('src', cards[i])
                    console.log(cards[i] + ' removed')
                    cards.splice(i,1)
                    i = 0

                }
            }
        }

        console.log('cards ->' + cards.length)
        console.log('cards ->' + allCards[0].getAttribute('src'))


    }

    document.getElementById('reshuffle').addEventListener('click', replay)

    document.getElementById('skip').addEventListener('click', skip)

    createBoard()
})