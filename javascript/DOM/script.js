let tagH1 = document.getElementsByTagName("h1");

tagH1 = tagH1[0];

// console.log(tagH1.textContent);
// console.log(tagH1.innerText);
// console.log(tagH1.innerHTML);
// console.log(tagH1.outerHTML);

let tagP1 = document.getElementById('texto-p1');

const mostraAlert = () => {
    alert(123);
}

tagP1.addEventListener('mouseover', mostraAlert);

let tagButton = document.getElementById('my-button');

tagButton.addEventListener('click', () => {
    tagH1.textContent = "Outra coisa"
    tagH1.style.color = 'red';
    tagH1.style.backgroundColor = 'yellowgreen';
});

let tagA = document.querySelector('a');

tagA.addEventListener('click', (event) => {
    event.preventDefault();
    event.target.style.color = "yellowgreen"
});



let novaTag = document.createElement('h2');
novaTag.textContent = "Titulo h2"
novaTag.classList.add('text-bold');

tagH1.appendChild(novaTag)
console.log(novaTag);

tagH1.innerHTML = "<h2>Outro h2<h2>";