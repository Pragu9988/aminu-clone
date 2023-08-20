import { Fancybox } from "@fancyapps/ui";

(function () {
  Fancybox.bind("[data-fancybox]", {
    Thumbs: {
      type: "classic",
    },
    Toolbar: {
      display: {
        left: ["infobar"],

        right: ["close"],
      },
    },
  });
})();
