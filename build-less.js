#!/usr/bin/env node
const fs = require("fs");
const path = require("path");
const less = require("less");

const srcDir = path.resolve(__dirname, "src/styles");
const outDir = path.resolve(__dirname, "dist/styles");

function compileFile(file) {
  const filePath = path.join(srcDir, file);
  const outFile = path.join(outDir, file.replace(".less", ".css"));

  fs.readFile(filePath, "utf8", (err, content) => {
    if (err) return console.error(`Error reading ${file}:`, err);

    less.render(content)
      .then(output => {
        fs.mkdirSync(outDir, { recursive: true });
        fs.writeFileSync(outFile, output.css, "utf8");
        console.log(`Compiled ${file} → ${outFile}`);
      })
      .catch(err => console.error(`Error compiling ${file}:`, err));
  });
}

// Initial Compilation
fs.readdirSync(srcDir)
  .filter(file => file.endsWith(".less"))
  .forEach(compileFile);

// Watch for Changes
if (process.argv.includes("--watch")) {
  console.log("Watching for LESS changes...");
  fs.watch(srcDir, (eventType, filename) => {
    if (filename.endsWith(".less")) {
      console.log(`File changed: ${filename}`);
      compileFile(filename);
    }
  });
}
