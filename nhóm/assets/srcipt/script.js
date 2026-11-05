// Bộ dữ liệu nhiệm vụ riêng biệt cho từng nhân vật
const questData = {
    "1": {
        status: "11A11",
        title: "Đỗ Ngân Anh",
        objectives: [
            { text: "Thiết kế elements", class: "pending" },
            { text: "Kiếm duyệt thiết kế", class: "pending" }
        ],
    
    },
    "2": {
        status: "11A11",
        title: "Lê Gia Hân",
        objectives: [
            { text: "Thiết kế elements", class: "pending" },
            { text: "Hỗ trợ nội dung", class: "pending" },
        ],
    },
    "3": {
        status: "11A11",
        title: "Phan Nguyễn Thiên AN",
        objectives: [
            { text: "Nội dung chính", class: "pending" },
            { text: "Hỗ trợ thiết kế nhân vật", class: "pending" }
        ],
    },
    "4": {
        status: "11A11",
        title: "Nguyễn Trung Quân",
        objectives: [
            { text: "Thiết kế nhân vật", class: "pending" },
        ],

    },
    "5": {
        status: "11A11",
        title: "Lê Thị Thanh Tuyền",
        objectives: [
            { text: "Thiết kế bản đồ", class: "pending" },
        ],
    },
    "6": {
        status: "11A11",
        title: "Nguyễn Khánh Nam",
        objectives: [
            { text: "Hỗ trợ thiết kế", class: "pending" },
            { text: "Hỗ trợ lập trình", class: "pending" },
              { text: "Hỗ trợ nội dung", class: "pending" }
        ],
    },
    "7": {
        status: "11A11",
        title: "Nguyễn Hoàng Xuân Yến",
        objectives: [
            { text: "Lập trình", class: "pending" }
        ],

    }
};

// DOM Elements
const gridItems = document.querySelectorAll('.grid-item');
const previewImg = document.getElementById('preview-img');
const questStatus = document.getElementById('quest-status');
const questTitle = document.getElementById('quest-title');
const questDesc = document.getElementById('quest-desc');
const questList = document.getElementById('quest-list');
const questReward = document.getElementById('quest-reward');

// Hàm cập nhật Quest Log dựa trên ID nhân vật
function updateQuestLog(id) {
    const currentQuest = questData[id];
    if (!currentQuest) return;

    // Cập nhật text đơn giản
    questStatus.textContent = currentQuest.status;
    questTitle.textContent = currentQuest.title;
    questDesc.textContent = currentQuest.desc;
    questReward.textContent = currentQuest.reward;

    // Cập nhật danh sách mục tiêu (Objectives)
    questList.innerHTML = ""; // Xóa danh sách cũ đi
    currentQuest.objectives.forEach(obj => {
        const li = document.createElement('li');
        li.className = obj.class;
        li.textContent = obj.text;
        questList.appendChild(li);
    });
}

// Bắt sự kiện click
gridItems.forEach(item => {
    item.addEventListener('click', () => {
        // Đổi trạng thái hiển thị viền chọn ở cột trái
        document.querySelector('.grid-item.active')?.classList.remove('active');
        item.classList.add('active');

        // Lấy ID nhân vật của ô được click
        const charId = item.getAttribute('data-id');

        // 1. Cập nhật mô hình nhân vật ở cột giữa
        const newImgSrc = item.querySelector('img').getAttribute('src');
        previewImg.setAttribute('src', newImgSrc);

        // 2. Cập nhật nội dung nhiệm vụ tương ứng ở cột phải
        updateQuestLog(charId);
    });
});
