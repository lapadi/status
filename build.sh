#!/usr/bin/env bash

NODE_VERSION=14.17.0
UNIX_SOCKET_FILE=$pwd/app.sock
APP_NAME=lapadi:status:prod

#
if [ -d ~/.nvm ]
  then
    source ~/.nvm/nvm.sh
    nvm use $NODE_VERSION
fi

#
yarn install --ignore-engines
yarn run build

#
if [ -f "$UNIX_SOCKET_FILE" ]; then
    rm -rf app.sock
else 
    echo "$UNIX_SOCKET_FILE does not exist for $APP_NAME."
fi

pm2 restart app.config.json --env production

sleep 10s

chmod -R 777 app.sock