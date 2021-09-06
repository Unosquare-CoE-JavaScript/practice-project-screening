# Screening API

This will be the API backend for the Screening App, an app designed to help Unosquare's HRs department in the recruitment process.
It will send some random questions based on topics and seniorities and give feedback to recruiter.

## Badges

![Unosquare](https://img.shields.io/badge/Unosquare-Center%20of%20Excellence-brightgreen)

## Description

`API` with `JWT` `auth` security to retrieve questions and give feedback to user.
To do so it will need a CRUD manager for questions & topics.
Using top level dev tools to ensure great working operation and performance.
Using `my_sql` and `sequelize` ORM for persisten data.

### Recommended packages

- `yarn`
  - As global in general, great pacakge manager for safe, stable and reproducible projects, also has a lot of tools for monorepos
- `express`
  - Fast, unopinionated, minimalist web framework for REST APIs
- `cors`
  - To setup cross origin policy
- `sequelize`
  - Promise-based ORM for `my_sql` and many more
- `jest`
  - Unit testing ensures that all code meets quality standards before it's deployed. TDD strongly recommended.
- `supertest`
  - To provide a high-level abstraction for testing HTTP.
- `swagger-jsdoc`
  - To use jsdoc syntax to write swagger specification
- `swagger-ui-express`
  - To serve the swagger ui in our express app
- `morgan`
  - HTTP request logger middleware
- `nodemon`
  - To automatically restart the server whenever a file is saved.

## Developer Setup

### Prerequisites

- [Node 11](https://nodejs.org/)
- [Yarn](https://yarnpkg.com/en/)
- [Docker CE](https://store.docker.com/search?type=edition&offering=community)
- [Docker Compose](https://docs.docker.com/compose/)

### Docker Setup Steps

If you have other Docker containers running it is recommended to stop them as they may be connecting to the same ports.

1. `cp .env.sample .env`
2. Modify `.env` to supply:

- my_sql:
  - `DB_NAME`
  - `DB_USER`
  - `DB_PASSWORD`
  - `DB_SERVER`
  - `DB_PORT`
- jwt:
  - `SECRET_KEY` (must be the same as the client!)
    - Can be generated in [GRC](https://www.grc.com/passwords.htm)
- jest:
  - `TEST_TOKEN`
    - Check the official page [JWT.io](https://jwt.io/)
    - Also can be created using the `jsonwebtoken` `lib` with the `SECRET_KEY` and a `payload` with shape:

```json
{
  "candidate": "<candidate name>",
  "interviewer": "<interviewer email>"
}
```

3. `docker-compose pull`
4. `docker-compose build`
5. `docker-compose up`
6. Server will be available at `http://localhost:4000`

## Instructions

- Develop the entire API to match the project requirements

- OAuth
  ![OAuth JWT flow](https://i.ytimg.com/vi/6znYAIgvzG4/maxresdefault.jpg)
  ![JWT Sign](https://i.stack.imgur.com/bOHqZ.png)

  - All incoming request must have an Authentication header:

    | header          | Type     | Description                                             |
    | :-------------- | :------- | :------------------------------------------------------ |
    | `Authorization` | `string` | **Required** JWT using the correct `SECRET_KEY` payload |

    So I would recommend to create some middleware to go right before each request and check for it.
    Hint: destructure JWT using `SECRET_KEY` payload, if good `next()`, if not, send `401` status

- Create all required endpoints to serve all the specifications

- Add necessary middleware to manage different situations

- Test-driven development (strongly recommended)

- Make sure each endpoint is porperly secured

## API Reference (examples)

#### Get questions

```http
  GET /api/questions/apply/?topics=[1,2,3]&seniorities=[2,3]
```

| Parameter     | Type       | Description                            |
| :------------ | :--------- | :------------------------------------- |
| `topics`      | `[number]` | **Required** array of topic's ids      |
| `seniorities` | `[number]` | **Required** array of senioritie's ids |

#### Submit assessment

```http
  POST /api/submit/
```

| Parameter | Type  | Description                                       |
| :-------- | :---- | :------------------------------------------------ |
| `QA map`  | `map` | **Required** map with questions-answers relations |

- Suggested question object shape

```json
{
  "topics": [1, 2, 3],
  "seniorities": [2, 3],
  "question": "actual question",
  "answers": [
    {
      "answer": "answer option 1",
      "isCorrect": true
    },
    {
      "answer": "answer option 2",
      "isCorrect": false
    },
    {
      "answer": "answer option 3",
      "isCorrect": false
    }
  ]
}
```

### Testing

- To run `test` in docker do:
  - `docker-compose run --rm web yarn test`

### Docs

- To see swagger docs go to
  - `http://localhost:4000/api-docs`
