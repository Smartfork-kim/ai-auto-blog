#!/usr/bin/env node
import { mkdir, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';

const title = process.argv.slice(2).join(' ').trim();
if (!title) {
  console.error('Usage: npm run new:post -- "글 제목"');
  process.exit(1);
}

const today = new Date().toISOString().slice(0, 10);
const slugBase = title
  .toLowerCase()
  .normalize('NFKD')
  .replace(/[^a-z0-9가-힣\s-]/g, '')
  .trim()
  .replace(/\s+/g, '-')
  .slice(0, 60) || 'new-post';
const file = path.join('src', 'content', 'blog', `${today}-${slugBase}.md`);

if (existsSync(file)) {
  console.error(`Already exists: ${file}`);
  process.exit(1);
}

const content = `---\ntitle: '${title.replace(/'/g, "’")}'\ndescription: '이 글의 핵심 설명을 한 문장으로 작성하세요.'\npubDate: '${today}'\n---\n\n## 개요\n\n여기에 본문을 작성하세요.\n\n## 핵심 내용\n\n- 포인트 1\n- 포인트 2\n- 포인트 3\n\n## 마무리\n\n정리 문장을 작성하세요.\n`;

await mkdir(path.dirname(file), { recursive: true });
await writeFile(file, content, 'utf8');
console.log(`Created ${file}`);
