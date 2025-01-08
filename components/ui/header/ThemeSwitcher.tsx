'use client';

import {useEffect, useMemo, useState} from 'react';
import PaintBrushIcon from '@/components/ui/icons/PaintBrushIcon';

const ThemeSwitcher = () => {
  const themeList: string[] = useMemo(() => {
    return process.env.NEXT_PUBLIC_THEMES?.split(',') || [];
  }, []);
  const [currentTheme, setCurrentTheme] = useState<string | null>(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || themeList[0];
    setCurrentTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, [themeList]);

  const handleThemeChange = (theme: string): void => {
    setCurrentTheme(theme);
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  };

  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle m-1">
        <PaintBrushIcon/>
      </div>
      <ul tabIndex={0} className="dropdown-content bg-base-300 rounded-box z-[1] w-52 p-2 shadow-2xl">
        {
          themeList.map((theme) => (
            <li key={theme}>
              <input
                onChange={() => handleThemeChange(theme)}
                checked={theme === currentTheme}
                type="radio"
                name="theme-dropdown"
                className="theme-controller btn btn-sm btn-block btn-ghost justify-start capitalize"
                aria-label={theme}
                value={theme}/>
              {theme === 'night' && <div className="divider my-0 h-1"></div>}
            </li>
          ))
        }
      </ul>
    </div>
  );
};

export default ThemeSwitcher;