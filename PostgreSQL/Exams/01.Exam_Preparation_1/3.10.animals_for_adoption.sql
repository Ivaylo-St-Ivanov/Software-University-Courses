SELECT 
   a."name" AS animal,
   TO_CHAR(a.birthdate, 'YYYY') AS birth_year,
   at.animal_type
FROM
   animals AS a
JOIN
   animal_types AS at
ON
   at.id = a.animal_type_id
WHERE
   a.owner_id IS NULL
   AND
   AGE('01/01/2022', a.birthdate) < '5 YEARS'
   AND
   at.animal_type <> 'Birds'
ORDER BY
   animal ASC;