create table pickles(
	id SERIAL PRIMARY KEY,
	created_at TIMESTAMP not null default(current_timestamp),
	pickle BYTEA
);
