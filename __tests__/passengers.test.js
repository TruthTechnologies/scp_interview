const {
    getPassengerNames,
    getVegetariansOrVegans,
    sortPassengersByFlights,
  } = require("../passengers"); // Importing functions from passengers.js
  
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
      id: 4,
      passengerName: "Michael Jackson",
      isVegetarianOrVegan: true,
      connectedFlights: 1,
    },
  ];
  
  describe("Passenger Data Functions", () => {
    test("Get all passenger names", () => {
      expect(getPassengerNames(passengers)).toEqual([
        "Freddie Mercury",
        "Amy Winehouse",
        "Kurt Cobain",
        "Michael Jackson",
      ]);
    });
  
    test("Return vegetarians/vegans", () => {
      expect(getVegetariansOrVegans(passengers)).toEqual([
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
          id: 4,
          passengerName: "Michael Jackson",
          isVegetarianOrVegan: true,
          connectedFlights: 1,
        },
      ]);
    });
  
    test("Sort passengers by connected flights in descending order", () => {
      expect(sortPassengersByFlights(passengers)).toEqual([
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
          id: 1,
          passengerName: "Freddie Mercury",
          isVegetarianOrVegan: false,
          connectedFlights: 2,
        },
        {
          id: 4,
          passengerName: "Michael Jackson",
          isVegetarianOrVegan: true,
          connectedFlights: 1,
        },
      ]);
    });
  });
  