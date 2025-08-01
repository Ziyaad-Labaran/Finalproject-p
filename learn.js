document.addEventListener("DOMContentLoaded", function () {
  const startBtn = document.getElementById("start-quiz-btn");
  const quizStart = document.getElementById("quiz-start");
  const quizQuestions = document.getElementById("quiz-questions");
  const quizResult = document.getElementById("quiz-result");
  const nextBtn = document.getElementById("next-btn");
  const prevBtn = document.getElementById("prev-btn");
  const restartBtn = document.getElementById("restart-quiz-btn");
  const questions = document.querySelectorAll(".quiz-question");

  let currentQuestion = 1;
  const answers = {};

  function showQuestion(questionNumber) {
    questions.forEach((q) => {
      q.classList.remove("active");
      if (parseInt(q.dataset.question) === questionNumber) {
        q.classList.add("active");
      }
    });

    prevBtn.disabled = questionNumber === 1;
    nextBtn.textContent =
      questionNumber === questions.length ? "See Results" : "Next";
  }

  startBtn.addEventListener("click", function () {
    quizStart.style.display = "none";
    quizQuestions.style.display = "block";
    currentQuestion = 1;
    showQuestion(currentQuestion);
  });

  document.querySelectorAll(".quiz-option").forEach((option) => {
    option.addEventListener("click", function () {
      const parent = this.parentElement;
      parent.querySelectorAll(".quiz-option").forEach((sib) => {
        sib.classList.remove("selected");
      });

      this.classList.add("selected");

      const questionNumber = parseInt(
        this.closest(".quiz-question").dataset.question
      );
      answers[questionNumber] = this.dataset.value;
    });
  });

  nextBtn.addEventListener("click", function () {
    const activeQuestion = document.querySelector(".quiz-question.active");
    const questionNumber = parseInt(activeQuestion.dataset.question);

    const selected = activeQuestion.querySelector(".quiz-option.selected");
    if (!selected && nextBtn.textContent !== "See Results") {
      alert("Please select an option to continue.");
      return;
    }

    if (questionNumber < questions.length) {
      currentQuestion = questionNumber + 1;
      showQuestion(currentQuestion);
    } else {
      quizQuestions.style.display = "none";
      quizResult.style.display = "block";
      calculateResult();
    }
  });

  prevBtn.addEventListener("click", function () {
    const activeQuestion = document.querySelector(".quiz-question.active");
    const questionNumber = parseInt(activeQuestion.dataset.question);

    if (questionNumber > 1) {
      currentQuestion = questionNumber - 1;
      showQuestion(currentQuestion);
    }
  });

  restartBtn.addEventListener("click", function () {
    quizResult.style.display = "none";
    quizStart.style.display = "block";

    document.querySelectorAll(".quiz-option").forEach((option) => {
      option.classList.remove("selected");
    });

    for (let key in answers) {
      delete answers[key];
    }
  });

  function calculateResult() {
    const counts = { a: 0, b: 0, c: 0, d: 0 };
    for (let key in answers) {
      counts[answers[key]]++;
    }

    let maxCount = 0;
    let maxType = "";
    for (let type in counts) {
      if (counts[type] > maxCount) {
        maxCount = counts[type];
        maxType = type;
      }
    }

    const resultTitle = document.querySelector("#quiz-result h3");
    const resultImage = document.querySelector(".quiz-image");
    const resultDesc = document.querySelectorAll("#quiz-result p");

    switch (maxType) {
      case "a":
        resultTitle.textContent = "You are: The Nature Guardian!";
        resultImage.textContent = "🌱";
        resultDesc[0].textContent =
          "You have a deep connection with the natural world and are passionate about protecting biodiversity. Like Jane Goodall or David Attenborough, you understand that every species has an important role to play in our ecosystem.";
        resultDesc[1].textContent =
          "Your eco-strengths: Keen observation, patience, and a genuine love for all living things.";
        resultDesc[2].textContent =
          "How you can help: Start a school wildlife garden, organize nature walks, or participate in citizen science projects tracking local species.";
        break;
      case "b":
        resultTitle.textContent = "You are: The Community Catalyst!";
        resultImage.textContent = "👥";
        resultDesc[0].textContent =
          "You understand that environmental change requires collective action. Like Greta Thunberg or Wangari Maathai, you have the power to inspire others and build movements for positive change.";
        resultDesc[1].textContent =
          "Your eco-strengths: Leadership, communication, and bringing people together for a common cause.";
        resultDesc[2].textContent =
          "How you can help: Organize community clean-ups, start petitions for local environmental issues, or represent environmental concerns in student government.";
        break;
      case "c":
        resultTitle.textContent = "You are: The Resourceful Innovator!";
        resultImage.textContent = "♻️";
        resultDesc[0].textContent =
          "You see potential in everything and love finding creative solutions to environmental problems. Like William Kamkwamba or Boyan Slat, you believe in the power of hands-on innovation.";
        resultDesc[1].textContent =
          "Your eco-strengths: Creativity, resourcefulness, and practical problem-solving skills.";
        resultDesc[2].textContent =
          "How you can help: Start a school recycling program, create upcycled art projects, or design solutions for reducing waste in your school.";
        break;
      case "d":
        resultTitle.textContent = "You are: The Eco Scientist!";
        resultImage.textContent = "🔬";
        resultDesc[0].textContent =
          "You approach environmental challenges with a scientific mindset. Like Rachel Carson or Bill Nye, you value data and evidence in understanding and solving ecological problems.";
        resultDesc[1].textContent =
          "Your eco-strengths: Analytical thinking, research skills, and a drive to understand how things work.";
        resultDesc[2].textContent =
          "How you can help: Monitor your school's carbon footprint, conduct experiments on renewable energy, or start an environmental data collection project.";
        break;
    }
  }
});

const form = document.getElementById("thanks");
const successMessage = document.getElementById("congo");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  successMessage.style.display = "block";
});

document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");

  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      hamburger.classList.toggle("open");
    });

    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        hamburger.classList.remove("open");
      });
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
});

const infobutton = document.querySelector(".active");
const videosbutton = document.querySelector(".videos");
const infographics = document.querySelector(".grid-2");
const videosection = document.querySelector(".video-box");

const largev1 = document.querySelector(".largevideo1");
const largev2 = document.querySelector(".largevideo2");
const largev3 = document.querySelector(".largevideo3");
const largev4 = document.querySelector(".largevideo4");
const largev5 = document.querySelector(".largevideo5");

const thumbnail1 = document.querySelector(".smallimg1");
const thumbnail2 = document.querySelector(".smallimg2");
const thumbnail3 = document.querySelector(".smallimg3");
const thumbnail4 = document.querySelector(".smallimg4");
const thumbnail5 = document.querySelector(".smallimg5");

infobutton.addEventListener("click", () => {
  infographics.style.display = "grid";
  videos.style.display = "none";
  tabs.classList.add("active");
});

videosbutton.addEventListener("click", () => {
  infographics.style.display = "none";
  videosection.style.display = "grid";
  tabs.classList.remove("active");
});

thumbnail1.addEventListener("click", () => {
  largev1.style.display = "block";
  largev2.style.display = "none";
  largev3.style.display = "none";
  largev4.style.display = "none";
  largev5.style.display = "none";
});
thumbnail2.addEventListener("click", () => {
  largev1.style.display = "none";
  largev2.style.display = "block";
  largev3.style.display = "none";
  largev4.style.display = "none";
  largev5.style.display = "none";
});
thumbnail3.addEventListener("click", () => {
  largev3.style.display = "block";
  largev2.style.display = "none";
  largev1.style.display = "none";
  largev4.style.display = "none";
  largev5.style.display = "none";
});
thumbnail4.addEventListener("click", () => {
  largev1.style.display = "none";
  largev2.style.display = "none";
  largev3.style.display = "none";
  largev4.style.display = "block";
  largev5.style.display = "none";
});
thumbnail5.addEventListener("click", () => {
  largev1.style.display = "none";
  largev2.style.display = "none";
  largev3.style.display = "none";
  largev4.style.display = "none";
  largev5.style.display = "block";
});
