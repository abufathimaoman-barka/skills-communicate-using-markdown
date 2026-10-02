const requiredFiles = ["index.html", "style.css", "script.js"];

for (const file of requiredFiles) {
  const stat = Deno.statSync(file);
  if (!stat.isFile) {
    throw new Error(`${file} is missing.`);
  }
}

Deno.test("project root files are present and readable", () => {
  const indexHtml = Deno.readTextFileSync("index.html");
  const styleCss = Deno.readTextFileSync("style.css");

  if (!indexHtml.includes("<html") && !indexHtml.includes("<body")) {
    throw new Error("index.html is missing the expected HTML structure.");
  }

  if (!styleCss.includes("{") || !styleCss.includes("}")) {
    throw new Error("style.css is missing expected CSS content.");
  }
});
