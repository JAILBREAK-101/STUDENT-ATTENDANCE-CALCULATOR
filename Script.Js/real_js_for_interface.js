// THIS IS FOR THE USER INTERFACE (welcome page).

// ALL PARAMETERS.
const the_main_wrapper = document.querySelector('.main-wrapper-for-contents');
const the_form = document.querySelector('form');

// FOR THE LEVEL OF THE STUDENTS
let level_input = document.getElementsByClassName('level-of-students')[0];

// THE INDICATOR FOR THE STUDENT'S LEVEL.
const level_indicator = document.getElementsByClassName('student-level')[0];
level_indicator.style.display = 'none';

// FOR THE DEPARTMENT.
let department_of_students = document.querySelector('.department-of-students');

let no_of_courses_field = document.querySelector('.generate-courses');

// THE INPUT FOR NUMBER OF COURSES.
const no_of_courses = document.querySelector('form input.number');
const no_of_students = document.querySelector('form input#no-of-students');

// FOR GENERATING TABLE FOR ENTERING COURSES, BASED ON THE NUMBER ENTERED BY THE USER (the buttons).
const button_for_courses = document.querySelector('.for-courses');
const button_for_students = document.querySelector('.for-students');

const done_button_for_no_of_courses = document.getElementsByClassName('btn')[0];
const done_button_for_no_of_students = document.getElementsByClassName('btn')[1];

// MORE DECLARATIONS FOR ADVANCED DISPLAY (modals and interactions [components].)
let modal_for_courses = document.querySelector('.modal-for-courses');
modal_for_courses.style.display = 'none';

let modal_for_students = document.querySelector('dialog.for-students');
modal_for_students.style.display = 'none';

let table_for_courses = document.getElementById('table');
// table_for_courses.style.display = 'none';

let inputs_container = document.getElementsByClassName('container-for-inputs')[0];

// FOR THE TABLE BODIES OF BOTH MODALS
let table_body_for_no_of_courses = document.getElementsByTagName('tbody')[0];
let table_body_for_no_of_students = document.getElementsByTagName('tbody')[1];

// DISABLING THE ENTER THE STUDENTS FORM ON A DEFAULT (input and the button for the input) and indicator for field.
let no_of_students_field = document.querySelector('section.no-of-students');
no_of_students_field.style.display = 'none';
let filler_indicator = document.querySelector('.form-filler');
// for more parameters.
let modal_courses = return_modal(modal_for_courses);
let modal_students = return_modal(modal_for_students);

// FOR THE SAVED RECORDS BUTTON.
let view_saved_rec_btn = document.querySelector('.saved_records');
let modal_storage = document.getElementsByClassName('for-storage')[0];
// The container that would contain all the created storage items.
let record_container = document.getElementsByTagName('ol')[0];

// the close button for the storage modal
let close_btn_for_storage = document.querySelector('.storage-container .close');

// OVERLAY FOR MODAL.
let modal_overlay = document.querySelector('.overlay-modal')

// AFTER WE'VE INPUTTED OUR DATA, STORE IT FOR THAT INSTANCE.
let no_records_text = document.querySelector('.no-records');
let click_on = document.querySelector('.instruction');
click_on.style.display = 'none';

// ALL FUNCTIONS.
// FUNCTION TO GET THE PROPERTIES OF THE CLOSE BUTTON IN MODALS.
// FUNCTION TO GET THE PROPERTIES (for closing the modal).

// ----- CLOSE BUTTON FOR FUNCTIONAL MODALS -----
function get_for_close (actual_element, yes_btn, no_btn, modal_close){
    return {
       actual_element :  function return_element(){
            let the_element = document.querySelector(actual_element);
            // return `document.querySelector('${actual_element}')`;
            return the_element;
        },
        yes_btn : function return_button() {
            // return `document.querySelector('${yes_btn}')`;
            let the_element1 = document.querySelector(yes_btn);
            return the_element1;
        },
        no_btn : function return_button() {
            // return `document.querySelector('${no_btn}')`;
            let the_element2 = document.querySelector(no_btn);
            return the_element2;
        },
        modal_close : function return_modal() {
            // return `document.querySelector('${modal_close}')`;
            let the_element3 = document.querySelector(modal_close);
            return the_element3;
        } 
    }
}

// OBJECT FOR STORING PROPERTIES GOTTEN BY THE FUNCTION THAT GOT THEM, FOR USE.
// OBJECT PROPERTIES FROM PREVIOUS OBJECTS, COME IN HERE.
function object_for_close_btn(close_element, yes, no, modal_for_close) {
    return {
        close_element: close_element,
        yes: yes,
        no: no,
        modal_for_close: modal_for_close
    }
}
// ------------------ END -------------------

// FUNCTION TO RETURN MODAL, FOR CANCELLING AND ACCESSING OF THE DATA SOMEWHERE ELSE.
function return_modal(modal) {
    return modal;
}

// FUNCTION FOR MAIN CREATION OF DATA, ON THE INTERFACE.
function create_nodes(activate_button, input_field, modal_table_body, the_actual_modal) {

    activate_button.addEventListener('click', (e) => {
        e.preventDefault();
        console.log(parseInt(input_field.value));
        // MAKE USE OF THIS INTEGER VALUE, FOR THE AMOUNT OF COURSES SPACE.

    // CONDITIONS, FOR ENSURING PROPER VALIDATION.
    if (parseInt(input_field.value) === 0 || parseInt(input_field.value) === parseInt('')) {
        // In all this conditions, they should generate an error message to the user.
        alert("You are not meant to type in 0.");
    }
    
    // THIS IS EXCEPTIONAL (for it is only one).
    else if (level_input.value === '') {
        alert("Please enter the level of your students.");
    }

    else if (department_of_students.value == '') {
        alert("Please enter the department of your students.")
    }

    else if (input_field == no_of_students && input_field.value == '') {
        alert("Please enter the number of students that you want to register");
    }
    else if (input_field.value == '') {
        alert("Please enter the number of courses, of your students.")
    }
    // ...
   // CREATE A NEW DATA-ROW BASED ON THE NUMBER OF COURSES.
   else if (parseInt(input_field.value) > 0) {
        for (i = 1; i <= parseInt(input_field.value); i++) {
            // THE TABLE BODY, FOR THE MAIN DATA.
            // CREATE WHERE THE DATA INPUT WOULD BE.
            modal_overlay.classList.add('active')
            let new_input_field_for_course = document.createElement('input');
            let new_input_field_for_lecture_time = document.createElement('input');
    
            new_input_field_for_lecture_time.type = 'number';
            // SETTING A CLASS FOR EACH OF THIS INPUTS
            new_input_field_for_course.classList.add('input-for-course');
            new_input_field_for_lecture_time.classList.add('input-for-lecture');
            
            // NOW START APPENDING THIS INTO THE PARENTS FOR THE USER TO BE ABLE TO TYPE.
            
            // THE TABLE DATA FIELD.
            var table_row = document.createElement('tr');
            // table_row.classList.add('course-items');
            var table_data1 = document.createElement('td');
            var table_data2 = document.createElement('td');
    
            table_data1.append(new_input_field_for_course);
            table_data2.append(new_input_field_for_lecture_time);
    
            table_row.append(table_data1, table_data2);
            // table_data.style.display = 'grid';
    
            // PUT THE TABLE ROW OF DATA INSIDE THE TABLE BODY
            modal_table_body.appendChild(table_row);
    
            // inputs_container.append(table_data);
            // table_for_courses.style.display = 'block';
            
            // FOR THE LEVEL OF THE STUDENTS.
            let level_input_value = level_input.value;
            
            // THE WHOLE MODAL SHOULD APPEAR.
            the_actual_modal.style.display = 'block';
    
            // FOR CAPITALIZING THE DEPARTMENT OF THE STUDENTS THAT THE USER ENTERS.
            function capitilize(word) {
                word.split(" ").join(',')
            }
            
            // THE INDICATOR FOR THE LEVEL OF THE STUDENTS.
            level_indicator.innerHTML = `${level_input_value.slice(0,3)} level ${department_of_students.value.toUpperCase()} students courses`;
            level_indicator.style.display = 'block';
            
            // GETTING THE DATA, OF EACH TABLE ROWS, FROM THE USER using the factory function...
            
        }
        // AFTER CREATING THIS FIELDS, CLEAR THE INPUT FIELDS.
        // MAKE THE COURSES OWN TO DISAPPEAR TOO.
        //    ...
        }
})
}

// TO RETURN THE BODY CHILDREN, FOR DELETION, WHEN WE CLICK ON CANCEL, for each modal.
function return_table_body_children(para_element) {
    let element = document.querySelectorAll(para_element);
    return element;
}


// FOR CONFIRMING CANCELATION.
function close_the_modal (close_button, modal, yes, no, the_record, tbody_dom) {
    close_button.addEventListener('click', () => {
        // Ask the user if he or she wants the records cleared and cancelled.
        
        // WHEN THIS CLOSE BUTTON IS CLICKED, SHOW THE PROMPT (confirmation modal).
        modal.style.display = 'block';
        // if (modal.open = true) {
        //     // add a background for the modal.
        //     modal.style.backdropFilter = 'grey';
        // }
        // NOW COMING TO THE BUTTON THAT THE USER CLICKS, FOR THE FUNCTIONALITY OF THIS MODAL.
        yes.addEventListener('click', () => {
            // <Cancel all records if it's for the number of courses.>
            delete_records(table_body_for_no_of_courses)
            delete_records(table_body_for_no_of_students)
            // let the whole record clear and the fields disappear.
            the_record.style.display = 'none';
            // LET PROMPTING WINDOW DISAPPEAR.
            modal.style.display = 'none';  
            // the data fields.
            // AFTER IT REMOVES IT, RELOAD THE WHOLE DOCUMENT, FOR THE USER TO TYPE IN AGAIN
            the_main_wrapper.style.pointerEvents = 'all';
            modal_overlay.classList.remove('active')
            no_of_courses.value = ''
            // Remove from local storage, since storing is not complete....
            if (table_body_for_no_of_courses) {
                for (let i = 0; i<localStorage.length; i++) {
                    window.localStorage.removeItem(`course-data ${i}`)
                }
            }
        })
        no.addEventListener('click', () => {
            // Do nothing (leave the record like that).

            modal.style.display = 'none';
            
            // until the user clicks on cancel again, and clicks on yes to clear all the records.
        })
    })
}

// WHEN I CLICK DONE IN THE FIRST MODAL AND CONCERING THE TABLE BODY'S CHILDREN ELEMENTS.
function return_table_body_children(para_element) {
    let element = document.querySelectorAll(para_element);
    return element;
}

// --- CONCERNING THE DONE BUTTON --- 

// for the first modal
function done_button_action (modal, second_input_field, third_input_field) {
    // close that modal.
    modal.style.display = 'none';
    modal_overlay.classList.remove('active')

    // // The field of the second should be hidden to prevent extra record in present instance.
    second_input_field.style.display = 'none';

    // // The form filler should disappear, since we've filled the form.
    filler_indicator.style.display = 'none';

    // // Activate the student's records input and button.
    third_input_field.style.display = 'flex';
    
    // // ACTIVATE ALL POINTING EVENTS.
    the_main_wrapper.style.pointerEvents = 'all';
}

// Remove existing record for new set of records to be stored.
function delete_records (children_set) {
    for(let each_child of children_set.children) {
        each_child.remove()
    }
}

// FUNCTION TO VALIDATE THE INPUTS OF THE USER IN THE MODAL AFTER THE USER HAS PRESSED DONE, IN THE MODAL.


// THIS WOULD ENTER THE MODIFIED STORAGE CREATED.
/*
// AFTER THE USER HAS CREATED, DO NOT OPEN THE MODAL UNLESS THE USER HAS COMPLETED THE INSTANCE OF SAVING THE RECORD.
view_saved_rec_btn.addEventListener('click', () => {
    alert("Finish the process");
    modal_storage.open = false;
    close_modal(close_btn_for_storage, modal_storage);
    console.log(table_body_data);
})
*/

// reusable for other modals.
function close_modal (close_btn, modal) {
    close_btn.addEventListener('click', () => {
        modal.open = false;
        modal_overlay.classList.remove('active')
    })
}

// clicking on the view saved records button.
view_saved_rec_btn.addEventListener('click', () => {
    modal_storage.open = true;
    modal_overlay.classList.add('active')
    // WHEN THE USER WANTS TO VIEW THE SAVED RECORD, AFTER THE USER HAS STORED SOMETHING IN IT.
    // let records = window.localStorage.getItem(key);
    // close when user clicks close.
    close_modal(close_btn_for_storage, modal_storage);

    // GENERATE ALL SAVED RECORDS WHEN USER CLICKS ON VIEW SAVED RECORDS.
})

// WHAT SHOULD HAPPEN, WHEN WE CLICK ON DONE BUTTON FOR EACH MODALS.
function store_records () {
    // return [create_record(table_body_for_no_of_courses), create_record(table_body_for_no_of_students)]
    // create_record(table_body_for_no_of_courses)
    // create_record(table_body_for_no_of_students)
    let array_of_records = [create_record()]
    return array_of_records
}

function create_record(table_body1, table_body2) {
    try {
        var loop_data1 = table_body1.children
        var loop_data2 = table_body2.children
    }
    catch (e) {
        console.log("ERROR BUT CONTINUE")
    }

    // This picks out all the data in the table data, for each of the modals, and stores them in an object variable, to be reused, and retrieved.
    // Loop through the storage, and then store each table_data in an array of objects.
    

    // ----- THE STORAGE -------

    // KEY VALUE
    let entry_user_data = {
        students_level : level_input.value,
        students_department: department_of_students.value
    }

    // VALUES OF KEY IN LOCAL STORAGE.
    function loop_through_data (data1, data2) {
        for(let i = 0; i<=data1.length; i++) {
            // count++
            for (let j = 0; j<=data2.length; j++) {

                let instance_data = {
                    no_of_course : [
                    table_row = {
                        course_code: data1[i].children[0].children[0].value,
                        lecture_times: data1[i].children[0].children[0].value
                    }
                ],
                no_of_student : [
                    table_row = {
                        student_name: data2[j].children[0].children[0].value,
                        matric_no: data2[j].children[1].children[0].value
                    }
                ]
            }
            return instance_data
        }
    }
    }

    loop_through_data(loop_data1, loop_data2)
    // try {
    //     // loop_through_data()
    // }
    // catch (err) {
    //     // console.log("ERROR BUT CONTINUE")
    // }
        
    // ------------------------------------------------------------------
        // tdata1 : loop_data[i].children[0].children[0].value,
        // tdata2 : loop_data[i].children[1].children[0].value

        // if (table_body === table_body_for_no_of_courses) {
        //     // window.localStorage.setItem(`course-data ${count}`, [JSON.stringify(table_data_storage)])
        // }
        // else {
        //     // window.localStorage.setItem(`student-data ${count}`, [JSON.stringify(table_data_storage)]) 
        // }

        // let data_storage = window.localStorage.setItem(`storage ${i}`, table_data_storage[i])
        // window.localStorage.setItem(`${entry_user_data.students_level} ${entry_user_data.students_department}`, [JSON.stringify(data_storage)])
    }  

    // for(let i = 0; i<=table_body_for_no_of_students.childElementCount; i++) {
    //     count++
    //     let table_data_storage2 = {
    //         tdata1 : table_body_for_no_of_students.children[i].children[0].children[0].value,
    //         tdata2 : table_body_for_no_of_students.children[i].children[1].children[0].value
    //     }
    //     console.log(table_data_storage2)   
    //     window.localStorage.setItem(`student-data ${count}`, [JSON.stringify(table_data_storage2)])
    // }

function create_saved_record (container_for_records, student_level, student_department) {
    // THIS IS FOR WHEN WE CLICK ON DONE, THIS RECORD SHOULD BE CREATED, AND STORED IN OUR RECORD HOLDER.
    let each_record_wrapper = document.createElement('li');
    let details = document.createElement('p')
    details.classList.add('container-for-list');

    let detail_text = document.createElement('span')
    detail_text.classList.add('record-detail-text');

    // Put them into the container.
    details.append(detail_text);
    each_record_wrapper.append(details);
    container_for_records.append(each_record_wrapper);

    // AFTER APPENDING, REMOVE DEFAULT TEXT IN STORAGE MODAL.
    no_records_text.style.display = 'none';
    click_on.style.display = 'block';

    // Set up, and format how it would look like.
    detail_text.innerHTML = `${student_level} level ${student_department} Students`;

    // STORE THIS RECORD, TO BE ACCESSED AND RETRIVED.
    let count = 0
    count++
}

function display_stored_records() {
    // This creates a record holder fetched from local storage, of all the user's record for the clicked saved records.
    
}


// CALLING FUNCTIONS.
// FOR THE MAIN CREATION OF DATA
// CALLING THE FUNCTION (FOR NUMBER OF COURSES, AND NUMBER OF STUDENTS.)
create_nodes(button_for_courses, no_of_courses, table_body_for_no_of_courses, modal_for_courses);

create_nodes(button_for_students, no_of_students, table_body_for_no_of_students, modal_for_students);

// CALLING THIS FUNCTIONS, TO GET THE PROPERTIES OF THE ELEMENT, AND STORE THEM INSIDE AN OBJECT (using a factory function created).
let get_close_button_for_courses = get_for_close('.for-courses .close', '.for-courses .yes', '.for-courses .no', '.for-courses .confirm-closing');

let get_close_button_for_students = get_for_close('.for-students .close', '.for-students .yes', '.for-students .no', '.for-students .confirm-closing');

// CLOSE BUTTON FOR THE NUMBER OF COURSES MODAL
// GET THE DATA FROM HERE, FOR ANY CLOSE BUTTON, THAT YOU WANT TO CLICK ON TO QUIT THE MODAL, AND CLEAR ALL RECORDS.
let store_close_for_no_of_courses = object_for_close_btn(get_close_button_for_courses.actual_element(), get_close_button_for_courses.yes_btn(), get_close_button_for_courses.no_btn(), get_close_button_for_courses.modal_close());

let store_close_for_no_of_students = object_for_close_btn(get_close_button_for_students.actual_element(), get_close_button_for_students.yes_btn(), get_close_button_for_students.no_btn(), get_close_button_for_students.modal_close());


// CALLING THIS FUNCTION FOR EACH MODALS CLOSE BUTTONS.
// FOR THE NUMBER OF COURSES MODAL.
close_the_modal(store_close_for_no_of_courses.close_element, store_close_for_no_of_courses.modal_for_close, store_close_for_no_of_courses.yes, store_close_for_no_of_courses.no, modal_for_courses, '.for-courses tbody', table_body_for_no_of_courses);

// CLOSING MODAL FOR THE NUMBER OF STUDENTS
// FOR THE NUMBER OF STUDENTS (and their matric number) MODAL
close_the_modal(store_close_for_no_of_students.close_element, store_close_for_no_of_students.modal_for_close, store_close_for_no_of_students.yes, store_close_for_no_of_students.no, modal_for_students, '.for-students tbody', table_body_for_no_of_students);

// for more functions.

// DONE BUTTON FOR THE NUMBER OF COURSES.
   // Make the data from the inputs accessible for us to store and view later.
done_button_for_no_of_courses.addEventListener('click', () => {
    
    create_record(table_body_for_no_of_courses)
    // Things that happen when we click on the done button.
    done_button_action(modal_for_courses, no_of_courses_field,  no_of_students_field);
});

// THE ONE FOR THE NUMBER OF STUDENTS WHEN WE SUBMIT THE STUDENTS DATA.
done_button_for_no_of_students.addEventListener('click', () => {
    // DO THIS ALSO FOR THE NUMBER OF STUDENTS.
    // - after creating object, clear the tables, for a new record.
    
    // - Create the record
    // create_saved_record(record_container, level_input.value, department_of_students.value)

    modal_for_students.style.display = 'none';
    modal_overlay.classList.remove('active')
    create_record(table_body_for_no_of_courses, table_body_for_no_of_students)
    // DO THE SAME VALIDATION FOR THE NO OF STUDENTS MODAL.
});

// --- COMPUTATION PROCESS ---