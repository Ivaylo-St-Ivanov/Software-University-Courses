CREATE VIEW view_addresses
AS
SELECT 
    CONCAT(first_name, ' ', last_name) AS "Full name",
	department_id,
	CONCAT("number", ' ', street) AS "Address"
FROM
    employees, addresses
WHERE address_id = addresses.id
ORDER BY "Address" ASC;