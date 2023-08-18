FROM node:lts-slim

RUN apt update && apt install -y --no-install-recommends \
    git \
    ca-certificates

USER node

WORKDIR /home/node/app

CMD ["tail", "-f", "/dev/null"]