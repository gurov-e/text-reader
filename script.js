const txtMessage = document.querySelector('.message')
const btnSpeak = document.querySelector('.speak')
const form = document.querySelector('.form')

const messages = []
let messageIdx = -1

function speak(text) {
  const message = new SpeechSynthesisUtterance()
  message.lang = 'ru-RU'
  message.text = text
  window.speechSynthesis.speak(message)
}

function clear() {
  txtMessage.select()
  txtMessage.value = ''
  if (window.innerWidth >= 375) {
    txtMessage.focus()
    return
  }
  txtMessage.blur()
}

btnSpeak.addEventListener('click', () => {
  speak(txtMessage.value)
  messages.push(txtMessage.value)
  messageIdx = -1
  clear()
})

txtMessage.addEventListener('keydown', (e) => {
  if (e.keyCode === 13 && txtMessage.value && !e.shiftKey) {
    e.preventDefault()
    speak(txtMessage.value)
    messages.push(txtMessage.value)
    messageIdx = -1
    clear()
  }
})

form.addEventListener('submit', (e) => {
  e.preventDefault()
})

form.addEventListener('keydown', (e) => {
  if (e.code === 'ArrowUp') {
    if (messageIdx >= -1 && messageIdx < messages.length - 1) {
      messageIdx++
    }
    if (messages.length !== 0) {
      txtMessage.value = messages[messageIdx]
    }
  }
  if (e.code === 'ArrowDown') {
    if (messageIdx < messages.length && messageIdx >= 1) {
      messageIdx--
    }
    if (messages.length !== 0) {
      txtMessage.value = messages[messageIdx]
    }
  }
})