FROM --platform=linux/amd64 node:18-alpine
WORKDIR /usr/server/app

COPY ./ .
RUN yarn
RUN yarn build
CMD ["yarn", "start"]
EXPOSE 3000