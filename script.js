const txtMessage = document.querySelector('.message')
const btnSpeak = document.querySelector('.speak')
const form = document.querySelector('.form')

function speak(text) {
    const message = new SpeechSynthesisUtterance()
    message.lang = 'ru-RU'
    message.text = text
    window.speechSynthesis.speak(message)
}

function clear() {
    txtMessage.select()
    txtMessage.value = ''
    if (window.innerWidth >= 768) {
        txtMessage.focus()
        return
    }
    txtMessage.blur()
}

btnSpeak.addEventListener('click', () => {
    speak(txtMessage.value)
    clear()
})

txtMessage.addEventListener('keydown', (e) => {
    if (e.code === 'Enter' && txtMessage.value && !e.shiftKey) {
        e.preventDefault()
        speak(txtMessage.value)
        clear()
    }
})

form.addEventListener('submit', (e) => {
    e.preventDefault()
})