### docker 기본 명령

- 도커 빌드 : `docker build -t nextjs-docker -f ./docker/Dockerfile .`
- 도커 실행 : `docker run -p 3000:3000 nextjs-docker`

### docker-compose 기본 명령

- 백그라운드에서 실행 : docker-compose up -d
- 서비스 중지 : docker-compose stop
- 서비스 다운 : docker-compose down
