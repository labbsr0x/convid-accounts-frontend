FROM node:13-buster-slim as builder

RUN npm install -g create-react-app

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

ARG NODE_ENV
ARG REACT_APP_BACKEND_API_URL

RUN rm -rf build || true
COPY ./react-app/package.json /usr/src/app
RUN npm install

COPY ./react-app/public /usr/src/app/public
COPY ./react-app/src /usr/src/app/src
RUN npm run build

RUN rm -rf /srv/* || true
RUN ls -la /srv
RUN chmod -R 777 /usr/src/app/build/.
RUN ls -la /usr/src/app/build/


FROM abiosoft/caddy

COPY Caddyfile /etc/Caddyfile
ENV ACME_AGREE="false"

COPY --from=builder /usr/src/app/build/. /srv
COPY ./startup.sh /srv
RUN chmod +x /srv/startup.sh
ENTRYPOINT [ "sh" ]
CMD ["/srv/startup.sh"]