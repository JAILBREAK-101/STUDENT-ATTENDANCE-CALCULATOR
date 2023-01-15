// FOR THE STORAGE MODAL.

// IMPORT NEEDED FUNCTIONS FROM THE PREVIOUS FILE

// THE STORING OF THE INPUTS, WHEN WE CLICK ON DONE.

  /* What is needed: (OOP).
    - Get the table body for that particular modal
    - Store it's value in a class, that has a constructor for the object of the user's inputs.
    - Make these values global to be accessible and stored, and retrieved.
  */

  // function constructor_properties(table_row_value)

  class For_user_inputs_courses {
    // FIRST CONSTRUCTOR
    constructor (table_body_courses) {
        // the table body should have the table rows, stored in an array.
        // Store the table rows of the table body in an array.
        this.table_rows = Array(table_body_courses.children);
        let element_count = this.table_rows.length;

        console.log(this.table_rows);

        // GET THE VALUES OF EACH OF THE ROWS INSIDE THE INPUTS OF THAT PARTICULAR MODAL
        this.each_table_row = function() {
          let input_data_courses = document.querySelectorAll('.for-courses .input-for-course')
          for(i = 0; i<=element_count; i++) {
              var props_for_table_row = {
                first_input : this.table_row[0][i].children[0].children[0].value,
                second_input : this.table_row[0][i].children[1].children[0].value
              }
            return props_for_table_row;
          }  
        }
    }

  }
  // THE FUNCTION FOR STORING EACH OF THE TABLE ROWS IN A VARIABLE (for each of them).

  class For_user_inputs_students {
    // SECOND CONSTRUCTOR
    constructor (table_body_students) {
      this.table_rows = Array(table_body_students.children);
        let element_count = this.table_rows.length;

        console.log(this.table_rows);

        // GET THE VALUES OF EACH OF THE ROWS INSIDE THE INPUTS OF THAT PARTICULAR MODAL
        this.each_table_row = function() {
          let input_data_students = document.querySelectorAll('.for-students .input-for-course')
          for (i = 0; i <= element_count; i++) {
            var variable_count = 0;
            var props_for_table_row = {
              first_input : this.table_rows[i].children[0].children[0].value,
              second_input : this.table_rows[i].children[1].children[0].value
            }
          }
          return props_for_table_row;
        }
    }
  }

  // REFACTOR THIS JAVASCRIPT.

  // EXAMPLE OF HIGHER ORDER FUNCTIONS.
  function higher_order (callback) {
    callback()
  }

  higher_order(function call_it() {
    return 2+2;
  })