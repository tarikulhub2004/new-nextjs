import Marquee from "react-fast-marquee";

const BrakingNews = () => {

    const news = [
        {
            id: 1,
            title: "Breaking News 1",
            category: "Technology",
            description: "A new technology update has been announced.",
            isBreaking: true,
        },
        {
            id: 2,
            title: "Breaking News 2",
            category: "Sports",
            description: "A major sports event has attracted attention.",
            isBreaking: true,
        },
        {
            id: 3,
            title: "Breaking News 3",
            category: "World",
            description: "An important international update has emerged.",
            isBreaking: true,
        },
    ];

    return (
        <div className="flex bg-gray-200 py-4 px-2 container mx-auto">
            <button className="btn bg-[#d72050] text-white">Latest</button>
            <Marquee pauseOnHover={true} className="mx-3">
                {
                    news.map(item => {
                        return (<span key={item.id}>{item.description}</span>)
                    })
                }
            </Marquee>
        </div>
    );
};

export default BrakingNews;