CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE public.cards (
	id uuid NOT NULL DEFAULT uuid_generate_v4(),
	titulo varchar NULL,
	conteudo varchar NULL,
	lista varchar NULL
);

ALTER TABLE public.cards ADD CONSTRAINT cards_pk PRIMARY KEY (id);
