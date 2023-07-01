# Estágio de dependências e compilação
FROM node:16 AS builder

WORKDIR /app

COPY package.json package-lock.json ./
RUN yarn

COPY . .
RUN npm run build

# Estágio de produção
FROM node:16 AS production

WORKDIR /app

ENV NODE_ENV production

COPY --from=builder /app/package.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/package-lock.json ./

EXPOSE 3000

CMD ["npm", "start"]