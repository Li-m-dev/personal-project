CREATE TABLE instructor(
instructorId SERIAL PRIMARY KEY,
name VARCHAR(30),
title VARCHAR(30),
pic TEXT,
intro  TEXT
);


CREATE TABLE users(
userId SERIAL PRIMARY KEY,
name VARCHAR(30),
email VARCHAR(200),
remainingClasses  INTEGER,
classExpiration  VARCHAR(50),
isAdmin  BOOLEAN
);
ALTER TABLE "public"."users" ADD COLUMN "authid" integer;
ALTER TABLE "public"."users" ADD COLUMN "picture" text;


CREATE TABLE "public"."classes" (
    "id" serial,
    "type" text,
    "time" timestamp,
    "instructorId" int,
    "level" text,
    PRIMARY KEY ("id"),
    CONSTRAINT "instructorId" FOREIGN KEY ("instructorId") REFERENCES "public"."instructor"("instructorid")
);

CREATE TABLE pass(
    id SERIAL PRIMARY KEY,
    pass_option VARCHAR(100),
    price float);