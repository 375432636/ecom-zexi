# 家具电商网站设计文档

**日期:** 2026-05-04
**项目:** 栖居 QIJU - 现代简约家具电商网站

---

## 概述

为年轻城市白领打造的现代简约家具电商网站，主打北欧/日式极简风格，产品涵盖柜子、床、桌子等家具。设计理念延续"摄影优先、界面安静"的 Editorial 风格，让产品图片成为主角。

---

## 设计系统

### 配色方案

```yaml
colors:
  primary: "#2c2c2c"      # 深灰（主文字/按钮）
  on-primary: "#ffffff"   # 主色上的文字
  canvas: "#fafaf8"       # 暖白背景
  soft-cloud: "#f0efe9"   # 浅灰背景（产品卡片、次要按钮）
  ink: "#2c2c2c"          # 主文字
  charcoal: "#4a4a4a"     # 次要文字
  mute: "#8a8a8a"         # 辅助文字
  stone: "#b8b8b8"        # 禁用/低优先级
  wood: "#d4a574"         # 木色点缀
  wood-light: "#ebe4d9"   # 浅木色背景
  sale: "#c44536"         # 促销红
  success: "#4a7c59"      # 成功绿
```

### 字体系统

```yaml
typography:
  display-hero:
    fontFamily: Playfair Display
    fontSize: 64px
    fontWeight: 700
    lineHeight: 1.1
  heading-xl:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: 600
  heading-lg:
    fontSize: 24px
    fontWeight: 600
  heading-md:
    fontSize: 18px
    fontWeight: 500
  body:
    fontFamily: Noto Sans SC (zh) / Noto Sans JP (ja) / Noto Sans KR (ko)
    fontSize: 16px
    fontWeight: 400
  button:
    fontSize: 16px
    fontWeight: 500
  caption:
    fontSize: 14px
    fontWeight: 500
```

### 间距与圆角

```yaml
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  section: 64px

rounded:
  none: 0px     # 卡片、图片
  sm: 8px       # 小组件
  md: 16px      # 输入框
  lg: 24px      # 按钮 Pill
  full: 9999px  # 圆形图标
```

---

## 页面结构

### 1. 导航栏 (64px 高度)
- 左侧：品牌 Logo "栖居 QIJU"
- 中间：5个分类链接（储物、睡眠、用餐、工作、客厅）
- 右侧：语言切换器 + 搜索 + 收藏 + 购物车

### 2. Hero 区域 (85vh 最小高度)
- 全宽背景渐变 + 装饰图形
- 左下角内容：标签 + 大标题 (72px) + 副标题 + 双按钮

### 3. 分类区域
- 标题 + 5列分类卡片（图标 + 名称）
- 无圆角、悬停时背景变木色

### 4. 产品网格
- 4列产品卡片
- 每个卡片：1:1 图片 + 产品名 + 分类 + 价格 + 色点

### 5. 页脚
- 品牌描述 + 4列链接 + 底部版权信息

---

## 组件规范

### 按钮
- **btn-primary**: 深灰背景 + 白色文字，24px 圆角
- **btn-secondary**: 浅灰背景 + 深灰文字，24px 圆角
- 悬停效果：向上 2px + 背景变木色

### 产品卡片
- 无圆角、无阴影
- 图片占满卡片宽度
- 元素之间 8px 间距
- 悬停效果：向上 4px

### 语言切换器
- Pill 形状按钮，显示国旗 + 语言名
- 下拉菜单选择语言
- 切换后更新所有页面内容

---

## 多语言支持

支持语言：中文、English、日本語、한국어

实现方式：
- 所有可翻译元素添加 `data-i18n` 属性
- JavaScript 翻译字典存储四语言内容
- 切换时遍历所有 `[data-i18n]` 元素更新内容
- localStorage 保存用户选择

---

## 技术栈

- **前端框架**: React + Vite
- **样式**: CSS (内联)
- **字体**: Google Fonts (Playfair Display + Noto Sans 系列)

---

## 待实现功能

### 第一阶段
1. React + Vite 项目初始化
2. 设计系统 tokens (CSS 变量)
3. 基础组件（Button, ProductCard, CategoryCard）
4. 多语言 Hook (useI18n)
5. 路由设置（首页、产品列表页、产品详情页）

### 第二阶段
6. 产品数据结构与 Mock 数据
7. 产品列表页面（筛选、排序）
8. 产品详情页面
9. 购物车功能
10. 结算流程

### 第三阶段
11. 真实产品图片替换
12. 响应式适配
13. 性能优化（图片懒加载）
14. SEO 优化
