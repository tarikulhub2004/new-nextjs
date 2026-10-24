import { getNewsDetails } from "@/lib/data/data";
import Image from "next/image";
import Link from "next/link";
import { CiBookmark, CiShare2 } from "react-icons/ci";
import { FaArrowLeft, FaEye, FaStar } from "react-icons/fa";

export const generateMetadata = async ({ params }) => {
    const { id } = await params;
    // console.log("params", params);
    const news = await getNewsDetails(id);
    // console.log(idj, "id");

    return {
        title: news.title,
        description: news.description
    }
}

const NewsDetailsPage = async ({ params }) => {
    const { id } = await params;
    // console.log(id, "params id")

    const news = await getNewsDetails(id)
    // console.log(news);
    return (
        <div className="container mx-auto">
            <div className="lg:w-3/5 mx-auto">
                <h1 className="text-xl mb-3 font-bold">News by category</h1>
                <div className="card bg-base-100 shadow-sm">
                    <figure>
                        <Image src={news?.thumbnail_url} alt={news.title} width={300} height={300} className="w-full h-125 object-cover object-[center_20%] rounded-3xl p-5" loading="lazy"></Image>
                    </figure>
                    <div className="card-body">
                        <h1 className="text-2xl font-bold">{news.title}</h1>
                        <p className="font-normal text-l text-gray-500">{news.details}</p>
                        <div className="card-actions justify-start">
                            <Link href={`/category/${news.category_id}`}>
                                <button className="border-none mt-3 cursor-pointer text-white btn bg-pink-500"><FaArrowLeft />All news in this category</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsDetailsPage;