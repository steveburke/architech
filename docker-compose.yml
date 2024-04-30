version: '3.8'

services:
  spring-boot-app:
    build: ./library-managment-server
    ports:
      - "8080:8080"
    depends_on:
      - postgres
    environment:
      SPRING_DATASOURCE_URL: jdbc:postgresql://postgres:5432/postgres
      SPRING_DATASOURCE_USERNAME: postgres
      SPRING_DATASOURCE_PASSWORD: zaq12wsx

  angular-app:
    build: ./angular-app
    ports:
      - "4200:4200"

  postgres:
    image: postgres:latest
    ports:
      - "5432:5432"
    environment:
      POSTGRES_DB: postgres
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: zaq12wsx
