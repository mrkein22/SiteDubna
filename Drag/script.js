DragManager.onDragCancel = function(dragObject) {
      dragObject.avatar.rollback();
    };

    DragManager.onDragEnd = function(dragObject, dropElem) {   
    dragObject.elem.style.width = "20px";    
    var div = document.createElement('div'); 
    div.appendChild(dragObject.elem);        
    dropElem.appendChild(div);               
    dragObject.elem.style.position = "";     
    dragObject.elem.style.marginLeft = "10px"; 
    dragObject.elem.style.marginTop = "5px";
    };