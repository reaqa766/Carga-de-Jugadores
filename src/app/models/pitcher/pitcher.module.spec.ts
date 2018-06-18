import { PitcherModule } from './pitcher.module';

describe('PitcherModule', () => {
  let pitcherModule: PitcherModule;

  beforeEach(() => {
    pitcherModule = new PitcherModule();
  });

  it('should create an instance', () => {
    expect(pitcherModule).toBeTruthy();
  });
});
