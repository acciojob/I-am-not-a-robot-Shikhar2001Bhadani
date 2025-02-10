//your code here
document.addEventListener("DOMContentLoaded", () => {
    const images = ["img1", "img2", "img3", "img4", "img5"];
    const duplicate = images[Math.floor(Math.random() * images.length)];
    const imageList = [...images, duplicate];
    imageList.sort(() => Math.random() - 0.5);

    const container = document.getElementById("image-container");
    const resetBtn = document.getElementById("reset");
    const verifyBtn = document.getElementById("verify");
    const message = document.getElementById("para");
    let selectedImages = [];

    imageList.forEach((cls) => {
      const img = document.createElement("img");
      img.classList.add(cls);
      img.addEventListener("click", () => selectImage(img, cls));
      container.appendChild(img);
    });

    function selectImage(img, cls) {
      if (selectedImages.length < 2 && !selectedImages.includes(img)) {
        img.classList.add("selected");
        selectedImages.push({ img, cls });
        resetBtn.style.display = "block";
      }

      if (selectedImages.length === 2) {
        verifyBtn.style.display = "block";
      }
    }

    verifyBtn.addEventListener("click", () => {
      verifyBtn.style.display = "none";
      if (selectedImages[0].cls === selectedImages[1].cls) {
        message.textContent = "You are a human. Congratulations!";
      } else {
        message.textContent = "We can't verify you as a human. You selected the non-identical tiles.";
      }
    });

    resetBtn.addEventListener("click", () => {
      selectedImages.forEach(({ img }) => img.classList.remove("selected"));
      selectedImages = [];
      resetBtn.style.display = "none";
      verifyBtn.style.display = "none";
      message.textContent = "";
    });
  });