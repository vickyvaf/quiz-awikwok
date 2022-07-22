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
                title: '<a href="level-1.html"><strong>Level 1</strong><a/>',
                footer: 'Main dari level 1 dulu ya bosque 😎',
                showConfirmButton: false,
                allowOutsideClick: false,
                showCloseButton: true,
            })
        }
    })
}

function level() {
    Swal.fire({
        showCloseButton: true,
        showConfirmButton: false,
        allowOutsideClick: false,
        imageUrl: 'https://i0.wp.com/thumbs.gfycat.com/CaringCreepyAtlanticsharpnosepuffer-size_restricted.gif?resize=650,400',
        imageWidth: 200,
        html: 'Masih dalam tahap pengembangan, pilihan level masih terbatas. Kamu bisa langsung klik tombol <strong><em>Ayo Mulai</em></strong> 😙',
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

    if (jawaban == "false" || jawaban == "False" || jawaban == "FALSE") {
        Swal.fire({
            icon: 'success',
            title: 'Horee kamu benar!!!',
            html: "<strong><a href='level-2.html'>Level 2</strong></a>",
            confirmColorText: '#fff',
            confirmButtonColor: "#01A66F",
            allowOutsideClick: false,
            showConfirmButton: false,
            showCloseButton: true,
        })
    } else if (jawaban == "") {
        Swal.fire({
            icon: 'question',
            title: 'Kamu belum menjawab',
            confirmButtonText: 'Ulangi',
            confirmButtonColor: "#1E2F97",
            allowOutsideClick: false,
            showConfirmButton: false,
            showCloseButton: true,
        })
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Salah, coba lagi yaa',
            confirmButtonText: 'Ulangi',
            confirmButtonColor: "#1E2F97",
            allowOutsideClick: false,
            showConfirmButton: false,
            showCloseButton: true,
        });
    }
}

function jawab2() {
    let jawaban = menjawab.value;

    if (jawaban == "0" || jawaban == "nol" || jawaban == "Nol" ||jawaban == "NOL") {
        Swal.fire({
            icon: 'success',
            title: 'Horee kamu benar!!!',
            html: "<strong><a href='level-3.html'>Level 3</strong></a>",
            confirmButtonColor: "#01A66F",
            allowOutsideClick: false,
            showConfirmButton: false,
            showCloseButton: true,
        })
    } else if (jawaban == "") {
        Swal.fire({
            icon: 'question',
            title: 'Kamu belum menjawab',
            confirmButtonText: 'Ulangi',
            confirmButtonColor: "#1E2F97",
            allowOutsideClick: false,
            showConfirmButton: false,
            showCloseButton: true,
        })
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Salah, coba lagi yaa',
            confirmButtonText: 'Ulangi',
            confirmButtonColor: "#1E2F97",
            allowOutsideClick: false,
            showConfirmButton: false,
            showCloseButton: true,
        });
    }
}

function jawab3() {
    let jawaban = menjawab.value;

    if (jawaban == "react" || jawaban == "React" || jawaban == "REACT" ||jawaban == "3" || jawaban == 3 || jawaban =="r" || jawaban == "R") {
        Swal.fire({
            icon: 'success',
            title: 'Horee kamu benar!!!',
            html: "<strong><a href='level-4.html'>Level 4</strong></a>",
            showConfirmButton: false,
            confirmButtonColor: "#01A66F",
            allowOutsideClick: false,
            showCloseButton: true,
        })
    } else if (jawaban == "") {
        Swal.fire({
            icon: 'question',
            title: 'Kamu belum menjawab',
            confirmButtonText: 'Ulangi',
            confirmButtonColor: "#1E2F97",
            showConfirmButton: false,
            allowOutsideClick: false,
            showCloseButton: true,
        })
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Salah, coba lagi yaa',
            confirmButtonText: 'Ulangi',
            confirmButtonColor: "#1E2F97",
            allowOutsideClick: false,
            showConfirmButton: false,
            showCloseButton: true,
        });
    }
}

function jawab4() {
    let jawaban = menjawab.value;

    if (jawaban == "1" || jawaban == "satu" || jawaban == "Satu" ||jawaban == "SATU") {
        Swal.fire({
            icon: 'success',
            title: 'Horee kamu benar!!!',
            html: "<strong><a href='level-5.html'>Level 5</strong></a>",
            confirmButtonColor: "#01A66F",
            allowOutsideClick: false,
            showConfirmButton: false,
            showCloseButton: true,
        })
    } else if (jawaban == "") {
        Swal.fire({
            icon: 'question',
            title: 'Kamu belum menjawab',
            confirmButtonText: 'Ulangi',
            confirmButtonColor: "#1E2F97",
            allowOutsideClick: false,
            showConfirmButton: false,
            showCloseButton: true,
        })
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Salah, coba lagi yaa',
            confirmButtonText: 'Ulangi',
            confirmButtonColor: "#1E2F97",
            allowOutsideClick: false,
            showConfirmButton: false,
            showCloseButton: true,
        });
    }
}