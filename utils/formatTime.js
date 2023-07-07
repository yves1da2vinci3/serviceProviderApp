function formatTime(dateString) {
    const date = new Date(dateString);
    const options = {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    };
    return date.toLocaleString('en-US', options);
  }
  export default formatTime