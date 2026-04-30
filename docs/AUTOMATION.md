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

애드센스 승인 후 아래 값을 GitHub Actions/Pages 빌드 환경변수에 넣습니다.

```text
PUBLIC_ADSENSE_CLIENT=ca-pub-XXXXXXXXXXXXXXXX
PUBLIC_ADSENSE_DISPLAY_SLOT=1234567890
PUBLIC_ADSENSE_IN_ARTICLE_SLOT=1234567890
PUBLIC_ADSENSE_MULTIPLEX_SLOT=1234567890
```

현재 코드에는 다음 광고 위치가 준비되어 있습니다.

- 홈 화면: 히어로 아래 디스플레이 광고
- 글 목록: 상단 디스플레이 광고
- 개별 글: 본문 위 디스플레이 광고
- 개별 글: 본문 아래 관련/멀티플렉스 광고

환경변수가 없으면 광고 영역은 아예 렌더링하지 않으므로, 승인 전에도 사이트 빌드와 배포는 안전합니다.
초기에는 광고보다 콘텐츠 품질, 카테고리 구조, 검색엔진 등록을 우선합니다.
