const requiredFiles = ["index.html", "style.css", "script.js"];

for (const file of requiredFiles) {
  const stat = Deno.statSync(file);
  if (!stat.isFile) {
    throw new Error(`${file} is missing.`);
  }
}

Deno.test("project root files are present and readable", () => {
  for (const file of requiredFiles) {
    const contents = Deno.readTextFileSync(file);
    if (contents.length === 0) {
      throw new Error(`${file} is empty.`);
    }
  }

  const indexHtml = Deno.readTextFileSync("index.html");
  if (!/<html|<body/i.test(indexHtml)) {
    throw new Error("index.html is missing the expected HTML structure.");
  }

  const styleCss = Deno.readTextFileSync("style.css");
  if (!styleCss.includes("{") || !styleCss.includes("}")) {
    throw new Error("style.css is missing expected CSS content.");
  }
});
