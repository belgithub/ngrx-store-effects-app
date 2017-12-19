import { ActionReducerMap, createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromPizzas from './pizzas.reducer';
import { getPizzas } from './pizzas.reducer';

export interface ProductState {
    pizzas: fromPizzas.PizzaState
}

export const reducers: ActionReducerMap<ProductState> = {
    pizzas: fromPizzas.reducer
}

export const getPorductState = createFeatureSelector<ProductState>('products');


//pizzas state
export const getPizzaState = createSelector(getPorductState,
     (state: ProductState) => state.pizzas);

export const getAllPizzas = createSelector(getPizzaState, fromPizzas.getPizzas);
export const getAllPizzasLoaded = createSelector(getPizzaState, fromPizzas.getPizzaLoading);
export const getAllPizzasLoading = createSelector(getPizzaState, fromPizzas.getPizzaLoading);