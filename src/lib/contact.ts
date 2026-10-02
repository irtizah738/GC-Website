export type Inquiry = {
  name: string;
  email: string;
  company: string;
  projectDetails: string;
};

export function validateInquiry(body: unknown): Inquiry | null {
  if (!body || typeof body !== 'object' || Array.isArray(body)) return null;

  const input = body as Record<string, unknown>;
  const limits: Record<keyof Inquiry, number> = {
    name: 120,
    email: 254,
    company: 160,
    projectDetails: 5000,
  };

  const values = {} as Inquiry;
  for (const [key, limit] of Object.entries(limits) as Array<[keyof Inquiry, number]>) {
    if (typeof input[key] !== 'string') return null;
    const value = input[key].trim();
    if (!value || value.length > limit || (key !== 'projectDetails' && /[\r\n]/.test(value))) {
      return null;
    }
    values[key] = value;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) return null;
  return values;
}
