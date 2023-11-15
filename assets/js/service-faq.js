function toggleAnswer(id) {
    var answer = document.getElementById("answer" + id);
    answer.classList.toggle("active");

    let  question = document.getElementById(question);
    question.classList.toggle("active");
}

