#!/bin/bash

CONTAINER=$([ $# -lt 1 ] && echo angularjs-webpack || echo $1)
DIR=$([ $# -lt 2 ] && echo web-client || echo $2)

docker build -f $DIR/Dockerfile -t $CONTAINER ../

