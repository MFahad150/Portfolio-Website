import { RxOpenInNewWindow } from "react-icons/rx";
import { FaRegFolder} from "react-icons/fa";


const BlogCard = ({title, des, listItem, link})=>{
return (
    <>
<a href={link} target="_blank">
<div className="w-full h-80 rounded-lg bg-[#112240] p-7 flex flex-col justify-center gap-6 hover:-translate-y-2 transition tranform duration-300 goup">
    <div className="flex justify-between items-center">
        <FaRegFolder className="text-textGreen text-2xl" />
        <RxOpenInNewWindow className="hover:text-textGreen text-4xl"/>
    </div>
    <div>
        <h2 className="text-xl font-titleFont font-semibold tracking-wide hover:text-textGreen">{title}</h2>
        <p className="text-sm mt-3">{des}</p>
    </div>
    <ul className="text-xs mdl:text-sm text-textGreen flex items-center gap-2 justify-between flex-wrap">
        {listItem.map((item, i) =>(
            <li key={i}>{item}</li>
        ))}
    </ul>
</div>
</a>
</>
);
}
export default BlogCard;