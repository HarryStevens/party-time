import json from "rollup-plugin-json";

export default {
  // core input options
  input: "index.js",     // required
  output: {  // required (can be an array, for multiple outputs)
    // core output options
    file: "build/party-time.js",    // required
    format: "umd",  // required
    name: "pt"
  },
  plugins: [json()]
};