import React from 'react'

const Shared = () => {
    let backdrop = document.querySelector('.backdrop');
    // console.log(backdrop)
    let modal = document.querySelector('.modal');
    let selectPlanButtons = document.querySelectorAll('.plan button');

    // console.dir(selectPlanButtons);
    for (var i = 0; i < selectPlanButtons.length; i++){
        selectPlanButtons[i].addEventListener('click', function(){
            modal.style.display = 'block';
            backdrop.style.display = 'block';
        });
    }
    return (
        <>
            
        </>
    )
}

export default Shared