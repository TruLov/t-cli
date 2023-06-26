import { readFile } from 'fs/promises';

export async function version() {
  const json = JSON.parse(
    await readFile(new URL('../package.json', import.meta.url))
  );
  console.log(`t-cli version: ${json.version}`);
}
