import BlogImagePrimary from "../assets/BlogImagePrimary.jpg";
import BlogImageSecondary from "../assets/BlogImageSecondary.jpg";
import BlogImageTertiary from "../assets/BlogImageTertiary.jpg";
import React from "react";

interface BlogPost {
    image: string;
    title: string;
    description: string;
}

const blogPosts: BlogPost[] = [
    {
        image: BlogImagePrimary,
        title: "Journeys Are Best Measured In New Friends",
        description: "Lorem ipsum dolor sit amet, consect<br/> adipiscing elit. Ut elit tellus, luctus nec<br/> ullamcorper mattis pul leo."
    },
    {
        image: BlogImageSecondary,
        title: "A Lot Of Traveling Turns You Into A Storyteller",
        description: "Lorem ipsum dolor sit amet, consect<br/> adipiscing elit. Ut elit tellus, luctus nec<br/> ullamcorper mattis pul leo."
    },
    {
        image: BlogImageTertiary,
        title: "Travel Makes One Modest And Opened To Ideas",
        description: "Lorem ipsum dolor sit amet, consect<br/> adipiscing elit. Ut elit tellus, luctus nec<br/> ullamcorper mattis pul leo."
    },
]

interface BlogPostCardProps {
    post: BlogPost;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ post }) => (
    <div className="bg-white shadow-xl rounded-xl flex flex-col space-y-4">
        <div className="container w-[350px] h-[234px] relative">
            <img src={post.image} alt={post.title} className="w-full h-full object-cover rounded-t-xl" />
        </div>
        <div className="p-4 space-y-4">
            <h4 className="font-SpaceGrotesk text-2xl text-gray-100">
                {post.title}
            </h4>
            <p className="text-sm text-gray-300 font-Mulish font-semibold">
                {post.description}
            </p>
            <div className="flex items-center justify-between">
                <button className="text-primary-100 font-Mulish font-extrabold items-center hover:brightness-105">
                    Read more
                </button>
            </div>
        </div>
    </div>
)

export const NewsScreen = () => {
    return (
        <section id="news" className="overflow-hidden relative">
            <div
                className="absolute right-0 -z-10 mt-20
                    bg-gradient-to-b from-primary-100 to-white w-[203px] h-[645px] rotate-45"></div>
            <div className="w-[80%] mx-auto">
                <div className="flex flex-col items-center justify-center max-lg:text-center pt-24">
                    <h3 className="font-Grypen text-2xl text-primary-100">
                        Latest News
                    </h3>
                    <h2 className="font-SpaceGrotesk font-bold text-4xl leading-tight">
                        Read Latest Blogs
                    </h2>
                </div>
                <div className="flex max-lg:flex-col items-center justify-center mt-12 gap-6">
                    {blogPosts.map((post, index) => (
                        <BlogPostCard key={index} post={post} />
                    ))}
                </div>
            </div>
        </section>
    );
};
