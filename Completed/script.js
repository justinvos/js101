function submit () {
  // Gets the value of the text field using the id 'nameInput'
  const textField = document.getElementById('nameInput')
  const name = textField.value

  // Sets the element with the id 'msg' to the 'Hey there, ...' text
  const msg = document.getElementById('msg')
  msg.innerHTML = `Hey there, ${name}`

  // Gets the main section by id, then shows and scrolls down to it
  const main = document.getElementById('main')

  main.style.display = 'flex'
  main.scrollIntoView({ behavior: 'smooth' })
}

function handleKeyup (event) {
  if (event.code === 'Enter') {
    submit()
  }
}

// Attaches the click event listener for the button
const button = document.getElementById('btn')
button.addEventListener('click', submit)

// Attaches the keyUp event listener for the text field
const textField = document.getElementById('nameInput')
textField.addEventListener('keyup', handleKeyup)
