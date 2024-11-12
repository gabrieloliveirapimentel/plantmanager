<h1 align="center"> 
	Plant Manager
</h1>

![cover](capa.png?style=flat)

## 📃 Descrição
Este é um aplicativo para lhe ajudar a lembrar de cuidar de suas plantas de forma fácil de acordo com cada tipo de planta. Projeto desenvolvido durante a participação no evento "Next Level Week #05" da Rocketseat.

## 🔧 Features
- Salva a identificação do usuário no próprio dispositivo o usuário;
- Consome de API os dados e características de cada planta;
- Salva localmente a planta que o usuário possue;
- Lembra o usuário quando regar e cuidar da plantinha de acordo com a frequência ideial das plantas que o usuário possui;

## 💻 Instruções de uso
Utilize o **yarn** ou o **npm install** para instalar as depedências do projeto.
Em seguida, inicie o projeto e a API fake com o Json Server.

```cl
expo start
json-server ./src/services/server.json --host 192.168.1.4 --port 3333 --delay 700
```

 Substitua o host pelo seu endereço IP local. Faça o mesmo no arquivo API dentro de services.
 
 
 ```ts
 import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.1.4:3333',
});

export default api;
```

## 👨🏻‍💻 Autor
<img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/63811493?v=4" width="100px;" alt=""/>
Nome: Gabriel Oliveira Pimentel
Contato:

<div> 
  <a href = "mailto:gabrieloliveirapimentel@hotmail.com"><img src="https://img.shields.io/badge/outlook-%230077B5?style=for-the-badge&logo=microsoftoutlook&logoColor=gabrieloliveirapimentel" target="_blank"></a>
    <a href = "mailto:pimentelgabriel.contato@gmail.com"><img src="https://img.shields.io/badge/-Gmail-%23333?style=for-the-badge&logo=gmail&logoColor=red" target="_blank"></a>
  <a href="https://www.linkedin.com/in/gabriel-oliveira-pimentel/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=gabrieloliveirapimentel" target="_blank"></a>  
</div>
