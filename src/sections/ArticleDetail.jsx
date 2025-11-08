import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { articles } from '../constants/articles';

const ArticleDetail = () => {
    const { id } = useParams();
    const article = articles.find((art) => art.id === parseInt(id));

    if (!article) {
        return (
            <section className="c-space my-20">
                <div className="w-full text-white-600 text-center">
                    <h3 className="head-text">Article Not Found</h3>
                    <p className="mt-3 text-lg">The article you're looking for doesn't exist.</p>
                    <Link to="/articles" className="mt-4 inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors">
                        Back to Articles
                    </Link>
                </div>
            </section>
        );
    }

    return (
        <section className="c-space my-20">
            <div className="w-full text-white-600">
                <Link to="/" className="text-blue-400 hover:text-blue-300 mb-4 inline-block">
                    ← Back to Articles
                </Link>
                <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-64 object-cover rounded-md mb-6"
                    onError={(e) => {
                        e.target.src = '/assets/placeholder.jpg';
                    }}
                />
                <h1 className="head-text mb-4">{article.title}</h1>
                <div className="flex flex-wrap gap-2 mb-4">
                    {article.tags.map((tag, index) => (
                        <span key={index} className="bg-blue-500 text-white px-2 py-1 rounded text-sm">
                            {tag}
                        </span>
                    ))}
                </div>
                <p className="text-sm text-gray-500 mb-6">By {article.author} on {article.date}</p>
                <div className="prose prose-lg max-w-none text-white-600">
                    <p className="text-lg leading-relaxed">{article.content}</p>
                </div>
            </div>
        </section>
    );
};

export default ArticleDetail;