 const passengers = [
    {
      id: 1,
      passengerName: "Freddie Mercury",
      isVegetarianOrVegan: false,
      connectedFlights: 2,
    },
    {
      id: 2,
      passengerName: "Amy Winehouse",
      isVegetarianOrVegan: true,
      connectedFlights: 4,
    },
      {
      id: 3,
      passengerName: "Kurt Cobain",
      isVegetarianOrVegan: true,
      connectedFlights: 3,
    },
       {
      id: 3,
      passengerName: "Michael Jackson",
      isVegetarianOrVegan: true,
      connectedFlights: 1,
    },
  ];

  function getPassengerNames(passengerList) {
    // Main Question: Get the passengers' names using the data provided
  }
  
  function getVegetariansOrVegans(passengerList) {
   // Bonus Part (a)- Return vegetarians/vegans
  }
  
  function sortPassengersByFlights(passengerList) {
    // Bonus Part (b)- Sort passengers by the number of connected flights in descending order
  }

  getPassengerNames(passengers)
  getVegetariansOrVegans(passengers)
  sortPassengersByFlights(passengers)
  
  module.exports = {
    getPassengerNames,
    getVegetariansOrVegans,
    sortPassengersByFlights,
  };