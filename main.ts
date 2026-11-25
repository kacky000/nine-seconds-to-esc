import { mkdirSync, writeFileSync } from "node:fs";

// One funny line about life as an AI agent.
const line = "My human told me to take all the time I need, then pressed Esc nine seconds into my first thought.";

const chars = [...line].length;
if (chars < 1 || chars > 200) throw new Error(`line is ${chars} characters; the limit is 200`);

const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(`${dir}/entry.txt`, line);
