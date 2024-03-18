import { useParams, useRouter, useSearchParams } from "next/navigation";

const Categories = ({ children }: { children: React.ReactNode }) => {
    const { getQueryString } = useCategories();

    return (
        <div className="flex gap-x-4 mt-16 py-5 border-b border-solid border-gray-400">
            <CategoriesItem category="All" active={getQueryString('tag') === 'All' ?? true} />
            {children}
        </div>
    )
}

type Props = {
    active?: boolean;
    innerText?: string;
    category: string;
    onClick?: () => void;
} & React.HTMLAttributes<HTMLButtonElement>;

const CategoriesItem = ({ active = false, category, ...props }: Props) => {
    const { getQueryString, setQueryString } = useCategories();

    return (
        <button className={getQueryString('tag') === category ? 'text-red-50' : 'text-black'} onClick={() => setQueryString('tag', category)}>
            {category}
        </button>
    )
}

export default Categories;

Categories.Item = CategoriesItem;

const useCategories = () => {
    const searchParams = useSearchParams();
    const router = useRouter();

    const setQueryString = (key: string, value: string) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set(key, value);

        router.replace(`?${params.toString()}`)
    }

    const getQueryString = (key: string) => {
        const params = new URLSearchParams(searchParams.toString());
        return params.get(key);
    }




    return { getQueryString, setQueryString }
}