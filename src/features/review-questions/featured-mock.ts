// TODO: wire real data — toàn bộ nội dung "Câu hỏi đặc trưng" hiện là dữ liệu mẫu,
// chưa có model/API phía backend.

export type FeaturedTopic = {
  id: string;
  group: string;
  title: string;
  summary: string;
  questionCount: number;
  level: string;
  hot: boolean;
};

export const FEATURED_STATS = [
  { value: "120+", label: "Dạng bài có lời giải" },
  { value: "30+", label: "Video phân tích bẫy" },
  { value: "98.5%", label: "Tỷ lệ trúng dạng 2024" },
];

export const FEATURED_FILTERS = ["Tất cả dạng", "Hàm số & Cực trị", "Mũ - Logarit", "Tích phân & Diện tích", "Số phức", "Hình học Oxyz"];

export const FEATURED_TOPICS: FeaturedTopic[] = [
  {
    id: "d01",
    group: "Dạng 01 · Cực trị hàm hợp",
    title: "Kỹ thuật xử lý đồ thị và ghép trục tiếp",
    summary: "Giải quyết bài toán cực trị hàm hợp f(u(x)) bằng phương pháp ghép trục, tiết kiệm 70% thời gian.",
    questionCount: 15,
    level: "Cấp độ 8.0 – 9.6+",
    hot: true,
  },
  {
    id: "d02",
    group: "Dạng 05 · Mũ - Logarit vận dụng cao",
    title: "Có tập tham số m kết hợp khảo sát đồ thị f(x)",
    summary: "Nhận diện biểu thức chứa f(x) + g(x) để chọn hướng biến đổi nhanh gọn.",
    questionCount: 15,
    level: "Cấp độ 9+",
    hot: true,
  },
  {
    id: "d03",
    group: "Dạng 03 · Tích phân hàm ẩn",
    title: "Đạo hàm biểu thức tích và tích phân từng phần ngược",
    summary: "Nhận dạng biểu thức f'(x)·g(x) + f(x)·g'(x) để đưa về đạo hàm của tích.",
    questionCount: 20,
    level: "Cấp độ 8.4 – 9.2",
    hot: false,
  },
];

export const CASIO_TIPS = [
  {
    title: "Mẹo 1: Kỹ thuật CALC 100 và 0.01 giải nhanh phương trình Logarit chứa tham số",
    steps: ["Gán giá trị m = 100 hoặc 1000 vào phương trình chứa tham số.", "Dùng SOLVE để tìm nghiệm gần đúng rồi đối chiếu đáp án."],
  },
  {
    title: "Mẹo 2: Nhận diện nhanh cực trị hàm trị tuyệt đối y = |f(x) + m|",
    steps: ["Đếm điểm cực trị của f(x), cộng thêm số giao điểm với trục Ox."],
  },
  {
    title: "Mẹo 3: Tránh bẫy nghiệm kép khi tính số điểm cực trị từ đồ thị đạo hàm f'(x)",
    steps: ["Điểm đạo hàm chạm trục nhưng không đổi dấu thì không phải cực trị."],
  },
];
