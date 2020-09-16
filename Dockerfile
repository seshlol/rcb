FROM openjdk:8-alpine
RUN mkdir /opt/app
COPY backend/build/libs/backend-0.1.jar /opt/app
CMD ["java", "-Xmx256m", "-jar", "/opt/app/backend-0.1.jar"]