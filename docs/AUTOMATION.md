# AI 자동 업로드 운영 메모

## 새 글 만들기

```bash
npm run new:post -- "글 제목"
```

생성 위치:

```text
src/content/blog/YYYY-MM-DD-글-제목.md
```

## 자동 배포 흐름

1. `src/content/blog/*.md`에 글 추가
2. `git add . && git commit -m "post: 글 제목"`
3. `git push origin main`
4. GitHub Actions가 빌드
5. GitHub Pages에 자동 배포

## 애드센스

애드센스 승인 후 `PUBLIC_ADSENSE_CLIENT` 값을 빌드 환경에 넣고 `BaseHead.astro`에 광고 스크립트를 활성화합니다.
초기에는 광고보다 콘텐츠 품질, 카테고리 구조, 검색엔진 등록을 우선합니다.
