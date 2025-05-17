local Config = {
    DefaultTimeToShow = 12, -- default: 12 seconds (this param in seconds)
    DefaultNotificationType = 1
}

UINotification = function(selfs)
    SendNUIMessage({
		action = "notif", 
		title = selfs.title or "null", 
		text = selfs.text or "null", 
		color = selfs.color or "", 
		type = selfs.type or Config.DefaultNotificationType, 
		escape = selfs.multipleChoice or {},
        time = selfs.showTime or Config.DefaultTimeToShow
	})
end

-- Premier type de notification (simple):

-- TriggerClientEvent("iNotification:send", source,{
--     type = 1, title = "Hello", text = "It's me mario!", 
--     showTime = 5, --[[ in seconds ]] color = "255, 0, 0"
-- })

-- Deuxième type de notification (text pré configurer dans le javascript):

-- TriggerClientEvent("iNotification:send", source,{
--     type = 2, title = "Deuxième", text = "It's me mario 2!", 
--     showTime = 5, --[[ in seconds ]] color = "255, 0, 0"
-- })

-- Troisième type de notification (text a configurer via une table avec 2 choix):

-- TriggerClientEvent("iNotification:send", source,{
--     type = 3, title = "Troisième", text = "It's me mario 3!", 
--     showTime = 5, --[[ in seconds ]] color = "100, 150, 0",
--     multipleChoice = {"Accepter", "Refuser"}
-- })

RegisterNetEvent("iNotification:send")
AddEventHandler("iNotification:send", function(set)
    UINotification({
        title = set.title, 
        text = set.text,
        color = set.color, 
        showTime = set.showTime,
        type = set.type,
        multipleChoice = set.multipleChoice
    })
end)

function RegisterKeys(Controls, ControlName, Description, cb)
    RegisterKeyMapping(string.format('inotif-%s', ControlName), Description, "keyboard", Controls)
    RegisterCommand(string.format('inotif-%s', ControlName), function()
        if (cb) then cb() end
    end)
end

local example_cl = 1;
RegisterKeys("E", "testing", "Testing Notification UI", function()
    if example_cl == 1 then
        UINotification({
            title = "Notification", 
            text = "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            color = "100, 255, 0", 
            showTime = 10,
            type = 1
        })
        example_cl = 2;
    elseif example_cl == 2 then
        UINotification({
            title = "Notification", 
            text = "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            color = "255, 0, 0", 
            showTime = 7,
            type = 2,
        })
        example_cl = 3;
    elseif example_cl == 3 then
        UINotification({
            title = "Notification", 
            text = "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            color = "0, 100, 255", 
            showTime = 5,
            type = 3,
            multipleChoice = {"Accéder", "Partir"}
        })
        example_cl = 1;
    end
end)