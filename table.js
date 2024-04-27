document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var nama = document.getElementById("nama").value;
    var umur = document.getElementById("umur").value;
    var uang = document.getElementById("uang").value;
    if (nama.length < 10 || umur < 25 || uang < 100000 || uang > 1000000) {
        alert("Mohon isi form dengan benar!");
        return;
    }
    var table = document.getElementById("pendaftarTable").getElementsByTagName("tbody")[0];
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = nama;
    cell2.innerHTML = umur;
    cell3.innerHTML = uang;
    calculateResume();
    this.reset();
});

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
