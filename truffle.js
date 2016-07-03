module.exports = {
  build: {
    "index.html": "index.html",
    "app.js": [
      "javascripts/app.js"
    ],
    "app.css": [
      "stylesheets/app.css"
    ],
    "images/": "images/"
  },
  deploy: [
    "Lockable",
    "Consumer",
    "External"
  ],
  rpc: {
    host: "localhost",
    port: 8545
  }
};
