#!/bin/bash
echo "🚀 Tool Deployment System"
TOOL_PATH=$1
if [ -z "$TOOL_PATH" ]; then
    echo "Usage: ./deploy_tools.sh <project-folder>"
    exit 1
fi
cd /home/ubuntu/projects/$TOOL_PATH
npm run build
