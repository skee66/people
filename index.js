const personForm = document.querySelector('form');

const renderColor = (hairColor) => {
    const colorDiv = document.createElement('li');
    colorDiv.style.backgroundColor = hairColor;
    colorDiv.style.height = '50px';
    colorDiv.style.width = '100px';
    return colorDiv;
}

personForm.onsubmit = (ev) => {
    ev.preventDefault();
    const form = ev.target;
    const details = document.querySelector('.details')

    const personName = form.personName.value;
    const hairColor = form.hairColor.value;
    const age = form.age.value;
    const birthplace = form.birthplace.value;

    const em = document.createElement('li');
    em.textContent = personName;

    const colorDiv = renderColor(hairColor);

    const ageDiv = document.createElement('li');
    ageDiv.textContent = age;

    const birthplaceDiv = document.createElement('li');
    birthplaceDiv.textContent = birthplace;

    // details.innerHTML = `
    // <ul>
    //     <li>Name: ${personName}</li>
    //     <li>Hair Color: ${colorDiv.outerHTML}</li>
    //     <li>Age: ${age}</li>
    //     <li>Birthplace: ${birthplace}</li>
    // </ul>`


    // details.appendChild(em);
    // details.appendChild(colorDiv);
    // details.appendChild(ageDiv);
    // details.appendChild(birthplaceDiv);
    // console.log(details);

    const elements = form.elements;
    console.log(elements);
    let currElement;
    for (let i = 0; i < elements.length - 1; i++) {
        if (i == 1) {
            currElement = renderColor(elements[i].value);
        } else {
            currElement = document.createElement('li');
            currElement.textContent = elements[i].value;
        }
        details.appendChild(currElement);
    }
};

personForm.addEventListener('submit', handleSubmit);

