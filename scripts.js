// Tải từ vựng từ tệp JSON
fetch('vocabulary.json')  // Đảm bảo tệp 'vocabulary.json' nằm cùng thư mục với HTML hoặc có đường dẫn đúng
    .then(response => response.json())
    .then(data => {
        const tableBody = document.getElementById('vocabulary-table');
        const flashcardsContainer = document.getElementById('flashcards');

        data.forEach(item => {
            // Thêm dòng vào bảng từ điển
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.han_viet}</td>
                <td>${item.chinese}</td>
                <td>${item.vietnamese}</td>
            `;
            tableBody.appendChild(row);

            // Thêm flashcard vào container
            const flashcard = document.createElement('div');
            flashcard.classList.add('flashcard');
            flashcard.innerHTML = `
                <div class="front">${item.han_viet}</div>
                <div class="back">${item.chinese} - ${item.vietnamese}</div>
            `;
            flashcardsContainer.appendChild(flashcard);
        });
    })
    .catch(error => console.error('Error loading vocabulary:', error));

let correctRate = 0;

function showAnswer() {
    const randomAnswers = ['家庭', '工作', '学校', '朋友', '公司'];
    const correctAnswer = randomAnswers[Math.floor(Math.random() * randomAnswers.length)];

    alert('Câu trả lời là: ' + correctAnswer);
    updateCorrectRate();
}

function updateCorrectRate() {
    correctRate += 20;
    if (correctRate > 100) correctRate = 100;
    document.getElementById("correct-rate").textContent = correctRate + '%';
}
