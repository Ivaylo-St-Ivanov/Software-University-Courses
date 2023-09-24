SELECT
    deposit_group,
	is_deposit_expired,
	FLOOR(AVG(deposit_interest)) AS "Deposit Interest"
FROM
    wizard_deposits
WHERE 
    TO_CHAR(deposit_start_date, 'YYYY-MM-DD') > '1985-01-01'
GROUP BY 
    deposit_group,
	is_deposit_expired
ORDER BY
    deposit_group DESC,
	is_deposit_expired ASC;