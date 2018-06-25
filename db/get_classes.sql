SELECT classes.id,classes.type,classes.start,classes.endtime,classes.level,instructor.name
FROM instructor
INNER JOIN classes
ON classes.instructorid = instructor.instructorid
WHERE instructor.instructorid IS NOT NULL;