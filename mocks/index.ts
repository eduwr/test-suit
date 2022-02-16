if (typeof window === "undefined") {
  const { server } = require("./server");
  server.listen({
    onUnhandledRequest: "error",
  });
} else {
  const { worker } = require("./browser");
  worker.start({
    onunhandledrejection: "error",
  });
}

export {};
