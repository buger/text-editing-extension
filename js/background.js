var tasks = store.get('tasks');

if (!tasks)
    tasks = [];

browser.onReady(function(){
});

browser.addMessageListener(function(msg, sender) {
    switch(msg.method) {
    
    }
});

function onMenuClick(data, tab){  
    chrome.tabs.insertCSS(tab.id, { file: "css/facebox.css" });
    chrome.tabs.insertCSS(tab.id, { file: "css/page.css" });

    chrome.tabs.executeScript(tab.id, { file: "js/jquery.min.js" }, function(){
        chrome.tabs.executeScript(tab.id, { file: "js/facebox.js" }, function(){
            chrome.tabs.executeScript(tab.id, { file: "js/content_script.js" },
                function(){            
                    chrome.tabs.executeScript(tab.id, { code: 'showDialog("'+encodeURIComponent(data.selectionText)+'")' });
                });
        });
    });
}

chrome.contextMenus.create({
    title: 'Create text task',
    contexts: ["selection"],
    onclick: onMenuClick
});

chrome.extension.onRequest.addListener(
  function(request, sender, sendResponse) {
      tasks.push(request);

      store.set('tasks', tasks);
  }
);
