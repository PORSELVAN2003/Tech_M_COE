import { SalaryFormatterPipe } from './salary-formatter.pipe';

describe('SalaryFormatterPipe', () => {
  it('create an instance', () => {
    const pipe = new SalaryFormatterPipe();
    expect(pipe).toBeTruthy();
  });
});
