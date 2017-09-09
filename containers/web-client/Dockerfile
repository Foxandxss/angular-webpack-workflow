FROM ubuntu:14.04

RUN apt-get update; apt-get install -y apt-transport-https curl; curl -sL https://deb.nodesource.com/setup_7.x | sudo -E bash -
RUN apt-get update; apt-get install -y --force-yes nodejs git ssh-client

# Set the working directory to /app
WORKDIR /app

# Copy the current directory contents into the container at /app
ADD . /app

RUN npm install
CMD ["npm", "start"]

EXPOSE 8080