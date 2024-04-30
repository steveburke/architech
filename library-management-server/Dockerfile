FROM maven:latest as builder

WORKDIR /usr/src/library-management-server

COPY pom.xml .
RUN mvn -B dependency:go-offline

COPY . .
RUN mvn -DskipTests=true clean install

FROM openjdk:22-ea-1-jdk-slim

WORKDIR /app

COPY --from=builder /usr/src/library-management-server/target/library-management-server-0.0.1-SNAPSHOT.jar app.jar

ENTRYPOINT ["java", "-jar", "app.jar"]