Deno.test("project root files are present", () => {
  const indexHtml = Deno.readTextFileSync("index.html");
  const styleCss = Deno.readTextFileSync("style.css");

  if (!indexHtml.includes("<html") && !indexHtml.includes("<body")) {
    throw new Error("index.html is missing the expected HTML structure.");
  }

  if (!styleCss.includes("{")) {
    throw new Error("style.css is missing expected CSS content.");
  }
});
