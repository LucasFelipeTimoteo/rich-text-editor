const buttons = document.querySelectorAll('.button')
const textArea = document.querySelectorAll('.text-area')

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
