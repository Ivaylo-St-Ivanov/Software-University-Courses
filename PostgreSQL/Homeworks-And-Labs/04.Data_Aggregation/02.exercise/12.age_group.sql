SELECT
    CASE
	    WHEN age > 60 THEN '[61+]'
	    WHEN age > 50 THEN '[51-60]'
	    WHEN age > 40 THEN '[41-50]'
	    WHEN age > 30 THEN '[31-40]'
	    WHEN age > 20 THEN '[21-30]'
	    WHEN age > 10 THEN '[11-20]'
	    WHEN age > 0 THEN '[0-10]'
	END AS "Age Group",
	COUNT(age)
FROM
    wizard_deposits
GROUP BY 
    "Age Group"
ORDER BY
    "Age Group";