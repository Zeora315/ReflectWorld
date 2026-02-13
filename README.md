# ReflectWorld / 映界

一个现代化的视频播放平台，提供沉浸式的观看体验。

![ReflectWorld](https://img.shields.io/badge/ReflectWorld-Video%20Platform-purple)
![Version](https://img.shields.io/badge/version-1.0.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)

## 功能特性

### 核心功能
- 视频播放与浏览
- 视频搜索功能
- 播放进度自动保存
- 观看历史记录
- 推荐视频系统

### 用户体验
- 响应式设计，支持多端访问
- 沉浸式状态栏（Chrome适配）
- 个性化问候语（基于时间）
- 平滑动画效果
- 深色主题

### 交互功能
- 轮播图展示
- 双击视频进入/退出全屏
- 访客统计（不蒜子）
- 评论系统（Twikoo）

### 页面功能
- 首页：视频列表、轮播图、搜索
- 播放页：视频播放、推荐、评论
- 版权协议：详细的使用条款
- 举报与反馈：问题提交渠道
- 404页面：友好的错误提示

## 技术栈

- HTML5
- CSS3（动画、渐变、响应式）
- JavaScript（原生）
- Twikoo（评论系统）
- 不蒜子（访客统计）

## 项目结构

```
video-main/
├── index.html          # 首页
├── watch.html          # 播放页
├── copyright.html       # 版权协议页
├── report.html         # 举报与反馈页
├── 404.html           # 404错误页
├── index.js           # 首页逻辑
├── watch.js           # 播放页逻辑
├── videos.js          # 视频数据
├── style.css          # 样式文件
├── cover/             # 封面图片
│   ├── cover1.jpg
│   ├── cover2.png
│   └── cover3.jpg
└── video/             # 视频文件
    ├── video1.mp4
    ├── video2.mp4
    └── video3.mp4
```

## 快速开始

### 本地运行

1. 克隆项目
```bash
git clone <repository-url>
cd video-main
```

2. 启动本地服务器
```bash
# 使用 Python
python -m http.server 8000

# 或使用 Node.js
npx http-server -p 8000

# 或使用 PHP
php -S localhost:8000
```

3. 访问应用
打开浏览器访问 `http://localhost:8000`

### 添加视频

编辑 `videos.js` 文件，添加视频信息：

```javascript
const videos = [
  {
    id: "1",
    title: "视频标题",
    desc: "视频描述",
    cover: "cover/cover1.jpg",
    file: "video/video1.mp4"
  },
  // 添加更多视频...
];
```

## 配置说明

### 评论系统

在 `watch.html` 和 `report.html` 中配置 Twikoo：

```javascript
twikoo.init({
  envId: 'your-twikoo-env-id',
  el: '#tcomment',
  lang: 'zh-CN'
})
```

### 访客统计

不蒜子统计已集成，无需额外配置。

## 浏览器支持

- Chrome/Edge（推荐）
- Firefox
- Safari
- 移动端浏览器

## 品牌信息

- 中文名：映界
- 英文名：ReflectWorld
- 主题色：紫色渐变 (#667eea → #764ba2)

## 功能亮点

1. 沉浸式观看体验
   - 双击视频进入全屏
   - 沉浸式状态栏
   - 自动隐藏控制栏

2. 智能进度保存
   - 自动保存播放进度
   - 下次访问自动恢复
   - 基于视频ID独立存储

3. 个性化问候
   - 根据时间显示不同问候语
   - 右下角弹窗形式
   - 可手动关闭

4. 完整的页面体系
   - 首页、播放页
   - 版权协议
   - 举报与反馈
   - 404错误页

## 贡献指南

欢迎提交 Issue 和 Pull Request！

## 许可证

MIT License

## 联系方式

- 网站：https://zeora.top
- 版权：©2019 - 2026 By Zeora

---

**ReflectWorld / 映界 - 让视频观看更美好**
