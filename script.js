const input = document.getElementById("commandInput");
const output = document.getElementById("output");

const sections = {
about:
`Full Stack Java Developer with hands-on experience building scalable,
database-driven web applications using Java, Spring Boot, Hibernate, JSP,
Servlets, JDBC, and Python (Django). Strong command of MVC architecture,
ORM-based persistence, and RESTful API design, with practical exposure to MySQL-backed systems.`,

technical: `Backend:
- Java (17+)
- Spring Boot
- Hibernate (JPA)
- JSP, Servlets, JDBC
- Python, Django
-------------------------------------------
Database:
- MySQL
- MongoDB
-------------------------------------------
Frontend:
- HTML5, CSS3, JavaScript
-------------------------------------------
Tools:
- Eclipse, VS Code
- Git, GitHub
- Apache Tomcat`,

projects: `1. Car Wash Management System
   Built a service booking and management system using Java, Servlets, JDBC and MySQL.
   Implemented customer registration, service scheduling, billing and full CRUD operations.
---------------------------------------------------------------------------------------------------
2. Election Campaign Vehicle Management System
   Developed a vehicle allocation and tracking system using Java, JSP, Servlets, JDBC and MySQL.
   Managed vehicle assignments, driver records and campaign logistics using MVC architecture.
---------------------------------------------------------------------------------------------------
3. E-Commerce Web Application
   Designed a full-stack e-commerce platform using Java, Spring Boot, Hibernate and MySQL.
   Implemented authentication, product management, shopping cart and order processing.
   Used layered architecture with REST APIs and ORM-based persistence.`,

internship: `Java Spring-Boot Full Stack Intern
Luminar Technolab, Kochi
--------------------------
Duration: 6 Months
--------------------------
- Developed full-stack applications using Java, Spring Boot and Hibernate.
- Implemented ORM-based persistence with MySQL.
- Applied layered architecture (Controller → Service → DAO).
- Built REST APIs and improved database interaction efficiency.
- Gained hands-on experience in Git, debugging and clean code practices.`,

contact: `Email: amalal113112@gmail.com
LinkedIn: www.linkedin.com/in/amal-nv`
};

function printOutput(text, className = "") {

    const lines = text.split("\n");

    lines.forEach(lineText => {
        const line = document.createElement("div");
        line.classList.add("output-line");

        if (className) {
            line.classList.add(className);
        }

        line.textContent = lineText;
        output.appendChild(line);
    });

    window.scrollTo(0, document.body.scrollHeight);
}

input.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {

        const command = input.value.trim();

        printOutput(`root@amal:~# ${command}`, "command");

        input.value = "";

        if (command === "ls") {
            printOutput("about");
            printOutput("technical");
            printOutput("projects");
            printOutput("internship");
            printOutput("contact");
        }

        else if (command.startsWith("cat ")) {

            const section = command.split(" ")[1];

            if (sections[section]) {
                printOutput(sections[section], "cat-output");
            } 
            else {
                printOutput(`cat: ${section}: No such file or directory`, "error");
            }
        }

        else if (command === "help") {

            printOutput("Available commands:");
            printOutput("ls  → List sections", "help-desc");
            printOutput("cat <section>  → View section (example: cat about)", "help-desc");
            printOutput("clear  → Clear terminal", "help-desc");
            printOutput("help  → Show this message", "help-desc");
        }

        else if (command === "clear") {
            output.innerHTML = "";
        }

        else if (command === "") {
            return;
        }

        else {
            printOutput(`${command}: command not found`, "error");
        }
    }
});
