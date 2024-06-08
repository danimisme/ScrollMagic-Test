export default function CardProject({ title, description, index }) {
  let bg = "bg-[#000000]";
  if (index % 2 === 0) {
    bg = "bg-[#31be32]";
  } else if (index % 3 === 0) {
    bg = "bg-[#ff97d0]";
  }
  console.log(bg);
  return (
    <div className={`${bg} w-ful group cursor-pointer mb-10`}>
      <div className="text-white p-16 border-4 border-white group-hover:translate-x-4 transition group-hover:-translate-y-4 duration-300">
        <h1 className="text-5xl font-bold mb-10">{title}</h1>
        <p className="text-3xl">{description}</p>
      </div>
    </div>
  );
}
