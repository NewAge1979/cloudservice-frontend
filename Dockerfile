FROM mirror.gcr.io/library/node:20-alpine
LABEL authors="khrapatiy"

WORKDIR /app

EXPOSE 8081

COPY ["package.json", "package-lock.json", "./"]

RUN npm install

COPY . .

CMD ["npm", "run", "serve"]