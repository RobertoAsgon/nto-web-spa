#!/bin/bash

# Navega até a pasta /nto-web-spa
cd /nto-web-spa

# Nome da imagem Docker
IMAGE_NAME="nto-web-spa"

# Verifica se um contêiner com o mesmo nome já está em execução
if docker ps -a --filter "name=$IMAGE_NAME" --format '{{.Names}}' | grep -q "^$IMAGE_NAME$"; then
    # Se o contêiner está em execução, faz uma pausa e remove-o
    echo "Parando e removendo o contêiner existente..."
    docker stop $IMAGE_NAME
    docker rm $IMAGE_NAME
fi

# Constrói a imagem Docker usando o Dockerfile
echo "Construindo a imagem Docker..."
docker build -t $IMAGE_NAME .

# Inicia o novo contêiner
echo "Iniciando o novo contêiner..."
docker run -d --name $IMAGE_NAME $IMAGE_NAME
