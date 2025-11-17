age = 18;

function legalAge(age) {
    if (age >= 18) {
        console.log("Hala, guwang naka");
    } else {
        console.log("You are not an adult");

    }
}

legalAge(50);
legalAge(13);


function computeGrade(grade) {
    if (grade >= 94.5) {
        console.log("Your Grade: " + "1");
    } else if (grade >= 91.5) {
        console.log("Your Grade: " + "1.25");
    } else if (grade >= 89.5) {
        console.log("Your Grade: " + "1.5");
    } else if (grade >= 86.5) {
        console.log("Your Grade: " + "1.75");
    } else if (grade >= 84.5) {
        console.log("Your Grade: " + "2");
    } else {
        console.log("Not within the transmutation.");
    }
}

computeGrade(95);
computeGrade(89);
computeGrade(75);

function login(username, password) {
    if (username === "grisli") {

        if (password === 1234) {
            console.log("Welcome User");
        }else{
            console.log("Invalid Login Credentials");
        }
    } else {
        console.log("Invalid User");

    }

}

login("gracelie",123);
login("grisli",1234);