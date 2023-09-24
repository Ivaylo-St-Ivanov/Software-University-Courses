SELECT
    last_name,
	COUNT(notes) AS "Notes with Dumbledore"
FROM
    wizard_deposits
WHERE SUBSTRING(notes, 'Dumbledore') = 'Dumbledore'
GROUP BY 
    last_name;