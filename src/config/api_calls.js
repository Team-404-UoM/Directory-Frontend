//GET

//Get Event Data
export const getEvents = async () => {
  try {
    let event = await fetch(`${process.env.REACT_APP_BASE_URL}/events`,
    {
        headers: { "Content-Type": "application/json" }
    });
    let results = await event.json();
    return results;
  } catch (error) {
    console.log(error);
  }
};

//Get Job Data
export const getJobs = async () => {
  try {
    let job = await fetch(`${process.env.REACT_APP_BASE_URL}/jobs`,
    {
        headers: { "Content-Type": "application/json" }
    });
    let results = await job.json();
    return results;
  } catch (error) {
    console.log(error);
  }
};

//Get Ticket Data
export const getTickets = async (id) => {
  try {
    let tickets = await fetch(`${process.env.REACT_APP_BASE_URL}/events/tickets/${id}`,
    {
        headers: { "Content-Type": "application/json" }
    });
    let results = await tickets.json();
    return results;
  } catch (error) {
    console.log(error);
  }
}

//Get Payment Data collection names
export const getEventNames = async () => {
  try {
    let coll = await fetch(`${process.env.REACT_APP_BASE_URL}/events/eventData`,
    {
        headers: { "Content-Type": "application/json" }
    });
    let results = await coll.json();
    return results;
  } catch (error) {
    console.log(error);
  }
}

//Get payemet data records for selected event
export const getPaymentRecords = async (id) => {
  try {
    let rec = await fetch(`${process.env.REACT_APP_BASE_URL}/events/getPayments/${id}`,
    {
        headers: { "Content-Type": "application/json" }
    });
    let results = await rec.json();
    return results;
  } catch (error) {
    console.log(error);
  }
}

//Get basic details of photo albums
export const getAlbums = async (id) => {
  try {
    let album = await fetch(`${process.env.REACT_APP_BASE_URL}/gallery/get_all_albums`,
    {
        headers: { "Content-Type": "application/json" }
    });
    let results = await album.json();
    return results;
  } catch (error) {
    console.log(error);
  }
}

//Get albums by category
export const getAlbumsByCaategory = async (cat) => {
  try {
    let album = await fetch(`${process.env.REACT_APP_BASE_URL}/gallery/get_albums/${cat}`,
    {
        headers: { "Content-Type": "application/json" }
    });
    let results = await album.json();
    return results;
  } catch (error) {
    console.log(error);
  }
}

//Get basic details of photo album
export const getAlbum = async (id) => {
  try {
    let album = await fetch(`${process.env.REACT_APP_BASE_URL}/gallery/get_album/${id}`,
    {
        headers: { "Content-Type": "application/json" }
    });
    let results = await album.json();
    return results;
  } catch (error) {
    console.log(error);
  }
}

//Get Thumbnail records for events
export const getThubnails = async () => {
  try {
    let tickets = await fetch(`${process.env.REACT_APP_BASE_URL}/events/getThumb`,
    {
        headers: { "Content-Type": "application/json" }
    });
    let results = await tickets.json();
    return results;
  } catch (error) {
    console.log(error);
  }
}

//Get Thumbnail image for selected event 
export const getThubnailImage = async (file) => {
  try {
    let tickets = await fetch(`${process.env.REACT_APP_BASE_URL}/events/image/${file}`,
    {
        headers: { "Content-Type": "application/json" }
    });
    let results = await tickets.json();
    return results;
  } catch (error) {
    console.log(error);
  }
}

//Get thumbnail image data for albums
export const getAlbumThumbnails = async () => {
  try {
    let tickets = await fetch(`${process.env.REACT_APP_BASE_URL}/gallery/getThumb`,
    {
        headers: { "Content-Type": "application/json" }
    });
    let results = await tickets.json();
    return results;
  } catch (error) {
    console.log(error);
  }
}

//Get thumbnail image for seleted album
export const getAlbumThumbnailImage = async (file) => {
  try {
    let tickets = await fetch(`${process.env.REACT_APP_BASE_URL}/gallery/image/${file}`,
    {
        headers: { "Content-Type": "application/json" }
    });
    let results = await tickets.json();
    return results;
  } catch (error) {
    console.log(error);
  }
}




//POST

//Add baisc transaction data to database
export const addPaymentData = async (ids, names, phones, emails, nics, prices, qtys, ticket_type) => {
  try {
    let data = await fetch(
      `${process.env.REACT_APP_BASE_URL}/events/register/${ids}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: names,
          phone: phones,
          email: emails,
          ticket_type: ticket_type,
          qty: qtys,
          nic: nics,
          price: prices
      })
      }
    );
    let results = await data.json();
    console.log(results);
    return results;
  } catch (error) {
    console.log(error);
  }
};


//Register event
export const addEvent = async (title,description,image,date,paid,tickets) => {;
  try {
    let formDataSet = new FormData()
    formDataSet.append('title', title)
    formDataSet.append('description', description)
    formDataSet.append('attendance', 0)
    formDataSet.append('date', date)
    formDataSet.append('paid', paid)
    formDataSet.append('tickets', tickets)
    formDataSet.append('image', image)

    let data = await fetch(
      `${process.env.REACT_APP_BASE_URL}/events/add`,
      {
        method: "POST",
        body:formDataSet
      }
    );
    let results = await data.json();
    console.log(results);
    return results;
  } catch (error) {
    console.log(error);
  }
};

//Create album
export const createAlbum = async (name,category,dateOfEvent,image,privacy) => {;
  try {
    let formDataSet = new FormData()
    formDataSet.append('name', name)
    formDataSet.append('category', category)
    formDataSet.append('dateOfEvent', dateOfEvent)
    formDataSet.append('privacy', privacy)
    formDataSet.append('image', image)

    let data = await fetch(
      `${process.env.REACT_APP_BASE_URL}/gallery/createAlbum`,
      {
        method: "POST",
        body:formDataSet
      }
    );
    let results = await data.json();
    console.log(results);
    return results;
  } catch (error) {
    console.log(error);
  }
};


//Add photos to album
export const addPhotos = async (id,image) => {;
try {
  let formDataSet = new FormData()
  for (const key of Object.keys(image)) {
    formDataSet.append('image', image[key])
  }

  let data = await fetch(
    `${process.env.REACT_APP_BASE_URL}/gallery/uploadPhoto/${id}`,
    {
      method: "POST",
      body:formDataSet
    }
  );
  let results = await data.json();
  console.log(results);
  return results;
} catch (error) {
  console.log(error);
}
};

//Add jobs  
export const addJob = async (title,description,closingDate,requirements) => {
  try {
    let data = await fetch(
      `${process.env.REACT_APP_BASE_URL}/jobs/add`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: title,
          description: description,
          closingDate: closingDate,
          requirements: requirements
      })
      }
    );
    let results = await data.json();
    console.log(results);
    return results;
  } catch (error) {
    console.log(error);
  }
};

//process payment
export const doPayment = async () => {
  try {
    let data = await fetch(
      `${process.env.REACT_APP_BASE_URL}/pay`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      }
    );
    let results = await data.json();
    console.log(results);
    return results;
  } catch (error) {
    console.log(error);
  }
};

//process postpone alerts
export const postponeEvent = async (id,datas) => {
  try {
    let data = await fetch(
      `${process.env.REACT_APP_BASE_URL}/events/sendPPAlerts/${id}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          datas: datas
      })
      }
    );
    let results = await data;
    return results;
  } catch (error) {
    console.log(error);
  }
};

//process reminder alerts
export const sendReminderAlerts = async (id,datas) => {
  try {
    let data = await fetch(
      `${process.env.REACT_APP_BASE_URL}/events/sendReminderAlerts/${id}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          datas: datas
      })
      }
    );
    let results = await data;
    return results;
  } catch (error) {
    console.log(error);
  }
};

//album approval alerts
export const approveAlbumAlerts = async (id,datas) => {
  try {
    let data = await fetch(
      `${process.env.REACT_APP_BASE_URL}/gallery/sendAlerts/${id}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          datas: datas
      })
      }
    );
    let results = await data;
    return results;
  } catch (error) {
    console.log(error);
  }
};

//remove photo
export const removepic = async (id,name) => {
  try {
    let data = await fetch(
      `${process.env.REACT_APP_BASE_URL}/gallery/removePhoto`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: id,
          name: name
      })
      }
    );
    let results = await data;
    return results;
  } catch (error) {
    console.log(error);
  }
};


//PUT

//Update attendance of free event
export const updateAttendance = async (id) => {
  try {
    let attendence = await fetch(`${process.env.REACT_APP_BASE_URL}/events/updateAttendance/${id}`,
    {
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

//Update event data
export const updateEvent = async (id,title,description,date,paid) => {
  try {
    let event = await fetch(`${process.env.REACT_APP_BASE_URL}/events/updateEvent/${id}`,
    {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: title,
        description: description,
        date: date,
        paid: paid,
    })
    });
    let results = await event;
    console.log(results);
    return results;
  } catch (error) {
    console.log(error);
  }
}

//Update event postpone
export const updateEventState = async (id) => {
  try {
    let state = await fetch(`${process.env.REACT_APP_BASE_URL}/events/postponeEvent/${id}`,
    {
      method: "PUT",
      headers: { "Content-Type": "application/json" }
    });
    let results = await state;
    console.log(results);
    return results;
  } catch (error) {
    console.log(error);
  }
}

//Update event resume
export const updateEventStateResume = async (id) => {
  try {
    let state = await fetch(`${process.env.REACT_APP_BASE_URL}/events/resumeEvent/${id}`,
    {
      method: "PUT",
      headers: { "Content-Type": "application/json" }
    });
    let results = await state;
    console.log(results);
    return results;
  } catch (error) {
    console.log(error);
  }
}

//Update approval state of album
export const updateApproval = async (id) => {
  try {
    let state = await fetch(`${process.env.REACT_APP_BASE_URL}/gallery/approveAlbum`,
    {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: id
    })
    });
    let results = await state;
    console.log(results);
    return results;
  } catch (error) {
    console.log(error);
  }
}

//Update job details
export const updateJobs = async (id,title,description,closingDate) => {
  try {
    let job = await fetch(`${process.env.REACT_APP_BASE_URL}/jobs/updateJob/${id}`,
    {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: title,
        description: description,
        closingDate: closingDate
    })
    });
    let results = await job;
    console.log(results);
    return results;
  } catch (error) {
    console.log(error);
  }
}


//DELETE

//Remove event
export const deleteEvent = async (id,filename) => {
  try {
    let event = await fetch(`${process.env.REACT_APP_BASE_URL}/events/removeEvent/${id}`,
    {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        filename: filename
    })
    });
    let results = await event;
    console.log(results);
    return results;
  } catch (error) {
    console.log(error);
  }
}

//Remove album
export const deleteAlbum = async (id, name) => {
  try {
    let event = await fetch(`${process.env.REACT_APP_BASE_URL}/gallery/removeAlbum`,
    {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: id,
        name: name
    })
    });
    let results = await event;
    console.log(results);
    return results;
  } catch (error) {
    console.log(error);
  }
}

//Delete job data
export const deleteJob= async (id) => {
  try {
    let job = await fetch(`${process.env.REACT_APP_BASE_URL}/jobs/removeJob/${id}`,
    {
      method: "DELETE",
      headers: { "Content-Type": "application/json" }
    });
    let results = await job;
    console.log(results);
    return results;
  } catch (error) {
    console.log(error);
  }
}

