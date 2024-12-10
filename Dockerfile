FROM node:22.8.0-slim

#NAO USAR ROOT
USER node

#WORKDIR
WORKDIR /home/node/app

CMD [ "tail", "-f", "/dev/null" ]
