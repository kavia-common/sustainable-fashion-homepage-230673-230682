#!/bin/bash
cd /home/kavia/workspace/code-generation/sustainable-fashion-homepage-230673-230682/homepage_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

