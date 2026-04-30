# AdSense / Search Console 다음 단계

현재 블로그 URL:

```text
https://smartfork-kim.github.io/ai-auto-blog/
```

사이트맵:

```text
https://smartfork-kim.github.io/ai-auto-blog/sitemap-index.xml
```

## 1. Google Search Console

1. Search Console 접속
2. 속성 추가
3. `URL prefix` 방식 선택
4. URL 입력: `https://smartfork-kim.github.io/ai-auto-blog/`
5. HTML meta tag 인증 선택
6. `content="..."` 값만 복사
7. GitHub Pages 빌드 환경변수에 추가

```text
PUBLIC_GOOGLE_SITE_VERIFICATION=복사한_인증값
```

인증 완료 후 sitemap 제출:

```text
https://smartfork-kim.github.io/ai-auto-blog/sitemap-index.xml
```

## 2. AdSense 신청 전 주의

현재 사이트는 GitHub Pages 프로젝트 URL입니다.

```text
smartfork-kim.github.io/ai-auto-blog/
```

Search Console에는 URL prefix로 등록할 수 있지만, AdSense는 사이트 단위 심사라서 `/ai-auto-blog/` 같은 경로형 URL이 제한될 수 있습니다.

안정적인 AdSense 신청을 위해 권장하는 방식은 둘 중 하나입니다.

1. 커스텀 도메인 연결
   - 예: `aiautonote.com`
   - 가장 권장
2. GitHub Pages 사용자 사이트로 이전
   - 예: `https://smartfork-kim.github.io/`
   - 저장소 이름을 `smartfork-kim.github.io`로 운영

## 3. AdSense 코드 연결

AdSense 승인/검토 단계에서 `ca-pub-...` 값이 나오면 GitHub Pages 빌드 환경변수에 추가합니다.

```text
PUBLIC_ADSENSE_CLIENT=ca-pub-XXXXXXXXXXXXXXXX
```

승인 후 광고 단위 생성 뒤 아래 슬롯 값을 추가합니다.

```text
PUBLIC_ADSENSE_DISPLAY_SLOT=1234567890
PUBLIC_ADSENSE_IN_ARTICLE_SLOT=1234567890
PUBLIC_ADSENSE_MULTIPLEX_SLOT=1234567890
```
