const sortmainstagesaturday = document.querySelector(".sortmainstage#Saturday");
const sortsecondstagesaturday = document.querySelector(".sortsecondstage#Saturday");
const sortthelawnsaturday = document.querySelector(".sortthelawn#Saturday");
const mainstagecardsaturday = document.querySelectorAll(".main_stage_card.Saturday");
const secondstagecardsaturday = document.querySelectorAll(".second_stage_card.Saturday");
const lawnstagecardsaturday = document.querySelectorAll(".on_the_lawn_card.Saturday");

sortmainstagesaturday.addEventListener("click", () => {
  console.log("hej fra js");

  if (sortmainstagesaturday.classList.contains("active")) {
    sortmainstagesaturday.classList.remove("active");
    sortsecondstagesaturday.classList.remove("active");
    sortthelawnsaturday.classList.remove("active");

    mainstagecardsaturday.forEach((card) => {
      card.classList.remove("hide");
    });

    secondstagecardsaturday.forEach((card) => {
      card.classList.remove("hide");
    });

    lawnstagecardsaturday.forEach((one) => {
      one.classList.remove("hide");
    });
  } else {
    sortmainstagesaturday.classList.add("active");
    sortsecondstagesaturday.classList.remove("active");
    sortthelawnsaturday.classList.remove("active");
    mainstagecardsaturday.forEach((card) => {
      card.classList.remove("hide");
    });
    secondstagecardsaturday.forEach((card) => {
      card.classList.add("hide");
    });

    lawnstagecardsaturday.forEach((one) => {
      one.classList.add("hide");
    });
  }
});

sortsecondstagesaturday.addEventListener("click", () => {
  console.log("hej fra js");

  if (sortsecondstagesaturday.classList.contains("active")) {
    sortmainstagesaturday.classList.remove("active");
    sortsecondstagesaturday.classList.remove("active");
    sortthelawnsaturday.classList.remove("active");

    mainstagecardsaturday.forEach((card) => {
      card.classList.remove("hide");
    });

    secondstagecardsaturday.forEach((card) => {
      card.classList.remove("hide");
    });

    lawnstagecardsaturday.forEach((one) => {
      one.classList.remove("hide");
    });
  } else {
    sortmainstagesaturday.classList.remove("active");
    sortsecondstagesaturday.classList.add("active");
    sortthelawnsaturday.classList.remove("active");
    mainstagecardsaturday.forEach((card) => {
      card.classList.add("hide");
    });
    secondstagecardsaturday.forEach((card) => {
      card.classList.remove("hide");
    });

    lawnstagecardsaturday.forEach((one) => {
      one.classList.add("hide");
    });
  }
});

sortthelawnsaturday.addEventListener("click", () => {
  console.log("hej fra js");

  if (sortthelawnsaturday.classList.contains("active")) {
    sortmainstagesaturday.classList.remove("active");
    sortsecondstagesaturday.classList.remove("active");
    sortthelawnsaturday.classList.remove("active");

    mainstagecardsaturday.forEach((card) => {
      card.classList.remove("hide");
    });

    secondstagecardsaturday.forEach((card) => {
      card.classList.remove("hide");
    });

    lawnstagecardsaturday.forEach((one) => {
      one.classList.remove("hide");
    });
  } else {
    sortmainstagesaturday.classList.remove("active");
    sortsecondstagesaturday.classList.remove("active");
    sortthelawnsaturday.classList.add("active");
    mainstagecardsaturday.forEach((card) => {
      card.classList.add("hide");
    });
    secondstagecardsaturday.forEach((card) => {
      card.classList.add("hide");
    });

    lawnstagecardsaturday.forEach((one) => {
      one.classList.remove("hide");
    });
  }
});

const sortmainstagesunday = document.querySelector(".sortmainstage#Sunday");
const sortsecondstagesunday = document.querySelector(".sortsecondstage#Sunday");
const sortthelawnsunday = document.querySelector(".sortthelawn#Sunday");
const mainstagecardsunday = document.querySelectorAll(".main_stage_card.Sunday");
const secondstagecardsunday = document.querySelectorAll(".second_stage_card.Sunday");
const lawnstagecardsunday = document.querySelectorAll(".on_the_lawn_card.Sunday");

sortmainstagesunday.addEventListener("click", () => {
  console.log("hej fra js");

  if (sortmainstagesunday.classList.contains("active")) {
    sortmainstagesunday.classList.remove("active");
    sortsecondstagesunday.classList.remove("active");
    sortthelawnsunday.classList.remove("active");

    mainstagecardsunday.forEach((card) => {
      card.classList.remove("hide");
    });

    secondstagecardsunday.forEach((card) => {
      card.classList.remove("hide");
    });

    lawnstagecardsunday.forEach((one) => {
      one.classList.remove("hide");
    });
  } else {
    sortmainstagesunday.classList.add("active");
    sortsecondstagesunday.classList.remove("active");
    sortthelawnsunday.classList.remove("active");
    mainstagecardsunday.forEach((card) => {
      card.classList.remove("hide");
    });
    secondstagecardsunday.forEach((card) => {
      card.classList.add("hide");
    });

    lawnstagecardsunday.forEach((one) => {
      one.classList.add("hide");
    });
  }
});

sortsecondstagesunday.addEventListener("click", () => {
  console.log("hej fra js");

  if (sortsecondstagesunday.classList.contains("active")) {
    sortmainstagesunday.classList.remove("active");
    sortsecondstagesunday.classList.remove("active");
    sortthelawnsunday.classList.remove("active");

    mainstagecardsunday.forEach((card) => {
      card.classList.remove("hide");
    });

    secondstagecardsunday.forEach((card) => {
      card.classList.remove("hide");
    });

    lawnstagecardsunday.forEach((one) => {
      one.classList.remove("hide");
    });
  } else {
    sortmainstagesunday.classList.remove("active");
    sortsecondstagesunday.classList.add("active");
    sortthelawnsunday.classList.remove("active");
    mainstagecardsunday.forEach((card) => {
      card.classList.add("hide");
    });
    secondstagecardsunday.forEach((card) => {
      card.classList.remove("hide");
    });

    lawnstagecardsunday.forEach((one) => {
      one.classList.add("hide");
    });
  }
});

sortthelawnsunday.addEventListener("click", () => {
  console.log("hej fra js");

  if (sortthelawnsunday.classList.contains("active")) {
    sortmainstagesunday.classList.remove("active");
    sortsecondstagesunday.classList.remove("active");
    sortthelawnsunday.classList.remove("active");

    mainstagecardsunday.forEach((card) => {
      card.classList.remove("hide");
    });

    secondstagecardsunday.forEach((card) => {
      card.classList.remove("hide");
    });

    lawnstagecardsunday.forEach((one) => {
      one.classList.remove("hide");
    });
  } else {
    sortmainstagesunday.classList.remove("active");
    sortsecondstagesunday.classList.remove("active");
    sortthelawnsunday.classList.add("active");
    mainstagecardsunday.forEach((card) => {
      card.classList.add("hide");
    });
    secondstagecardsunday.forEach((card) => {
      card.classList.add("hide");
    });

    lawnstagecardsunday.forEach((one) => {
      one.classList.remove("hide");
    });
  }
});
