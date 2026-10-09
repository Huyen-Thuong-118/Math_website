// TODO: wire real data — đọc từ model ContactInfo (prisma/schema.prisma) khi có query.

export const CONTACT = {
  phone: "0988 xxx xxx",
  zaloUrl: "#",
  facebookName: "BQD Math - Luyện thi THPTQG",
  facebookUrl: "#",
  address: "Tầng 3, Tòa nhà Tri Thức, Số 123 Đường Cầu Giấy, Quận Cầu Giấy, Hà Nội",
  hours: [
    { days: "Thứ 2 – Thứ 6", time: "08:00 – 21:30" },
    { days: "Thứ 7 – CN", time: "07:30 – 20:00" },
  ],
};

export const SUPPORT_POLICIES = [
  {
    title: "Hỗ trợ học sinh ở xa / ngoại tỉnh",
    body: "Học sinh ở xa có thể tham gia lớp trực tuyến, làm bài thi thử và xem lời giải video trên hệ thống; giáo viên hỗ trợ giải đáp qua Zalo.",
  },
  {
    title: "Chính sách cam kết tiến bộ",
    body: "Trung tâm cam kết lộ trình ôn tập rõ ràng, theo dõi điểm từng đợt thi thử và điều chỉnh kế hoạch khi tiến độ chưa đạt mục tiêu.",
  },
  {
    title: "Hướng dẫn đăng ký lớp (ví dụ lớp VDC 9+)",
    body: "Liên hệ hotline/Zalo để được kiểm tra đầu vào, tư vấn lớp phù hợp, sau đó giáo viên duyệt và xếp lớp cho tài khoản của bạn.",
  },
];
