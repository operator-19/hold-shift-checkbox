const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;

function handleCheck(e) {
    // checking if shift key is down AND check that they are checking it
    let inBetween = false;
    if (e.shiftKey && this.checked) {
        // we go ahead and do what we please
        // loop over every signle checkbox
        checkboxes.forEach(checkbox => {
            // console.log(checkbox);
            if (checkbox === this || checkbox === lastChecked) {
                inBetween = !inBetween;
                // console.log('starting to check inBetween')
            }

            if (inBetween) {
                checkbox.checked = true;
            }
        });
    }

    lastChecked = this;
}

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('click', handleCheck)
});