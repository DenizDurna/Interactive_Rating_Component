
  function send(event) {
    event.preventDefault()
    const feedback = event.target.feedback.value
    if (feedback != "") {
      document.getElementById("feedback").style.display = "none"
      document.getElementById("final").style.display = "block"
      document.getElementById("selected").innerHTML = `You selected ${feedback} out of 5`
    }
  }