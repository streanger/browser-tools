
function evalText(tool_id) {
    var text = document.getElementById(tool_id).value;
    if (tool_id == '01_tool_text') {
        // do something with first tool
        setText(tool_id, text.toUpperCase());
    }
    
    else if (tool_id == '02_tool_text') {
        // do something with second tool
        setText(tool_id, text.toLowerCase());
    }
    
    else if (tool_id == '03_tool_text') {
        // do something with third tool
        setText(tool_id, text.repeat(2));
    }
    
    else if (tool_id == '04_tool_text') {
        // do something with fourth tool
        var result_widget = document.getElementById("04_results");
        var words_arr = text.split(/\s+/);      // add other separators or replace non alpha characters with space
        words_arr = words_arr.map(trimStrNonAlpha);
        var words_set = new Set(words_arr);
        var words_arr = Array.from(words_set)
        var words_arr = words_arr.filter(function (el) {
          return el != "";
        });
        console.log(words_arr)
        var number_of_words = words_arr.length
        result_widget.textContent = "results: " + number_of_words;
    }
    
    else {
        // do something with another tool
    }
}

function trimStrNonAlpha(s) {
    // add non alpha characters (for now only white characters are stripped)
    return s.trim();
    
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
