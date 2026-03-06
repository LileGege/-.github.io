# 个人主页网站

一个简约现代风格的个人主页，适合展示个人信息、技能和项目。

## 功能特点

- ✨ 简约现代的设计风格
- 📱 完全响应式，支持手机、平板和桌面设备
- 🎨 优雅的动画效果和交互
- 🚀 纯静态网页，无需后端服务器
- 📦 开箱即用，易于定制

## 文件结构

```
个人网页开发/
├── index.html      # 主页面文件
├── style.css       # 样式文件
├── script.js       # 交互脚本
├── avatar.jpg      # 头像图片（需要自己添加）
└── README.md       # 说明文档
```

## 使用方法

### 1. 修改个人信息

打开 `index.html` 文件，修改以下内容：

- **头像**：将你的头像图片命名为 `avatar.jpg` 放在同一目录下
- **姓名**：修改 "你的名字" 为你的真实姓名
- **简介**：修改自我介绍文字
- **技能**：更新技能卡片中的内容
- **项目**：添加或修改你的项目信息
- **联系方式**：更新邮箱、GitHub、LinkedIn 等链接

### 2. 本地预览

直接双击 `index.html` 文件，或者使用本地服务器：

```bash
# 使用 Python 启动本地服务器
python -m http.server 8000

# 或使用 Node.js 的 http-server
npx http-server
```

然后在浏览器中访问 `http://localhost:8000`

## 部署到 GitHub Pages

### 步骤 1：创建 GitHub 仓库

1. 登录 GitHub，创建一个新仓库
2. 仓库名称建议使用：`你的用户名.github.io`（这样可以使用根域名访问）
3. 设置为 Public（公开）

### 步骤 2：上传文件

在项目文件夹中执行以下命令：

```bash
# 初始化 Git 仓库
git init

# 添加所有文件
git add .

# 提交
git commit -m "Initial commit: 个人主页"

# 关联远程仓库（替换为你的仓库地址）
git remote add origin https://github.com/你的用户名/你的用户名.github.io.git

# 推送到 GitHub
git push -u origin main
```

### 步骤 3：启用 GitHub Pages

1. 进入仓库的 Settings（设置）
2. 找到 Pages 选项
3. 在 Source 下选择 `main` 分支
4. 点击 Save（保存）
5. 等待几分钟，你的网站就会发布到 `https://你的用户名.github.io`

## 自定义样式

### 修改配色

打开 `style.css`，在文件开头的 `:root` 部分修改颜色变量：

```css
:root {
    --primary-color: #2563eb;    /* 主题色 */
    --secondary-color: #1e40af;  /* 次要色 */
    --text-color: #1f2937;       /* 文字颜色 */
    /* ... 其他颜色 */
}
```

### 修改渐变背景

在 `.hero` 样式中修改背景渐变：

```css
.hero {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

## 技术栈

- HTML5
- CSS3（Flexbox、Grid、动画）
- JavaScript（原生 JS，无框架依赖）

## 浏览器支持

- Chrome（推荐）
- Firefox
- Safari
- Edge
- 移动端浏览器

## 许可证

MIT License - 你可以自由使用和修改这个模板

## 问题反馈

如果遇到问题或有改进建议，欢迎通过以下方式联系：

- 邮箱：your.email@example.com
- GitHub Issues

---

祝你使用愉快！🎉
