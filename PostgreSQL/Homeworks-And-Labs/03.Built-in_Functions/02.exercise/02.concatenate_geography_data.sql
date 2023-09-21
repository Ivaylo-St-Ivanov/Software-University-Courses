CREATE VIEW 
    view_continents_countries_currencies_details
AS
SELECT
    CONCAT(con.continent_name, ': ', con.continent_code) AS "Continent Details",
	CONCAT_WS(' - ', ctr.country_name, ctr.capital, ctr.area_in_sq_km, 'km2') AS "Country Information",
	CONCAT(curr.description, ' (', curr.currency_code, ')') AS "Currencies"
FROM
    continents AS con,
    countries AS ctr,
	currencies AS curr
WHERE
    con.continent_code = ctr.continent_code
	AND
	ctr.currency_code = curr.currency_code
ORDER BY
    "Country Information" ASC,
	"Currencies" ASC;