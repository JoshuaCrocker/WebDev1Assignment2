(function() {
    let action_button = document.getElementById('send-notification');

    function Notifier(user_options) {

        let options = {
            title: "Notification Agent",
            icon: "http://loremflickr.com/200/200/cat",
            closeTime: 3000 // 0 = don't close
        };

        for (let opt in user_options) {
            options[opt] = user_options[opt];
        }

        let createNotification = (notification_text) => {
            let notification = new Notification(options.title, {
                body: notification_text,
                icon: options.icon
            });

            if (options.closeTime > 0) {
                setTimeout(notification.close.bind(notification), options.closeTime);
            }

            return notification
        };

        this.sendNotification = (notification_text) => {
            /*
                There are three states for Notification.permission;
                    default: The user hasn't been asked if they want to have notifications.
                    granted: The user has said they're happy to have notifications.
                    denied: The user isn't happy to have notifications.
            */
            if (Notification.permission === "granted") {
                return createNotification(notification_text);
            } else {
                // Request user permission
                Notification.requestPermission((answer) => {
                    if (answer === "granted") {
                        return createNotification(notification_text);
                    }
                })
            }
        };
    }

    // Check the current browser supports notifications
    if ("Notification" in window) {
        let NotifierAgent = new Notifier();

        action_button.onclick = () => {
            NotifierAgent.sendNotification("Hello Notifications");
        }
    } else {
        // Show error
        alert("No");
    }

})();

 // SOURCE: https://developer.mozilla.org/en-US/docs/Web/API/Notifications_API/Using_the_Notifications_API