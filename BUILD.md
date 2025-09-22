# 🔧 Hướng dẫn Build Website

## 🚀 Build cho Production

### Bước 1: Cài đặt dependencies
```bash
npm install
```

### Bước 2: Build Tailwind CSS
```bash
npm run build
```

### Bước 3: Test local
```bash
npm start
```

## 📁 Files được tạo sau khi build:
- `css/tailwind-output.css` - File CSS đã được minify và tối ưu
- `node_modules/` - Dependencies (không cần upload)

## 🌐 Deploy lên Netlify

### Phương pháp 1: Drag & Drop
1. **Build CSS**: `npm run build`
2. **Nén files** (không bao gồm `node_modules/`)
3. **Upload ZIP** lên Netlify

### Phương pháp 2: GitHub + Auto-deploy
1. **Push code** lên GitHub
2. **Kết nối** với Netlify
3. **Auto-build** khi có thay đổi

## ⚙️ Cấu hình Netlify Build
```toml
[build]
  publish = "."
  command = "npm run build"

[build.environment]
  NODE_VERSION = "18"
```

## 🔍 Troubleshooting

### Lỗi build:
```bash
# Xóa node_modules và reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### CSS không load:
- Kiểm tra file `css/tailwind-output.css` có tồn tại
- Đảm bảo đường dẫn trong HTML đúng: `css/tailwind-output.css`

### Mobile menu không hoạt động:
- Kiểm tra JavaScript console
- Đảm bảo components được load đúng path

## 📱 Test trên mobile:
1. Mở Developer Tools
2. Toggle device toolbar
3. Test mobile menu
4. Kiểm tra responsive design
