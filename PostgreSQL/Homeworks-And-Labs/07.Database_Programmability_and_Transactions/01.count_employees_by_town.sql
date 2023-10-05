CREATE OR REPLACE FUNCTION fn_count_employees_by_town(town_name VARCHAR(20))
RETURNS INT AS
$$
    BEGIN
	    RETURN 
		   (SELECT COUNT(*) FROM towns AS t
                JOIN addresses USING (town_id)
                JOIN employees USING (address_id)
            WHERE t.name = town_name);
	END
$$
LANGUAGE plpgsql;