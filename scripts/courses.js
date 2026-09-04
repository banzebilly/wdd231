const courses = [
    {
        subject: "CSE",
        number: 110,
        title: "Introduction to Programming",
        credits: 2,
        certificate: "Web and Computer Programming",
        description:
            "This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, arrays, and input/output) and use them to solve problems.",
        technology: ["Python"],
        completed: true
    },

    {
        subject: "WDD",
        number: 130,
        title: "Web Fundamentals",
        credits: 2,
        certificate: "Web and Computer Programming",
        description:
            "This course introduces students to the World Wide Web and to careers in website design and development.",
        technology: ["HTML", "CSS"],
        completed: true
    },

    {
        subject: "CSE",
        number: 111,
        title: "Programming with Functions",
        credits: 2,
        certificate: "Web and Computer Programming",
        description:
            "Students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others and to write, call, debug, and test their own functions.",
        technology: ["Python"],
        completed: true
    },

    {
        subject: "CSE",
        number: 210,
        title: "Programming with Classes",
        credits: 2,
        certificate: "Web and Computer Programming",
        description:
            "This course introduces the notion of classes and objects. It presents encapsulation at a conceptual level and works with inheritance and polymorphism.",
        technology: ["C#"],
        completed: false
    },

    {
        subject: "WDD",
        number: 131,
        title: "Dynamic Web Fundamentals",
        credits: 2,
        certificate: "Web and Computer Programming",
        description:
            "This course builds on prior experience in Web Fundamentals and programming. Students learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.",
        technology: ["HTML", "CSS", "JavaScript"],
        completed: true
    },

    {
        subject: "WDD",
        number: 231,
        title: "Frontend Web Development I",
        credits: 2,
        certificate: "Web and Computer Programming",
        description:
            "This course builds on prior experience with Dynamic Web Fundamentals and programming. Students focus on user experience, accessibility, compliance, performance optimization, and basic API usage.",
        technology: ["HTML", "CSS", "JavaScript"],
        completed: false
    }
];


// let me get HTML elements
const courseGrid = document.querySelector(".course-grid");
const totalCreditsElement = document.querySelector("#total-credits");


// Displaying courses
const displayCourses = (courseList) => {

    courseGrid.innerHTML = "";

    courseList.forEach((course) => {

        const card = document.createElement("article");

        card.classList.add(
            "course-card",
            course.completed ? "completed" : "incomplete"
        );

        card.innerHTML = `
            <h3>${course.subject} ${course.number}</h3>

            <p>${course.title}</p>

            <p>${course.credits} credits</p>

            <span class="status ${course.completed ? "completed" : "incomplete"}">
                ${course.completed ? "✓" : "✗"}
            </span>
        `;

        courseGrid.appendChild(card);
    });

    calculateTotalCredits(courseList);
};


// Calculating the total credits
const calculateTotalCredits = (courseList) => {

    const totalCredits = courseList.reduce(
        (sum, course) => sum + course.credits,
        0
    );

    totalCreditsElement.textContent =
        `Total Credits: ${totalCredits}`;
};


// let Filter  the courses
const filterCourses = (category) => {

    if (category === "ALL") {

        displayCourses(courses);

    } else {

        const filteredCourses = courses.filter(
            (course) => course.subject === category
        );

        displayCourses(filteredCourses);
    }
};



document.querySelector("#all-btn").addEventListener(
    "click",
    () => filterCourses("ALL")
);

document.querySelector("#cse-btn").addEventListener(
    "click",
    () => filterCourses("CSE")
);

document.querySelector("#wdd-btn").addEventListener(
    "click",
    () => filterCourses("WDD")
);


// Displaying  allthe  courses when page load
displayCourses(courses);