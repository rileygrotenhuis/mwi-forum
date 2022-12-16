# MWI Serve

This is an example forum that can be used to demonstrate my skillsets and expertise to future clients at MWI.

## Setup

Clone the repository

```bash
git clone https://github.com/rileygrotenhuis/mwi-serve-forum.git
```

Switch to the repo's folder

```bash
cd mwi-serve-forum
```

### Laravel API

Switch to the repo's API folder

```bash
cd api
```

Install the dependencies using composer

```bash
composer install
```

Generate a new Laravel application key

```bash
php artisan generate:key
```

Copy the example `.env` file and make the required configuration changes in the `.env` file

```bash
cp .env.example .env
```

> You will need to create a PostgreSQL database instance and fill in the credentials in the `.env` file

Run the database migrations

```bash
php artisan migrate
```

Seed the database with test data (optional)

```bash
php artisan db:seed
```

You can now access the API server at http://localhost:8000/api

### Next.js Client

Switch to the repo's Client folder

```bash
cd client
```

Install the dependencies using NPM

```bash
npm install
```

Start the local development environment

```bash
npm run build
npm run dev
```
