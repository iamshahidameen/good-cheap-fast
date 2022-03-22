const toggles = document.querySelectorAll('.toggle');
const good = document.querySelector('#good');
const cheap = document.querySelector('#cheap');
const fast = document.querySelector('#fast');

toggles.forEach((toggle) => {
    toggle.addEventListener( 'change',(e) => {
        checkPossibleCombination(e.target);
    })
})

function checkPossibleCombination(theClickedCheckbox){
    if(good.checked && cheap.checked & fast.checked) {
        if(good == theClickedCheckbox){
            cheap.checked = false;
        }
        if(cheap == theClickedCheckbox){
            fast.checked = false;
        }
        if(fast == theClickedCheckbox){
            good.checked = false;
        }
    }
}