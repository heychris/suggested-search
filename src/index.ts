import Application from './application';
import { Config, DefaultConfig } from './config';

export default class SuggestedSearch {
  readonly supported = !!(typeof Object.assign !== 'function');

  public config: Config;

  constructor(options: Partial<Config>) {
    this.config = { ...DefaultConfig, ...options };
    this.initialize();
  }

  initialize(): Application[] {
    return Array.from(this.config.elements).map(
      el => new Application(el, this.config)
    );
  }
}
