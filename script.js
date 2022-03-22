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
            fast.checked = false;
        }
        if(cheap == theClickedCheckbox){
            good.checked = false;
        }
        if(fast == theClickedCheckbox){
            cheap.checked = false;
        }
    }
}