CREATE OR REPLACE FUNCTION fn_creator_with_board_games(
	input_name VARCHAR(30)
) RETURNS INT AS
$$
BEGIN
    RETURN (
		SELECT COUNT(*)
		FROM board_games AS bg
		JOIN creators_board_games AS cbg
		ON bg.id = cbg.board_game_id
		JOIN creators AS c
		ON c.id = cbg.creator_id
		WHERE c.first_name = input_name
	);
END
$$
LANGUAGE plpgsql;