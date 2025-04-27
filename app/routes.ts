import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("/spa", "routes/spa.tsx"),
  route("/prerender", "routes/prerender.tsx"),
  // route("/ssr", "routes/ssr.tsx"),
] satisfies RouteConfig;
