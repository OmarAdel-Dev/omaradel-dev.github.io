'use client';

import {
  createContext,
  useContext,
  useLayoutEffect,
  useSyncExternalStore,
  type ReactNode,
} from 'react';

type Theme = 'light' | 'dark' | 'system';

interface ThemeContextValue {
  theme: Theme;
  resolvedTheme: 'light' | 'dark';
  setTheme: (theme: Theme) => void;
  isHydrated: boolean;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);
const THEME_STORAGE_KEY = 'portfolio-theme';
const THEME_CHANGE_EVENT = 'portfolio-theme-change';

export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within <ThemeProvider>');
  return ctx;
}

function getSystemTheme(): 'light' | 'dark' {
  if (typeof window === 'undefined') return 'light';
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function readStorage(): Theme {
  if (typeof window === 'undefined') return 'dark';

  try {
    const stored = localStorage.getItem(THEME_STORAGE_KEY) as Theme | null;
    return stored === 'light' || stored === 'dark' || stored === 'system' ? stored : 'dark';
  } catch {
    return 'dark';
  }
}

function applyTheme(resolved: 'light' | 'dark') {
  const root = document.documentElement;
  root.classList.toggle('dark', resolved === 'dark');
  root.style.colorScheme = resolved;
}

function getThemeSnapshot(): Theme {
  return readStorage();
}

function getServerThemeSnapshot(): Theme {
  return 'dark';
}

function subscribeTheme(callback: () => void) {
  if (typeof window === 'undefined') return () => {};

  const mq = window.matchMedia('(prefers-color-scheme: dark)');
  window.addEventListener('storage', callback);
  window.addEventListener(THEME_CHANGE_EVENT, callback);
  mq.addEventListener('change', callback);

  return () => {
    window.removeEventListener('storage', callback);
    window.removeEventListener(THEME_CHANGE_EVENT, callback);
    mq.removeEventListener('change', callback);
  };
}

function getIsHydratedSnapshot() {
  return true;
}
function getIsHydratedServerSnapshot() {
  return false;
}
function subscribeNoop() {
  return () => {};
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const theme = useSyncExternalStore(subscribeTheme, getThemeSnapshot, getServerThemeSnapshot);
  const resolvedTheme = theme === 'system' ? getSystemTheme() : theme;
  const isHydrated = useSyncExternalStore(
    subscribeNoop,
    getIsHydratedSnapshot,
    getIsHydratedServerSnapshot,
  );

  // Initialize theme synchronously on mount to prevent flash
  useLayoutEffect(() => {
    applyTheme(resolvedTheme);
  }, [resolvedTheme]);

  function setTheme(t: Theme) {
    try {
      localStorage.setItem(THEME_STORAGE_KEY, t);
    } catch {
      /* storage blocked */
    }

    window.dispatchEvent(new Event(THEME_CHANGE_EVENT));
  }

  return (
    <ThemeContext.Provider value={{ theme, resolvedTheme, setTheme, isHydrated }}>
      {children}
    </ThemeContext.Provider>
  );
}
