function enableEditMode(){
    richTextField.document.designMode = "on";
}

function execCmd(command){
    richTextField.document.execCommand(command, false, null);
}