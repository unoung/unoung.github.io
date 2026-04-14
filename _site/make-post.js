const fs = require("fs");
const path = require("path");

// 1. 터미널에서 입력한 제목 가져오기
const title = process.argv.slice(2).join(" ");

if (!title) {
  console.log("❌ 글 제목을 입력해주세요!");
  console.log('사용법: node make-post.js "새로운 글 제목"');
  process.exit(1);
}

// 2. 현재 날짜 구하기 (YYYY-MM-DD)
const today = new Date();
const year = today.getFullYear();
const month = String(today.getMonth() + 1).padStart(2, "0");
const day = String(today.getDate()).padStart(2, "0");
const dateStr = `${year}-${month}-${day}`;

// 3. 파일명 및 폴더명 만들기 (띄어쓰기를 하이픈으로 변경)
const slug = title.replace(/\s+/g, "-");
const fileName = `${dateStr}-${slug}`;

// 4. 경로 설정
const postPath = path.join(__dirname, "_posts", `${fileName}.md`);
const imageDir = path.join(__dirname, "assets", "images", fileName);

// 5. 마크다운 파일에 들어갈 기본 템플릿 (Front Matter)
const template = `---
layout: post
title: "${title}"
date: ${dateStr} ${String(today.getHours()).padStart(2, "0")}:${String(today.getMinutes()).padStart(2, "0")}:00 +0900
categories: 프론트엔드
author: unoung
description: ""
---

여기에 글을 작성해주세요.

`;

// 6. 폴더와 파일 생성 실행
try {
  // 전용 이미지 폴더 생성
  fs.mkdirSync(imageDir, { recursive: true });
  console.log(`\n📂 [1/2] 이미지 폴더 생성 완료: assets/images/${fileName}`);

  // 마크다운 파일 생성
  if (!fs.existsSync(postPath)) {
    fs.writeFileSync(postPath, template, "utf8");
    console.log(`📝 [2/2] 마크다운 포스트 생성 완료: _posts/${fileName}.md\n`);
    console.log("✨ 완벽합니다! 바로 글 작성을 시작하세요.");
  } else {
    console.log(`\n⚠️ 이미 같은 이름의 파일이 존재합니다: ${fileName}.md`);
  }
} catch (err) {
  console.error("\n❌ 에러가 발생했습니다:", err);
}
