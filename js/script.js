var showingSouceCode=false;
var isInEditMode = true;
function enableEditMode(){
    richTextField.document.designMode = "on";
}

function execCmd(command){
    richTextField.document.execCommand(command, false, null);
}
function execCommandWithArg(command, arg){
    richTextField.document.execCommand(command, false, arg);
}

function toggleSouerce(){
    if(showingSouceCode){
        richTextField.document.getElementByTagName('body')[0].innerHTML = richTextField.document.getElementByTagName('body')[0].textContent;
        showingSouceCode=false;
    } else{
        richTextField.document.getElementByTagName('body')[0].textContent = richTextField.document.getElementByTagName('body')[0].innerHTML;
        showingSouceCode=true;
    }
}

function toggleEdit(){
    if(isInEditMode){
        isInEditMode=false;
        richTextField.document.designMode = "off";
    } else{
        isInEditMode=true;
        richTextField.document.designMode = "on";
    }
}

function createLink(){
    var url = prompt('Enter a URL:', 'http://');
    var selection = richTextField.document.getSelection();
    richTextField.document.execCommand('createLink', false, url);
    selection.anchorNode.parentElement.target = '_blank';
}
