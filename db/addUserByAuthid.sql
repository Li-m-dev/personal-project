INSERT INTO users (name,email,authid,picture)
VALUES($1,$2,$3,$4)
RETURNING *;