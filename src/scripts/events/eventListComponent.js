const eventComponent = (event) => {
    return `
        <div class="event--${event.id}">
            <header class="event__header--${event.id}">
                <h2 id="event__header--${event.id}">${event.eventTitle}</h2>
            </header>
            <article class="event__content--${event.id}">
                ${event.eventContent}
            </article>
            <footer id="event__time--${event.id}">
                <time class="event__time--${event.id}">${event.eventDate}</time>
            </footer>
            <button class="event__edit" id="edit--${event.id}">Edit</button>
            <button class="event__delete" id="delete--${event.id}">Delete</button>
        </div>
    `
}

module.exports = eventComponent