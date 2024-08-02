import React from 'react';

export default function NavBar() {
    // -------- theme -------- // 
    const [theme, setTheme] = React.useState('light');
    const toggleTheme = (value: any) => { setTheme(value); };

    const [isChecked, setIsChecked] = React.useState(false);
    const handleToggleTheme = (e: React.ChangeEvent<HTMLInputElement>) => {
        const isChecked = e.target.checked;
        setIsChecked(isChecked);
        if (isChecked) { toggleTheme("dark"); } else { toggleTheme("light"); }
    };

    React.useEffect(() => {
        const htmlElement = document.querySelector('html');
        if (htmlElement) htmlElement.setAttribute('data-theme', theme);
    }, [theme]);
    // -------- theme -------- // 


    return (
        <div className="navbar bg-primary justify-between">
            <a className='btn btn-ghost text-xl flex-row' >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 -960 960 960"
                    fill="#e8eaed"
                >
                    <path
                        d="M480-400ZM80-160v-400q0-33 23.5-56.5T160-640h120v-80q0-33 23.5-56.5T360-800h240q33 0 56.5 23.5T680-720v80h120q33 0 56.5 23.5T880-560v400H80Zm240-200v40h-80v-40h-80v120h640v-120h-80v40h-80v-40H320ZM160-560v120h80v-40h80v40h320v-40h80v40h80v-120H160Zm200-80h240v-80H360v80Z"
                    />
                </svg>
                <span className="btm-nav-label text-base-100">Oficina</span>
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
        </div>
    )
}