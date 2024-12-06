
const user = document.getElementById("userName");
const password = document.getElementById("password");
const answer = document.getElementById("resp");

const baseUrl = "https://parseapi.back4app.com";
const loginUrl = `${baseUrl}/login`;
const headersJson = {
    "X-Parse-Application-Id": "6s1aeyLZKQ39EFh70cOao7xiN89ZB35d5NFEHcXq",
    "X-Parse-REST-API-Key": "EmqsvDVFMmDEPItQzlvGIIGuxSXtLxuFStJ1hhCG",
    "Content-Type": "application/json"
};

const loginCamp = async (event) => {
    event.preventDefault(); // Evita o envio do formulário

    const username = user.value.trim();
    if (!username) {
        answer.innerHTML = 'Preencha o campo com o seu nome!';
        user.focus();
        return;
    }

    const passwords = password.value.trim();
    if (!passwords) {
        answer.innerHTML = 'Preencha o campo com a senha correta.';
        password.focus();
        return;
    }

    const response = await fetch(loginUrl, {
        method: "POST",
        headers: headersJson,
        body: JSON.stringify({
            username,
            password: passwords
        })
    });

    console.log("response", response);
    const data = await response.json();
    if (!response.ok) {
        
        answer.innerHTML = 'Nome ou senha incorreta, por favor, tente novamente.'
        answer.style.color = "#2b9cf2";
        answer.style.fontFamily = "arial";
        answer.style.fontSize = "10px";
        document.getElementById("userName").value = "";
        document.getElementById("password").value = ""; 
        return;
    }

    console.log("data:", data);
    localStorage.setItem("user", JSON.stringify(data));

    const searchParams = new URLSearchParams(location.search);
    if (searchParams.has("url")) {
        location.replace(searchParams.get("url"));
    } else {
        history.back();
    }

    answer.innerHTML = `Olá <strong>${username}</strong>, muito bem vindo! Espero que aproveite o nosso site e divirta-se!`
    location.href = "our-mission/mission.html"
};

document.getElementById("loginForm").addEventListener("submit", loginCamp);

const crudPut = async () => {
    let putuser = user;
    if (!putuser) {
        alert("Você precisa estar logado.");
        return;
    }
    try {
        const response = await fetch(`${baseUrl}/ ${nome.objectId}`,{
            method: "PUT",
            headers: {
                ...headersJson,
                "X-Parse-Session-Token": user.sessionToken,
            },
        });
        if(!response.ok) {
            alert("Erro ao acessar o servidor:" + response.status);
            throw new error ("Erro encontrado:" + response.status);
        }
    } catch(error) {
        console.log(error);
    }
};

const crudDelete = async() => {
    let deleteuser = user;
    if (!deleteuser) {
        alert("Você precisa estar logado.");
        return;
    }
    try {
        const response = await fetch(`${baseUrl}/${nome.objectId}`,{
            method: "DELETE",
            headers: {
                ...headers,
                "X-Parse-Session-Token": user.sessionToken,
            },
        });
        console.log(response);
        if (!response.ok){
            alert("Erro ao acessar o servidor: " + response.status);
            throw new Error("Erro encontrado: " + response.status);
        }
        crudGet();
    } catch (error) {
        console.log(error);
    }
};

const crudGet = async () => {
    let getuser = user;
    if(!getuser) {
        alert("Você precisa estar logado para listar as tarefas!");
        return;
    }
    try {
        console.log("baseURL", baseUrl);
    console.log("headers", {
      ...headers,
      "X-Parse-Session-Token": user.sessionToken,
    });
    const response = await fetch(baseUrl, {
        method: "GET",
        headers: {
          ...headers,
          "X-Parse-Session-Token": user.sessionToken,
        },
      });
      console.log(response);
    if (!response.ok) {
      alert("Erro ao acessar o servidor: " + response.status);
      throw new Error("Erro encontrado: " + response.status);
    }
    } catch (error) {
        console.log(error);
    }
};


