function start () {
    Swal.fire({
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_si9TVBZW8GlXjmukTRzSiQFxmPtk_xMn6HzWVauxuwv7iyjl',
        imageWidth : 250,
        title: 'Kamu yakin ingin menjawab quiz ini ?',
        confirmButtonText: 'HAYUKK 😎',
        confirmButtonColor: "#23C552",
        showCancelButton: true,
        cancelButtonColor : "#F84F31",
        cancelButtonText: 'TYDACK 😣',
        allowOutsideClick: false,
        reverseButtons: true,
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: '<a href="level-1.html">Level 1<a/>',
                showConfirmButton: false,
            })
        }
    })
}

function level() {
    Swal.fire({
        showConfirmButton: false,
        text: 'Masih dalam tahap pengembangan, pilihan level masih terbatas. Kamu bisa langsung klik tombol Ayo Mulai 😙',
    })
}

function caraMain() {
    Swal.fire({
        imageUrl: 'https://cdn141.picsart.com/354073044035211.png?to=crop&type=webp&r=310x310&q=50',
        imageWidth: 200,
        text: 'Ngapain liat tutorial, tinggal main aja cuy 🤣 \n Game ini sangat mudah pake banget lochhh 😏',
        confirmButtonText: 'Saya Mengerti',
        confirmButtonColor: "#FFC100",
        allowOutsideClick: false,
    })
}

function jawab() {
    // document.getElementById("answer").innerHTML = "SALAH BRODI 😁";
    // let jawaban = document.getElementById("jawab");
    let jawaban = menjawab.value;

    if (jawaban == "go" || jawaban == "Go" || jawaban == "GO" ||jawaban == "golang" || jawaban == "Golang" || jawaban == "GoLang" || jawaban == "GOLANG") {
        Swal.fire({
            icon: 'success',
            title: 'Horee kamu benar!!!',
            confirmButtonText: "<a href='level-2.html'>Lanjut</a>",
            confirmColorText: '#fff',
            confirmButtonColor: "#01A66F",
            allowOutsideClick: false,
        })
    } else if (jawaban == "") {
        Swal.fire({
            icon: 'question',
            title: 'Kamu belum menjawab',
            confirmButtonText: 'Ulangi',
            confirmButtonColor: "#1E2F97",
            allowOutsideClick: false,
        })
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Salah, coba lagi yaa',
            confirmButtonText: 'Ulangi',
            confirmButtonColor: "#1E2F97",
            allowOutsideClick: false,
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
            confirmButtonColor: "#1E2F97",
            allowOutsideClick: false,
        })
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Salah, coba lagi yaa',
            confirmButtonText: 'Ulangi',
            confirmButtonColor: "#1E2F97",
            allowOutsideClick: false,
        });
    }
}