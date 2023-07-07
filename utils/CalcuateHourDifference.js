function calculateHourDifference(startTime, endTime) {
    const startDate = new Date(`2000/01/01 ${startTime}`);
    const endDate = new Date(`2000/01/01 ${endTime}`);
    
    const differenceInMilliseconds = endDate.getTime() - startDate.getTime();
    const differenceInHours = differenceInMilliseconds / (1000 * 60 * 60); // Convert milliseconds to hours
    
    return differenceInHours;
  }

  export default calculateHourDifference