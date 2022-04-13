const section = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controlls');
const sectBtn = document.querySelectorAll('.control');
const allSection = document.querySelector('.main-content');

function pageTransition(){
//    Button clcik active class.
    for(let i=0; i<sectBtn.length; i++){
        sectBtn[i].addEventListener('click', function(){
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.className += ' active-btn';
        });
    };

    //  section Active class
    allSection.addEventListener('click', function(e){
        // console.log(e.target)
        const id = e.target.dataset.id;
        if(id){
            sectBtns.forEach((btn)=>{
                btn.classList.remove('active');
            })
            e.target.classList.add('active')

            section.forEach((section)=>{
                section.classList.remove('active')
            })

            const element = document.getElementById(id);
            element.classList.add('active');
        }
    })

    // Toggle Theme

    // const themeBtns = document.querySelectorAll('.theme-btns');
    // const themeBtn = document.querySelectorAll('theme-Btn')
    // for(let i=0;i<themeBtn.length;i++){
    //     console.log(themeBtn[i].classList)
    // }


    const whitethemeBtn = document.querySelector('.white-theme-btn');
    whitethemeBtn.addEventListener('click', ()=>{
        let element = document.body;
        element.classList.toggle('light-mode');
    })

    const pinkthemeBtn = document.querySelector('.pink-theme-btn');
    pinkthemeBtn.addEventListener('click', ()=>{
        let element = document.body;
        element.classList.toggle('pink-mode');
    });

    
}

pageTransition();
