onload = function () {
  document.body.style.cursor = "none";
  const image1 = document.querySelector("#image1");
  const image2 = document.querySelector("#image2");
  const image3 = document.querySelector("#image0_4_41");
  const image4 = document.querySelector("#image4");
  const image5 = document.querySelector("#image5");

  const cursor = document.querySelector("#cursor");
  const cursor_border = document.querySelector("#cursor_border");
  const cursor_circle = document.querySelector("#cursor_circle");

  document.addEventListener("mousemove", (event) => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    cursor.style.transform = `translate3d(${mouseX - 20}px, ${
      mouseY - 20
    }px, 0)`;
    cursor.style.transform = `translate3d(${mouseX - 20}px, ${
      mouseY - 20
    }px, 0)`;

    let x = mouseX / window.innerWidth;
    let y = mouseY / window.innerHeight;
    /////////////////////////
    image1.style.transform = `scale(1) translate(${x * -80}px, ${y * 20}px)`;
    image2.style.transform = `scale(1.5) rotate(${x * -14}deg) translate(${
      x * 70
    }px, ${y * 180}px)`;
    image3.style.y = `${y * 20}`;
    image4.style.y = `${x * -50}`;
    image5.style.transform = `translate(${x * -7}px, ${y * -7}px)`;

    ////////////////

    $(".link_cur").hover(
      function () {
        // cursor_border.classList.add("cursor_border_hover");
        if (y <= 0.5) {
          cursor_circle.style.transform = "scale(7) translate(10px, 10px)";
        } else {
          cursor_circle.style.transform = "scale(7) translate(10px, -10px)";
        }
        cursor_circle.innerHTML = $(this).data("text");

        // The mouse has entered the element
      },
      function () {
        // cursor_border.classList.remove("cursor_border_hover");
        cursor_circle.style.transform = "scale(1)";
        cursor_circle.innerHTML = "";

        // The mouse has left the element
      }
    );

    document.addEventListener("mousedown", function () {
      cursor_circle.classList.add("cursor_circle_click");
      cursor_border.style.background = "white";
      // document.body.style.background = "white";

      // document.body.style.mixBlendMode = " difference";

      // setTimeout(function () {
      //   cursor_circle.style.transform = `scale(1)`;
      // }, 100);
    });

    document.addEventListener("mouseup", function () {
      cursor_circle.classList.remove("cursor_circle_click");
      cursor_border.style.background = "transparent";

      // document.body.style.mixBlendMode = " unset";
      // document.body.style.background = "#282828 ";
    });
  });

  document.addEventListener("mouseout", () => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    if (
      mouseY <= 0 ||
      mouseX <= 0 ||
      mouseX >= window.innerWidth ||
      mouseY >= window.innerHeight
    ) {
      cursor.style.display = "none";
    }
  });
  document.addEventListener("mouseenter", () => {
    {
      cursor.style.display = "block";
    }
  });
};
