document.addEventListener("DOMContentLoaded", () => {
    const projectContainer = document.querySelector(".project-container");

    fetch("./projects.json")
        .then((response) => response.json())
        .then((data) => {
            const collectProjects = data.projects;

            collectProjects.forEach((project) => {
                const isYearNumber = !isNaN(project.year);
                const projectElement = document.createElement("a");
                projectElement.href = project.link;
                projectElement.classList.add("single-project");
                projectElement.innerHTML = `
                    <h3 class="project-title">${project.title}</h3>
                    ${
                        isYearNumber
                            ? `<div class="project-year">${project.year}</div>`
                            : `<div class="project-year in-dev">${project.year}</div>`
                    }
                    <div class="project-information">
                        <p class="project-description">${
                            project.description
                        }</p>
                        <ul class="tech-stack">
                            ${project.technologies
                                .map((tech) => `<li class="tech">${tech}</li>`)
                                .join("")}
                        </ul>
                    </div>
                `;
                projectContainer.appendChild(projectElement);
            });
        })
        .catch((error) => console.error("Error fetching projects:", error));
});
