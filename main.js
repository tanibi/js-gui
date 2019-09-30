const divide = (x, y) => { return x / y }

const validate = async (event) => {
  console.log(`triggered validate on ${event.target.id}`)
  const isValid = event.target.checkValidity()
  if (isValid) {
    event.target.nextElementSibling.innerHTML = ''
  } else {
    event.target.nextElementSibling.innerHTML = 'Invalid input'
    event.target.focus()
  }
}

const updateWithAdd = async (event) => {
  document.querySelector('#result').innerHTML = ''
  if (document.querySelector('#students').checkValidity() && document.querySelector('#sections').checkValidity()) {
    const i = parseInt(document.querySelector('#students').value)
    const j = parseInt(document.querySelector('#sections').value)
    const ans = `${s}, your result is ${divide(i, j)}.`
    document.querySelector('#result').innerHTML = ans
  }
}


// delegate to dynamic elements (e.g. when testing)
// focusout is like blur, but it bubbles up

document.addEventListener('focusout', event => {
  if ((event.target && event.target.id === 'students') ||
    (event.target && event.target.id === 'sections')) {
    validate(event)
  }
})

document.addEventListener('click', event => {
  if (event.target && event.target.id === 'addButton') { updateWithAdd(event) }
})

