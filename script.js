const form = document.getElementById("resumeForm")
const resumeContainer = document.getElementById("resume")

form?.addEventListener("submit", event => {
  event.preventDefault()

  const name = document.getElementById("name").value
  const email = document.getElementById("email").value
  const skills = document.getElementById("skills").value
  const workExperience = document.getElementById("workExperience").value


  if (name === "" || contact === "" || email === "" || skills === "" || workExperience === "") {
    alert("Please fill all mandatory fields.")
    return
  }


  resumeContainer.style.display = "block"
  resumeContainer.innerHTML = `
        <h2>${name}</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Skills:</strong> ${skills}</p>
        <p><strong>Work Experience:</strong> ${workExperience}</p>
    `
})
