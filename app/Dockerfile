FROM node as builder

WORKDIR /build

COPY package.json .
COPY package-lock.json .

RUN npm ci

COPY src src
COPY tsconfig.* ./
COPY angular.json .
COPY tslint.json .

RUN npm run build

FROM halverneus/static-file-server

WORKDIR /web

COPY --from=builder /build/dist/Tournament-masterpiece .
