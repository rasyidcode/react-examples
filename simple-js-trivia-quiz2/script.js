let questions = []
let currentIndex = 0
let currentAnswer = ''

async function loadQuestions() {
    const res = await fetch('questions.json')
    questions = await res.json()
    startLoop()
}

function startLoop() {
    setInterval(() => {
        console.log(questions[currentIndex])
        showQuestion(questions[currentIndex])
    }, 15000)
}

function showQuestion(q) {
    const container = document.getElementById('quiz')
    container.innerHTML = ''
    const questionEl = document.createElement('h2')
    questionEl.textContent = q.question
    const optionsEl = document.createElement('div')
    q.options.forEach((opt) => {
        const btn = document.createElement('button')
        btn.textContent = opt
        btn.className = 'btn-option'
        btn.onclick = () => chooseAnswer(opt)
        optionsEl.appendChild(btn)
    })
    const infoEl = document.createElement('div')
    infoEl.style.marginTop = '10px'
    infoEl.style.color = 'gray'
    infoEl.textContent = 'Answer will appear in 10s...'

    container.appendChild(questionEl)
    container.appendChild(optionsEl)
    container.appendChild(infoEl)

    setTimeout(() => {
        const answerDiv = document.createElement('div')
        let answerText = ''
        if (currentAnswer === q.answer) {
            answerDiv.style.color = 'green'
            answerText = 'Correct!'
        } else {
            answerDiv.style.color = 'red'
            answerText = 'Wrong!'
        }
        answerText = `${answerText} - Answer: ${q.answer}`
        answerDiv.textContent = answerText
        container.appendChild(answerDiv)

        currentIndex++
        console.log(currentIndex)
    }, 10000) // show answer after 10s
}

function chooseAnswer(opt) {
    currentAnswer = opt
    document.querySelectorAll('.btn-option').forEach((btn) => btn.disabled = true)
}

loadQuestions()