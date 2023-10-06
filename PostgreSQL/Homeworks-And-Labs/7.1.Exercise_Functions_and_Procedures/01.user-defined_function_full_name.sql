CREATE OR REPLACE FUNCTION fn_full_name(first_name VARCHAR, last_name VARCHAR)
RETURNS VARCHAR AS
$$
BEGIN
    RETURN (
		INITCAP(LOWER(first_name) || ' ' || LOWER(last_name))
	);
END
$$
LANGUAGE plpgsql;