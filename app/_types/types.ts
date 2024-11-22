type Currency = {
    id: string;
    name: string;
    code: string;
    codein: string;
    bid: string;
    image: string;
};

type Card = {
    id: number;
    content: JSX.Element | React.ReactNode | string;
    className: string;
    thumbnail: string;
};