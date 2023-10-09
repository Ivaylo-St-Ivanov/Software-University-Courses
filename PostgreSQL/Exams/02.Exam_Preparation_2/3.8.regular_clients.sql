SELECT
    c.full_name,
	COUNT(*) AS count_of_cars,
	SUM(cou.bill) AS total_sum
FROM
    clients AS c
JOIN
    courses AS cou
ON
    c.id = cou.client_id
WHERE
    SUBSTRING(c.full_name, 2, 1) = 'a'
GROUP BY
    c.full_name
HAVING
    COUNT(*) > 1
ORDER BY
    c.full_name;