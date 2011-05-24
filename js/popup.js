browser.addMessageListener(function(msg) {
    switch (msg.method) {
    }
});

browser.onReady(function(){

});


var bg = chrome.extension.getBackgroundPage();

$(function(){    
    bg.tasks.forEach(function(task){
        var html = [
            "<li style='margin-bottom: 10px'>",
                "<h3 style='font-weight: bold; white-space:nowrap; overfow: hidden; width: 300px;'>"+task.text+"</h3>",
                "<span style='color:gray'>Type:"+task.type+"</span>",
            "</li>"
        ].join('');
    
        $('#tasks').append(html);
    });
});


