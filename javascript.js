let boxInvite = document.querySelector('.box-invite')

boxInvite.addEventListener('click', e => {
    e.preventDefault()
    
    boxInvite.classList.add('clicked')

    setInterval(() => {
        boxInvite.style.display = 'none'
        document.querySelector('span.loader').style.display = 'block'
        setInterval(() => {
            window.location.href = 'sources/invite/invite.html'
        }, 1000)
    }, 4500)
})

