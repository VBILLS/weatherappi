export const formatTime = (time) => {
    const strTime = time.toString()
    const addMilli = strTime + '000';
    const convert = parseInt(addMilli, 10)
    const fullTime = new Date(convert);
    return fullTime
  }

