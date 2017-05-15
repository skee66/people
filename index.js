const personForm = document.querySelector('form');

const renderColor = (hairColor) => {
    const colorDiv = document.createElement('div');
    colorDiv.style.backgroundColor = hairColor;
    colorDiv.style.height = '50px';
    colorDiv.style.wdith = '100px';
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

    const em = document.createElement('em');
    em.textContent = personName;

    const colorDiv = renderColor(hairColor);

    const ageDiv = document.createElement('div');
    ageDiv.textContent = age;

    const birthplaceDiv = document.createElement('div');
    birthplaceDiv.textContent = birthplace;

details.innerHTML = `
<ul>
    <li>Name: ${personName}</li>
    <li>Hair Color: ${colorDiv.outerHTML}</li>
    <li>Age: ${age}</li>
    <li>Birthplace: ${birthplace}</li>
</ul>`
    // details.appendChild(em);
    // details.appendChild(colorDiv);
    // details.appendChild(ageDiv);
    // details.appendChild(birthplaceDiv);
};

personForm.addEventListener('submit', handleSubmit);

