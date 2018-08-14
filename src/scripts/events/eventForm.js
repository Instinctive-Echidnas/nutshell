renderEventForm = `
            <fieldset class="eventsField">
                <label for="eventTitle">Title</label>
                <input required type="text" id="entryTitle" placeholder="Event Title">
            </fieldset>
            <fieldset class="eventsField">
                <label for="eventsContent">Event Description</label>
                <textarea id="eventDescription"
                          placeholder="Your thoughts"
                          rows="10"
                >
                </textarea>
            </fieldset>
            <fieldset class="eventsField">
                <label for="eventDate">Date</label>
                <input required type="text" id="entryDate" placeholder="Event Date">
            </fieldset>
            <button id="saveEventButton">Save Event Entry</button>
        `

module.exports = renderEventForm;