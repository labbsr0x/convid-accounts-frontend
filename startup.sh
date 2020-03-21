#!/bin/sh

echo "API_URL=$API_URL"
sed "s|Object({NODE_ENV:\"production\",PUBLIC_URL:\"\",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_BACKEND_API_URL|\"$API_URL\"|g" -i static/js/*.js

/bin/parent caddy --conf=/etc/Caddyfile --log=stdout --agree=$ACME_AGREE