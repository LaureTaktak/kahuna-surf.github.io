function updatePreview() {
    var boardType = document.getElementById("boardType").value;
    var finsType = document.getElementById("finsType").value;
    var imageUrl = "images/" + boardType + "_" + finsType + ".jpg"; // Chemin vers l'image de l'aperçu
    document.getElementById("boardPreview").src = imageUrl;
}
