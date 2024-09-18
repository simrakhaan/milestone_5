document.addEventListener("DOMContentLoaded", () => {
    const generateResumeButton = document.getElementById("generateResumeButton");
    const resumeOutput = document.getElementById("resumeOutput");
    function generateResume() {
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const number = document.getElementById("number").value.trim();
        const address = document.getElementById("address").value.trim();
        const degree = document.getElementById("degree").value.trim();
        const school = document.getElementById("school").value.trim();
        const year = document.getElementById("year").value.trim();
        const skills = document.getElementById("skills").value.trim();
        if (!name || !email || !number || !address || !degree || !school || !year || !skills) {
            alert("Please fill in all fields.");
            return;
        }
        const resumeHTML = `
      <h2>Generated Resume</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone Number:</strong> ${number}</p>
      <p><strong>Address:</strong> ${address}</p>
      <h3>Education</h3>
      <p><strong>Degree:</strong> ${degree}</p>
      <p><strong>School/University:</strong> ${school}</p>
      <p><strong>Year:</strong> ${year}</p>
      <h3>Skills</h3>
      <p>${skills}</p>
    `;
        resumeOutput.innerHTML = resumeHTML;
    }
    generateResumeButton.addEventListener("click", generateResume);
    const downloadPdf = document.getElementById("downloadpdf");
    downloadPdf?.addEventListener("click", () => {
        const element = document.getElementById("resumeOutput");
        if (element) {
            html2pdf().from(element).save();
        }
        else {
            alert("No resume generated to download.");
        }
    });
});

