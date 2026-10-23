import Image from "next/image";
import Link from "next/link";
import { CiBookmark, CiShare2 } from "react-icons/ci";
import { FaEye, FaStar } from "react-icons/fa";

const HomeNewsBar = ({ news }) => {
    // console.log(news);

    return (
        <div className="card bg-base-100 shadow-sm">

            <div className="bg-gray-100 h-17 font-normal px-5 text-[16px] flex justify-between">
                <div className="flex items-center gap-3">
                    <Image className="rounded-full" src={news.author?.img} alt={news.author?.name || "/default-avatar.png"} width={40} height={40} loading="lazy"></Image>
                    <div className="">
                        <h3>{news.author?.name}</h3>
                        <p>{news.author?.published_date}</p>
                    </div>
                </div>

                <div className="flex text-3xl items-center gap-2">
                    <CiBookmark />
                    <CiShare2 />
                </div>
            </div>
            <h1 className="my-5">{news.title}</h1>
            <figure>
                <Image src={news?.thumbnail_url} alt={news.title} width={300} height={300} className="w-full h-100 object-cover object-[center_20%] rounded-3xl p-5" loading="lazy"></Image>
            </figure>

            <div className="card-body">
                <p className="font-normal text-l text-gray-500 line-clamp-3">{news.details}</p>
                <div className="card-actions justify-start">
                    <Link href={`/news/${news._id}`}>
                        <button className="border-none hover:text-red-500 cursor-pointer text-[#FF8C47]">Read More</button>
                    </Link>
                </div>
                <hr className="text-gray-300 my-3" />
                <div className="flex justify-between">
                    <div className="flex gap-2 items-center font-normal ">
                        <FaStar className="text-[#FF8C47] text-lg" /><p className="pt-1 text-gray-500">{news.rating.number}</p>
                    </div>
                    <div className="flex gap-2 items-center font-normal  text-gray-500">
                        <FaEye className="text-lg" /><p className="pt-1">{news.total_view}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeNewsBar;
