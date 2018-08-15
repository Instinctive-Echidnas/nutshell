clearEventForm = "";
renderEventForm = `
            <fieldset class="eventsField">
                <label for="eventTitle">Title</label>
                <input required type="text" id="entryTitle" placeholder="Event Title">
            </fieldset>
            <fieldset class="eventsField">
                <label for="eventsContent">Event Description</label>
                <textarea id="eventDescription"
                          placeholder="Your thoughts"
                >
                </textarea>
            </fieldset>
            <button id="saveEventButton">Save Event</button>
        `

module.exports = renderEventForm;