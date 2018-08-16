

//form to appear when user clicks on the create new event button
renderEventForm =
            `
            <fieldset class="eventsField">
                <label for="eventTitle">Title</label>
                <input required type="text" id="eventTitle" placeholder="Event Title">
            </fieldset>
            <fieldset class="eventsField">
                <label for="eventsContent">Event Description</label>
                <textarea id="eventDescription"
                          placeholder="Event Description"
                ></textarea>
            </fieldset>
            <fieldset class="eventsField">
                <label for="eventDate">Date</label>
                <input required type="date" id="eventDate" placeholder="Event Date">
            </fieldset>
            <button id="saveEventButton">Save Event</button>
            <button id="cancelEventButton">Cancel</button>
            `;
module.exports = renderEventForm;