import { Injectable } from '@nestjs/common';
import { InjectClient } from 'nest-postgres';
import { Client } from 'pg';
import {
  IDeleteCardsResult,
  IFindAllCardsResult,
  IFindByIdCardsResult,
  IInsertCardsParams,
  IInsertCardsResult,
  IUpdateCardsParams,
  IUpdateCardsResult,
  deleteCards,
  findAllCards,
  findByIdCards,
  insertCards,
  updateCards,
} from './queries/cards.queries';

@Injectable()
export class CardsRepository {
  constructor(@InjectClient() private readonly pg: Client) {}

  async insert(cards: IInsertCardsParams): Promise<IInsertCardsResult[]> {
    const cardsResult = await insertCards.run(cards, this.pg);
    return cardsResult;
  }

  async update(card: IUpdateCardsParams): Promise<IUpdateCardsResult[]> {
    const cardsResult = await updateCards.run(card, this.pg);
    return cardsResult;
  }

  async delete(id: string): Promise<void> {
    await deleteCards.run({ id }, this.pg);
  }


  async findAll(): Promise<IFindAllCardsResult[]> {
    const cardsResult = await findAllCards.run(undefined, this.pg);
    return cardsResult;
  }

  async findById(id: string): Promise<IFindByIdCardsResult[]> {
    return findByIdCards.run({ id }, this.pg);
  }
}
