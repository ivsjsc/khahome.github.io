# 🚀 Hướng dẫn Push lên GitHub & Auto-Deploy

## 📋 Bước 1: Chuẩn bị Files

### ✅ Files cần có trong project:
```
KhaHome.com/
├── index.html
├── about.html
├── services.html
├── projects.html
├── design.html
├── contact.html
├── components/
│   ├── header.html
│   └── footer.html
├── css/
│   ├── styles.css
│   ├── responsive.css
│   ├── tailwind.css
│   └── tailwind-output.css (sẽ được tạo khi build)
├── js/
├── public/
│   └── _redirects
├── package.json
├── netlify.toml
├── tailwind.config.js
├── .gitignore
├── README.md
├── DEPLOYMENT.md
└── BUILD.md
```

## 🔧 Bước 2: Git Commands

### 1. Kiểm tra trạng thái:
```bash
git status
```

### 2. Thêm tất cả files:
```bash
git add .
```

### 3. Commit với message:
```bash
git commit -m "Initial commit: KhaHome.com website ready for deployment"
```

### 4. Tạo repository trên GitHub:
- Đăng nhập vào [github.com](https://github.com)
- Click "New repository"
- Tên: `khahome-website`
- Description: `Kha Dock & Home Construction LLC Website`
- Chọn **Public** hoặc **Private**
- **KHÔNG** tick "Initialize with README"
- Click "Create repository"

### 5. Kết nối với GitHub:
```bash
git remote add origin https://github.com/YOUR_USERNAME/khahome-website.git
git branch -M main
git push -u origin main
```

## 🌐 Bước 3: Kết nối với Netlify

### 1. Đăng nhập Netlify:
- Truy cập [netlify.com](https://netlify.com)
- Đăng nhập bằng GitHub account

### 2. Tạo site mới:
- Click "New site from Git"
- Chọn "GitHub"
- Authorize Netlify với GitHub
- Chọn repository `khahome-website`

### 3. Cấu hình Build Settings:
```
Repository: YOUR_USERNAME/khahome-website
Branch: main
Base directory: (để trống)
Build command: npm run build
Publish directory: .
```

### 4. Environment Variables:
```
NODE_VERSION = 18
```

### 5. Click "Deploy site"

## 🔧 Bước 4: Cấu hình Domain

### 1. Thêm Custom Domain:
- Vào Site Settings → Domain Management
- Click "Add custom domain"
- Nhập: `khahome.com`
- Click "Verify"

### 2. Cấu hình DNS:
**Option A: Netlify DNS (Khuyến nghị)**
- Chọn "Use Netlify DNS"
- Cập nhật nameservers tại nhà cung cấp domain:
  ```
  dns1.p01.nsone.net
  dns2.p01.nsone.net
  dns3.p01.nsone.net
  dns4.p01.nsone.net
  ```

**Option B: DNS Records**
- Thêm A records:
  ```
  @ → 75.2.60.5
  @ → 99.83.190.102
  www → khahome.netlify.app
  ```

## ✅ Bước 5: Kiểm tra Deploy

### 1. Build Logs:
- Vào Netlify Dashboard
- Click "Deploys" tab
- Kiểm tra build logs

### 2. Test Website:
- Truy cập `https://khahome.com`
- Test tất cả pages
- Kiểm tra mobile menu
- Test responsive design

### 3. Console Check:
- Mở Developer Tools
- Kiểm tra không có errors
- Không còn Tailwind CDN warnings

## 🔄 Auto-Deploy Setup

### Mỗi khi push code mới:
```bash
git add .
git commit -m "Update: Mô tả thay đổi"
git push origin main
```

### Netlify sẽ tự động:
1. Detect changes
2. Run `npm install`
3. Run `npm run build`
4. Deploy new version
5. Update website

## 🛠️ Troubleshooting

### Build fails:
1. Kiểm tra build logs trong Netlify
2. Đảm bảo `package.json` có đúng scripts
3. Kiểm tra `netlify.toml` configuration

### CSS không load:
1. Kiểm tra file `css/tailwind-output.css` được tạo
2. Đảm bảo build command chạy thành công

### Domain issues:
1. Kiểm tra DNS propagation (24-48h)
2. Verify domain trong Netlify dashboard
3. Đảm bảo SSL certificate được cấp

## 📞 Hỗ trợ

Nếu gặp vấn đề:
1. Kiểm tra Netlify build logs
2. GitHub repository settings
3. DNS configuration
4. Netlify support chat

## 🎉 Kết quả

Sau khi hoàn thành:
- ✅ Website: `https://khahome.com`
- ✅ Auto-deploy từ GitHub
- ✅ SSL certificate miễn phí
- ✅ CDN toàn cầu
- ✅ Build optimization
- ✅ No console warnings

**Chúc bạn deploy thành công! 🚀**
