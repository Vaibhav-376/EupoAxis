import React from 'react';
import digitalPlatform from "../assets/digitalPlatform.png"
import OptimalIdeation from "../assets/optimalIdeation.png"
import favourableSetting from "../assets/favourableSetting.png"
import effectiveInteraction from "../assets/effectiveIteration.png"
import flexibleTime from "../assets/image.png"
import reliable from "../assets/image copy.png"

const WhyWeBest = () => {

    const ourExpertise = [
        { id: 1, image: digitalPlatform, heading: "Digital Platform", description: "Digital platforms in education are online tools that support learning and teaching, such as Learning Management Systems, online courses, and virtual classrooms. They provide flexible, interactive, and personalized learning experiences, making education accessible anytime and anywhere. These platforms also promote collaboration and enhance traditional teaching methods." },
        { id: 2, image: OptimalIdeation, heading: "Optimal Ideation", description: "Optimal ideation is the process of generating and refining the best ideas to solve problems or achieve goals. It involves creative thinking, collaboration, and strategic approaches to find innovative and effective solutions." },
        { id: 3, image: favourableSetting, heading: "Favourable Setting", description: "A favorable setting refers to an environment that supports and enhances productivity, creativity, and well-being. It includes factors like positive atmosphere, proper resources, and a supportive culture that encourages growth and success. In both personal and professional contexts, a favorable setting helps individuals thrive and achieve their goals more effectively." },
        { id: 4, image: effectiveInteraction, heading: "Effective Interaction", description: "Effective interaction refers to clear, meaningful communication and engagement between individuals or groups. It involves active listening, understanding, and responsiveness, fostering collaboration and positive relationships. In both personal and professional settings, effective interaction helps build trust, resolve conflicts, and achieve common goals efficiently." },
        { id: 5, image: flexibleTime, heading: "Flexible Time", description: "Flexible time refers to the ability to adjust work or study hours according to individual needs and preferences. It allows for a better work-life balance, as people can choose when to start and finish tasks. This flexibility increases productivity, reduces stress, and accommodates personal commitments, leading to improved overall well-being." },
        { id: 6, image: reliable, heading: "Reliable", description: "Reliable refers to being trustworthy and consistent in delivering results or fulfilling commitments. A reliable person or system can be depended on to perform as expected, meet deadlines, and provide accurate information. Reliability builds trust and strengthens relationships, whether in personal, professional, or technological contexts." },
    ];

    return (
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-700">
            <div className="container mx-auto text-center text-white px-4">
                <h2 className="text-5xl md:text-6xl font-extrabold leading-tight">
                    Why We Are <span className="text-[#FFDD57]">The Best</span> from Others
                </h2>
                <p className="mt-4 text-lg md:text-xl font-semibold text-white/80">
                    Our educational website stands out by offering a personalized learning experience that adapts to each student's unique needs, ensuring maximum engagement and progress. With expert-led courses crafted by industry professionals, we provide high-quality, relevant content that helps learners stay ahead. We also incorporate interactive tools like quizzes, video tutorials, and discussion forums, making learning not only informative but also enjoyable. Our platform is accessible 24/7, allowing students to learn at their own pace, anytime and anywhere. Additionally, we offer comprehensive support through tutoring, technical assistance, and a vibrant community to ensure every learner has the resources they need to succeed.
                </p>
            </div>

            <div className="flex flex-wrap justify-center gap-10 mt-10">
                {ourExpertise.map((expertise) => (
                    <div key={expertise.id} className="bg-white p-4 rounded-lg shadow-lg max-w-xs w-full text-center">
                        <img src={expertise.image} alt={expertise.heading} className="-mb-2 w-auto h-auto  rounded-md mx-auto" />
                        <h3 className="text-2xl font-semibold text-blue-700 mb-2">{expertise.heading}</h3>
                        <p className="text-gray-700">{expertise.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default WhyWeBest;
