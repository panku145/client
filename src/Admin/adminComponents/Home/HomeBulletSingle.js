import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

import parse from "html-react-parser";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import { convertToHTML } from "draft-convert";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const HomeBulletSingle = () => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  const [convertedContent, setConvertedContent] = useState(null);
  const handleEditorChange = (state) => {
    setEditorState(state);
    convertContentToHTML();
  };
  const convertContentToHTML = () => {
    let currentContentAsHTML = convertToHTML(editorState.getCurrentContent());
    setConvertedContent(currentContentAsHTML);
  };

  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState({});
  const [text, setText] = useState("");

  useEffect(() => {
    const getData = async () => {
      const res = await Axios.get("/homebullet/" + id);
      setData(res.data);
      setText(res.data.text);
    };
    getData();
  }, [id]);

  const updateData = async () => { 
    try {
      await Axios.put(`/homebullet/${data._id}`, {  
        text : convertedContent,
      });
      // window.location.reload()
      navigate("/admin-dashboard");
    } catch (err) {
      console.log(err);
    }
  };

  // const updateData = async () => { 
  //   console.log(convertedContent);
  // }

  const deleteData = () => {
    Axios.delete(`/homebullet/${data._id}`).then((res) =>
      navigate("/admin-dashboard")
    );
  };

  const addNew = () => {
    navigate("/admin-dashboard/add");
  };

  return (
    <>
      <div className="add-new-post-sec pb-5">
        <div className="add-new-heading">
          <h2>Edit</h2>
        </div>
        <div className="container">
          <div className="row add-new-post-rw">
            <div className="col-xl-10 col-lg-10 col-md-10">
              <div className="mb-3 row add-new-post-sub-row">
                <div className="col-md-8">
                  {/* <textarea
                    type="text"
                    className="form-control txtarea"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    onChange={(e) => setText(e.target.value)}
                    value={text}
                  ></textarea> */}
                  <>
                    {parse(text)}
                    <Editor
                      editorState={editorState}
                      onEditorStateChange={handleEditorChange}
                      wrapperClassName="wrapper-class"
                      editorClassName="editor-class hero-main-hed-1"
                      toolbarClassName="toolbar-class"
                      placeholder="Enter Text Here"
                    />
                  </>
                  <div className="login-submit-btn pt-3">
                    <button
                      onClick={() => updateData()}
                      className="btn btn-success"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => deleteData()}
                      className="btn btn-danger mx-2"
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => addNew()}
                      className="btn btn-primary"
                    >
                      Add New
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeBulletSingle;
