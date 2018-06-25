INSERT INTO workshop
(event_name,date,time,price,about,img)
VALUES
($1,$2,$3,$4,$5)
RETURNING *;