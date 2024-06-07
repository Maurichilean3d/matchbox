document.querySelector('.chat-form button').addEventListener('click', function() {
    var textarea = document.querySelector('.chat-form textarea');
    if (textarea.value.trim() != "") {
        var msg = document.createElement('div');
        msg.className = 'chat bot';
        msg.innerHTML = `<div class="user-photo"><img src="bot.png" alt="Bot"></div><p class="chat-message">${textarea.value}</p>`;
        document.querySelector('.chatlogs').appendChild(msg);
        textarea.value = "";
        
        // Respuesta automática del bot
        setTimeout(function() {
            var msgBot = document.createElement('div');
            msgBot.className = 'chat bot';
            msgBot.innerHTML = `<div class="user-photo"><img src="bot.png" alt="Bot"></div><p class="chat-message">¡Interesante! ¿Sabías que Matchbox fue creado en 1953 y es famoso por sus modelos a escala de coches?</p>`;
            document.querySelector('.chatlogs').appendChild(msgBot);
        }, 1000);
    }
});
