const sortmainstage = document.querySelector(".sortmainstage");
const sortsecondstage = document.querySelector(".sortsecondstage");
const sortthelawn = document.querySelector(".sortthelawn");

const mainstagecardsaturday = document.querySelectorAll(".main_stage_card.Saturday");
const secondstagecardsaturday = document.querySelectorAll(".second_stage_card.Saturday");

const lawnstagecardsaturday = document.querySelectorAll(".on_the_lawn_card.Saturday");

sortmainstage.addEventListener("click", () => {
  console.log("hej fra js");

  if (sortmainstage.classList.contains("active")) {
    sortmainstage.classList.remove("active");
    sortsecondstage.classList.remove("active");
    sortthelawn.classList.remove("active");

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
    sortmainstage.classList.add("active");
    sortsecondstage.classList.remove("active");
    sortthelawn.classList.remove("active");
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

sortsecondstage.addEventListener("click", () => {
  console.log("hej fra js");

  if (sortsecondstage.classList.contains("active")) {
    sortmainstage.classList.remove("active");
    sortsecondstage.classList.remove("active");
    sortthelawn.classList.remove("active");

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
    sortmainstage.classList.remove("active");
    sortsecondstage.classList.add("active");
    sortthelawn.classList.remove("active");
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

sortthelawn.addEventListener("click", () => {
  console.log("hej fra js");

  if (sortthelawn.classList.contains("active")) {
    sortmainstage.classList.remove("active");
    sortsecondstage.classList.remove("active");
    sortthelawn.classList.remove("active");

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
    sortmainstage.classList.remove("active");
    sortsecondstage.classList.remove("active");
    sortthelawn.classList.add("active");
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
