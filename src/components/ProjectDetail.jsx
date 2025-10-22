import { useEffect, useMemo, useRef } from 'react';

const ProjectDetail = ({ project, onClose, onPrev, onNext }) => {
    const scrollRef = useRef(null);

    // Keyboard navigation: Esc to close, arrows to navigate
    useEffect(() => {
        const onKey = (e) => {
            if (e.key === 'Escape') onClose?.();
            if (e.key === 'ArrowLeft') onPrev?.();
            if (e.key === 'ArrowRight') onNext?.();
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [onClose, onPrev, onNext]);

    // Reset scroll to top when project changes
    const projectKey = useMemo(() => project?.slug || project?.title || '', [project]);
    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' });
        }
    }, [projectKey]);

    if (!project) return null;

    return (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4" onClick={onClose}>
            <div
                ref={scrollRef}
                className="relative bg-black-200 border border-black-300 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto no-scrollbar"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close button */}
                <button
                    aria-label="Close"
                    onClick={onClose}
                    className="absolute top-3 right-3 text-white-500 hover:text-white transition"
                >
                    ✕
                </button>

                {/* Side navigation buttons */}
                {onPrev && (
                    <button
                        aria-label="Previous project"
                        onClick={onPrev}
                        className="hidden md:flex items-center justify-center arrow-btn absolute left-3 top-1/2 -translate-y-1/2 z-10"
                    >
                        <img src="/assets/left-arrow.png" alt="previous" className="w-4 h-4" />
                    </button>
                )}
                {onNext && (
                    <button
                        aria-label="Next project"
                        onClick={onNext}
                        className="hidden md:flex items-center justify-center arrow-btn absolute right-3 top-1/2 -translate-y-1/2 z-10"
                    >
                        <img src="/assets/right-arrow.png" alt="next" className="w-4 h-4" />
                    </button>
                )}

                {project.cover && (
                    <img src={project.cover} alt={`${project.title} cover`} className="w-full h-60 md:h-80 object-cover rounded-t-2xl" />
                )}

                <div className="p-6 md:px-16 space-y-6">
                    <div className="flex items-start justify-between gap-4">
                        <div>
                            <h2 className="text-2xl md:text-3xl font-semibold text-white-800">{project.title}</h2>
                            {project.overview && <p className="mt-2 text-white-600">{project.overview}</p>}
                        </div>
                        {/* Mobile next/prev */}
                        <div className="flex md:hidden items-center gap-2 shrink-0">
                            {onPrev && (
                                <button aria-label="Previous project" onClick={onPrev} className="arrow-btn">
                                    <img src="/assets/left-arrow.png" alt="previous" className="w-4 h-4" />
                                </button>
                            )}
                            {onNext && (
                                <button aria-label="Next project" onClick={onNext} className="arrow-btn">
                                    <img src="/assets/right-arrow.png" alt="next" className="w-4 h-4" />
                                </button>
                            )}
                        </div>
                    </div>

                    {Array.isArray(project.highlights) && project.highlights.length > 0 && (
                        <div>
                            <h3 className="text-white-700 font-semibold mb-2">Highlights</h3>
                            <ul className="list-disc list-inside space-y-1 text-white-600">
                                {project.highlights.map((h, i) => (
                                    <li key={i}>{h}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {Array.isArray(project.body) && project.body.length > 0 && (
                        <div className="space-y-3">
                            {project.body.map((para, i) => (
                                <p key={i} className="text-white-600">
                                    {para}
                                </p>
                            ))}
                        </div>
                    )}

                    {Array.isArray(project.gallery) && project.gallery.length > 0 && (
                        <div>
                            <h3 className="text-white-700 font-semibold mb-2">Gallery</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {project.gallery.map((src, i) => (
                                    <img key={i} src={src} alt={`gallery-${i}`} className="w-full h-48 object-cover rounded-xl border border-black-300" />)
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectDetail;
