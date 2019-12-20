const submit = document.getElementById('submit')

submit.addEventListener('click', () => {
  const first_name = document.getElementById('first').value
  const second_name = document.getElementById('second').value
  const phone = document.getElementById('phone').value
  const email = document.getElementById('mail').value
  const lyceum = document.getElementById('lyceum').value
  const classa = document.getElementById('classa').value
  const data = {
    first_name, second_name, phone, email, lyceum, class: classa
  }

  axios.post('https://loterie.herokuapp.com/users', data)

  console.log(data)
})

