function storeUserData() {
    // Get the values from the input fields
    const username = document.getElementById('firstName').value;
    const numberOfQuestions = parseInt(document.getElementById('number').value, 10);
    console.log("started");

    // Store the data in localStorage
    localStorage.setItem('username', username);
    localStorage.setItem('numberOfQuestions', numberOfQuestions);

}

function getUserData() {
    // Get the data from localStorage
    let username = localStorage.getItem('username');
    let numberOfQuestions = parseInt(localStorage.getItem('numberOfQuestions'), 10);

    return {
        username,
        numberOfQuestions
    };
}

function startGame(){
    storeUserData();
    if(document.getElementById('firstName').value.trim() === ""){
        alert("Enter Valid Name");
    }
    else{
        window.location.href = "worldQuiz.html"
    }
    
}
