ALTER TABLE users
ADD COLUMN initials CHAR(2);

UPDATE users
SET initials = SUBSTRING(first_name, 1, 2);

SELECT 
    initials,
	COUNT(initials) AS user_count
FROM 
    users
GROUP BY 
    initials
ORDER BY 
    user_count DESC, 
    initials ASC;