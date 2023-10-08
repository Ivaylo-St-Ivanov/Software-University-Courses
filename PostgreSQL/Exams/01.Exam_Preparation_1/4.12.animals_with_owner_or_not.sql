CREATE OR REPLACE PROCEDURE
    sp_animals_with_owners_or_not(
		IN animal_name VARCHAR(30),
		OUT "owner" VARCHAR(30)
) AS 
$$
BEGIN	
	SELECT o."name" 
		FROM owners AS o 
		LEFT JOIN animals AS a
		ON o.id = a.owner_id
		WHERE a."name" = animal_name
	INTO "owner";
				   
	IF "owner" IS NULL THEN
	"owner" := 'For adoption';
	END IF;
END
$$
LANGUAGE plpgsql;