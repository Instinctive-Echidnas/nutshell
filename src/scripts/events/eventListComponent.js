const eventComponent = (event) => {
    return `
        <div class="event">
            <header class="event__header">
                <h2>${event.eventTitle}</h2>
            </header>
            <article class="event__content">
                ${event.eventContent}
            </article>
            <footer>
                <time class="event__timestamp">${event.eventDate}</time>
            </footer>
            <button class="event__delete" id="delete--${event.id}">Delete</button>
        </div>
    `
}

module.exports = eventComponent