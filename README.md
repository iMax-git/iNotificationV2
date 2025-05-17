# iNotificationV2

Crée par iMax pour la plateforme ADN's.

Disponible en open source.


Start this resource after or before your es_extended

# CLIENT USAGE:

`` exports.resourceName:Function(arguments, others, ...) ``
```lua
if example_cl == 1 then
        exports.iNotificationV2:UINotification({
            title = "Notification", 
            text = "test",
            color = "100, 255, 0", 
            showTime = 10,
            type = 1
        })
        example_cl = 2;
    elseif example_cl == 2 then
        exports.iNotificationV2:UINotification({
            title = "Notification", 
            text = "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            color = "255, 0, 0", 
            showTime = 7,
            type = 2,
        })
        example_cl = 3;
    elseif example_cl == 3 then
        exports.iNotificationV2:UINotification({
            title = "Notification", 
            text = "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            color = "0, 100, 255", 
            showTime = 5,
            type = 3,
            multipleChoice = {"Accéder", "Partir"}
        })
        example_cl = 1;
    end
```

# SERVER USAGE:
```lua
TriggerClientEvent("iNotification:send",source, {
    type = 1, title = "Hello", text = "It's me mario!",
    showTime = 10
})

TriggerClientEvent("iNotification:send",source, {
    type = 2, title = "Hello", text = "It's me mario 2!",
    showTime = 5
})

TriggerClientEvent("iNotification:send",source, {
    type = 3, title = "Hello", text = "It's me mario 2!",
    showTime = 15, multipleChoice = {"One", "Two"}
})
```

# Premièrement (Côté Client):
    Si vous souhaitez changer les 'ShowNotification': 
    Je prend le fichier "client/functions.lua" ligne 1193 pour exemple:
    J'ai un programme comme ci-dessous
    
```lua
    if not foundPlayers then
        ESX.ShowNotification(_U('players_nearby'))
        return
    end
```


    Je remplace les:

```lua 
ESX.ShowNotification(<Quelque chose>)
```
    Par : 
```lua
        exports.iNotificationV2:UINotification({
            title = "Mon Titre", 
            text = "Ma description.",
            color = "100, 255, 0", 
            showTime = 10,
            type = 1
        })
```
    Ce qui nous donne dans notre exemple:
```lua
    if not foundPlayers then
    exports.iNotificationV2:UINotification({
        title = "", 
        text = _U('players_nearby'),
        color = "100, 255, 0", 
        showTime = 10,
    type = 1
    })
    return
    end
```
## PS: Le nom de la ressource 'iNotificationV2' ne doit pas être changer !

# Deuxièmement(Côté serveur):
    Si vous souhaitez changer les Event 'chatMessage'
    Je prend le fichier "server/commands.lua" ligne 25 pour exemple:
    J'ai un programme comme ci-dessous
```lua
    if x and y and z then

    TriggerClientEvent('esx:teleport', source, {

        x = x,
            y = y,
            z = z
        })
    else
        TriggerClientEvent('chatMessage', source, "SYSTEM", {255, 0, 0}, "Invalid coordinates!")
    end
```
    Je remplace:
```lua
    TriggerClientEvent('chatMessage', source, <Quelque chose>, <Quelque chose>, <Quelque chose>)
```
    Par : 
```lua
    TriggerClientEvent("iNotification:send",source, {
        type = 1, title = "Mon Titre", text = "Ma description !",
        showTime = 10
    })
```
    Ce qui nous donne dans notre exemple:
```lua
    if x and y and z then

    TriggerClientEvent('esx:teleport', source, {

        x = x,
            y = y,
            z = z
        })
    else
        TriggerClientEvent("iNotification:send",source, {
        type = 1, title = "SYSTEM", text = "Invalid coordinates !",
        showTime = 10
        })
    end
```
## Et ceci s'applique sur toutes les ressources .
