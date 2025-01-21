# Podcast Manager


### Descrição
Aplicação para simular o gerenciamento de episódios de podcasts separados por categoria

### Domínio
Podcastas feitos em vídeo

### Features
- Listar os podcasts em sessões de categorias
    -[saúde, fitness, mentalidade, humor, automobilismo]
- Filtrar episódios por nome de podcast

## Como

### Feature
- Listar os episódios dos podcasts em sessões de categorias

### Como será implementado:
Irei retornar em uma api rest (json) o nome do podcast, nome do episódio, imagem de capa, categorias e o link

```js
[
    {
        podcastName: "flow",
        episode: "PIETRO FITTIPALDI + ENZO FITTIPALDI [+ RUBENS BARRICHELLO] - Flow #410",
        videoId: "OjBUUAOATVQ",
        cover: "https://i.ytimg.com/vi/OjBUUAOATVQ/maxresdefault.jpg",
        categories: ["automobilismo", "esporte"]
        link: "https://www.youtube.com/watch?v=OjBUUAOATVQ",
    }
]
```