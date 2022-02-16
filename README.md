# Progetto Birra 3

## Init System

Requisiti per la prof:

- Docker

Requisiti per gli sviluppatori:

- Docker
- nodejs
- npm
- Angular CLI
- Ide consigliato: Vs Code

Per far partire il progetto:

```bash
docker-compose up --build
```

Per avviare Docker in backgroud:

```bash
docker-compose up --build -d
```

## Stop System

Per stoppare i container del il progetto:

```bash
docker-compose down
```

Se avete bisogno di fermare e rimuovere tutti i contenitori, le reti e tutte le immagini utilizzate da qualsiasi servizio nel file <em>docker-compose.yml</em>, utilizzate il comando

```bash
docker-compose down --rmi all
```
