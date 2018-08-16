//clears the current event listing by setting the div innerHTML to be an empty string until it is ready to be repopulated
clearEventForm = "";

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
                          placeholder="Your thoughts"
                >
                </textarea>
            </fieldset>
            <fieldset class="eventsField">
                <label for="eventDate">Date</label>
                <input required type="date" id="eventDate" placeholder="Event Date">
            </fieldset>
            <button id="saveEventButton">Save Event</button>
            `;
module.exports = renderEventForm;