function meetings(data) {

    let listMeetings = {};

    for (const current of data) {
        let [day, name] = current.split(' ');
    
        if (listMeetings.hasOwnProperty(day)) {
            console.log(`Conflict on ${day}!`);
        } else {
            listMeetings[day] = name;
            console.log(`Scheduled for ${day}`);
        }
    }

    for (const [day, name] of Object.entries(listMeetings)) {
        console.log(`${day} -> ${name}`);
    }
}
meetings(['Friday Bob',
'Saturday Ted',
'Monday Bill',
'Monday John',
'Wednesday George']);