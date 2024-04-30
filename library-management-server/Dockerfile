FROM openjdk:22-ea-1-jdk-slim

WORKDIR /app

COPY target/library-management-server-0.0.1-SNAPSHOT.jar app.jar

ENTRYPOINT ["java", "-jar", "app.jar"]