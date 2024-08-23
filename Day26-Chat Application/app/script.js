const socket = new WebSocket("ws://localhost:3000")

socket.addEventListener('open', () => {
    console.log('WebSocket connection established.');

})
socket.addEventListener('close', (error) => {
    console.error('WebSocket error:', error);

})
const btn1 = document.getElementById("btn1")
    .addEventListener('click', () => {
        const text = document.getElementById('text')
        const admin1 = document.getElementById('admin1')
        const admin = document.getElementById('admin')

        if (text.value == 'Admin') {
            socket.send(text.value)
            text.value = '';

            admin.style.display = 'none'
            admin1.style.display = 'block'


        } else {
            if (text.value != 'Admin') {
                const error = document.getElementById('error')
                error.textContent = 'Please Type Admin to Continue'
                error.style.paddingTop = '20px'
                text.value = ''
            }


        }
    })

const text1 = document.getElementById('text1')
const ul = document.getElementById('ul')
const btn2 = document.getElementById('btn2').addEventListener('click', () => {
    if (text1.value) {
        socket.send(text1.value)
        const li = document.createElement('li');
        ul.appendChild(li);
        li.style.listStyle = 'none'
        li.textContent = text1.value;
        text1.value = '';
    }
})
