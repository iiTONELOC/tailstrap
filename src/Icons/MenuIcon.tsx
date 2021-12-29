export default function MenuIcon({ className, ...props }: any): JSX.Element {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className={className || ''}
            viewBox="0 0 20 20"
            fill="currentColor"
            {...props}
        >
            <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
            />
        </svg>
    );
};