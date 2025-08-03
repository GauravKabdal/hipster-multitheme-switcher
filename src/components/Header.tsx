
import { useContext, type ChangeEvent, type FC } from 'react';
import logo from '/icons.png';
import { ThemeContext } from '../context/ThemeProvider';
import { themes } from '../themes/themes';

const Header: FC = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const themeStyles = themes[theme];

  const handleThemeChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setTheme(e.target.value as 'Theme1' | 'Theme2' | 'Theme3');
  };

  return (
    <header
      className={`w-full z-50 p-4 flex items-center justify-between shadow-md sticky top-0 transition-all duration-300 ${themeStyles.background} ${themeStyles.text} ${themeStyles.font}`}
    >
      <div className="flex items-center space-x-3">
        <img src={logo} alt="Logo" className="w-8 h-8" />
        <h1 className="text-xl font-semibold tracking-wide">MyApp</h1>
      </div>
      <select
  value={theme}
  onChange={handleThemeChange}
  className={`p-2 rounded-md border outline-none transition-colors duration-200 
    ${theme === 'Theme1' ? 'bg-white text-black border-gray-300' : ''}
    ${theme === 'Theme2' ? 'bg-gray-800 text-white border-gray-600' : ''}
    ${theme === 'Theme3' ? 'bg-white text-purple-800 border-purple-300' : ''}`}
>
  <option value="Theme1">Theme 1</option>
  <option value="Theme2">Theme 2</option>
  <option value="Theme3">Theme 3</option>
</select>

    </header>
  );
};

export default Header;
