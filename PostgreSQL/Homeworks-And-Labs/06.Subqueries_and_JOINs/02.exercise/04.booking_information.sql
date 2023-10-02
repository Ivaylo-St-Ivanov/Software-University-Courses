SELECT
    b.booking_id,
	a."name" AS apartment_owner,
    a.apartment_id,
	CONCAT(c.first_name, ' ', c.last_name) AS customer_name
FROM
    customers AS c
FULL JOIN
    bookings AS b
USING
    (customer_id)
FULL JOIN
    apartments AS a
USING 
    (booking_id)
ORDER BY 
    b.booking_id, 
	apartment_owner, 
	customer_name;