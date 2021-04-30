# CSS.SHOW [![CI](https://github.com/zhanghecool/cssdotshow/actions/workflows/ci.yml/badge.svg)](https://github.com/zhanghecool/cssdotshow/actions/workflows/ci.yml)

The CSS Show

### 文章顶部 YML 配置

```yml
---
title: '欢迎来到 CSS 秀儿'
date: '2020-04-30'
episode: 1
season: 1
---

```

#### YML 配置说明

1. title: 标题（）
2. date: 发表时间（）
3. audioUrl: 媒体地址（支持的文件格式包括 M4A，MP3，MOV，MP4，M4V 和 PDF）
4. audioType: 媒体类型（audio, video, application）
5. audioTypeName: 媒体类型名字（x-m4a, mpeg, quicktime, mp4, x-m4v, pdf）/_ audio/x-m4a, audio/mpeg, video/quicktime, video/mp4, video/x-m4v, and application/pdf _/
6. audioLength: 媒体大小（在 Mac 上，选择“文件”>“获取信息”，然后参考“大小”字段）
7. image: 文章封面地址（）
8. description: 介绍（）
9. explicit: 成人内容（true, false）
10. audioTime: 媒体时长（秒）
11. season: 剧集季号（1, 2, 3）
12. episode: 剧集编号（1, 2, 3）

| Name          |       Description        | Defaults |
| ------------- | :----------------------: | -------: |
| title         |      Article title       |          |
| description   |   Article description    |          |
| date          | Article publication time |          |
| audioUrl      |        Media url         |          |
| audioType     |        Media type        |    audio |
| audioTypeName |     Media type name      |     mpeg |
| audioLength   |        Media size        |     mpeg |
| image         |      Article cover       |          |
| explicit      |      Adult content       |    false |
| audioTime     |      Media duration      |          |
| season        |  Episode season number   |        1 |
| episode       |    An episode number     |        1 |
