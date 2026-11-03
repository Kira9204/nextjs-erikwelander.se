#!/usr/bin/env bash
set -euo pipefail

# Keep the current container running while the new image builds.
docker compose build

# Replace the container only after a successful build.
docker compose up -d --no-build
