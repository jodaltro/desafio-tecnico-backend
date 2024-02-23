/** Types generated for queries found in "src/infra/databse/queries/cards.sql" */
import { PreparedQuery } from '@pgtyped/runtime';

/** 'InsertCards' parameters type */
export interface IInsertCardsParams {
  cards: readonly ({
    titulo: string | null | void,
    conteudo: string | null | void,
    lista: string | null | void
  })[];
}

/** 'InsertCards' return type */
export interface IInsertCardsResult {
  conteudo: string | null;
  id: string;
  lista: string | null;
  titulo: string | null;
}

/** 'InsertCards' query type */
export interface IInsertCardsQuery {
  params: IInsertCardsParams;
  result: IInsertCardsResult;
}

const insertCardsIR: any = {"usedParamSet":{"cards":true},"params":[{"name":"cards","required":false,"transform":{"type":"pick_array_spread","keys":[{"name":"titulo","required":false},{"name":"conteudo","required":false},{"name":"lista","required":false}]},"locs":[{"a":69,"b":74}]}],"statement":"INSERT INTO public.cards(titulo, conteudo, lista)\n    VALUES\n        :cards\n    RETURNING\n        *"};

/**
 * Query generated from SQL:
 * ```
 * INSERT INTO public.cards(titulo, conteudo, lista)
 *     VALUES
 *         :cards
 *     RETURNING
 *         *
 * ```
 */
export const insertCards = new PreparedQuery<IInsertCardsParams,IInsertCardsResult>(insertCardsIR);


/** 'UpdateCards' parameters type */
export interface IUpdateCardsParams {
  conteudo: string;
  id: string;
  lista: string;
  titulo: string;
}

/** 'UpdateCards' return type */
export interface IUpdateCardsResult {
  conteudo: string | null;
  id: string;
  lista: string | null;
  titulo: string | null;
}

/** 'UpdateCards' query type */
export interface IUpdateCardsQuery {
  params: IUpdateCardsParams;
  result: IUpdateCardsResult;
}

const updateCardsIR: any = {"usedParamSet":{"conteudo":true,"titulo":true,"lista":true,"id":true},"params":[{"name":"conteudo","required":true,"transform":{"type":"scalar"},"locs":[{"a":43,"b":52}]},{"name":"titulo","required":true,"transform":{"type":"scalar"},"locs":[{"a":68,"b":75}]},{"name":"lista","required":true,"transform":{"type":"scalar"},"locs":[{"a":90,"b":96}]},{"name":"id","required":true,"transform":{"type":"scalar"},"locs":[{"a":113,"b":116}]}],"statement":"UPDATE\n    public.cards\nSET\n    conteudo = :conteudo!,\n    titulo = :titulo!,\n    lista = :lista!\nWHERE\n    id = :id!\nRETURNING\n    *"};

/**
 * Query generated from SQL:
 * ```
 * UPDATE
 *     public.cards
 * SET
 *     conteudo = :conteudo!,
 *     titulo = :titulo!,
 *     lista = :lista!
 * WHERE
 *     id = :id!
 * RETURNING
 *     *
 * ```
 */
export const updateCards = new PreparedQuery<IUpdateCardsParams,IUpdateCardsResult>(updateCardsIR);


/** 'DeleteCards' parameters type */
export interface IDeleteCardsParams {
  id: string;
}

/** 'DeleteCards' return type */
export type IDeleteCardsResult = void;

/** 'DeleteCards' query type */
export interface IDeleteCardsQuery {
  params: IDeleteCardsParams;
  result: IDeleteCardsResult;
}

const deleteCardsIR: any = {"usedParamSet":{"id":true},"params":[{"name":"id","required":true,"transform":{"type":"scalar"},"locs":[{"a":36,"b":39}]}],"statement":"DELETE FROM public.cards\nWHERE id = :id!"};

/**
 * Query generated from SQL:
 * ```
 * DELETE FROM public.cards
 * WHERE id = :id!
 * ```
 */
export const deleteCards = new PreparedQuery<IDeleteCardsParams,IDeleteCardsResult>(deleteCardsIR);


/** 'FindAllCards' parameters type */
export type IFindAllCardsParams = void;

/** 'FindAllCards' return type */
export interface IFindAllCardsResult {
  conteudo: string | null;
  id: string;
  lista: string | null;
  titulo: string | null;
}

/** 'FindAllCards' query type */
export interface IFindAllCardsQuery {
  params: IFindAllCardsParams;
  result: IFindAllCardsResult;
}

const findAllCardsIR: any = {"usedParamSet":{},"params":[],"statement":"SELECT * from public.cards"};

/**
 * Query generated from SQL:
 * ```
 * SELECT * from public.cards
 * ```
 */
export const findAllCards = new PreparedQuery<IFindAllCardsParams,IFindAllCardsResult>(findAllCardsIR);


/** 'FindByIdCards' parameters type */
export interface IFindByIdCardsParams {
  id: string;
}

/** 'FindByIdCards' return type */
export interface IFindByIdCardsResult {
  conteudo: string | null;
  id: string;
  lista: string | null;
  titulo: string | null;
}

/** 'FindByIdCards' query type */
export interface IFindByIdCardsQuery {
  params: IFindByIdCardsParams;
  result: IFindByIdCardsResult;
}

const findByIdCardsIR: any = {"usedParamSet":{"id":true},"params":[{"name":"id","required":true,"transform":{"type":"scalar"},"locs":[{"a":38,"b":41}]}],"statement":"SELECT * from public.cards where id = :id!"};

/**
 * Query generated from SQL:
 * ```
 * SELECT * from public.cards where id = :id!
 * ```
 */
export const findByIdCards = new PreparedQuery<IFindByIdCardsParams,IFindByIdCardsResult>(findByIdCardsIR);


