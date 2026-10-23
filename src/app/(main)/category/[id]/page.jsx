import HomeNewsBar from '@/components/homepage/news/HomeNewsBar';
import LeftSideBar from '@/components/homepage/news/LeftSideBar';
import RightSideBar from '@/components/homepage/news/RightSideBar';
import { getCategories, getNewsByCategoryId } from '@/lib/data/data';


const NewsCategoryPage = async ({ params }) => {
    const { id } = await params;
    // console.log(id, "params")

    const categories = await getCategories();
    // console.log("categories", categories.news_category);

    const news = await getNewsByCategoryId(id);
    // console.log("news", news)

    return (
        <div>

            <div className="container mx-auto grid lg:grid-cols-12 gap-5">

                {/* left */}
                <div className="text-xl font-bold col-span-3">
                    <LeftSideBar categories={categories} activeId={id}></LeftSideBar>
                </div>

                {/* middle */}
                <div className="text-xl font-bold col-span-6">
                   
                    <div className="space-y-4 mt-5">
                        {
                            news.length > 0 ? news.map((n,index) => {
                                return <HomeNewsBar key={index} news={n}>
                                </HomeNewsBar>
                            }) : <h1 className='text-center'>No News Found</h1>
                        }
                    </div>
                </div>

                {/* right */}
                <div className="text-xl font-bold col-span-3">

                    <RightSideBar></RightSideBar>

                </div>

            </div>

        </div>
    );
};

export default NewsCategoryPage;