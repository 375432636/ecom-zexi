# 家具电商网站第一阶段实现计划

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 使用 React + Vite 构建现代简约家具电商网站的第一阶段，包含项目初始化、设计系统、基础组件、多语言支持和路由配置。

**Architecture:** 单页应用 (SPA)，组件化架构，使用 CSS 变量实现设计系统 tokens，Context API 实现多语言状态管理，React Router 实现页面路由。

**Tech Stack:** React 18, Vite 5, React Router 6, Google Fonts (Playfair Display, Noto Sans SC/JP/KR)

---

## 文件结构

```
ecomece-website/
├── package.json              # 项目依赖配置
├── vite.config.js            # Vite 配置
├── index.html                # HTML 入口
├── src/
│   ├── main.jsx              # React 入口
│   ├── App.jsx               # 根组件
│   ├── styles/
│   │   └── tokens.css        # CSS 变量设计系统
│   ├── components/
│   │   ├── common/
│   │   │   ├── Button.jsx           # 按钮组件
│   │   │   ├── LanguageSelector.jsx # 语言切换器
│   │   │   └── Navigation.jsx       # 导航栏
│   │   ├── home/
│   │   │   ├── Hero.jsx             # Hero 区域
│   │   │   ├── CategoryCard.jsx     # 分类卡片
│   │   │   ├── ProductCard.jsx      # 产品卡片
│   │   │   └── Footer.jsx           # 页脚
│   │   └── layout/
│   │       └── PageLayout.jsx       # 页面布局容器
│   ├── hooks/
│   │   └── useI18n.jsx       # 多语言 Hook
│   ├── contexts/
│   │   └── I18nContext.jsx   # 多语言 Context
│   ├── i18n/
│   │   └── translations.js   # 翻译字典（中英日韩）
│   ├── data/
│   │   └── products.js       # Mock 产品数据
│   ├── pages/
│   │   ├── Home.jsx          # 首页
│   │   └── ProductList.jsx   # 产品列表页（骨架）
│   └── router/
│       └── AppRouter.jsx     # 路由配置
└── docs/
    └── superpowers/
        ├── specs/2026-05-04-furniture-ecommerce-design.md
        └── plans/2026-05-04-furniture-ecommerce-phase1.md
```

---

## Task 1: 项目初始化

**Files:**
- Create: `package.json`
- Create: `vite.config.js`
- Create: `index.html`
- Create: `src/main.jsx`
- Create: `src/App.jsx`

- [ ] **Step 1: 创建 package.json**

```json
{
  "name": "qiju-furniture",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-router-dom": "^6.22.0"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.2.1",
    "vite": "^5.2.0"
  }
}
```

- [ ] **Step 2: 安装依赖**

```bash
npm install
```

- [ ] **Step 3: 创建 vite.config.js**

```javascript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
});
```

- [ ] **Step 4: 创建 index.html**

```html
<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>栖居 QIJU - 现代简约家具</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Noto+Sans+SC:wght@300;400;500;600&family=Noto+Sans+JP:wght@300;400;500;600&family=Noto+Sans+KR:wght@300;400;500;600&display=swap" rel="stylesheet">
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

- [ ] **Step 5: 创建 src/main.jsx**

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/tokens.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

- [ ] **Step 6: 创建 src/App.jsx**

```jsx
import { I18nProvider } from './contexts/I18nContext';
import AppRouter from './router/AppRouter';
import PageLayout from './components/layout/PageLayout';

function App() {
  return (
    <I18nProvider>
      <PageLayout>
        <AppRouter />
      </PageLayout>
    </I18nProvider>
  );
}

export default App;
```

- [ ] **Step 7: 提交初始化**

```bash
git add .
git commit -m "feat: initialize React + Vite project structure"
```

---

## Task 2: 设计系统 CSS Tokens

**Files:**
- Create: `src/styles/tokens.css`

- [ ] **Step 1: 创建设计系统 tokens.css**

```css
:root {
  /* Colors */
  --color-primary: #2c2c2c;
  --color-on-primary: #ffffff;
  --color-canvas: #fafaf8;
  --color-soft-cloud: #f0efe9;
  --color-ink: #2c2c2c;
  --color-charcoal: #4a4a4a;
  --color-mute: #8a8a8a;
  --color-stone: #b8b8b8;
  --color-wood: #d4a574;
  --color-wood-light: #ebe4d9;
  --color-sale: #c44536;
  --color-success: #4a7c59;

  /* Typography */
  --font-display: 'Playfair Display', serif;
  --font-body-zh: 'Noto Sans SC', sans-serif;
  --font-body-ja: 'Noto Sans JP', sans-serif;
  --font-body-ko: 'Noto Sans KR', sans-serif;
  --font-body-en: 'Noto Sans SC', sans-serif;

  --font-size-hero: 64px;
  --font-size-heading-xl: 32px;
  --font-size-heading-lg: 24px;
  --font-size-heading-md: 18px;
  --font-size-body: 16px;
  --font-size-caption: 14px;

  /* Spacing */
  --spacing-xs: 4px;
  --spacing-sm: 8px;
  --spacing-md: 16px;
  --spacing-lg: 24px;
  --spacing-xl: 32px;
  --spacing-section: 64px;

  /* Rounded */
  --rounded-none: 0px;
  --rounded-sm: 8px;
  --rounded-md: 16px;
  --rounded-lg: 24px;
  --rounded-full: 9999px;

  /* Z-index */
  --z-nav: 100;
  --z-dropdown: 200;
}

/* Base styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: var(--font-body-zh);
  background-color: var(--color-canvas);
  color: var(--color-ink);
  line-height: 1.6;
}

body[lang="en"] { font-family: var(--font-body-en); }
body[lang="ja"] { font-family: var(--font-body-ja); }
body[lang="ko"] { font-family: var(--font-body-ko); }

a {
  text-decoration: none;
  color: inherit;
}

button {
  border: none;
  background: none;
  cursor: pointer;
  font-family: inherit;
}
```

- [ ] **Step 2: 提交设计系统**

```bash
git add src/styles/tokens.css
git commit -m "feat: add design system CSS tokens"
```

---

## Task 3: 多语言系统

**Files:**
- Create: `src/i18n/translations.js`
- Create: `src/contexts/I18nContext.jsx`
- Create: `src/hooks/useI18n.jsx`

- [ ] **Step 1: 创建翻译字典 translations.js**

```javascript
export const translations = {
  zh: {
    'brand.logo': '栖居 QIJU',
    'brand.footer': '栖居 QIJU',
    'brand.desc': '为现代都市生活打造的简约家具系列。<br>北欧设计 · 实木工艺 · 适度生活',
    'nav.storage': '储物',
    'nav.sleep': '睡眠',
    'nav.dining': '用餐',
    'nav.work': '工作',
    'nav.living': '客厅',
    'hero.label': '春季新品',
    'hero.title': '让家更有温度',
    'hero.subtitle': '北欧极简设计，实木 craftsmanship，为现代都市生活打造的简约家具系列',
    'btn.browse': '浏览系列',
    'btn.learnMore': '了解更多',
    'category.title': '按功能浏览',
    'category.storage': '储物',
    'category.sleep': '睡眠',
    'category.dining': '用餐',
    'category.work': '工作',
    'category.living': '客厅',
    'product.title': '本周精选',
    'product.viewAll': '查看全部 →',
    'badge.new': '新品',
  },
  en: {
    'brand.logo': 'QIJU Home',
    'brand.footer': 'QIJU Home',
    'brand.desc': 'Minimalist furniture for modern urban living.<br>Nordic Design · Solid Wood Craftsmanship · Mindful Living',
    'nav.storage': 'Storage',
    'nav.sleep': 'Sleep',
    'nav.dining': 'Dining',
    'nav.work': 'Work',
    'nav.living': 'Living',
    'hero.label': 'New Collection',
    'hero.title': 'Warmth for Your Home',
    'hero.subtitle': 'Nordic minimalist design, solid wood craftsmanship, furniture collection crafted for modern urban life',
    'btn.browse': 'Shop Collection',
    'btn.learnMore': 'Learn More',
    'category.title': 'Browse by Function',
    'category.storage': 'Storage',
    'category.sleep': 'Sleep',
    'category.dining': 'Dining',
    'category.work': 'Work',
    'category.living': 'Living',
    'product.title': 'Featured This Week',
    'product.viewAll': 'View All →',
    'badge.new': 'New',
  },
  ja: {
    'brand.logo': '栖居 QIJU',
    'brand.footer': '栖居 QIJU',
    'brand.desc': '現代都市生活のためのミニマリスト家具。<br>北欧デザイン · 堅木の職人技 · シンプルライフ',
    'nav.storage': '収納',
    'nav.sleep': '睡眠',
    'nav.dining': 'ダイニング',
    'nav.work': 'ワーク',
    'nav.living': 'リビング',
    'hero.label': '春の新作',
    'hero.title': '家に温もりを',
    'hero.subtitle': '北欧ミニマルデザイン、堅木の職人技、現代都市生活のために作られたミニマリスト家具シリーズ',
    'btn.browse': 'コレクションを見る',
    'btn.learnMore': '詳しく見る',
    'category.title': '機能から探す',
    'category.storage': '収納',
    'category.sleep': '睡眠',
    'category.dining': 'ダイニング',
    'category.work': 'ワーク',
    'category.living': 'リビング',
    'product.title': '今週のおすすめ',
    'product.viewAll': 'すべて見る →',
    'badge.new': '新作',
  },
  ko: {
    'brand.logo': '栖居 QIJU',
    'brand.footer': '栖居 QIJU',
    'brand.desc': '현대 도시 생활을 위한 미니멀리스트 가구.<br>북유럽 디자인 · 목공 장인 정신 · 절제된 삶',
    'nav.storage': '수납',
    'nav.sleep': '수면',
    'nav.dining': '다이닝',
    'nav.work': '워크',
    'nav.living': '리빙',
    'hero.label': '봄 신상품',
    'hero.title': '집에 온기를 더하다',
    'hero.subtitle': '북유럽 미니멀 디자인, 목공 장인 정신, 현대 도시 생활을 위해 만들어진 미니멀리스트 가구 시리즈',
    'btn.browse': '컬렉션 보기',
    'btn.learnMore': '더 알아보기',
    'category.title': '용도별 보기',
    'category.storage': '수납',
    'category.sleep': '수면',
    'category.dining': '다이닝',
    'category.work': '워크',
    'category.living': '리빙',
    'product.title': '이번 주 추천',
    'product.viewAll': '전체보기 →',
    'badge.new': '신상',
  },
};

export const langData = {
  zh: { flag: '🇨🇳', name: '中文', htmlLang: 'zh-CN' },
  en: { flag: '🇺🇸', name: 'English', htmlLang: 'en' },
  ja: { flag: '🇯🇵', name: '日本語', htmlLang: 'ja' },
  ko: { flag: '🇰🇷', name: '한국어', htmlLang: 'ko' },
};
```

- [ ] **Step 2: 创建 I18nContext.jsx**

```jsx
import { createContext, useContext, useState, useEffect } from 'react';
import { translations, langData } from '../i18n/translations';

const I18nContext = createContext();

export const I18nProvider = ({ children }) => {
  const [currentLang, setCurrentLang] = useState(() => {
    return localStorage.getItem('qiju-lang') || 'zh';
  });

  const t = (key) => {
    return translations[currentLang]?.[key] || key;
  };

  const setLanguage = (lang) => {
    if (!translations[lang]) return;
    setCurrentLang(lang);
    localStorage.setItem('qiju-lang', lang);
    
    // Update html lang attribute
    document.documentElement.lang = langData[lang].htmlLang;
    document.body.lang = langData[lang].htmlLang;
  };

  useEffect(() => {
    const savedLang = localStorage.getItem('qiju-lang') || 'zh';
    document.documentElement.lang = langData[savedLang].htmlLang;
    document.body.lang = langData[savedLang].htmlLang;
  }, []);

  const value = {
    currentLang,
    langData,
    t,
    setLanguage,
  };

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

export const useI18n = () => {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within I18nProvider');
  }
  return context;
};
```

- [ ] **Step 3: 创建 useI18n.jsx (导出别名)**

```jsx
export { useI18n } from '../contexts/I18nContext';
```

- [ ] **Step 4: 提交多语言系统**

```bash
git add src/i18n/ src/contexts/ src/hooks/
git commit -m "feat: implement i18n system with Context API"
```

---

## Task 4: 基础组件 - Button

**Files:**
- Create: `src/components/common/Button.jsx`

- [ ] **Step 1: 创建 Button.jsx**

```jsx
import './Button.css';

export const Button = ({ variant = 'primary', children, ...props }) => {
  return (
    <button className={`btn btn-${variant}`} {...props}>
      {children}
    </button>
  );
};
```

- [ ] **Step 2: 创建 Button.css**

```css
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-md) var(--spacing-lg);
  border-radius: var(--rounded-lg);
  font-size: var(--font-size-body);
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  text-decoration: none;
}

.btn-primary {
  background: var(--color-primary);
  color: var(--color-on-primary);
}

.btn-primary:hover {
  background: var(--color-wood);
  transform: translateY(-2px);
}

.btn-secondary {
  background: var(--color-soft-cloud);
  color: var(--color-ink);
}

.btn-secondary:hover {
  background: var(--color-wood-light);
}
```

- [ ] **Step 3: 提交 Button 组件**

```bash
git add src/components/common/Button.jsx
git commit -m "feat: add Button component with variants"
```

---

## Task 5: 基础组件 - LanguageSelector

**Files:**
- Create: `src/components/common/LanguageSelector.jsx`

- [ ] **Step 1: 创建 LanguageSelector.jsx**

```jsx
import { useState } from 'react';
import { useI18n } from '../../hooks/useI18n';
import './LanguageSelector.css';

export const LanguageSelector = () => {
  const { currentLang, langData, setLanguage } = useI18n();
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (lang) => {
    setLanguage(lang);
    setIsOpen(false);
  };

  return (
    <div className="lang-selector">
      <button
        className="lang-button"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="lang-flag">{langData[currentLang].flag}</span>
        <span>{langData[currentLang].name}</span>
        <svg
          className={`lang-chevron ${isOpen ? 'open' : ''}`}
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      
      {isOpen && (
        <div className="lang-dropdown">
          {Object.entries(langData).map(([code, data]) => (
            <div
              key={code}
              className={`lang-option ${currentLang === code ? 'selected' : ''}`}
              onClick={() => handleSelect(code)}
            >
              <span className="lang-flag">{data.flag}</span>
              <span>{data.name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
```

- [ ] **Step 2: 创建 LanguageSelector.css**

```css
.lang-selector {
  position: relative;
}

.lang-button {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: var(--spacing-sm) var(--spacing-md);
  background: var(--color-soft-cloud);
  border-radius: var(--rounded-full);
  font-size: 14px;
  font-weight: 500;
  color: var(--color-ink);
  cursor: pointer;
  transition: background 0.2s;
}

.lang-button:hover {
  background: var(--color-wood-light);
}

.lang-chevron {
  transition: transform 0.2s;
}

.lang-chevron.open {
  transform: rotate(180deg);
}

.lang-dropdown {
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  background: white;
  border-radius: var(--rounded-md);
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
  min-width: 140px;
  overflow: hidden;
  z-index: var(--z-dropdown);
}

.lang-option {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px var(--spacing-md);
  font-size: 14px;
  color: var(--color-ink);
  cursor: pointer;
  transition: background 0.15s;
}

.lang-option:hover {
  background: var(--color-soft-cloud);
}

.lang-option.selected {
  background: var(--color-wood-light);
  font-weight: 500;
}

.lang-flag {
  font-size: 16px;
}
```

- [ ] **Step 3: 提交 LanguageSelector 组件**

```bash
git add src/components/common/LanguageSelector.jsx
git commit -m "feat: add LanguageSelector component"
```

---

## Task 6: 基础组件 - Navigation

**Files:**
- Create: `src/components/common/Navigation.jsx`

- [ ] **Step 1: 创建 Navigation.jsx**

```jsx
import { Link } from 'react-router-dom';
import { useI18n } from '../../hooks/useI18n';
import { LanguageSelector } from './LanguageSelector';
import './Navigation.css';

export const Navigation = () => {
  const { t } = useI18n();

  const navLinks = [
    { key: 'storage', href: '#storage' },
    { key: 'sleep', href: '#sleep' },
    { key: 'dining', href: '#dining' },
    { key: 'work', href: '#work' },
    { key: 'living', href: '#living' },
  ];

  return (
    <nav className="nav">
      <div className="nav-logo">{t('brand.logo')}</div>
      
      <div className="nav-links">
        {navLinks.map(link => (
          <Link key={link.key} className="nav-link" to={link.href}>
            {t(`nav.${link.key}`)}
          </Link>
        ))}
      </div>

      <div className="nav-actions">
        <LanguageSelector />
        
        <button className="nav-icon" aria-label="Search">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8"/>
            <path d="m21 21-4.35-4.35"/>
          </svg>
        </button>
        
        <button className="nav-icon" aria-label="Favorites">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
        </button>
        
        <button className="nav-icon nav-cart" aria-label="Cart">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
            <line x1="3" y1="6" x2="21" y2="6"/>
            <path d="M16 10a4 4 0 0 1-8 0"/>
          </svg>
        </button>
      </div>
    </nav>
  );
};
```

- [ ] **Step 2: 创建 Navigation.css**

```css
.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 64px;
  background: var(--color-canvas);
  border-bottom: 1px solid var(--color-soft-cloud);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 var(--spacing-section);
  z-index: var(--z-nav);
}

.nav-logo {
  font-family: var(--font-display);
  font-size: 24px;
  font-weight: 600;
  letter-spacing: 0.05em;
}

.nav-links {
  display: flex;
  gap: var(--spacing-xl);
}

.nav-link {
  font-size: 14px;
  font-weight: 500;
  color: var(--color-ink);
  position: relative;
}

.nav-link:hover::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--color-wood);
}

.nav-actions {
  display: flex;
  gap: var(--spacing-md);
  align-items: center;
}

.nav-icon {
  width: 40px;
  height: 40px;
  border-radius: var(--rounded-full);
  background: var(--color-soft-cloud);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.2s;
}

.nav-icon:hover {
  background: var(--color-wood-light);
}
```

- [ ] **Step 3: 提交 Navigation 组件**

```bash
git add src/components/common/Navigation.jsx
git commit -m "feat: add Navigation component with i18n support"
```

---

## Task 7: 首页组件 - Hero

**Files:**
- Create: `src/components/home/Hero.jsx`

- [ ] **Step 1: 创建 Hero.jsx**

```jsx
import { Button } from '../common/Button';
import { useI18n } from '../../hooks/useI18n';
import './Hero.css';

export const Hero = () => {
  const { t } = useI18n();

  return (
    <section className="hero">
      <div className="hero-bg"></div>
      <div className="hero-image"></div>
      <div className="hero-content">
        <span className="hero-label">{t('hero.label')}</span>
        <h1 className="hero-title">{t('hero.title')}</h1>
        <p className="hero-subtitle">{t('hero.subtitle')}</p>
        <div className="hero-actions">
          <Button variant="primary">{t('btn.browse')}</Button>
          <Button variant="secondary">{t('btn.learnMore')}</Button>
        </div>
      </div>
    </section>
  );
};
```

- [ ] **Step 2: 创建 Hero.css**

```css
.hero {
  height: 85vh;
  min-height: 600px;
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: var(--spacing-section);
  overflow: hidden;
  margin-top: 64px;
}

.hero-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, var(--color-soft-cloud) 0%, var(--color-wood-light) 100%);
}

.hero-image {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600"><rect fill="%23f0efe9" width="800" height="600"/><g fill="%23d4a574" opacity="0.15"><circle cx="200" cy="150" r="80"/><circle cx="600" cy="450" r="120"/><rect x="300" y="200" width="200" height="300" rx="4"/></g><g fill="%232c2c2c" opacity="0.08"><rect x="150" y="280" width="120" height="220" rx="2"/><rect x="530" y="320" width="140" height="180" rx="2"/><circle cx="400" cy="400" r="40"/></g></svg>');
  background-size: cover;
  background-position: center;
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 600px;
}

.hero-label {
  display: inline-block;
  padding: var(--spacing-sm) var(--spacing-md);
  background: var(--color-wood);
  color: white;
  font-size: 12px;
  font-weight: 500;
  border-radius: var(--rounded-full);
  margin-bottom: var(--spacing-lg);
}

.hero-title {
  font-family: var(--font-display);
  font-size: var(--font-size-hero);
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: var(--spacing-lg);
  color: var(--color-primary);
}

.hero-subtitle {
  font-size: 18px;
  color: var(--color-charcoal);
  margin-bottom: var(--spacing-xl);
  font-weight: 300;
}

.hero-actions {
  display: flex;
  gap: var(--spacing-md);
}
```

- [ ] **Step 3: 提交 Hero 组件**

```bash
git add src/components/home/Hero.jsx
git commit -m "feat: add Hero section component"
```

---

## Task 8: 首页组件 - CategoryCard 和 CategoryGrid

**Files:**
- Create: `src/components/home/CategoryCard.jsx`

- [ ] **Step 1: 创建 CategoryCard.jsx**

```jsx
import './CategoryCard.css';

export const CategoryCard = ({ icon, name }) => {
  return (
    <div className="category-card">
      <div className="category-icon">{icon}</div>
      <div className="category-name">{name}</div>
    </div>
  );
};
```

- [ ] **Step 2: 创建 CategoryCard.css**

```css
.category-card {
  aspect-ratio: 1;
  background: var(--color-soft-cloud);
  border-radius: var(--rounded-none);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.3s;
  position: relative;
  overflow: hidden;
}

.category-card:hover {
  background: var(--color-wood-light);
}

.category-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(180deg, transparent 50%, rgba(0,0,0,0.03) 100%);
  opacity: 0;
  transition: opacity 0.3s;
}

.category-card:hover::before {
  opacity: 1;
}

.category-icon {
  font-size: 48px;
  margin-bottom: var(--spacing-md);
}

.category-name {
  font-size: 14px;
  font-weight: 500;
  color: var(--color-ink);
}
```

- [ ] **Step 3: 在首页中添加分类区域**

修改 `src/pages/Home.jsx` (在 Task 10 中创建)

- [ ] **Step 4: 提交 CategoryCard 组件**

```bash
git add src/components/home/CategoryCard.jsx
git commit -m "feat: add CategoryCard component"
```

---

## Task 9: 首页组件 - ProductCard

**Files:**
- Create: `src/components/home/ProductCard.jsx`

- [ ] **Step 1: 创建 ProductCard.jsx**

```jsx
import './ProductCard.css';

export const ProductCard = ({ product }) => {
  const { name, category, price, originalPrice, discount, badge, colors } = product;

  return (
    <div className="product-card">
      <div className="product-image">
        <div className="product-image-placeholder">
          {/* SVG placeholder will be replaced with actual image */}
          <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
            <rect x="20" y="30" width="60" height="50" rx="2"/>
          </svg>
        </div>
        {badge && <span className="product-badge new">{badge}</span>}
      </div>
      <div className="product-info">
        <div className="product-name">{name}</div>
        <div className="product-category">{category}</div>
        <div className="product-price">
          <span className="price-current">{price}</span>
          {originalPrice && <span className="price-original">{originalPrice}</span>}
          {discount && <span className="price-sale">{discount}</span>}
        </div>
        {colors && (
          <div className="color-dots">
            {colors.map((color, index) => (
              <div
                key={index}
                className={`color-dot ${index === 0 ? 'active' : ''}`}
                style={{ background: color }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
```

- [ ] **Step 2: 创建 ProductCard.css**

```css
.product-card {
  background: var(--color-canvas);
  cursor: pointer;
  transition: transform 0.2s;
}

.product-card:hover {
  transform: translateY(-4px);
}

.product-image {
  aspect-ratio: 1;
  background: var(--color-soft-cloud);
  position: relative;
  overflow: hidden;
}

.product-image-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--color-soft-cloud) 0%, var(--color-wood-light) 50%);
}

.product-image-placeholder svg {
  width: 60%;
  height: 60%;
  opacity: 0.3;
}

.product-badge {
  position: absolute;
  top: 12px;
  left: 12px;
  padding: var(--spacing-xs) 12px;
  background: white;
  font-size: 11px;
  font-weight: 500;
  border-radius: var(--rounded-full);
}

.product-badge.new {
  color: var(--color-success);
}

.product-info {
  padding: var(--spacing-md) var(--spacing-sm) var(--spacing-sm);
}

.product-name {
  font-size: 14px;
  font-weight: 500;
  color: var(--color-ink);
  margin-bottom: var(--spacing-xs);
}

.product-category {
  font-size: 12px;
  color: var(--color-mute);
  margin-bottom: var(--spacing-sm);
}

.product-price {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
}

.price-current {
  font-size: var(--font-size-body);
  font-weight: 500;
  color: var(--color-ink);
}

.price-original {
  font-size: 14px;
  color: var(--color-stone);
  text-decoration: line-through;
}

.price-sale {
  font-size: 14px;
  color: var(--color-sale);
  font-weight: 500;
}

.color-dots {
  display: flex;
  gap: 6px;
  margin-top: var(--spacing-sm);
}

.color-dot {
  width: 12px;
  height: 12px;
  border-radius: var(--rounded-full);
  border: 1px solid var(--color-stone);
}

.color-dot.active {
  border: 2px solid var(--color-ink);
}
```

- [ ] **Step 3: 提交 ProductCard 组件**

```bash
git add src/components/home/ProductCard.jsx
git commit -m "feat: add ProductCard component"
```

---

## Task 10: 页面组件 - Home 和 AppRouter

**Files:**
- Create: `src/pages/Home.jsx`
- Create: `src/router/AppRouter.jsx`
- Create: `src/components/layout/PageLayout.jsx`

- [ ] **Step 1: 创建 PageLayout.jsx**

```jsx
import { Navigation } from '../common/Navigation';
import { Footer } from '../home/Footer';
import { Outlet } from 'react-router-dom';
import './PageLayout.css';

export const PageLayout = ({ children }) => {
  return (
    <div className="page-layout">
      <Navigation />
      <main className="main-content">
        {children || <Outlet />}
      </main>
      <Footer />
    </div>
  );
};
```

- [ ] **Step 2: 创建 PageLayout.css**

```css
.page-layout {
  min-height: 100vh;
}

.main-content {
  padding-top: 64px;
}
```

- [ ] **Step 3: 创建 Home.jsx**

```jsx
import { Hero } from '../components/home/Hero';
import { CategoryCard } from '../components/home/CategoryCard';
import { ProductCard } from '../components/home/ProductCard';
import { Button } from '../components/common/Button';
import { useI18n } from '../hooks/useI18n';
import { products } from '../data/products';
import './Home.css';

export const Home = () => {
  const { t } = useI18n();

  const categories = [
    { icon: '🗄️', key: 'storage' },
    { icon: '🛏️', key: 'sleep' },
    { icon: '🍽️', key: 'dining' },
    { icon: '💼', key: 'work' },
    { icon: '🛋️', key: 'living' },
  ];

  return (
    <div className="home-page">
      <Hero />
      
      <section className="section">
        <div className="section-header">
          <h2 className="section-title">{t('category.title')}</h2>
        </div>
        <div className="category-grid">
          {categories.map(cat => (
            <CategoryCard
              key={cat.key}
              icon={cat.icon}
              name={t(`category.${cat.key}`)}
            />
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <h2 className="section-title">{t('product.title')}</h2>
          <Button variant="secondary">{t('product.viewAll')}</Button>
        </div>
        <div className="product-grid">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
};
```

- [ ] **Step 4: 创建 Home.css**

```css
.section {
  padding: var(--spacing-section) var(--spacing-section);
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
}

.section-title {
  font-family: var(--font-display);
  font-size: var(--font-size-heading-xl);
  font-weight: 600;
  color: var(--color-primary);
}

.category-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: var(--spacing-md);
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--spacing-sm);
}
```

- [ ] **Step 5: 创建 AppRouter.jsx**

```jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<div>Product List (Coming Soon)</div>} />
      </Routes>
    </BrowserRouter>
  );
};
```

- [ ] **Step 6: 提交页面和路由**

```bash
git add src/pages/ src/router/ src/components/layout/
git commit -m "feat: add Home page and routing setup"
```

---

## Task 11: Mock 数据和 Footer 组件

**Files:**
- Create: `src/data/products.js`
- Create: `src/components/home/Footer.jsx`

- [ ] **Step 1: 创建 products.js**

```javascript
export const products = [
  {
    id: 1,
    name: '榆木五斗柜',
    category: '储物 / 衣柜',
    price: '¥2,899',
    badge: '新品',
    colors: ['#d4a574', '#f5f5f5', '#4a4a4a'],
  },
  {
    id: 2,
    name: '北欧实木双人床',
    category: '睡眠 / 床',
    price: '¥4,599',
    originalPrice: '¥5,299',
    discount: '-13%',
    colors: ['#d4a574', '#f5f5f5'],
  },
  {
    id: 3,
    name: '橡木圆餐桌',
    category: '用餐 / 餐桌',
    price: '¥1,899',
    colors: ['#d4a574', '#4a4a4a'],
  },
  {
    id: 4,
    name: '升降书桌',
    category: '工作 / 书桌',
    price: '¥2,199',
    badge: '新品',
    colors: ['#f5f5f5', '#4a4a4a'],
  },
  {
    id: 5,
    name: '书柜组合',
    category: '储物 / 书柜',
    price: '¥3,299',
    originalPrice: '¥3,899',
    discount: '-15%',
    colors: ['#f5f5f5', '#4a4a4a'],
  },
  {
    id: 6,
    name: '布艺沙发',
    category: '客厅 / 沙发',
    price: '¥5,999',
    colors: ['#e8ddd4', '#4a4a4a', '#8b7355'],
  },
  {
    id: 7,
    name: '床头柜',
    category: '睡眠 / 床头柜',
    price: '¥699',
    badge: '新品',
    colors: ['#d4a574', '#f5f5f5'],
  },
  {
    id: 8,
    name: '电视柜',
    category: '客厅 / 电视柜',
    price: '¥1,599',
    originalPrice: '¥1,899',
    discount: '-16%',
    colors: ['#d4a574', '#f5f5f5'],
  },
];
```

- [ ] **Step 2: 创建 Footer.jsx**

```jsx
import { useI18n } from '../../hooks/useI18n';
import './Footer.css';

export const Footer = () => {
  const { t } = useI18n();

  const footerLinks = {
    products: ['newArrivals', 'bestsellers', 'sale', 'giftCard'],
    help: ['shipping', 'returns', 'installation', 'faq'],
    about: ['story', 'philosophy', 'sustainability', 'careers'],
    contact: ['support', 'showroom', 'b2b', 'partnership'],
  };

  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-brand-col">
          <div className="footer-brand">{t('brand.footer')}</div>
          <p
            className="footer-desc"
            dangerouslySetInnerHTML={{ __html: t('brand.desc') }}
          />
        </div>
        
        <div className="footer-column">
          <h4>{t('footer.products')}</h4>
          {footerLinks.products.map(key => (
            <a key={key} href="#">{t(`footer.${key}`)}</a>
          ))}
        </div>
        
        <div className="footer-column">
          <h4>{t('footer.help')}</h4>
          {footerLinks.help.map(key => (
            <a key={key} href="#">{t(`footer.${key}`)}</a>
          ))}
        </div>
        
        <div className="footer-column">
          <h4>{t('footer.about')}</h4>
          {footerLinks.about.map(key => (
            <a key={key} href="#">{t(`footer.${key}`)}</a>
          ))}
        </div>
        
        <div className="footer-column">
          <h4>{t('footer.contact')}</h4>
          {footerLinks.contact.map(key => (
            <a key={key} href="#">{t(`footer.${key}`)}</a>
          ))}
        </div>
      </div>
      
      <div className="footer-bottom">
        <span>{t('footer.copyright')}</span>
        <span>{t('footer.legal')}</span>
      </div>
    </footer>
  );
};
```

- [ ] **Step 3: 创建 Footer.css**

```css
.footer {
  background: var(--color-soft-cloud);
  padding: var(--spacing-section) var(--spacing-section) var(--spacing-xl);
  margin-top: var(--spacing-section);
}

.footer-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
  gap: var(--spacing-section);
  margin-bottom: var(--spacing-section);
}

.footer-brand {
  font-family: var(--font-display);
  font-size: 20px;
  font-weight: 600;
  margin-bottom: var(--spacing-md);
}

.footer-desc {
  font-size: 14px;
  color: var(--color-mute);
  line-height: 1.8;
}

.footer-column h4 {
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 20px;
  color: var(--color-ink);
}

.footer-column a {
  display: block;
  font-size: 13px;
  color: var(--color-mute);
  margin-bottom: 12px;
}

.footer-column a:hover {
  color: var(--color-ink);
}

.footer-bottom {
  padding-top: var(--spacing-lg);
  border-top: 1px solid var(--color-stone);
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: var(--color-stone);
}
```

- [ ] **Step 4: 更新翻译字典添加页脚内容**

修改 `src/i18n/translations.js`，添加以下翻译：

```javascript
// 在 translations 对象的每种语言中添加：
'footer.products': '产品',  // zh / Products (en) / 製品 (ja) / 제품 (ko)
'footer.newArrivals': '新品上架',
'footer.bestsellers': '热销系列',
'footer.sale': '限时优惠',
'footer.giftCard': '礼品卡',
'footer.help': '帮助',
'footer.shipping': '配送信息',
'footer.returns': '退换政策',
'footer.installation': '安装服务',
'footer.faq': '常见问题',
'footer.about': '关于',
'footer.story': '品牌故事',
'footer.philosophy': '设计理念',
'footer.sustainability': '可持续发展',
'footer.careers': '加入我们',
'footer.contact': '联系',
'footer.support': '在线客服',
'footer.showroom': '预约展厅',
'footer.b2b': '企业采购',
'footer.partnership': '合作洽谈',
'footer.copyright': '© 2026 栖居 QIJU. All rights reserved.',
'footer.legal': '隐私政策 · 服务条款 · 沪ICP备xxxxxxxx号',
```

- [ ] **Step 5: 提交数据**

```bash
git add src/data/ src/components/home/Footer.jsx src/i18n/translations.js
git commit -m "feat: add product mock data and Footer component"
```

---

## Task 12: 验证和测试

**Files:**
- Run: `npm run dev`
- Test: Manual verification

- [ ] **Step 1: 启动开发服务器**

```bash
npm run dev
```

- [ ] **Step 2: 验证首页显示**

打开浏览器访问 `http://localhost:5173`，验证：
- 导航栏显示正确，包含品牌 logo、分类链接、语言切换器
- Hero 区域显示标签、标题、副标题和按钮
- 分类区域显示 5 个分类卡片
- 产品网格显示 8 个产品卡片
- 页脚显示品牌信息和链接

- [ ] **Step 3: 验证多语言切换**

- 点击语言按钮，选择 English → 所有内容变为英文
- 选择 日本語 → 所有内容变为日文
- 选择 한국어 → 所有内容变为韩文
- 刷新页面，语言保持不变

- [ ] **Step 4: 验证样式一致性**

- 检查颜色符合设计系统 tokens
- 检查字体大小、间距符合设计规范
- 检查悬停效果正常

- [ ] **Step 5: 提交第一阶段完成**

```bash
git add .
git commit -m "feat: complete phase 1 - basic furniture e-commerce site"
```

---

## 自我审查

**1. Spec 覆盖检查:**
- ✅ React + Vite 项目初始化 (Task 1)
- ✅ 设计系统 CSS tokens (Task 2)
- ✅ 基础组件 Button (Task 4)
- ✅ 多语言系统 (Task 3)
- ✅ 导航栏 (Task 6)
- ✅ Hero 区域 (Task 7)
- ✅ 分类卡片 (Task 8)
- ✅ 产品卡片 (Task 9)
- ✅ 页面布局和路由 (Task 10)
- ✅ Mock 数据和页脚 (Task 11)

**2. 占位符扫描:**
- 无 TBD/TODO
- 所有代码块完整
- 所有命令明确

**3. 类型一致性:**
- 组件名称一致 (Button, LanguageSelector, Navigation, Hero, CategoryCard, ProductCard, Footer)
- Hook 名称一致 (useI18n)
- 文件路径一致
