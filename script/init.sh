cd /app/api
pnpm run docker-compose up -d
cd ../..
pnpm run database:migrate
pnpm run database:seed
pnpm run start:dev