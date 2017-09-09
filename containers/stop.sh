CONTAINER=angularjs-webpack

docker stop $(docker ps -q --filter ancestor=$CONTAINER)