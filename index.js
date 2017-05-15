const personForm = document.querySelector('form');

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

    const colorDiv = document.createElement('li');
    colorDiv.style.backgroundColor = hairColor;
    colorDiv.style.height = '50px';
    colorDiv.style.wdith = '100px';

    const ageDiv = document.createElement('li');
    ageDiv.textContent = age;

    const birthplaceDiv = document.createElement('li');
    birthplaceDiv.textContent = birthplace;

details.innerHTML = `
<ul>
    <li>Name: ${personName}</li>
    <li>HairColor: ${hairColor.innerHTML}</li>
    <li>Age: ${age}</li>
    <li>Birthplace: ${birthplace}</li>
</ul>`
    // details.appendChild(em);
    // details.appendChild(colorDiv);
    // details.appendChild(ageDiv);
    // details.appendChild(birthplaceDiv);
};