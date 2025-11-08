import React from 'react';
import { Link } from 'react-router-dom';
import { articles } from '../constants/articles';

const ArticlesList = () => {
    return (
        <section className="c-space my-20">
            <div className="w-full text-white-600">
                <h3 className="head-text">Tech Articles</h3>
                <p className="mt-3 text-lg text-white-600">
                    Explore the latest in technology, from AI to quantum computing.
                </p>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {articles.map((article) => (
                        <div key={article.id} className="bg-black-200 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                            <img
                                src={article.image}
                                alt={article.title}
                                className="w-full h-48 object-cover rounded-md mb-4"
                                onError={(e) => {
                                    e.target.src = '/assets/placeholder.jpg'; // Fallback image
                                }}
                            />
                            <h4 className="text-xl font-semibold text-white mb-2">{article.title}</h4>
                            <p className="text-gray-400 mb-4">{article.excerpt}</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {article.tags.map((tag, index) => (
                                    <span key={index} className="bg-blue-500 text-white px-2 py-1 rounded text-sm">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <p className="text-sm text-gray-500 mb-4">By {article.author} on {article.date}</p>
                            <Link
                                to={`/article/${article.id}`}
                                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors"
                            >
                                Read More
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ArticlesList;