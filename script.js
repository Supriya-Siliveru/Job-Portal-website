document.addEventListener('DOMContentLoaded', function () {
    const jobForm = document.getElementById('new-job-form');
    const jobList = document.getElementById('job-list');

    jobForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const jobTitle = document.getElementById('job-title').value;
        const company = document.getElementById('company').value;
        const location = document.getElementById('location').value;

        // Create a new job listing element
        const jobListing = document.createElement('div');
        jobListing.innerHTML = `
            <h3>${jobTitle}</h3>
            <p><strong>Company:</strong> ${company}</p>
            <p><strong>Location:</strong> ${location}</p>
        `;

        // Append the job listing to the job list
        jobList.appendChild(jobListing);

        // Clear the form inputs
        jobForm.reset();
    });
});
