import { useState } from "react";
import { Input, TextArea } from "../ui";

const CreateArticle = () => {
    const [title, setTitle] = useState("");
    const [descripton, setDescripton] = useState("");
    const [body, setBody] = useState("");
    return (
        <div className="text-center ">
            <h1 className="fs-2">Create Article </h1>

            <div className="w-75 mx-auto">
                <form>
                    <Input label={"Title"} state={title} setState={setTitle} />
                    <TextArea
                        label={"Description"}
                        state={descripton}
                        setState={setDescripton}
                    />
                    <TextArea
                        label={"Body"}
                        state={body}
                        setState={setBody}
                        height={"300px"}
                    />

                    <button
                        className="w-100 btn btn-primary mt-2"
                        type="submit"
                    >
                        Create
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CreateArticle;
