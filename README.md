# Progetto Birra 3

## Init System

Requisiti progetto:

- Docker

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
