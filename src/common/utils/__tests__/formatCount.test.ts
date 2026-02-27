import { formatDurationCount, formatViewCount } from '../formatCount';

describe('formatDurationCount', () => {
  it('formats seconds-only durations as MM:SS', () => {
    expect(formatDurationCount(0)).toBe('00:00');
    expect(formatDurationCount(5)).toBe('00:05');
    expect(formatDurationCount(59)).toBe('00:59');
  });

  it('formats minute durations as MM:SS', () => {
    expect(formatDurationCount(60)).toBe('01:00');
    expect(formatDurationCount(125)).toBe('02:05');
    expect(formatDurationCount(3599)).toBe('59:59');
  });

  it('includes hours when duration >= 3600', () => {
    expect(formatDurationCount(3600)).toBe('1:00:00');
    expect(formatDurationCount(3661)).toBe('1:01:01');
    expect(formatDurationCount(7384)).toBe('2:03:04');
  });
});

describe('formatViewCount', () => {
  it('returns the original string for counts below 1000', () => {
    expect(formatViewCount('0')).toBe('0');
    expect(formatViewCount('999')).toBe('999');
    expect(formatViewCount('42')).toBe('42');
  });

  it('formats thousands with K suffix', () => {
    expect(formatViewCount('1000')).toBe('1.0K');
    expect(formatViewCount('1500')).toBe('1.5K');
    expect(formatViewCount('999999')).toBe('1000.0K');
  });

  it('formats millions with M suffix', () => {
    expect(formatViewCount('1000000')).toBe('1.0M');
    expect(formatViewCount('2500000')).toBe('2.5M');
  });

  it('formats billions with B suffix', () => {
    expect(formatViewCount('1000000000')).toBe('1.0B');
    expect(formatViewCount('3700000000')).toBe('3.7B');
  });
});
