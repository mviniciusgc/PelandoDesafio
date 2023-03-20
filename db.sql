CREATE TABLE promotion (
	promotion_id SERIAL CONSTRAINT pk_id_promotion PRIMARY KEY,
	url TEXT NULL,
	img TEXT NULL,
	title TEXT NULL,
	description TEXT NULL,
	price  VARCHAR(250) NULL,
	created_at  timestamp NOT NULL DEFAULT NOW(),
	updated_at  timestamp NOT NULL DEFAULT NOW()
);