CREATE TABLE 
    employees_projects(
	    id SERIAL PRIMARY KEY,
	    employee_id INTEGER NOT NULL REFERENCES employees(id) DEFERRABLE INITIALLY DEFERRED,
	    project_id INTEGER NOT NULL REFERENCES projects(id) DEFERRABLE INITIALLY DEFERRED
	);
