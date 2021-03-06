eval('(('+document.querySelectorAll('pre')[0].innerText.slice(0,-1).replace(/\n/g,')+(').replace(/\*/g,')*(')+'))')
