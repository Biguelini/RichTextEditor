var pressedCtrl = false;
function enableEditMode(){
    richTextField.document.designMode = "on";
}
function execCmd(command){
    richTextField.document.execCommand(command, false, null);
}
function createLink(){
    var url = prompt('Enter a URL:', 'http://');
    var selection = richTextField.document.getSelection();
    richTextField.document.execCommand('createLink', false, url);
    selection.anchorNode.parentElement.target = '_blank';
}