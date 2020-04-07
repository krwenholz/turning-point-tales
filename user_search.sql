SELECT email, first_name, created, id
FROM users
WHERE created > CURRENT_DATE - INTERVAL '21 days'
ORDER BY created;

/**
          email           | first_name |            created            |                  id
--------------------------+------------+-------------------------------+--------------------------------------
 4suestorm@gmail.com      | Susan      | 2020-03-19 14:32:14.298435+00 | 60426114-b9a4-440d-b933-5eadc1be7133
 claudia_esplugas@msn.com | Claudia    | 2020-03-31 06:13:50.617245+00 | 18169fbc-4f2f-42ea-aa4b-8d811dc057a2
**/

SELECT user_id, title, COUNT(*), MAX(visitations.created)
FROM visitations INNER JOIN stories ON visitations.story_id = stories.id
WHERE user_id IN ('18169fbc-4f2f-42ea-aa4b-8d811dc057a2', '60426114-b9a4-440d-b933-5eadc1be7133')
GROUP BY user_id, stories.title;

/**
               user_id                |   title   | count |              max
--------------------------------------+-----------+-------+-------------------------------
 18169fbc-4f2f-42ea-aa4b-8d811dc057a2 | Mr. Banks |     1 | 2020-04-01 00:25:44.535111+00
 60426114-b9a4-440d-b933-5eadc1be7133 | Mr. Banks |    11 | 2020-03-19 14:39:50.705129+00
(2 rows)
**/
