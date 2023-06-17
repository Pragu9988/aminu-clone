import Plyr from "plyr";

(function () {
  const videos = document.querySelectorAll(".al-video-player");

  videos.forEach((video) => {
    const options = video.dataset.plyr ? JSON.parse(video.dataset.plyr) : {};
    const playr = new Plyr(video, options);

    // Update thumbnail
    playr.on("ready", (event) => {
      const thumbnailUrl = event.target.getAttribute("data-thumbnail-url");
      console.log(thumbnailUrl, event.detail);
      const thumbnailElement = event.detail.plyr.elements.poster;

      if (thumbnailElement && thumbnailUrl) {
        thumbnailElement.style.backgroundImage = `url(${thumbnailUrl})`;
      }
    });

    // Change play icon
    // playr.on("ready", (event) => {
    //   const playIconSvg =
    //     event.detail.target.getAttribute("data-play-icon-svg");
    //   const playIconElement = event.detail.target.elements.play;

    //   if (playIconElement && playIconSvg) {
    //     playIconElement.style.backgroundImage = `url("data:image/svg+xml;charset=utf-8,${encodeURIComponent(
    //       playIconSvg
    //     )}")`;
    //   }
    // });
  });
})();
