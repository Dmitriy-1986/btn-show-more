'use strict';
const webApp = {
        "title": "Title",
        "description": "Lorem ipsum dolor",
        "link": "./img/img1.png",
        "datas-list-one": [
            {
                "title": "Title 1",
                "description": "Lorem ipsum dolor-1",
                "link": "./img/img2.png"
            },
            {
                "title": "Title 2",
                "description": "Lorem ipsum dolor-2",
                "link": "./img/img3.png"
            },
            {
                "title": "Title 3",
                "description": "Lorem ipsum dolor-3",
                "link": "./img/img4.png"
            },
            {
                "title": "Title 4",
                "description": "Lorem ipsum dolor-4",
                "link": "./img/img5.png"
            },
            {
                "title": "Title 5",
                "description": "Lorem ipsum dolor-5",
                "link": "./img/img6.png"
            },
            {
                "title": "Title 6",
                "description": "Lorem ipsum dolor-6",
                "link": "./img/img7.png"
            }
        ],
        "datas-list-two": [
            {
                "title": "Title 7",
                "description": "Lorem ipsum dolor-7",
                "link": "./img/img7.png"
            },
            {
                "title": "Title 8",
                "description": "Lorem ipsum dolor-8",
                "link": "./img/img6.png"
            },
            {
                "title": "Title 9",
                "description": "Lorem ipsum dolor-9",
                "link": "./img/img5.png"
            },
            {
                "title": "Title 10",
                "description": "Lorem ipsum dolor-10",
                "link": "./img/img4.png"
            },
            {
                "title": "Title 11",
                "description": "Lorem ipsum dolor-11",
                "link": "./img/img3.png"
            },
            {
                "title": "Title 12",
                "description": "Lorem ipsum dolor-12",
                "link": "./img/img2.png"
            }
        ],
            "datas-list-three": [
                {
                    "title": "Title 13",
                    "description": "Lorem ipsum dolor-13",
                    "link": "./img/img2.png"
                },
                {
                    "title": "Title 14",
                    "description": "Lorem ipsum dolor-14",
                    "link": "./img/img3.png"
                },
                {
                    "title": "Title 15",
                    "description": "Lorem ipsum dolor-15",
                    "link": "./img/img4.png"
                },
                {
                    "title": "Title 16",
                    "description": "Lorem ipsum dolor-16",
                    "link": "./img/img5.png"
                },
                {
                    "title": "Title 17",
                    "description": "Lorem ipsum dolor-17",
                    "link": "./img/img6.png"
                },
                {
                    "title": "Title 18",
                    "description": "Lorem ipsum dolor-18",
                    "link": "./img/img7.png"
                }
        ],
};

const img = document.querySelector('#img');
const section = document.querySelector('#section');
const headerDesc = document.querySelector('.header-desc');

/*
function openBtn(e) {
   return 
}
			
function closeBtn(e) {
    e.target.onclick = () => dialog.close();
}
*/


//closeModalBtn.addEventListener('click', closeBtn);

img.src = webApp.link;
headerDesc.innerHTML = `<h1>${webApp.title}</h1>
                        <p>${webApp.description}</p> `;

img.addEventListener('load', () => {
    webApp["datas-list-one"].forEach(element => {
        section.innerHTML += `<div class="card">
                                <img class="img" src="${element.link}" alt="img">
                                <h3>${element.title}</h3>
                                <p>${element.description}</p>
                                <button onclick="openModalWindow('${element.title} ${element.description}')" class="openBtn btn-modal">Open Modal</button>
                            </div>`;
    });
   
    let btnAll = document.createElement('button');
    btnAll.textContent = 'Показать еще...';
    btnAll.classList.add('btn-all');
    section.append(btnAll);

    btnAll.addEventListener('click', () => {
       btnAll.remove(); 

        webApp["datas-list-two"].forEach(element => {
            section.innerHTML += `<div class="card">
                                    <img class="img" src="${element.link}" alt="img">
                                    <h3>${element.title}</h3>
                                    <p>${element.description}</p>
                                    <button onclick="openModalWindow('${element.title} ${element.description}')" class="openBtn btn-modal">Open Modal</button>
                                </div>`;
            
        });

        

        let btnAllTwo = document.createElement('button');
        btnAllTwo.textContent = 'Показать еще...';
        btnAllTwo.classList.add('btn-all');
        section.append(btnAllTwo);

        btnAllTwo.addEventListener('click', () => {
            btnAllTwo.remove(); 

            webApp["datas-list-three"].forEach(element => {
                section.innerHTML += `<div class="card">
                                        <img class="img" src="${element.link}" alt="img">
                                        <h3>${element.title}</h3>
                                        <p>${element.description}</p>
                                        <button onclick="openModalWindow('${element.title} ${element.description}')" class="openBtn btn-modal">Open Modal</button>
                                    </div>`;              
            });
        });
    })
});

function openModalWindow(e, i) {
    alert(e, i);
}
/**/
//FOOTER
const year = new Date().getFullYear();
document.querySelector('#full-year').innerHTML = year;