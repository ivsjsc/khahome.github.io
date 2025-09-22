# 🚀 Hướng dẫn Deploy Website lên Netlify

## 📋 Chuẩn bị trước khi deploy

### 1. Chuẩn bị files
Đảm bảo bạn có các files sau trong thư mục project:
- ✅ `index.html`
- ✅ `about.html`, `services.html`, `projects.html`, `design.html`, `contact.html`
- ✅ `components/header.html`, `components/footer.html`
- ✅ `css/styles.css`, `css/responsive.css`
- ✅ `js/` folder với các JavaScript files
- ✅ `netlify.toml` (đã tạo)
- ✅ `public/_redirects` (đã tạo)
- ✅ `.gitignore` (đã tạo)

### 2. Cập nhật URLs trong code
Trước khi deploy, cần cập nhật một số URLs:

#### Trong các file HTML, thay đổi:
```html
<!-- Từ -->
loadComponent('header-placeholder', '/components/header.html')
<!-- Thành -->
loadComponent('header-placeholder', './components/header.html')
```

## 🌐 Deploy lên Netlify

### Phương pháp 1: Deploy qua GitHub (Khuyến nghị)

#### Bước 1: Tạo GitHub Repository
1. Tạo repository mới trên GitHub
2. Upload toàn bộ files website vào repository
3. Commit và push code

#### Bước 2: Kết nối với Netlify
1. Đăng nhập vào [Netlify](https://netlify.com)
2. Click "New site from Git"
3. Chọn GitHub và chọn repository của bạn
4. Cấu hình build settings:
   - **Build command**: (để trống)
   - **Publish directory**: `.` (root directory)
5. Click "Deploy site"

### Phương pháp 2: Deploy trực tiếp (Drag & Drop)

#### Bước 1: Chuẩn bị files
1. Nén toàn bộ thư mục website thành file ZIP
2. Đảm bảo file `netlify.toml` có trong thư mục gốc

#### Bước 2: Upload lên Netlify
1. Đăng nhập vào [Netlify](https://netlify.com)
2. Kéo thả file ZIP vào vùng "Deploy manually"
3. Netlify sẽ tự động deploy

## 🔧 Cấu hình Domain KhaHome.com

### Bước 1: Thêm Custom Domain
1. Vào Netlify Dashboard
2. Chọn site của bạn
3. Vào **Site settings** → **Domain management**
4. Click **Add custom domain**
5. Nhập `khahome.com`
6. Click **Verify**

### Bước 2: Cấu hình DNS
Cần cấu hình DNS records tại nhà cung cấp domain:

#### Option 1: Sử dụng Netlify DNS (Khuyến nghị)
1. Trong Netlify, chọn **Use Netlify DNS**
2. Cập nhật nameservers tại nhà cung cấp domain:
   ```
   dns1.p01.nsone.net
   dns2.p01.nsone.net
   dns3.p01.nsone.net
   dns4.p01.nsone.net
   ```

#### Option 2: Sử dụng DNS hiện tại
Thêm các DNS records sau:
```
Type: A
Name: @
Value: 75.2.60.5

Type: CNAME  
Name: www
Value: khahome.netlify.app

Type: A
Name: @
Value: 99.83.190.102
```

### Bước 3: SSL Certificate
1. Netlify tự động cung cấp SSL certificate miễn phí
2. Vào **Site settings** → **SSL/TLS**
3. Đảm bảo "Let's Encrypt" đã được kích hoạt

## ⚙️ Tối ưu hóa sau khi deploy

### 1. Cấu hình Redirects
File `netlify.toml` đã được cấu hình sẵn redirects:
```toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### 2. Headers bảo mật
Các headers bảo mật đã được cấu hình:
- X-Frame-Options
- X-XSS-Protection  
- X-Content-Type-Options
- Content-Security-Policy

### 3. Caching
- Static files (CSS, JS): Cache 1 năm
- HTML files: No cache

## 🔍 Kiểm tra sau khi deploy

### 1. Kiểm tra website
- ✅ Truy cập `https://khahome.com`
- ✅ Kiểm tra tất cả pages hoạt động
- ✅ Test responsive trên mobile
- ✅ Kiểm tra mobile menu
- ✅ Test các animations

### 2. Kiểm tra performance
- Sử dụng [PageSpeed Insights](https://pagespeed.web.dev/)
- Kiểm tra Core Web Vitals
- Tối ưu images nếu cần

### 3. SEO
- ✅ Meta tags đã được cấu hình
- ✅ Open Graph tags
- ✅ Structured data (có thể thêm sau)

## 🛠️ Troubleshooting

### Lỗi thường gặp:

#### 1. 404 errors
- Kiểm tra file `_redirects` có trong thư mục `public/`
- Đảm bảo `netlify.toml` có cấu hình redirects

#### 2. CSS/JS không load
- Kiểm tra đường dẫn trong HTML
- Đảm bảo files có trong đúng thư mục

#### 3. Domain không hoạt động
- Kiểm tra DNS propagation (có thể mất 24-48h)
- Verify domain trong Netlify dashboard

#### 4. SSL issues
- Đợi Netlify cấp SSL certificate (có thể mất vài phút)
- Kiểm tra trong SSL/TLS settings

## 📞 Hỗ trợ

Nếu gặp vấn đề, bạn có thể:
1. Kiểm tra Netlify logs trong dashboard
2. Sử dụng Netlify support
3. Kiểm tra DNS propagation tại [whatsmydns.net](https://www.whatsmydns.net/)

## 🎉 Hoàn thành!

Sau khi deploy thành công, website của bạn sẽ có:
- ✅ Domain: `https://khahome.com`
- ✅ SSL certificate miễn phí
- ✅ CDN toàn cầu
- ✅ Automatic deployments từ Git
- ✅ Form handling (nếu cần)
- ✅ Analytics integration (nếu cần)

Chúc bạn deploy thành công! 🚀
