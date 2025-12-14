let types = document.querySelectorAll('.type');
let cards = document.querySelectorAll('.card');
types.forEach(type => {
    type.addEventListener('click', () => {
        let selectedType = type.getAttribute('data-type');
        console.log('Selected type:', selectedType);
        cards.forEach(card => {
            let cardType = card.getAttribute('data-type');
            if (selectedType === cardType || selectedType === 'all') {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        })
    });
})