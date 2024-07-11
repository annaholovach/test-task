#!/bin/bash

echo "Generating mock data..."
./generate.mock.sh

echo "Starting API..."
npm run start
