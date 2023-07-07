const mockServices = [
    {
      id: 1,
      askerName: 'Alice',
      location: 'Paris, France',
      status: 0,
      amount: '50',
      date: '2023-05-15',
      startTime: '14:00',
      endTime: '16:00'
    },
    {
      id: 2,
      askerName: 'Bob',
      location: 'New York, USA',
      status: 1,
      amount: '100',
      date: '2023-06-01',
      startTime: '10:00',
      endTime: '12:00'
    },
    {
      id: 3,
      askerName: 'Charlie',
      location: 'Sydney, Australia',
      status: 2,
      amount: '75',
      date: '2023-05-20',
      startTime: '16:00',
      endTime: '18:00'
    },
    {
      id: 4,
      askerName: 'David',
      location: 'London, UK',
      status: 0,
      amount: '60',
      date: '2023-05-30',
      startTime: '12:00',
      endTime: '14:00'
    },
    {
      id: 5,
      askerName: 'Emma',
      location: 'Los Angeles, USA',
      status: 1,
      amount: '80',
      date: '2023-06-15',
      startTime: '14:00',
      endTime: '16:00'
    },
    {
      id: 6,
      askerName: 'Frank',
      location: 'Tokyo, Japan',
      status: 2,
      amount: '120',
      date: '2023-05-25',
      startTime: '10:00',
      endTime: '12:00'
    },
    {
      id: 7,
      askerName: 'Grace',
      location: 'Berlin, Germany',
      status: 0,
      amount: '70',
      date: '2023-06-05',
      startTime: '16:00',
      endTime: '18:00'
    },
    {
      id: 8,
      askerName: 'Harry',
      location: 'Toronto, Canada',
      status: 1,
      amount: '90',
      date: '2023-05-20',
      startTime: '12:00',
      endTime: '14:00'
    },
    {
      id: 9,
      askerName: 'Isabella',
      location: 'Rio de Janeiro, Brazil',
      status: 2,
      amount: '150',
      date: '2023-06-10',
      startTime: '14:00',
      endTime: '16:00'
    },
    {
      id: 10,
      askerName: 'Jack',
      location: 'Seoul, South Korea',
      status: 0,
      amount: '65',
      date: '2023-05-30',
      startTime: '10:00',
      endTime: '12:00'
    }
  ];
  // service Map

  const serviceMap = new Map()
  
  serviceMap.set(1,"Cleaning")
  serviceMap.set(2,"Hand care")
  serviceMap.set(3,"Cooking")
  serviceMap.set(4,"Driving")
  serviceMap.set(5,"electricity")
  serviceMap.set(6,"Repair")
  serviceMap.set(7,"Carpenter")
  serviceMap.set(8,"Hair")


  // notifcations informatio

  const notifcationsBase = [ 
  { id :  1, iconName : "checkmark", bgColor : "bg-green-400", title : "book confirmed" }, 
  { id :  2, iconName : "star-half", bgColor : "bg-yellow-400" , title : "Rating recieved"},
  { id :  3, iconName : "receipt", bgColor : "bg-blue-400" , title :"Book received" },
  { id :  4, iconName : "card-outline", bgColor : "bg-blue-400" , title :"Payment received" },
]

  export { mockServices,notifcationsBase,serviceMap}