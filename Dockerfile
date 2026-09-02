FROM node:20.16-alpine as builder

WORKDIR /app

ARG BLOG_ENABLED=false
ARG DEPLOYMENT_URL="https://marceldechant.github.io"
ARG DEPLOYMENT_BRANCH="main"
ARG GITHUB_ORG="MarcelDechant"
ARG GITHUB_PROJECT="DSO-Portfolio"

COPY . $WORKDIR

RUN npm install && npm run build

FROM nginx:latest as runner

COPY --from=builder /app/build /usr/share/nginx/html