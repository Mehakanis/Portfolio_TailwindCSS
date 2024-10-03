import Image from "next/image"

export default function AboutSection(){
    return(
<section className="text-white">
    <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 flex flex-col md:flex-row  mt-[-20px]">
<Image src="/images/About1.jpg" alt= ""width={400} height={50}
className="h-auto w-[100%]" />
    <div>
    <h2 className="text-4xl font-bold text-white mb-4 ">About Me</h2>
    <p className="text-base lg:text-lg  ">I am Mehak Anis, a passionate Full-Stack Web Developer with a solid background in both frontend and backend technologies. My journey in web development has equipped me with skills in HTML5, CSS3, TypeScript, Tailwind CSS, React.js, and Next.js. I am dedicated to creating efficient and user-friendly web applications, and I continuously seek opportunities to enhance my knowledge in emerging fields like Generative AI and Cloud Computing. My commitment to excellence drives me to deliver high-quality solutions and stay ahead in a constantly evolving tech landscape.


</p>
<div className="flex flex-row mt-8">
    <span>Skills</span>
<span>Education</span>
<span>Certificates</span>

</div>
</div>
</div>
</section>
    )
}