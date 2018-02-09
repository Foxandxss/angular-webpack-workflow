#!/bin/bash

CONTAINER=$([ $# -lt 1 ] && echo angularjs-webpack || echo $1)
PORT=$([ $# -lt 2 ] && echo 4000 || echo $2)

docker run -d -p $PORT:8080 $CONTAINER