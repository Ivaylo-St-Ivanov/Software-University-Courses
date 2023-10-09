SELECT
    a.name AS address,
	CASE
        WHEN EXTRACT(HOUR FROM cou."start") BETWEEN 6 AND 20 THEN 'Day'
        ELSE 'Night'
    END AS day_time,
	cou.bill,
	cl.full_name,
	c.make,
	c.model,
	cat.name AS category_name
FROM
    addresses AS a
JOIN
    courses AS cou
ON 
    a.id = cou.from_address_id
JOIN
    clients AS cl
ON
    cl.id = cou.client_id
JOIN
    cars AS c
ON
    c.id = cou.car_id
JOIN
    categories AS cat
ON
    cat.id = c.category_id
ORDER BY
    cou.id;