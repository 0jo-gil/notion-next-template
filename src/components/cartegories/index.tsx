const Categories = ({ children }: { children: React.ReactNode }) => { 
    return (
        <div className="flex gap-x-4 mt-16 py-5 border-b border-solid border-gray-400">
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
    return (
        <button className="">
            {category}
        </button>
    )
}

export default Categories;

Categories.Item = CategoriesItem;