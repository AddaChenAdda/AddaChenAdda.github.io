// 增強型互動性與懶加載功能

document.addEventListener("DOMContentLoaded", function () {
  // 設定頁面載入動畫
  document.body.classList.add("loaded");

  // 初始化圖片懶加載
  initLazyLoading();

  // 增強安全性
  enhanceExternalLinks();

  // 增強頭部布局
  enhanceHeaderLayout();

  // 增加經驗項目的動畫效果
  enhanceExperienceItems();

  // 增加項目卡片的互動性
  enhanceProjectItems();

  // 增加平滑滾動到錨點的功能
  enhanceSmoothScroll();

  // 初始化影片懶加載
  initVideoLazyLoading();
});

// 圖片懶加載功能
function initLazyLoading() {
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
    // 不支援 IntersectionObserver 的瀏覽器的後備方案
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
}

// 增強外部連結安全性
function enhanceExternalLinks() {
  const externalLinks = document.querySelectorAll('a[target="_blank"]');
  externalLinks.forEach((link) => {
    if (!link.hasAttribute("rel")) {
      link.setAttribute("rel", "noopener noreferrer");
    }
  });
}

// 增強頭部布局
function enhanceHeaderLayout() {
  const headerLeft = document.querySelector(".header-left");
  if (headerLeft) {
    // 檢查是否已經有 header-container
    if (!document.querySelector(".header-container")) {
      const profilePic = headerLeft.querySelector(".profile-picture");
      const h1 = headerLeft.querySelector("h1");

      if (profilePic && h1) {
        // 建立 header-container 並移動元素
        const headerContainer = document.createElement("div");
        headerContainer.className = "header-container";

        // 建立 header-text
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
}

// 增強經驗項目動畫
function enhanceExperienceItems() {
  const experienceItems = document.querySelectorAll(".experience-item");

  // 使用 IntersectionObserver 來控制動畫
  let experienceObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
          entry.target.classList.add("fade-in");
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  experienceItems.forEach((item) => {
    item.style.opacity = "0";
    item.style.transform = "translateY(20px)";
    experienceObserver.observe(item);
  });
}

// 增強項目卡片互動性
function enhanceProjectItems() {
  const projectItems = document.querySelectorAll(".project-item");
  projectItems.forEach((item) => {
    // 為項目添加點擊時的動畫效果
    item.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-5px)";
      this.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.08)";
    });

    item.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)";
      this.style.boxShadow = "0 3px 12px rgba(0, 0, 0, 0.05)";
    });
  });

  // 為所有圖片添加點擊放大預覽功能
  const projectImages = document.querySelectorAll(
    ".project-images img, .project-image img"
  );
  projectImages.forEach((img) => {
    img.style.cursor = "zoom-in";

    img.addEventListener("click", function () {
      if (!document.querySelector(".img-preview")) {
        const preview = document.createElement("div");
        preview.className = "img-preview";
        preview.style.position = "fixed";
        preview.style.top = "0";
        preview.style.left = "0";
        preview.style.width = "100%";
        preview.style.height = "100%";
        preview.style.backgroundColor = "rgba(0,0,0,0.9)";
        preview.style.display = "flex";
        preview.style.justifyContent = "center";
        preview.style.alignItems = "center";
        preview.style.zIndex = "9999";
        preview.style.cursor = "zoom-out";
        preview.style.opacity = "0";
        preview.style.transition = "opacity 0.3s ease";

        const previewImg = document.createElement("img");
        previewImg.src = this.src;
        previewImg.style.maxWidth = "90%";
        previewImg.style.maxHeight = "90%";
        previewImg.style.borderRadius = "8px";
        previewImg.style.boxShadow = "0 5px 25px rgba(0,0,0,0.3)";
        previewImg.style.transform = "scale(0.9)";
        previewImg.style.transition = "transform 0.3s ease";

        preview.appendChild(previewImg);
        document.body.appendChild(preview);

        setTimeout(() => {
          preview.style.opacity = "1";
          previewImg.style.transform = "scale(1)";
        }, 50);

        preview.addEventListener("click", function () {
          preview.style.opacity = "0";
          previewImg.style.transform = "scale(0.9)";
          setTimeout(() => {
            document.body.removeChild(preview);
          }, 300);
        });
      }
    });
  });
}

// 平滑滾動到錨點功能
function enhanceSmoothScroll() {
  const anchors = document.querySelectorAll('a[href^="#"]');
  anchors.forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 20,
          behavior: "smooth",
        });
      }
    });
  });
}

// 影片懶加載與增強功能
function initVideoLazyLoading() {
  const videoContainers = document.querySelectorAll(".video-container");
  const demoVideos = document.querySelectorAll(".demo-video");

  if (videoContainers.length > 0 && demoVideos.length > 0) {
    // 使用 IntersectionObserver 來實現影片懶加載
    const videoObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const container = entry.target;
            const video = container.querySelector("video");

            // 當影片區塊進入視野時，載入影片源
            if (video) {
              const videoSource = video.querySelector("source");
              if (videoSource && videoSource.hasAttribute("data-src")) {
                const videoSrc = videoSource.getAttribute("data-src");
                videoSource.setAttribute("src", videoSrc);
                videoSource.removeAttribute("data-src");
                video.load(); // 重新載入影片以套用新的來源
              }

              // 為影片容器添加載入完成樣式
              container.classList.add("loaded");

              // 當影片完全載入後移除觀察器
              videoObserver.unobserve(container);
            }
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "100px", // 提前載入影片
      }
    );

    // 設定初始狀態並開始觀察所有影片容器
    videoContainers.forEach((container) => {
      container.style.transition = "opacity 0.5s ease, transform 0.5s ease";
      videoObserver.observe(container);

      // 為影片容器添加點擊事件
      const video = container.querySelector("video");
      if (video) {
        container.addEventListener("click", function (e) {
          // 只有當點擊在影片容器但不是在影片控制器上時才切換播放狀態
          if (e.target === container) {
            if (video.paused) {
              video.play();
            } else {
              video.pause();
            }
          }
        });

        // 添加影片載入完成事件處理
        video.addEventListener("loadeddata", function () {
          console.log(`影片資料已載入: ${video.id}`);
          // 可以在這裡添加其他影片載入完成後的處理邏輯
        });
      }
    });

    // 監聽視窗滾動，當影片不在視野中時暫停播放
    document.addEventListener(
      "scroll",
      debounce(function () {
        demoVideos.forEach((video) => {
          const container = video.closest(".video-container");
          if (container) {
            const rect = container.getBoundingClientRect();
            const isInViewport =
              rect.top >= -rect.height &&
              rect.bottom <= window.innerHeight + rect.height;

            if (!isInViewport && !video.paused) {
              video.pause();
            }
          }
        });
      }, 200)
    );
  }
}

// 從 data.js 渲染影片區塊
function renderVideos(videoData) {
  if (!videoData || !Array.isArray(videoData) || videoData.length === 0) {
    console.warn("沒有影片資料可渲染");
    return;
  }

  const videosContainer = document.querySelector(".videos-row");
  if (!videosContainer) {
    console.error("找不到影片容器元素");
    return;
  }

  // 清空現有內容
  videosContainer.innerHTML = "";

  // 渲染每個影片
  videoData.forEach((video) => {
    const videoColumn = document.createElement("div");
    videoColumn.className = "video-column";

    videoColumn.innerHTML = `
      <div class="video-container">
        <video
          id="${video.id}"
          class="demo-video"
          controls
          playsinline
          preload="metadata"
          poster="${video.海報圖片}"
        >
          <source
            data-src="${video.影片連結}"
            type="video/mp4"
          />
          您的瀏覽器不支援影片播放，請更新瀏覽器版本。
        </video>
      </div>
      <div class="video-description">
        <h3>${video.標題}</h3>
        <p>${video.描述.replace(/\n/g, "<br>")}</p>
      </div>
    `;

    videosContainer.appendChild(videoColumn);
  });

  // 初始化影片懶加載
  initVideoLazyLoading();
}

// 防抖函數，避免滾動事件頻繁觸發
function debounce(func, wait) {
  let timeout;
  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      func.apply(context, args);
    }, wait);
  };
}
