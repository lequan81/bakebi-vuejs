// src/utils/iconUtils.js
import { createApp, h } from "vue";

export const iconToString = (Component, className, ...rest) => {
  if (!Component) return "";
  // create a temp div element
  const div = document.createElement("div");
  // create a temp app/html element
  const app = createApp({
    render() {
      return h(Component, {
        class: className || "shrink-0 size-3.5 text-gray-500",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-width": 2,
        ...rest,
      });
    },
  });
  app.mount(div);

  // get the innerHTML of the div aka the svg tags
  const svg = div.innerHTML;
  // cleanup
  app.unmount();

  return svg;
};
