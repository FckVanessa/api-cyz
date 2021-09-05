button_convert = document.getElementById("convert_button");

button_convert.onclick = function () {
    text_input = document.getElementById("textQr").value;
    if (text_input.length == 0) {
        Swal.fire({
            position: 'top-end',
            text: 'Please enter your text!',
            showConfirmButton: false
          });
    } else {
    document.getElementById("qrImage").src = "https://api.qrserver.com/v1/create-qr-code/?data=" + encodeURI(text_input) + "&size=200x200&margin=0";
    document.getElementById("download_image").href = "https://api.qrserver.com/v1/create-qr-code/?data=" + encodeURI(text_input) + "&size=200x200&margin=0";
    }
}