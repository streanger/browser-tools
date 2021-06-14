
function evalText(tool_id) {
    var text = document.getElementById(tool_id).value;
    if (tool_id == '01_tool_text') {
        // do something with first tool
        setText(tool_id, text.toUpperCase());
    }
    
    else if (tool_id == '02_tool_text') {
        // do something with first tool
        setText(tool_id, text.toLowerCase());
    }
    
    else if (tool_id == '03_tool_text') {
        // do something with first tool
        setText(tool_id, text.repeat(2));
    }
    
    else {
        // do something with another tool
    }
}

function setText(tool_id, text) {
    var text = document.getElementById(tool_id).value = text;
}

function getText(tool_id) {
    var text = document.getElementById(tool_id).value;
}

function init(){
    // pass
}
