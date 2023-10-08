ALTER TABLE volunteers
DROP CONSTRAINT fk_volunteers_volunteers_departments;

ALTER TABLE volunteers
ADD CONSTRAINT fk_volunteers_volunteers_departments
FOREIGN KEY (department_id)
REFERENCES volunteers_departments(id)
ON DELETE CASCADE;

DELETE FROM volunteers_departments CASCADE
WHERE department_name = 'Education program assistant';