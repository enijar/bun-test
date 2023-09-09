import server from "./src/server";

(async function build() {
  await server();

  const result = await Bun.build({
    entrypoints: ["./src/index.tsx"],
    outdir: "./build",
    splitting: true,
    minify: true,
    sourcemap: "external",
  });

  if (!result.success) {
    console.error("Build failed");
    for (const message of result.logs) {
      // Bun will pretty print the message object
      console.error(message);
    }
  } else {
    console.log("Build succeeded");
  }
})();
