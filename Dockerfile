FROM zenika/kotlin:latest
RUN mkdir /opt/app
WORKDIR /opt/app
COPY ./backend/build/libs/backend-0.0.1.jar /opt/app
CMD ["java", "-jar", "/opt/app/backend-0.0.1.jar"]