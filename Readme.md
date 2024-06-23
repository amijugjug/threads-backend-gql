# Backend Server for Threads

This project is a demonstration of GraphQL APIs, focusing on creating the backend for a threads-based application. Built with Express.js, this backend server utilizes PostgreSQL for data storage and Docker Compose for easy PostgreSQL installation. The project includes continuous server restart functionality using `tsc-watch` and employs Prisma for schema management.

## Features

- **GraphQL APIs**: Demonstrates the use of GraphQL for API development.
- **Express.js**: Utilizes the Express.js framework for building the backend server.
- **PostgreSQL**: Uses PostgreSQL as the database for storing data.
- **Docker Compose**: Simplifies PostgreSQL setup and management.
- **Continuous Server Restart**: Implements `tsc-watch` for continuous server restarts during development.
- **Prisma**: Uses Prisma for database schema management and migrations.

## Prerequisites

- [Node.js](https://nodejs.org/)
- [Yarn](https://yarnpkg.com/)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

## Getting Started

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/amijugjug/threads-backend-gql.git
   cd your-repo
   ```

2. **Install dependencies**:

   ```bash
   yarn install
   ```

3. **Set up PostgreSQL with Docker Compose**:

   ```bash
   docker-compose up -d
   ```

4. **Generate Prisma Client**:
   ```bash
   yarn prisma generate
   ```
5. **Copy .env.sample file to .env file**


### Development

To start the development server with continuous restarts, use the following command:

```bash
yarn dev
```

This command uses `tsc-watch`, a TypeScript compiler wrapper that watches for file changes and automatically restarts the server. This is particularly useful for a smooth development experience as it ensures that the server is always running the latest code changes.

### Prisma

Prisma is used for database schema management. To apply schema changes and migrations, use the following commands:

- **Generate Prisma Client**:

  ```bash
  yarn prisma generate
  ```

- **Run migrations**:
  ```bash
  yarn prisma migrate dev
  ```

## Project Structure

```
.
├── prisma   # Prisma schema and client
├── src
|   ├── db
│   │   ├── index.ts
│   ├── graphql   # GraphQL schema definition
│   │   ├── index.ts
│   │   ├── user    # Entities
│   │   │   ├── index.ts
│   │   │   ├── mutations.ts
│   │   │   ├── queries.ts
│   │   │   ├── resolvers.ts
│   │   │   ├── typedefs.ts
│   │   │   ├── user.d.ts
│   ├── middlewares
│   │   ├── auth.middleware.ts
│   ├── services
│   │   ├── user.ts
│   ├── utils
│   │   ├── utilities.ts
│   ├── index.ts     # Entry point of the server
├── env.sample
├── .gitignore
├── docker-compose.yml  # Docker Compose configuration
├── package.json    # Project dependencies and scripts
├── Readme.md   # Project documentation
├── tsconfig.json
├── yarn.lock
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any bugs, features, or improvements.

Feel free to reach out if you have any questions or need further assistance.

Happy coding! 🚀
