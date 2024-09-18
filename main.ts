document.addEventListener("DOMContentLoaded", () => {
  const generateResumeButton = document.getElementById("generateResumeButton") as HTMLButtonElement;
  const resumeOutput = document.getElementById("resumeOutput") as HTMLDivElement;

  function generateResume(): void {
    const name = (document.getElementById("name") as HTMLInputElement).value.trim();
    const email = (document.getElementById("email") as HTMLInputElement).value.trim();
    const number = (document.getElementById("number") as HTMLInputElement).value.trim();
    const address = (document.getElementById("address") as HTMLInputElement).value.trim();
    const degree = (document.getElementById("degree") as HTMLInputElement).value.trim();
    const school = (document.getElementById("school") as HTMLInputElement).value.trim();
    const year = (document.getElementById("year") as HTMLInputElement).value.trim();
    const skills = (document.getElementById("skills") as HTMLInputElement).value.trim();

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

  const downloadPdf = document.getElementById("downloadpdf") as HTMLButtonElement;
  downloadPdf?.addEventListener("click", () => {
    const element = document.getElementById("resumeOutput") as HTMLDivElement;
    if (element) {
      html2pdf().from(element).save();
    } else {
      alert("No resume generated to download.");
    }
  });
});