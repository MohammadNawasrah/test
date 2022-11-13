class Alert{
    body;
    modalDiv;
    modalDialog;
    modalContent;
    modalHeader;
    modelTitle;
    buttonCloseAlert;
    modalBody;
    modalFooter;
    buttonYes;
    buttonNo;
    createAlert(){
        this.body=document.getElementsByTagName("body")[0];
        
        this.modalDiv=document.createElement("div");
        this.modalDiv.setAttribute("id","ex");
        this.modalDiv.setAttribute("class","modal");
        this.modalDiv.setAttribute("tabindex","-1");

        this.modalDialog=document.createElement("div");
        this.modalDialog.setAttribute("class","modal-dialog");
        
        
        this.modalContent=document.createElement("div");
        this.modalContent.setAttribute("class","modal-content");

        this.modalHeader=document.createElement("div");
        this.modalHeader.setAttribute("class","modal-header");

        var Title=document.createTextNode("modal title");
        this.modelTitle=document.createElement("div");
        this.modelTitle.setAttribute("class","modal-title h6");
        this.modelTitle.appendChild(Title);

        this.buttonCloseAlert=document.createElement("button");
        this.buttonCloseAlert.setAttribute("class","btn-close bg-danger");
        this.buttonCloseAlert.setAttribute("data-bs-dismiss","modal");


        
        var modalBodyText=document.createTextNode("hello");
        this.modalBody=document.createElement("div");
        this.modalBody.setAttribute("class","modal-body m-5");
        this.modalBody.appendChild(modalBodyText);

        this.modalFooter=document.createElement("div");
        this.modalBody.setAttribute("class","modal-footer");

        var yes=document.createTextNode("yes");
        this.buttonYes=document.createElement("button");
        this.buttonYes.setAttribute("class","btn btn-secondary");
        this.buttonYes.setAttribute("data-bs-dismiss","modal");
        this.buttonYes.appendChild(yes);
        
        
        var no=document.createTextNode("no");
        this.buttonNo=document.createElement("button");
        this.buttonNo.setAttribute("class","btn btn-primary");
        this.buttonNo.appendChild(no);
        
        this.modalFooter.appendChild(this.buttonYes);
        this.modalFooter.appendChild(this.buttonNo);



        this.modalHeader.appendChild(this.modelTitle);
        this.modalHeader.appendChild(this.buttonCloseAlert);

        this.modalContent.appendChild(this.modalHeader);
        this.modalContent.appendChild(this.modalBody);

        
        this.modalContent.appendChild(this.modalFooter);

        this.modalDialog.appendChild(this.modalContent);

        this.modalDiv.appendChild(this.modalDialog);
        
        this.body.appendChild(this.modalDiv);

    }
}
var modal =new Alert();
modal.createAlert();