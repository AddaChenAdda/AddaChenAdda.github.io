// 懶加載圖片功能
document.addEventListener("DOMContentLoaded", function () {
  // 為所有圖片添加lazy類別
  const allImages = document.querySelectorAll("img:not(.lazy)");
  allImages.forEach((img) => {
    if (!img.classList.contains("lazy")) {
      const originalSrc = img.src;
      img.classList.add("lazy");
      img.dataset.src = originalSrc;
      img.src =
        "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
    }
  });

  let lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));

  if ("IntersectionObserver" in window) {
    let lazyImageObserver = new IntersectionObserver(function (
      entries,
      observer
    ) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          let lazyImage = entry.target;
          lazyImage.src = lazyImage.dataset.src;
          lazyImage.classList.add("loaded");
          lazyImageObserver.unobserve(lazyImage);
        }
      });
    });

    lazyImages.forEach(function (lazyImage) {
      lazyImageObserver.observe(lazyImage);
    });
  } else {
    // Fallback for browsers without IntersectionObserver support
    let active = false;

    const lazyLoad = function () {
      if (active === false) {
        active = true;

        setTimeout(function () {
          lazyImages.forEach(function (lazyImage) {
            if (
              lazyImage.getBoundingClientRect().top <= window.innerHeight &&
              lazyImage.getBoundingClientRect().bottom >= 0 &&
              getComputedStyle(lazyImage).display !== "none"
            ) {
              lazyImage.src = lazyImage.dataset.src;
              lazyImage.classList.add("loaded");

              lazyImages = lazyImages.filter(function (image) {
                return image !== lazyImage;
              });

              if (lazyImages.length === 0) {
                document.removeEventListener("scroll", lazyLoad);
                window.removeEventListener("resize", lazyLoad);
                window.removeEventListener("orientationchange", lazyLoad);
              }
            }
          });

          active = false;
        }, 200);
      }
    };

    document.addEventListener("scroll", lazyLoad);
    window.addEventListener("resize", lazyLoad);
    window.addEventListener("orientationchange", lazyLoad);
    window.addEventListener("load", lazyLoad);
  }

  // 添加安全屬性到所有外部連結
  const externalLinks = document.querySelectorAll('a[target="_blank"]');
  externalLinks.forEach((link) => {
    if (!link.hasAttribute("rel")) {
      link.setAttribute("rel", "noopener noreferrer");
    }
  });

  // 改進頭部布局
  const headerLeft = document.querySelector(".header-left");
  if (headerLeft) {
    // 檢查是否已經有 header-container
    if (!document.querySelector(".header-container")) {
      const profilePic = headerLeft.querySelector(".profile-picture");
      const h1 = headerLeft.querySelector("h1");

      if (profilePic && h1) {
        // 創建header-container並移動元素
        const headerContainer = document.createElement("div");
        headerContainer.className = "header-container";

        // 創建header-text
        const headerText = document.createElement("div");
        headerText.className = "header-text";

        // 複製元素到新結構
        const newProfilePic = profilePic.cloneNode(true);
        const newH1 = h1.cloneNode(true);

        // 添加到DOM
        headerText.appendChild(newH1);
        headerContainer.appendChild(newProfilePic);
        headerContainer.appendChild(headerText);

        // 移除原始元素
        profilePic.remove();
        h1.remove();

        // 添加新容器到 headerLeft 的開頭
        headerLeft.insertBefore(headerContainer, headerLeft.firstChild);
      }
    }
  }
});
