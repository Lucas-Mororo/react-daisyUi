import React from 'react';

export default function NavBar({ drawer, isDrawerOpen }: any) {
    // -------- theme -------- // 
    const [theme, setTheme] = React.useState('dark');
    const toggleTheme = (value: any) => { setTheme(value); };

    const [isChecked, setIsChecked] = React.useState(true);
    const handleToggleTheme = (e: React.ChangeEvent<HTMLInputElement>) => {
        const isChecked = e.target.checked;
        setIsChecked(isChecked);
        if (isChecked) { toggleTheme("dark"); } else { toggleTheme("winter"); }
    };

    React.useEffect(() => {
        const htmlElement = document.querySelector('html');
        if (htmlElement) htmlElement.setAttribute('data-theme', theme);
    }, [theme]);
    // -------- theme -------- // 


    return (
        <div className="navbar bg-primary justify-between">
            <a className='btn btn-ghost text-xl flex-row' onClick={drawer} >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="#e8eaed"
                    stroke="#e8eaed"
                >
                    <path d="M4 6h16M4 12h16M4 18h7" />
                </svg>
                <span className="btm-nav-label text-base-100">OFICINA O CAFIFA</span>
            </a>

            <label className="flex cursor-pointer gap-2">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="fill-current text-base-100"
                >
                    <circle cx="12" cy="12" r="5" />
                    <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                </svg>
                <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={handleToggleTheme}
                    className="toggle theme-controller"
                />
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="fill-current text-base-100"
                >
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
            </label>
        </div >
    )
}