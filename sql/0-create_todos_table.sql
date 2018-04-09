create table todos(
	id SERIAL PRIMARY KEY,
	created_at TIMESTAMP,
	todo VARCHAR(255),
	due TIMESTAMP,
	done BOOLEAN
);
