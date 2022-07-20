function jawab() {
    // document.getElementById("answer").innerHTML = "SALAH BRODI 😁";
    // let jawaban = document.getElementById("jawab");
    let jawaban = menjawab.value;

    if (jawaban == "go" || jawaban == "Go" || jawaban == "GO" ||jawaban == "golang" || jawaban == "Golang" || jawaban == "GoLang" || jawaban == "GOLANG") {
        Swal.fire({
            icon: 'success',
            title: 'Horee kamu benar!!!',
            confirmButtonText: 'Lanjut',
            confirmButtonColor: "#01A66F",
            allowOutsideClick: false,
        })
    } else if (jawaban == "") {
        Swal.fire({
            icon: 'question',
            title: 'Kamu belum menjawab',
            confirmButtonText: 'Ulangi',
        })
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Salah, coba lagi yaa',
            confirmButtonText: 'Ulangi',
        });
    }
}

function jawab2() {
    let jawaban = menjawab.value;

    if (jawaban == "react" || jawaban == "React" || jawaban == "reactjs" ||jawaban == "ReactJs" || jawaban == "ReactJS") {
        Swal.fire({
            icon: 'success',
            title: 'Horee kamu benar!!!',
            confirmButtonText: 'Lanjut',
            confirmButtonColor: "#01A66F",
            allowOutsideClick: false,
        })
    } else if (jawaban == "") {
        Swal.fire({
            icon: 'question',
            title: 'Kamu belum menjawab',
            confirmButtonText: 'Ulangi',
        })
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Salah, coba lagi yaa',
            confirmButtonText: 'Ulangi',
        });
    }
}
