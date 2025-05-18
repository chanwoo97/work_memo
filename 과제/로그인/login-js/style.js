document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const formData = new FormData(this);
    let output = "";
    output += `출력되는 유저명 : ${formData.get('user_id')} \n`;
    output += `출력되는 패스워드 : ${formData.get('user_password')} \n`;
    output += `출력되는 생년월일 : ${formData.get('date')} \n`;
    document.getElementById('output').textContent = output;
})