<h1 align="center">Awesome Project Build with TypeORM 👋</h1>

# ✨ Description

This is basic CRUD Rest apis by using express,typescript,typeorm and postgres .<br />


# ✨ Packages

- Express
- Typescript
- Typeorm
- Postgres

# ✨ Setup,build & run

Steps to run this project:

1. Run `npm i` command
2. Setup database settings inside `src/dbconfig.ts` file
3. Run `npm run build` command
4. Run `npm start` command


# REST API

The REST API to the example app is described below.

## Get list of Users

### Request

`GET /`

    curl -i -H 'Accept: application/json' http://localhost:3000/

### Response

    HTTP/1.1 200 OK
    Date: Thu, 12 Oct 2023 12:36:30 GMT
    Status: 200 OK
    Connection: close
    Content-Type: application/json
    Content-Length: 2

    [ {"id": 1,"firstName":1,"lastName":"Foo","age":3 }]

## Create a new User

### Request

`POST /`

    curl -i -H 'Accept: application/json' -d 'firstName=test&lastName=Foo&age=4' http://localhost:3000/

### Response

    HTTP/1.1 201 Created
    Date: Thu, 12 Oct 2023 12:36:30 GMT
    Status: 201 Created
    Connection: close
    Content-Type: application/json
    Location: /thing/1
    Content-Length: 36

## Update a User

### Request

`PUT /:id`

    curl -i -H 'Accept: application/json' -X PUT -d 'firstName=test&lastName=Foo&age=4' http://localhost:3000/1

### Response

    HTTP/1.1 200 OK
    Date: Thu, 12 Oct 2023 12:36:31 GMT
    Status: 200 OK
    Connection: close
    Content-Type: application/json
    Content-Length: 40

    {"firstName":1,"lastName":"Foo","age":5}


## Delete a User

### Request

`DELETE /:id`

    curl -i -H 'Accept: application/json' -X DELETE http://localhost:3000/1

### Response

    HTTP/1.1 204 No Content
    Date: Thu, 12 Oct 2023 12:36:32 GMT
    Status: 204 No Content
    Connection: close
