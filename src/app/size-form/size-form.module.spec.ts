import { SizeFormModule } from './size-form.module';

describe('SizeFormModule', () => {
  let sizeFormModule: SizeFormModule;

  beforeEach(() => {
    sizeFormModule = new SizeFormModule();
  });

  it('should create an instance', () => {
    expect(sizeFormModule).toBeTruthy();
  });
});
