FROM adoptopenjdk/openjdk8:latest
RUN mkdir /opt/app
COPY ./backend/build/libs/backend-0.1.jar /opt/app
CMD ["java", "-jar", "/opt/app/backend-0.1.jar"]