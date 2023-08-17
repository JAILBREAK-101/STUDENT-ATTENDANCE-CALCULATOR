/* Script File mainly for the application's dashboard =====*/
const view = document.querySelector(".view");

const coursesDialog = document.querySelector(".courses-dialog");

const validateForm = () => {};

const openCourseDialog = () => {
  const generateCourseElement = () => {
    for (let i = 0; i < document.querySelector("[data-courses]").value; i++) {
      document.createElement("li").innerHTML = `
                <input type = "text" />
            `;
    }
  };
  coursesDialog.innerHTML = `
        <div class = "header">
            <h2>${document.querySelector("[data-level]").value} Level ${
    document.querySelector("[data-department]").value
  } Students</h2>
        </div>
        <div class = "body">
            <ul class="list>
                ${generateCourseElement}
            </ul>
        </div>
    `;
};

const home = `
    <div id="home">
        <div class = "home-header">
            <h2 class="home-header__text">Home</h2>
        </div>
        <div></div>
    </div>
`;

const calculator = `
    <div id="calculator">
        <div class = "calc-header">
            <h2 class="calc-header__text">Calculator</h2>
        </div>
        <form name="calc-form" class="form">
            <fieldset class="form-group">
                <legend>
                    <label class="form-label" for="level">Students Level</label>
                </legend>
                <input type="text" class="form-control" name="level" id="level"
                    placeholder="Enter Students Level" data-level>
            </fieldset>
        
            <fieldset class="form-group">
                <legend>
                    <label class="form-label" for="department">Students Department</label>
                </legend>
                <input type="text" class="form-control" name="department" id="department"
                    placeholder="Enter Students Department" data-department>
            </fieldset>
        
            <div class="col-2">
                <fieldset class="form-group">
                    <legend>
                        <label for="no-of-courses">Number of Courses</label>
                    </legend>
                    <input type="text" class="form-control" name="no-of-courses" id="no-of-courses"
                        data-courses>
                </fieldset>
        
                <input onclick="${openCourseDialog}"  type="button" class="form-button" value="Enter Courses" data-course-btn />
            </div>
        </form>

        <div class="courses-dialog hidden">
            <!-- generate from JS -->
        </div>
    </div>
`;

const records = `
    <div id="records">
        <div class = "records-header">
            <h2 class="records-header__text">Records</h2>
        </div>
        <div></div>
    </div>
`;

const navigateSection = (selector) => {
  if (selector === "home-link") {
    view.innerHTML = home;
  } else if (selector === "calc-link") {
    view.innerHTML = calculator;
  } else if (selector == "records-link") {
    view.innerHTML = records;
  } else return;
};

const navigationLinks = document
  .querySelectorAll("[data-link]")
  .forEach((navLink) => {
    navLink.addEventListener("click", (e) => {
      e.preventDefault();
      navigateSection(navLink.className);
    });
  });
