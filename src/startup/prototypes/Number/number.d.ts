declare global {
  interface Number {
    asabs(): number;
    asclamp(lower: number, upper: number): number;
    asclear(
      action: 'round' | 'ceil' | 'floor' = 'round',
      precision?: number,
    ): number;
  }
}
