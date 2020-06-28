FROM mongo

RUN apt-get update && apt-get install -y dos2unix

COPY init.sh /docker-entrypoint-initdb.d/init.sh
RUN dos2unix /docker-entrypoint-initdb.d/init.sh
