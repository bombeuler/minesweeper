const Ws = require("ws");

((Ws) => {
  const server = new Ws.Server({ port: 3000 });

  const init = () => {
    bindEvent();
  };

  function bindEvent() {
    server.on("open", handleOpen);
    server.on("close", handleClose);
    server.on("error", handleError);
    server.on("connection", handleConnection);
  }

  function handleOpen() {
    console.log("[BE] open");
  }

  function handleClose() {
    console.log("[BE] close");
  }

  function handleError() {
    console.log("[BE] error");
  }

  function handleConnection(ws) {
    console.log("[BE] connection");
    ws.on("message", handleMessage);
  }

  function handleMessage(msg) {}

  init();
})(Ws);
