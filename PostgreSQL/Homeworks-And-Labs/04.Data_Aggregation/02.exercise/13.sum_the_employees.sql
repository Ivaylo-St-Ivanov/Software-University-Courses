SELECT
    COUNT(CASE department_id
	    WHEN 1 THEN 'Engineering'
	END ) AS "Engineering",
    COUNT(CASE department_id
	    WHEN 2 THEN 'Tool Design'
	END ) AS "Tool Design",
	COUNT(CASE department_id
	    WHEN 3 THEN 'Sales'
	END ) AS "Sales",
	COUNT(CASE department_id
	    WHEN 4 THEN 'Marketing'
	END ) AS "Marketing",
	COUNT(CASE department_id
	    WHEN 5 THEN 'Purchasing'
	END ) AS "Purchasing",
	COUNT(CASE department_id
	    WHEN 6 THEN 'Research and Development'
	END ) AS "Research and Development",
	COUNT(CASE department_id
	    WHEN 7 THEN 'Production'
	END ) AS "Production"
FROM 
    employees;