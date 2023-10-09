SELECT
    dr.first_name,
	dr.last_name,
	c.make,
	c.model,
	c.mileage
FROM
    drivers AS dr
JOIN
    cars_drivers AS cd
ON
    dr.id = cd.driver_id
JOIN
    cars AS c
ON 
    c.id = cd.car_id
WHERE
    c.mileage IS NOT NULL
ORDER BY
    c.mileage DESC,
	first_name ASC;