create table todos(
	id SERIAL PRIMARY KEY,
	created_at TIMESTAMP not null default(current_timestamp),
	todo VARCHAR(255),
	due TIMESTAMP,
	done BOOLEAN not null default(false)
);
