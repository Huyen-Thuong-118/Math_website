# BQD Math — Nền Tảng Ôn Luyện & Thi Thử Toán THPTQG
## Hướng Dẫn Tích Hợp & Cấu Trúc Mã Nguồn Frontend

Toàn bộ hệ thống frontend cho **BQD Math** được xây dựng trên nền tảng HTML5 hiện đại, tiện ích Tailwind CSS, hệ icon Lucide/SVG và font chữ sans-serif hình học rõ nét tối ưu cho việc hiển thị công thức toán học.

---

### 1. Kiến trúc tổng thể & Thư viện phụ thuộc
Nhúng các thư viện sau vào thẻ `<head>` của dự án web:
```html
<!-- Tailwind CSS CDN -->
<script src="https://cdn.tailwindcss.com"></script>

<!-- Font Comfortaa / Plus Jakarta Sans / Inter -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Comfortaa:wght@600;700&display=swap" rel="stylesheet">

<!-- Tailwind Config màu sắc BQD Math -->
<script>
  tailwind.config = {
    theme: {
      extend: {
        colors: {
          brand: {
            primary: '#0B2545',
            secondary: '#134074',
            accent: '#0077B6',
            light: '#EEF4F8',
            surface: '#F8FAFC',
          }
        },
        fontFamily: {
          sans: ['"Plus Jakarta Sans"', 'sans-serif'],
          logo: ['Comfortaa', 'sans-serif']
        }
      }
    }
  }
</script>
```

---

### 2. Danh mục màn hình chính trên hệ thống:
1. **`lop-hoc.html` (`{{DATA:SCREEN:SCREEN_20}}`)**:
   - Quản lý danh sách lớp học của học viên.
   - Thư viện tài nguyên định dạng Playlist/Folders dạng YouTube gồm 2 phân loại: **Câu hỏi ôn tập theo chuyên đề** và **Đề thi thử thực chiến của lớp**.
   - Thống kê tỷ lệ hoàn thành, điểm trung bình lớp và mục tiêu 9+.

2. **`phong-thi-thu.html` (`{{DATA:SCREEN:SCREEN_10}}`)**:
   - Danh sách và bộ lọc toàn bộ đề thi thử THPTQG (Bộ GD&ĐT, Sở GD, Chuyên KHTN, VDC 9+, Mini Test).
   - Banner đề thi tiêu biểu đặc biệt đợt 1 bấm giờ 90 phút.
   - Trạng thái phòng thi trực tiếp, số lượt đã làm, phổ điểm thời gian thực.

3. **`phong-lam-bai.html` (`{{DATA:SCREEN:SCREEN_5}}`)**:
   - Giao diện phòng thi trực tuyến chia đôi màn hình (Split-View 50:50).
   - **Bên trái**: Trình xem đề thi PDF gốc tích hợp bộ công cụ phóng to, thu nhỏ, vừa khung, full màn hình.
   - **Bên phải**: Phiếu trả lời trắc nghiệm chuẩn Bộ GD&ĐT 2025 gồm:
     - **Phần I**: 12 câu trắc nghiệm 4 lựa chọn (A, B, C, D).
     - **Phần II**: 4 câu hỏi Đúng/Sai liên chùm kiến thức (chia làm 2 hàng gọn gàng: Câu 1,2 và Câu 3,4).
     - **Phần III**: 6 câu hỏi trả lời ngắn dạng lưới tô OMR quang học chuẩn (gồm 3 hàng: Câu 1,2 - Câu 3,4 - Câu 5,6; mỗi câu chuẩn 4 cột với hàng dấu âm `-`, hàng dấu phẩy `,` và 10 hàng số `0-9`).
   - **Header cố định**: Tối giản gồm thanh tiến độ làm bài trực quan (`22/34 câu`), đồng hồ đếm ngược kỹ thuật số và nút Nộp bài thi.

4. **Các trang vệ tinh**:
   - `tai-lieu.html` (`{{DATA:SCREEN:SCREEN_14}}`): Thư viện PDF chuyên đề & watermark học viên.
   - `cau-hoi-dac-trung.html` (`{{DATA:SCREEN:SCREEN_16}}`): 50 dạng toán bứt phá điểm 9+.
   - `lien-he.html` (`{{DATA:SCREEN:SCREEN_12}}`): Thông tin hỗ trợ học sinh, hotline Zalo và modal chỉ đường.
