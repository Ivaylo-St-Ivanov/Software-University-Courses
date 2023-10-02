SELECT
    b.booking_id,
	b.starts_at::DATE,
    b.apartment_id,
	CONCAT(c.first_name, ' ', c.last_name) AS customer_name
FROM
    customers AS c
LEFT JOIN
    bookings AS b
USING
    (customer_id)
ORDER BY 
    customer_name ASC
LIMIT 10;