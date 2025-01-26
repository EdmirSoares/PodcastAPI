# Podcast Manager API <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Studio%20Microphone.png" alt="Studio Microphone" width="25" height="25" />

*Aplicação em desenvolvimento! WIP</br>*
Simula o gerenciamento de episódios de podcasts separados por categoria.

## Tecnologias Usadas
![Node.js](https://img.shields.io/badge/-Node.js-05122A?style=flat&logo=node.js)&nbsp;
![TypeScript](https://img.shields.io/badge/-TypeScript-05122A?style=flat&logo=typescript)&nbsp;
![HTTP](https://img.shields.io/badge/-HTTP-05122A?style=flat&logo=http)&nbsp;


## Organização do Projeto
- **controllers/**: Contém os controladores que lidam com as requisições HTTP.
- **models/**: Define os modelos de dados usados na aplicação.
- **repositories/**: Contém a lógica de acesso aos dados, incluindo a leitura do arquivo JSON.
- **routes/**: Define as rotas da aplicação.
- **services/**: Contém a lógica de negócios da aplicação.
- **utils/**: Contém utilitários como tipos de conteúdo e códigos de status HTTP.

## Instalação do Projeto
1. Clone o repositório:
    ```sh
    git clone https://github.com/EdmirSoares/PodcastAPI.git
    ```
2. Navegue até o diretório do projeto:
    ```sh
    cd podcastapi
    ```
3. Instale as dependências:
    ```sh
    npm install
    ```

## Comandos de Script no [package.json](http://_vscodecontentref_/16)
- **dist**: Compila o projeto TypeScript para JavaScript.
    ```sh
    npm run dist
    ```
- **dev**: Inicia o servidor em modo de desenvolvimento.
    ```sh
    npm run dev
    ```
- **watch**: Inicia o servidor em modo de desenvolvimento com watch mode.
    ```sh
    npm run watch
    ```
- **start:dist**: Compila o projeto e inicia o servidor a partir dos arquivos compilados.
    ```sh
    npm run start:dist
    ```

## Como Utilizar
1. Para iniciar o servidor em modo de desenvolvimento:
    ```sh
    npm run dev
    ```
2. Para compilar o projeto:
    ```sh
    npm run dist
    ```
3. Para iniciar o servidor a partir dos arquivos compilados:
    ```sh
    npm run start:dist
    ```

## Endpoints
- **GET /api/list**: Lista todos os episódios de podcasts.
- **GET /api/episode?p=<nome_do_podcast>**: Filtra episódios por nome de podcast.

## Exemplo de Resposta
```json
[
    {
        "podcastName": "flow",
        "episode": "PIETRO FITTIPALDI + ENZO FITTIPALDI [+ RUBENS BARRICHELLO] - Flow #410",
        "videoId": "OjBUUAOATVQ",
        "cover": "https://i.ytimg.com/vi/OjBUUAOATVQ/maxresdefault.jpg",
        "categories": ["automobilismo", "esporte"],
        "link": "https://www.youtube.com/watch?v=OjBUUAOATVQ"
    }
]
```

Considerações Importantes
Certifique-se de que a porta definida no arquivo .env não esteja em uso por outro serviço.
O arquivo podcasts.json deve estar corretamente formatado para evitar erros de leitura.
