window.addEventListener('message', (event) => {
    if (event.data.action == "notif") {
        CreateNotification(event.data.title, event.data.text, event.data.color, event.data.type, event.data.escape, event.data.time)
    } 
})

paddingnotification = 42;
paddingdel = 5.5;
heightTimer = 0.3;


CreateNotification = (titre,text,color,type,ESCAPE=null, showTime) => {
    if (type == 3) {
        if (ESCAPE == null || ESCAPE == {}) {
            const notif = addNotification("Internal Error","Escape NOT Defined", "200, 0, 0");
            setTimeout(() => {removeNotification(notif, showTime)}, 1);
        } else {
            const notif = addNotificationAdvancedAnswer(titre,text,color,ESCAPE[0],ESCAPE[1]);
            setTimeout(() => {removeNotification(notif, showTime)}, 1);
        }
    } else if (type == 2) {
        const notif = addNotificationAnswer(titre,text,color);
        setTimeout(() => {removeNotification(notif, showTime)}, 1);
    } else if (type == 1) {
        const notif = addNotification(titre,text,color);
        setTimeout(() => {removeNotification(notif, showTime)}, 1);
    }
}

removeNotification = (notification, timeshow) => {
    const notificationContainer = document.getElementById('notification');
    notification.lastChild.classList.add('slide');

    $('.slide').css("animation", "notification " +timeshow+ "s ease-out forwards");

    setTimeout(()=>{
        notification.classList.remove('spawn')
        notification.classList.add('kill')
    }, timeshow*1000);
    setTimeout(() => {
        notificationContainer.removeChild(notification);
    }, timeshow*1000+400);
}

addNotification = (titre,text,color) => {
    if (color == null || color == "") 
        color="255, 0, 0"

    const notificationContainer = document.getElementById('notification');
    const newNotification = document.createElement('div');
	newNotification.classList.add('notification','spawn');
    const innerNotification = ` <div>\
                                    <p id="1">${titre}</p>\
                                    <p id="2" style = "font-family: Roboto_Leger;">${text}</p>\
                                </div>\                  
                                <div class="time" style="background-color: rgb(${color}); height: ${heightTimer}vh;"></div>`;

	newNotification.innerHTML = innerNotification;
	notificationContainer.appendChild(newNotification);
	return newNotification;
}

addNotificationAnswer = (titre,text,color) => {
    if (color == null || color == "") 
        color ="255, 0, 0"

    const notificationContainer = document.getElementById('notification');
    const newNotification = document.createElement('div');
	newNotification.classList.add('notification','spawn');
    const innerNotification = ` <div>\
                                    <p id="1">${titre}</p>\
                                    <p id="2">${text}</p>\
                                    <p id="3">G pour Accepter | P pour refuser</p>\
                                </div>\                  
                                <div class="time" style="background-color: rgb(${color}); height: ${heightTimer}vh;"></div>`;
	newNotification.innerHTML = innerNotification;
	notificationContainer.appendChild(newNotification);
	return newNotification;
}

addNotificationAdvancedAnswer = (titre,text,color,esc1,esc2) => {
    if (color == null || color == "") {
        color = "255, 0, 0"
    }
    const notificationContainer = document.getElementById('notification');
    const newNotification = document.createElement('div');
	newNotification.classList.add('notification','spawn');
    const innerNotification = ` <div>\
                                    <p id="1">${titre}</p>\
                                    <p id="2">${text}</p>\
                                    <p id="3">G pour ${esc1} | P pour ${esc2}</p>\
                                </div>\                  
                                <div class="time" style="background-color: rgb(${color}); height: ${heightTimer}vh;"></div>`;
	newNotification.innerHTML = innerNotification;
	notificationContainer.appendChild(newNotification);
	return newNotification;
}