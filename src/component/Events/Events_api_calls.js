export const getEvents = async() => {
    try {
        let event = await fetch(`${process.env.REACT_APP_BASE_URL}/event`, {
            headers: { "Content-Type": "application/json" }
        });
        let results = await event.json();
        return results;
    } catch (error) {
        console.log(error);
    }
};

export const getTickets = async(id) => {
    try {
        let tickets = await fetch(`${process.env.REACT_APP_BASE_URL}/event/tickets/${id}`, {
            headers: { "Content-Type": "application/json" }
        });
        let results = await tickets.json();
        return results;
    } catch (error) {
        console.log(error);
    }
}

export const addPaymentData = async(ids, names, phones, emails, nics, prices, qtys, cards) => {
    console.log(ids);
    console.log(names);
    try {
        let data = await fetch(`${process.env.REACT_APP_BASE_URL}/event/register/${ids}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                current: names,
                phone: phones,
                email: emails,
                card: cards,
                qty: qtys,
                nic: nics,
                price: prices
            })
        });
        let results = await data.json();
        console.log(results);
        return results;
    } catch (error) {
        console.log(error);
    }
};


export const updateAttendance = async(id) => {
    try {
        let attendence = await fetch(`${process.env.REACT_APP_BASE_URL}/event/updateAttendance/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" }
        });
        let results = await attendence;
        console.log(results);
        return results;
    } catch (error) {
        console.log(error);
    }
}