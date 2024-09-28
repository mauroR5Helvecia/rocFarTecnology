FROM openjdk:17-jdk-alpine
ARG JAR_FILE=target/rocfartecnology-0.0.1-SNAPSHOT.jar
COPY ${JAR_FILE} rocfartecnology-0.0.1-SNAPSHOT.jar
ENTRYPOINT ["java", "-jar", "rocfartecnology-0.0.1-SNAPSHOT.jar"]
EXPOSE 8081
