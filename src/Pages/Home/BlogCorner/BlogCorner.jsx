import { Button, Card } from "flowbite-react";

const techniques = [
    {
        title: 'Character Development',
        description: 'Explore strategies for creating well-rounded and memorable characters, including techniques for developing their personalities, motivations, strengths, weaknesses, and arcs.'
    },
    {
        title: 'Plot Structure',
        description: 'Provide guidance on crafting compelling plotlines, including tips for outlining, pacing, and balancing exposition, rising action, climax, and resolution.'
    },
    {
        title: 'World Building',
        description: 'Offer advice on building immersive and believable fictional worlds, covering aspects such as geography, history, culture, technology, magic systems, and societal norms.'
    },
    {
        title: 'Dialogue Writing',
        description: 'Share techniques for writing authentic and engaging dialogue, including tips for differentiating characters voices, conveying subtext, and using dialogue tags effectively.'
    },
    {
        title: 'Crafting Memorable Endings',
        description: 'Discuss the importance of crafting satisfying and resonant endings for stories, and offer tips for tying up loose ends, delivering emotional payoffs, and leaving readers with a lasting impression.'
    },
    {
        title: 'Conflict and Tension',
        description: 'Explore techniques for creating compelling conflict and tension in storytelling, including methods for escalating stakes, introducing obstacles, and maintaining suspense throughout a narrative.'
    },
    {
        title: 'Finding Inspiration and Creativity',
        description: 'Offer strategies for finding inspiration, nurturing creativity, and overcoming creative blocks in writing. Discuss techniques such as free writing, mind mapping, visual brainstorming, and drawing inspiration from personal experiences, history, mythology, and other sources.'
    },
    {
        title: 'Symbolism and Imagery',
        description: 'Explore the use of symbolism and imagery in fiction writing, discussing how to imbue objects, settings, and events with symbolic significance to enhance themes and deepen the emotional impact of a story. Provide examples and exercises for incorporating symbolism and imagery effectively.'
    },
]

const BlogCorner = () => {



    return (
        <div>
            <div className="flex items-center justify-center border-2 border-black h-20 mb-5">
                <h2 className="text-3xl font-bold uppercase">Blog Corner</h2>
            </div>
            <div className="grid grid-cols-1 md-grid-cols-2 lg:grid-cols-4 gap-2 px-2 mb-6">
                {
                    techniques.map((tech, idx) => <Card key={idx} className="rounded-none text-center shadow-none">
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white uppercase">
                        {tech.title}
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        {tech.description}
                    </p>
                    <Button className="rounded-none">
                        Read more
                        <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path
                                fillRule="evenodd"
                                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </Button>
                </Card>)
                }
                
            </div>
        </div>
    );
};

export default BlogCorner;