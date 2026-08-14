
const loginForm =
    document.getElementById("loginForm");


loginForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        const email =
            document.getElementById("email")
                .value
                .trim();


        const senha =
            document.getElementById("senha")
                .value;


        const tipo =
            document.getElementById("tipoUsuario")
                .value;


        if (!email || !senha || !tipo) {

            alert(
                "Preencha todos os campos."
            );

            return;
        }


        const usuario = {

            email: email,

            tipo: tipo

        };


        localStorage.setItem(
            "usuarioLogado",
            JSON.stringify(usuario)
        );


        alert(
            "Login realizado com sucesso! ✅"
        );


        if (tipo === "aluno") {

            window.location.href =
                "aluno.html";

        }

        else if (tipo === "professor") {

            window.location.href =
                "professor.html";

        }

        else if (tipo === "secretaria") {

            window.location.href =
                "cadastro.html";

        }

        else if (tipo === "administrador") {

            window.location.href =
                "areadoprofessor.html";

        }

        else if (tipo === "responsavel") {

            alert(
                "Área do responsável disponível em breve."
            );

        }

    }
);
