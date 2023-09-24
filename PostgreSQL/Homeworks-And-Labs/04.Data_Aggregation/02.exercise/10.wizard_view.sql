CREATE VIEW
    view_wizard_deposits_with_expiration_date_before_1983_08_17
AS
SELECT
    CONCAT(first_name, ' ', last_name) AS "Wizard Name",
	deposit_start_date AS "Start Date",
	deposit_expiration_date AS "Expiration Date",
	deposit_amount AS "Amount"
FROM
    wizard_deposits
GROUP BY 
    "Wizard Name",
	deposit_start_date,
	deposit_expiration_date,
	deposit_amount
HAVING 
    TO_CHAR(deposit_expiration_date, 'YYYY-MM-DD') <= '1983-08-17'
ORDER BY 
    deposit_expiration_date;