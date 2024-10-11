#!/bin/sh
echo "Génération de l'API client..."

openapi-generator-cli generate \
  -i /local/apps/api/openapi.json \
  -g typescript-axios \
  -o /local/packages/api-client \
  --additional-properties=useReactQuery=true,queryParamObjectFormat=dot,npmName=@org/api-client,npmVersion=1.0.0

cd /local/packages/api-client

pnpm install
pnpm run build

echo "Génération terminée."