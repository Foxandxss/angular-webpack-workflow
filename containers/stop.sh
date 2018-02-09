#!/bin/bash

CONTAINER=$([ $# -lt 1 ] && echo angularjs-webpack || echo $1)

docker stop $(docker ps -q --filter ancestor=$CONTAINER)