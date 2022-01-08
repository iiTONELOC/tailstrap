export default function XIcon({ className, ...props }: any): JSX.Element {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className={className || 'h-6 w-6"'}
            viewBox="0 0 24 24"
            strokeLinecap="round"
            stroke="currentColor"
            {...props}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2} d="M6 18L18 6M6 6l12 12"
            />
        </svg>
    );
};





