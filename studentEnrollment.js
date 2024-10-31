const ps = require('prompt-sync');
const prompt = ps();

const dsa = [];
const pl = [];
const network = [];

function enrollStudent(subject, studentName) {
    subject.push(studentName);
}
//function to display the current student that enrolled in a subject
function unenrollStudent(subject) {
    if (subject.length === 0) {
        console.log("No students are currently enrolled in this subject.");
        return;
    }
    console.log("Currently enrolled students:", subject.join(", "));
    const studentName = prompt("Enter the name of the student to unenroll:");
    const index = subject.indexOf(studentName);
    if (index > -1) {
        subject.splice(index, 1);
        console.log(`${studentName} has been unenrolled from the subject.`);
    } else {
        console.log("Student not found in this subject.");
    }
}

function displayEnrollments() {
    console.log("Enrollments:");
    console.log("DSA:", dsa);
    console.log("PL:", pl);
    console.log("Networks:", network);
}
//main loop
while (true) {
    const subjectChoice = prompt("Select a subject to enroll a student:\n(A) DSA\n(B) PL\n(C) Networks\n(D) Exit").toUpperCase();//Ask user to choose a subject
    
    let selectedSubject;
    //using switch to select the chosen subject
    switch (subjectChoice) {
        case 'A':
            selectedSubject = dsa;
            break;
        case 'B':
            selectedSubject = pl;
            break;
        case 'C':
            selectedSubject = network;
            break;
        case 'D':
            displayEnrollments();
            console.log("Exiting the program.");
            return;
        default:
            console.log("Invalid choice, please select again.");
            continue;
    }
    //operation Loop
    while (true) {
        const operation = prompt("Select an option:\n(A) Enroll\n(B) Unenroll\n(C) Select another subject\n(D) Exit").toUpperCase();
        
        switch (operation) {
            case 'A':
                const studentName = prompt("Enter the name of the student to enroll:");//Enroll a student
                enrollStudent(selectedSubject, studentName);
                break;
            case 'B':
                unenrollStudent(selectedSubject);
                break;
            case 'C':
                break; // Goes back to subject selection
            case 'D':
                displayEnrollments();
                console.log("Exiting the program.");
                return;
            default:
                console.log("Invalid choice, please select again.");
                continue;
        }

        // If operation is to select another subject, break the inner loop
        if (operation === 'C') {
            break;
        }
    }
}
