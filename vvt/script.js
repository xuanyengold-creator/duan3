document.addEventListener("DOMContentLoaded", () => {
    const timelineItems = document.querySelectorAll(".timeline-reveal");

    // Hàm kiểm tra và kích hoạt hiệu ứng hiển thị khi cuộn trang
    const revealTimeline = () => {
        const triggerBottom = (window.innerHeight / 5) * 4.2;

        timelineItems.forEach((item) => {
            const itemTop = item.getBoundingClientRect().top;

            // Nếu phần tử cuộn đến tầm nhìn của người dùng, thêm class 'active'
            if (itemTop < triggerBottom) {
                item.classList.add("active");
            } else {
                item.classList.remove("active"); // Tùy chọn: ẩn lại khi cuộn ngược lên
            }
        });
    };

    // Chạy kiểm tra ngay khi load xong trang
    revealTimeline();

    // Lắng nghe sự kiện cuộn chuột của người dùng
    window.addEventListener("scroll", revealTimeline);
});
