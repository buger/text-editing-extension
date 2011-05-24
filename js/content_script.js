$.facebox.settings.closeImage = chrome.extension.getURL('/facebox/closelabel.png');
$.facebox.settings.loadingImage = chrome.extension.getURL('/facebox/loading.gif');

function showDialog(text){    
    var text = decodeURIComponent(text);

    var html = [
        "<h1>Create task</h1>",
        "<textarea name='text' style='width: 300px; height: 150px;'>"+text+"</textarea>",
        "<br/>",
        "<br/>",
        "<label><input type='radio' name='type' value='fix' checked> Fix typos</label>",
        "<label><input type='radio' name='type' value='shorten'> Shorten text</label>",
        "<label><input type='radio' name='type' value='other'> Other</label>",
        "<br/>",
        "<br/>",
        "<textarea placeholder='Additional notes' name='notes' style='width: 300px; height: 50px;'></textarea>",
        "<br/>",
        "<br/>",
        "<input type='button' value='Create Task' />"
    ].join('');

    var form = $('<form/>').html(html);

    $.facebox(form);

    var form = $("#facebox form");

    form.find("input[type='button']").live('click', function(){
        var type = form.find("input[type='radio']:checked").val();
        var text = form.find("textarea[name='text']").val();
        var note = form.find("textarea[name='note']").val();        

        chrome.extension.sendRequest({ method:"add_task", text: text, type:type, note:note });

        $.facebox.close();
    });
}

