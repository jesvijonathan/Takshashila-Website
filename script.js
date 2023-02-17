onload = function () {
  const image1 = document.querySelector("#image1");
  const image2 = document.querySelector("#image2");
  const image3 = document.querySelector("#image0_4_41");
  const image4 = document.querySelector("#image4");
  const image5 = document.querySelector("#image5");

  const cursor = document.querySelector("#cursor");

  document.addEventListener("mousemove", (event) => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    let x = mouseX / window.innerWidth;
    let y = mouseY / window.innerHeight;

    image1.style.transform = `scale(1) translate(${x * -80}px, ${y * 20}px)`;
    image2.style.transform = `scale(1.5) rotate(${x * -14}deg) translate(${
      x * 70
    }px, ${y * 180}px)`;
    image3.style.y = `${y * 20}`;
    image4.style.y = `${x * -50}`;
    image5.style.transform = `translate(${x * -7}px, ${y * -7}px)`;

    cursor.style.transform = `translate3d(${mouseX - 20}px, ${
      mouseY - 20
    }px, 0)`;
    cursor.style.transform = `translate3d(${mouseX - 20}px, ${
      mouseY - 20
    }px, 0)`;
  });
};
