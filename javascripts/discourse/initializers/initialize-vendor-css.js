import { withPluginApi } from "discourse/lib/plugin-api";
import { loadCSS } from "discourse/lib/load-script";

export default {
  name: "css-upload",
  initialize() {
    withPluginApi("0.8", api => {
      // this works and turns the body red
      const redPath = settings.theme_uploads["red"];
      const link = document.createElement("link");
      link.setAttribute("rel", "stylesheet");
      link.setAttribute("type", "text/css");
      link.setAttribute("href", redPath);
      document.head.appendChild(link);

      // this doesn't work. It should turn the body green
      const greenPath = settings.theme_uploads["green"];
      loadCSS(greenPath).then(() => {
        console.log("green loads");
      });
    });
  }
};
