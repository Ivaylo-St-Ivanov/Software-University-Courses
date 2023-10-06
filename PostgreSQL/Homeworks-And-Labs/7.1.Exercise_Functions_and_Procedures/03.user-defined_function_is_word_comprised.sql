CREATE OR REPLACE FUNCTION fn_is_word_comprised(
    set_of_letters VARCHAR(50),
    word VARCHAR(50)
) RETURNS BOOLEAN AS
$$
DECLARE
    isExist BOOLEAN := FALSE;
	ind INT := 1;
BEGIN
    WHILE ind < LENGTH(word) LOOP
	    IF POSITION(LOWER(SUBSTRING(word, ind ,1)) in LOWER(set_of_letters))::BOOLEAN THEN
		    isExist := TRUE;
		ELSE
		    isExist := FALSE;
			RETURN isExist;
		END IF;
		ind := ind + 1;
	END LOOP;
	RETURN isExist;
END
$$
LANGUAGE plpgsql;

-- ========================================

CREATE OR REPLACE FUNCTION fn_is_word_comprised(
    set_of_letters VARCHAR(50),
    word VARCHAR(50)
) RETURNS BOOLEAN AS
$$
BEGIN
    RETURN TRIM(LOWER(word), LOWER(set_of_letters)) = '';
END
$$
LANGUAGE plpgsql;