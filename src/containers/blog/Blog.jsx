import "./Blog.css"
import { Article } from "../../Components/index"
import { Blog_01, Blog_02, Blog_03, Blog_04, Blog_05 } from "./imports";
const Blog = () => (
    <div className="gpt3__blog section__padding" id="blog">
        <div className="gpt3__blog-heading">
            <h1 className="gradient__text">A lot is happening, <br /> We are blogging about it.</h1>
        </div>
        <div className="gpt3__blog-container">
            <div className="gpt3__blog-container_groupA">
                <Article imgUrl={Blog_01} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
            </div>
            <div className="gpt3__blog-container_groupB">
                <Article imgUrl={Blog_02} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
                <Article imgUrl={Blog_03} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
                <Article imgUrl={Blog_04} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
                <Article imgUrl={Blog_05} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
            </div>
        </div>
    </div>
);



export default Blog