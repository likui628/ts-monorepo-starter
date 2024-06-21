import { App } from "vue";
import * as components from "./components";

function install(app: App) {
  Object.entries(components).forEach(([key, component]) => {
    app.component(key, component);
  });
}

export default { install };

export * from "./components";

export * from "./constants";

export * from "./utils";
