function jawab() {
    // document.getElementById("answer").innerHTML = "SALAH BRODI 😁";
    // let jawaban = document.getElementById("jawab");
    let jawaban = menjawab.value;

    if (jawaban == "go" || jawaban == "Go" || jawaban == "GO" ||jawaban == "golang" || jawaban == "Golang" || jawaban == "GoLang" || jawaban == "GOLANG") {
        Swal.fire({
            icon: 'success',
            title: 'Horee kamu benar!!!',
            confirmButtonText: 'Lanjut',
        })
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Salah, coba lagi yaa',
            confirmButtonText: 'Ulangi',
        });
    }
}