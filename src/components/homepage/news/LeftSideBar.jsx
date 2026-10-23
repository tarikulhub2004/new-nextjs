import Link from "next/link";

const LeftSideBar = ({ categories, activeId }) => {
    return (
        <div>
            All Category
            <ul className="flex flex-col gap-3 text-lg my-5">
                {
                    categories.news_category.map((category, index) => <li key={index} className={`
                        ${activeId === category.category_id && "bg-gray-100"}
                          rounded-lg text-gray-400`}>
                        <Link className="block pl-10 py-4" href={`/category/${category.category_id}`}>{category.category_name}</Link>
                    </li>)
                }
            </ul>
        </div>
    );
};

export default LeftSideBar;
