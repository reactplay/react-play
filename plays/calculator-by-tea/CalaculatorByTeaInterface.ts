export type valueTypes = 'NUMBER' | 'OPERATOR' | 'ACTION';

export interface ICalculatorValue {
  data: string;
  type: valueTypes;
}
