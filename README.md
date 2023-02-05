This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```
Build:

```bash
npm run build
```
Docker image:

```bash
COMPOSE_DOCKER_CLI_BUILD=1 DOCKER_BUILDKIT=1 docker-compose build
```
Docker save image to moramora.tar:

```bash
docker save -o ./moramora.tar moramora-moramora
```
Copy archive and docker-compose file to server folder:
Your folder can have another name

```bash
    cp -R moramora.tar //server-kupa/dev_m && cp -R docker-compose.yml //server-kupa/dev_m
```
Full: 

```bash
    npm run build && COMPOSE_DOCKER_CLI_BUILD=1 DOCKER_BUILDKIT=1 docker-compose build && cp -R moramora.tar //server-kupa/dev_m && cp -R docker-compose.yml //server-kupa/dev_m
```
Start container:

```bash
    docker-compose up -d
```



## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
