export function defaultTo<T>(value: T | null | undefined, defaultValue: unknown) {
  return value == null || value !== value ? defaultValue : value;
}
