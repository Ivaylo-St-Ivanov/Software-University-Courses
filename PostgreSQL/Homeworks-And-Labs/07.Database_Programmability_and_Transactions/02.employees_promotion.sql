CREATE PROCEDURE sp_increase_salaries(department_name VARCHAR)
AS
$$
    BEGIN
	    UPDATE employees
		SET salary = salary + salary * 0.05
		WHERE department_id = (
			SELECT e.department_id 
			FROM employees AS e
            JOIN departments AS d
            USING (department_id)
            WHERE d.name = department_name
            GROUP BY department_id
		);
	END
$$
LANGUAGE plpgsql;