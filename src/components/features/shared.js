    let backdrop = document.querySelector('.backdrop');
    // console.log(backdrop)
    let modal = document.querySelector('.modal');
    let modalNoButton = document.querySelector(".modal__action--negative");
    let selectPlanButtons = document.querySelectorAll('.plan button');
    let toggleButton = document.querySelector('.toggle-button');
    let mobileNav = document.querySelector('.mobile-nav');

    // console.dir(selectPlanButtons);
    for (let i = 0; i < selectPlanButtons.length; i++){
        selectPlanButtons[i].addEventListener('click', function(){
            // modal.style.display = 'block';
            // backdrop.style.display = 'block';
            // modal.className= 'open'  // This will actually overwrite the complete class list
             modal.classList.add('open');
             backdrop.classList.add('open');
        });
    }
    backdrop.addEventListener("click", function(){
        // mobileNav.style.display = 'none';
        mobileNav.classList.remove('open');
        closeModal();
    });

    modalNoButton.addEventListener("click", closeModal);

    const closeModal = () => {
        // backdrop.style.display = "none";
        // modal.style.display = "none";
        modal.classList.remove('open');
        backdrop.classList.remove('open');
    }

    toggleButton.addEventListener('click', function(){
        // mobileNav.style.display= 'block';
        // backdrop.style.display= 'block';
        mobileNav.classList.add('open');
        backdrop.classList.add('open');
    })