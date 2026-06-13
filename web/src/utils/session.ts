const SESSION_STORAGE_KEY = 'agnes:session-id:v1';

function createSessionId(): string {
  if (typeof crypto !== 'undefined' && 'randomUUID' in crypto) {
    return crypto.randomUUID();
  }
  return `${Date.now()}-${Math.random().toString(36).slice(2)}-${Math.random().toString(36).slice(2)}`;
}

export function getClientSessionId(): string {
  if (typeof window === 'undefined') return 'ssg-session-placeholder';

  try {
    const existing = window.localStorage.getItem(SESSION_STORAGE_KEY);
    if (existing) return existing;
    const next = createSessionId();
    window.localStorage.setItem(SESSION_STORAGE_KEY, next);
    return next;
  } catch {
    return createSessionId();
  }
}

export function withSessionQuery(path: string): string {
  const url = new URL(path, window.location.origin);
  url.searchParams.set('sessionId', getClientSessionId());
  return `${url.pathname}${url.search}`;
}
