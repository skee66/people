{
  const personForm = document.querySelector('form')

  const renderListItem = (name, value) => {
    const li = document.createElement('li')
    li.innerHTML = `${name}: ${value}`
    return li
  }

  const renderList = (person) => {
    const list = document.getElementsByTagName('ul')[0]
    console.log(person)
    console.log(person.value)
    let li = renderListItem(Object.keys(person)[0], person.name)
    //list.appendChild(li)
    list.insertBefore(li, list.childNodes[0])
    return list
  }

  const handleSubmit = (ev) => {
    ev.preventDefault()
    const form = ev.target
    const details = document.querySelector('.details')

    const person = {
      name: form.personName.value,
    }

    const list = renderList(person)

    details.appendChild(list)
  }

  personForm.addEventListener('submit', handleSubmit)
}