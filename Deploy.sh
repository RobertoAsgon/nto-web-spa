#!/bin/bash

cd /home/nto-global-repo/

SERVICE_DOCKER_COMPOSE="spa"

echo "Build Service docker compose"
docker-compose build $SERVICE_DOCKER_COMPOSE

# Verifica se um contêiner com o mesmo nome já está em execução
if docker-compose ps -q $SERVICE_DOCKER_COMPOSE &>/dev/null; then
    # Se o contêiner está em execução, faz uma pausa e remove-o
    echo "Parando e removendo o contêiner existente..."
    docker-compose stop $SERVICE_DOCKER_COMPOSE
    docker-compose rm -f $SERVICE_DOCKER_COMPOSE
fi

echo "Subindo novo container docker"
docker-compose up $SERVICE_DOCKER_COMPOSE
