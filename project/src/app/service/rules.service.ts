import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RulesService {

  public rulesSignal = signal<boolean>(false);
  public rule: string = 'normal';
  constructor() { }

  public openRules(rule: string): void {
    this.rule = rule;
    this.rulesSignal.update(() => true);
  }
  public closeRules(): void {
    this.rulesSignal.update(() => false);
  }
}
