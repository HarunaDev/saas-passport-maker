const faq = document.getElementById("FAQ")

// faq.innerHTML = `<h1>This is the help Section</h1>`

// function to generate content in the help template
function showQuestions() {
    // create array with object to store faq and answers
    const questionArr = [
        {
          question_title: "What formats of images can I upload?",
          question_text: "You can upload images in JPEG, PNG, and BMP formats."
        },
        {
          question_title: "What are the requirements for the uploaded image?",
          question_text: "The image should be a clear, high-resolution photo with a plain background, proper lighting, and the subject facing the camera directly."
        },
        {
          question_title: "Are there any ads?",
          question_text: "No, the app is ad free, so you can enjoy a wonderful experience without any interruption."
        },
        {
          question_title: "Can I choose the country for which I need the passport photo?",
          question_text: "You can select from the available countries, and our app will format the photo according to that country's passport photo specifications."
        },
        {
          question_title: "How long does it take to process the photo?",
          question_text: "The processing time is typically a few seconds, depending on the quality and size of the uploaded image."
        },
        {
          question_title: "Can I edit the photo after it has been processed?",
          question_text: "Yes, you can make additional adjustments on your device"
        },
        {
          question_title: "Is there a limit to the number of photos I can process?",
          question_text: "There is no limit to the number of photos you can process, but there may be restrictions based on your subscription plan."
        },
        {
          question_title: "How secure is my uploaded image?",
          question_text: "Your privacy is our priority. All uploaded images are encrypted and securely stored. We do not share your images with third parties."
        },
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

    // loop through question array and render article element according to number of objects in array
    questionArr.forEach(faQuestion => {
        // create article element and append it to q-section wrapper
        const article = document.createElement('article')
        article.setAttribute('class', 'question');
        question_section.appendChild(article);
  
        // create title div with p element holding value of title from array & append to article element
        const questionTitle = document.createElement('div')
        questionTitle.setAttribute('class', 'question-title')
        questionTitle.innerHTML = `<p>${faQuestion.question_title}</p>`;
        article.appendChild(questionTitle);
  
        // create button element holding span elements that hold p tags each & append to title div
        const button = document.createElement('button')
        button.setAttribute('class', 'question-btn')
        button.setAttribute('type', 'button')
        button.innerHTML = `
          <span class="plus-icon">
            <p>+</p>
          </span>
          <span class="minus-icon">
            <p>-</p>
          </span>
        `;
        questionTitle.appendChild(button);
  
        // create questionText div holding p element with the value of question-text from question array & append to article
        const questionText = document.createElement('div')
        questionText.setAttribute('class', 'question-text')
        questionText.innerHTML = `<p>${faQuestion.question_text}</p>`;
        article.appendChild(questionText);
  
  
      });

      // question toggle
      const question_article = document.querySelectorAll(".question");

      question_article.forEach(function (fold) {
        const btn = fold.querySelector(".question-btn");

        btn.addEventListener("click", function (){
            question_article.forEach(function (item) {
                if (item !== fold) {
                    item.classList.remove("show-text")
                }
            })
            fold.classList.toggle("show-text");
        })
      })
}

showQuestions()