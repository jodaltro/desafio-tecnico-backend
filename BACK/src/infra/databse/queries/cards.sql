/*
 @name insertCards
 @param cards -> ((titulo,conteudo, lista)...)
 */
INSERT INTO public.cards(titulo, conteudo, lista)
    VALUES
        :cards
    RETURNING
        *;


/*
 @name updateCards
 */
UPDATE
    public.cards
SET
    conteudo = :conteudo!,
    titulo = :titulo!,
    lista = :lista!
WHERE
    id = :id!
RETURNING
    *;

/*
 @name deleteCards
 */
DELETE FROM public.cards
WHERE id = :id!;


/*
 @name findAllCards
 */
SELECT * from public.cards;

/*
 @name findByIdCards
 */
SELECT * from public.cards where id = :id!;
