document.addEventListener('DOMContentLoaded', function () {
    const messageForm = document.getElementById('messageForm');
    const messageInput = document.getElementById('messageInput');
    const messagesContainer = document.getElementById('messages');
  
    // 从localStorage加载以前保存的留言
    const savedMessages = JSON.parse(localStorage.getItem('messages')) || [];
    savedMessages.forEach(message => {
      displayMessage(message);
    });
    messageForm.addEventListener('keydown',(e)=>{
      if (e.code === 'Enter') {
        const messageText = messageInput.value.trim();
        if (messageText === '') {
          alert('请输入留言内容');
          return;
        }
    
        const message = {
          text: messageText,
          timestamp: new Date().toLocaleString()
        };
    
        // 显示新留言并将其保存到localStorage
        displayMessage(message);
        saveMessage(message);
    
        // 清空输入框
        messageInput.value = '';
    }
    })
    // 当提交表单时
    messageForm.addEventListener('submit', function (event) {
      event.preventDefault();
  
      const messageText = messageInput.value.trim();
      if (messageText === '') {
        alert('请输入留言内容');
        return;
      }
  
      const message = {
        text: messageText,
        timestamp: new Date().toLocaleString()
      };
  
      // 显示新留言并将其保存到localStorage
      displayMessage(message);
      saveMessage(message);
  
      // 清空输入框
      messageInput.value = '';
    });
  
    // 显示留言
function displayMessage(message) {
    const messageList = document.getElementById('messageItems');
    const messageItem = document.createElement('li');
    messageItem.classList.add('boardtext')
    messageItem.innerHTML = `
      <span>${message.text}</span>
      <span>${message.timestamp}</span>
    `;
    messageItem.addEventListener('click', function() {
      if (confirm('确定要删除这条留言吗？')) {
        messageItem.remove();
        // 从 localStorage 中移除对应的留言
        removeMessage(message);
      }
    });
    messageList.appendChild(messageItem);

  }
  
    // 将留言保存到localStorage
    function saveMessage(message) {
      const savedMessages = JSON.parse(localStorage.getItem('messages')) || [];
      savedMessages.push(message);
      localStorage.setItem('messages', JSON.stringify(savedMessages));
    }
    // 从 localStorage 中移除留言
  function removeMessage(message) {
    const savedMessages = JSON.parse(localStorage.getItem('messages')) || [];
    const updatedMessages = savedMessages.filter(msg => msg.text !== message.text);
    localStorage.setItem('messages', JSON.stringify(updatedMessages));
  }
  });

  
  