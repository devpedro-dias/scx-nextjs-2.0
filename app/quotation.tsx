import useSWR from 'swr';
import QuotationClient from './_components/QuotationClient';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Quotation() {
    const { data, error } = useSWR(process.env.NEXT_PUBLIC_API_URL!, fetcher);

    if (error) return <div className='flex items-center justify-center'></div>;
    if (!data) return <div className='flex items-center justify-center'></div>;

    return <QuotationClient />;
}
