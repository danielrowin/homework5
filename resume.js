
function calculateResume() {
    var table = document.getElementById("pendaftarTable");
    var sumUang = 0;
    var sumUmur = 0;
    for (var i = 1; i < table.rows.length; i++) {
        sumUang += parseInt(table.rows[i].cells[2].innerHTML);
        sumUmur += parseInt(table.rows[i].cells[1].innerHTML);
    }
    var avgUang = sumUang / (table.rows.length - 1);
    var avgUmur = sumUmur / (table.rows.length - 1);
    document.getElementById("resume").innerHTML = "Rata-rata pendaftar memiliki uang sangu sebesar " + avgUang + " dengan rata-rata umur " + avgUmur;
}
