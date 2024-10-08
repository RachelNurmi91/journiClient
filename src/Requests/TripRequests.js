import axios from "axios";
const SERVER = "https://journiserver.onrender.com";
// const SERVER = "http://localhost:8080";

export default class TripRequests {
  addTrip(tripData) {
    const token = localStorage.getItem("token");

    return axios
      .post(`${SERVER}/trips/add`, tripData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(function (response) {
        return response; // Return the response for chaining
      })
      .catch(function (error) {
        console.error(error);
        throw error; // Re-throw the error to propagate it
      });
  }

  updateTrip(data) {
    console.log("data: ", data);
    const token = localStorage.getItem("token");
    return axios
      .put(`${SERVER}/trips/${data._id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(function (response) {
        return response; // Return the response for chaining
      })
      .catch(function (error) {
        console.error(error);
        throw error; // Re-throw the error to propagate it
      });
  }

  deleteTrip(tripId) {
    const token = localStorage.getItem("token");

    return axios
      .delete(`${SERVER}/trips/${tripId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(function (response) {
        return response; // Return the response for chaining
      })
      .catch(function (error) {
        console.error(error);
        throw error; // Re-throw the error to propagate it
      });
  }

  addHotel(hotelData) {
    const token = localStorage.getItem("token");
    return axios
      .post(`${SERVER}/hotels/add`, hotelData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(function (response) {
        return response; // Return the response for chaining
      })
      .catch(function (error) {
        console.error(error);
        throw error; // Re-throw the error to propagate it
      });
  }

  updateHotel(data) {
    const token = localStorage.getItem("token");
    return axios
      .put(`${SERVER}/hotels/${data._id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(function (response) {
        return response; // Return the response for chaining
      })
      .catch(function (error) {
        console.error(error);
        throw error; // Re-throw the error to propagate it
      });
  }

  deleteHotel(id) {
    const token = localStorage.getItem("token");
    return axios
      .delete(`${SERVER}/hotels/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(function (response) {
        return response;
      })
      .catch(function (error) {
        console.error(error);
        throw error;
      });
  }

  addFlight(flightData) {
    const token = localStorage.getItem("token");
    return axios
      .post(`${SERVER}/flights/add`, flightData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(function (response) {
        return response; // Return the response for chaining
      })
      .catch(function (error) {
        console.error(error);
        throw error; // Re-throw the error to propagate it
      });
  }

  updateFlight(data) {
    const token = localStorage.getItem("token");
    return axios
      .put(`${SERVER}/flights/${data._id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(function (response) {
        return response; // Return the response for chaining
      })
      .catch(function (error) {
        console.error(error);
        throw error; // Re-throw the error to propagate it
      });
  }

  deleteFlight(id) {
    const token = localStorage.getItem("token");
    return axios
      .delete(`${SERVER}/flights/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(function (response) {
        return response;
      })
      .catch(function (error) {
        console.error(error);
        throw error;
      });
  }

  addActivity(activityData) {
    const token = localStorage.getItem("token");
    return axios
      .post(`${SERVER}/activities/add`, activityData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(function (response) {
        return response; // Return the response for chaining
      })
      .catch(function (error) {
        console.error(error);
        throw error; // Re-throw the error to propagate it
      });
  }

  updateActivity(data) {
    const token = localStorage.getItem("token");
    return axios
      .put(`${SERVER}/activities/${data._id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(function (response) {
        return response; // Return the response for chaining
      })
      .catch(function (error) {
        console.error(error);
        throw error; // Re-throw the error to propagate it
      });
  }

  deleteActivity(id) {
    const token = localStorage.getItem("token");
    return axios
      .delete(`${SERVER}/activities/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(function (response) {
        return response;
      })
      .catch(function (error) {
        console.error(error);
        throw error;
      });
  }

  addCruise(cruiseData) {
    const token = localStorage.getItem("token");
    return axios
      .post(`${SERVER}/cruises/add`, cruiseData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(function (response) {
        return response; // Return the response for chaining
      })
      .catch(function (error) {
        console.error(error);
        throw error; // Re-throw the error to propagate it
      });
  }

  updateCruise(data) {
    const token = localStorage.getItem("token");
    return axios
      .put(`${SERVER}/cruises/${data._id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(function (response) {
        return response; // Return the response for chaining
      })
      .catch(function (error) {
        console.error(error);
        throw error; // Re-throw the error to propagate it
      });
  }

  deleteCruise(id) {
    const token = localStorage.getItem("token");
    return axios
      .delete(`${SERVER}/cruises/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(function (response) {
        return response;
      })
      .catch(function (error) {
        console.error(error);
        throw error;
      });
  }

  addInsurance(insuranceData) {
    const token = localStorage.getItem("token");
    return axios
      .post(`${SERVER}/insurance/add`, insuranceData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(function (response) {
        return response; // Return the response for chaining
      })
      .catch(function (error) {
        console.error(error);
        throw error; // Re-throw the error to propagate it
      });
  }

  updateInsurance(data) {
    const token = localStorage.getItem("token");
    return axios
      .put(`${SERVER}/insurance/${data._id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(function (response) {
        return response; // Return the response for chaining
      })
      .catch(function (error) {
        console.error(error);
        throw error; // Re-throw the error to propagate it
      });
  }

  deleteInsurance(id) {
    const token = localStorage.getItem("token");
    return axios
      .delete(`${SERVER}/insurance/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(function (response) {
        return response;
      })
      .catch(function (error) {
        console.error(error);
        throw error;
      });
  }

  addTransportation(transportationData) {
    const token = localStorage.getItem("token");
    return axios
      .post(`${SERVER}/transportation/add`, transportationData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(function (response) {
        return response;
      })
      .catch(function (error) {
        console.error(error);
        throw error;
      });
  }

  updateTransportation(data) {
    const token = localStorage.getItem("token");
    return axios
      .put(`${SERVER}/transportation/${data._id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(function (response) {
        return response; // Return the response for chaining
      })
      .catch(function (error) {
        console.error(error);
        throw error; // Re-throw the error to propagate it
      });
  }

  deleteTransportation(id) {
    const token = localStorage.getItem("token");
    return axios
      .delete(`${SERVER}/transportation/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(function (response) {
        return response;
      })
      .catch(function (error) {
        console.error(error);
        throw error;
      });
  }

  addRental(rentalData) {
    const token = localStorage.getItem("token");
    return axios
      .post(`${SERVER}/rentals/add`, rentalData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(function (response) {
        return response;
      })
      .catch(function (error) {
        console.error(error);
        throw error;
      });
  }

  updateRental(data) {
    const token = localStorage.getItem("token");
    return axios
      .put(`${SERVER}/rentals/${data._id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(function (response) {
        return response; // Return the response for chaining
      })
      .catch(function (error) {
        console.error(error);
        throw error; // Re-throw the error to propagate it
      });
  }

  deleteRental(id) {
    const token = localStorage.getItem("token");
    return axios
      .delete(`${SERVER}/rentals/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(function (response) {
        return response;
      })
      .catch(function (error) {
        console.error(error);
        throw error;
      });
  }

  addNote(noteData) {
    const token = localStorage.getItem("token");
    return axios
      .post(`${SERVER}/notes/add`, noteData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(function (response) {
        return response;
      })
      .catch(function (error) {
        console.error(error);
        throw error;
      });
  }

  updateNote(data) {
    const token = localStorage.getItem("token");
    return axios
      .put(`${SERVER}/notes/${data._id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(function (response) {
        return response; // Return the response for chaining
      })
      .catch(function (error) {
        console.error(error);
        throw error; // Re-throw the error to propagate it
      });
  }

  deleteNote(id) {
    const token = localStorage.getItem("token");
    return axios
      .delete(`${SERVER}/notes/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(function (response) {
        return response;
      })
      .catch(function (error) {
        console.error(error);
        throw error;
      });
  }
}
