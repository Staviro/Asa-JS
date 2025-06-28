const switcher = {
    start() {
        setInterval(() => {
            this.next();
        }, 4000);
    },
    next() {
        let container = document.querySelector('.cards-container');
        let cards = container.querySelectorAll('.card');
        let activeIndex = -1;
        for (let i = 0; i < cards.length; i++) {
            if (cards[i].classList.contains("active")) {
                activeIndex = i;
                break;
            }
        }
        if (activeIndex == -1) return console.log("Active item not found");
        let nextIndex = activeIndex + 1;
        if (typeof(cards[nextIndex]) === 'undefined') nextIndex = 0;
        let nextCard = cards[nextIndex];
        let activeCard = cards[activeIndex];
        activeCard.classList.remove("active");
        nextCard.classList.add("active");
        malo.animate({ element: "#" + nextCard.id, animation: "float-in", direction: "left" });
        malo.animate({ element: "#" + activeCard.id, animation: "float-out", direction: "right" });
    }
}