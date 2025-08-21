let qrText = document.querySelector("#qrtext");
let sizes = document.querySelector("#sizes");
let GenerateBtn = document.querySelector("#GenerateBtn");
let downloadBtn = document.querySelector("#DownloadBtn");
let qrContainer = document.querySelector(".qr-body");


let size = sizes.value;

GenerateBtn.addEventListener("click", (e) => {
    e.preventDefault();
    isEmpty();
});

sizes.addEventListener("change", (e) => {
    size = e.target.value;
    isEmpty();
});

downloadBtn.addEventListener("click", () => {
    let image = document.querySelector(".qr-body img");

    if(image !== null){
        let imageAttr = image.getAttribute("src");
        downloadBtn.setAttribute("href", imageAttr);
    }
    else {
        downloadBtn.setAttribute("href", `${document.querySelector("canvas").toDataURL()}`);
    }
});

function isEmpty() {
    qrText.value.length > 0 ? generateQRCode() : alert("Enter the text or URL To generate QR Code :");
};

function generateQRCode(){
    qrContainer.innerHTML = "";
    new QRCode(qrContainer, {
        text:qrText.value,
        height:size,
        width:size,
        colorLight:"#fff",
        colorDark:"#000",
    });
}