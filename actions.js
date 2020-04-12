const buttons = document.querySelectorAll('.button')
const accesskey = document.getElementById('accesskeys')

buttons.forEach(btn => {
	btn.addEventListener('click', () => {
        let cmd = btn.dataset['command'];
        
		if(cmd === 'createlink') {
            let url = prompt("Enter the link here: ", "http:\/\/");
            url === null ? url.value= '' : url
			document.execCommand(cmd, false, url);
		} else {
			document.execCommand(cmd, false, null);
		}
	})
})

accesskey.addEventListener('click', () => {
    const dropdown = document.querySelector('.dropdown-item')
    dropdown.classList.toggle('hide')
})
