class EncrypterView {
    header;
    body;
    footer;
    htmlElement;
    main;
    type;

    constructor(main, object) { // Maakt een article met een header, body en footer
        this.htmlElement = document.createElement("article");
        this.htmlElement.classList.add("view");
        this.main = main;
        this.type = "ENCRYPT"; // maakt een type "ENCRYPT"
        this.main.app.renderer.render(this.htmlElement, this.main.htmlElement);
        this.header = new Header(this, "Encrypt");
        this.body = new Body(this, object); 
        this.footer = new Footer(this , "Decrypt");
    }

    getDataFromBody(){
        this.main.cipher(this.body.text, this.type);
    }

    changeBody(encryptedText){
        this.body.changeBody(encryptedText);
    }
}