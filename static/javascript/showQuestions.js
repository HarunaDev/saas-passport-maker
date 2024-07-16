const faq = document.getElementById("FAQ")

// faq.innerHTML = `<h1>This is the help Section</h1>`

// function to generate content in the help template
function showQuestions() {
    // create array with object to store faq and answers
    const questionArr = [
        {
          question_title: "Can I stream movies on my watch-list",
          question_text: "No, you can't but it is a feature that will be implemented in later versions"
        },
        {
          question_title: "Can I share my watch-list",
          question_text: "Yes, you can share watch list on different platforms for others to see."
        },
        {
          question_title: "Are there any ads?",
          question_text: "No, the app is ad free, so you can enjoy a wonderful experience without any interruption."
        }
    ];

    // create container div with header and append it to section
    const questions = document.createElement('div')
    questions.setAttribute('class', 'questions')
    questions.innerHTML = `
    <h1 class="faq-header">Frequently Asked Questions</h1>
    `;
    faq.appendChild(questions);

    // create question section wrapper and append it to container div
    const question_section = document.createElement('div')
    question_section.setAttribute('class', 'question-section')
    question_section.innerHTML = '';
    questions.appendChild(question_section);
}

showQuestions()