document.addEventListener("DOMContentLoaded", () => {
      const menuBar = document.querySelector(".bars");

      if (menuBar) {
        menuBar.addEventListener("click", () => {
          const menusElement = document.querySelector(".ul-header");

          if (menusElement) {
            // Toggle the display property
            menusElement.style.display =
              menusElement.style.display === "none" ||
              menusElement.style.display === ""
                ? "flex"
                : "none";
          }
        });
      }
    });

    const learnMoreBtn = document.querySelector(".learn-more-btn");

    learnMoreBtn.addEventListener("click", () => {
        const toHideText = document.querySelector(".to-hide-text");
      
        if (learnMoreBtn.innerHTML === "Learn More") {
            learnMoreBtn.innerHTML = "Show Less";
            toHideText.style.display = "block";
        } else {
            learnMoreBtn.innerHTML = "Learn More";
            toHideText.style.display = "none";
        }
    });

    const learnMoreBtnTwo = document.querySelector(".learn-more-btn-two");

    learnMoreBtnTwo.addEventListener("click", () => {
        const toHideTextTwo = document.querySelector(".to-hide-text-two");
      
        if (learnMoreBtnTwo.innerHTML === "Learn More") {
            learnMoreBtnTwo.innerHTML = "Show Less";
            toHideTextTwo.style.display = "block";
        } else {
            learnMoreBtnTwo.innerHTML = "Learn More";
            toHideTextTwo.style.display = "none";
        }
    });
    

    const learnMoreBtnThree = document.querySelector(".learn-more-btn-three");

    learnMoreBtnThree.addEventListener("click", () => {
        const toHideTextThree = document.querySelector(".to-hide-text-three");
      
        if (learnMoreBtnThree.innerHTML === "Learn More") {
            learnMoreBtnThree.innerHTML = "Show Less";
            toHideTextThree.style.display = "block";
        } else {
            learnMoreBtnThree.innerHTML = "Learn More";
            toHideTextThree.style.display = "none";
        }
    });

    const learnMoreBtnFour = document.querySelector(".learn-more-btn-four");

    learnMoreBtnFour.addEventListener("click", () => {
        const toHideTextFour = document.querySelector(".to-hide-text-four");
      
        if (learnMoreBtnFour.innerHTML === "Learn More") {
            learnMoreBtnFour.innerHTML = "Show Less";
            toHideTextFour.style.display = "block";
        } else {
            learnMoreBtnFour.innerHTML = "Learn More";
            toHideTextFour.style.display = "none";
        }
    });
    