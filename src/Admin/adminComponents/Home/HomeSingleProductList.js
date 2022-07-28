import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

const HomeSingleProductList = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [data, setData] = useState({});
  const [title, setTitle] = useState("");
  const [img, setImg] = useState("");

  useEffect(() => {
    const getBlog = async () => {
      const res = await Axios.get("/homeproductlist/" + id);
      setData(res.data);
      setTitle(res.data.title);
      setImg(res.data.img);
    };
    getBlog();
  }, [id]);

  const onChangeFile = (e) => {
    setImg(e.target.files[0]);
  };

  const updateData = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("title", title);
    formData.append("img", img);
    formData.append("imgFilename", img.name);

    Axios.put(`/homeproductlist/${data._id}`, formData);
    navigate("/admin-dashboard");
  };

  return (
    <>
      <div className="add-new-post-sec pb-5">
        <div className="add-new-heading">
          <h2>Add New Blog</h2>
        </div>
        <div className="container">
          <div className="row add-new-post-rw">
            <div className="col-xl-10 col-lg-10 col-md-10">
              <form onSubmit={updateData} encType="multipart/form-data">
                <div className="mb-3 row add-new-post-sub-row">
                  <div className="col-md-2 text-end ">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Title
                    </label>
                  </div>
                  <div className="col-md-8">
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </div>
                </div>
                <div className="mb-3 row add-new-post-sub-row">
                  <div className="col-md-2 text-end">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Image
                    </label>
                  </div>
                  <div className="col-md-8">
                    <input
                      type="file"
                      filename="img"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder={img}
                      onChange={onChangeFile}
                    />
                    <div className="login-submit-btn mt-3">
                      <button type="submit" className="btn btn-success">
                        Update
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeSingleProductList;
