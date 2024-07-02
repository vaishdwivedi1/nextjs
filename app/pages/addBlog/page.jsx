"use client";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { i18nChangeLanguage } from "@wangeditor/editor";
import { Editor, Toolbar } from "@wangeditor/editor-for-react";
import { toast } from "react-toastify";
import { addBlog } from "@/app/redux/blogSlice";
import { useAppDispatch } from "@/app/hooks/reducHooks";

const AddBlog = React.memo(() => {
  const dispatch = useAppDispatch();

  const [editor, setEditor] = useState(null);
  const [html, setHtml] = useState("");
  const [updateContent, setUpdateContent] = useState({ title: "", content: "", img: "" });
  const toolbarConfig = {}; // TS syntax
  const fileInputRef = useRef(null);
  const handleTitle = (e) => setUpdateContent({ ...updateContent, title: e.target.value });

  const handleStoryChange = (e) => setUpdateContent({ ...updateContent, content: e });
  const handleImgChange = async (e) => setUpdateContent({ ...updateContent, img: e.target.value });
  // const handleImgChange = async (e) => {
  //   const file = e.target.files[0];
  //   if (file) {
  //     const base64 = await convertToBase64(file);
  //     setUpdateContent({ ...updateContent, img: base64 });
  //   }
  // };

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const editorConfig = {
    placeholder: "Type here...",
    fontFamily: "Mukta",
    lang: "en",
    MENU_CONF: {
      fontFamily: { fontFamilyList: ["Arial", "Georgia", "Impact", "Tahoma", "Times New Roman", "Verdana", "Mukta"] },
      //   uploadImage: {
      //     async customUpload(file, insertFn) {
      //       dispatch(resetAWSImage());
      //       const fileSize = file.size / 1024 / 1024; // in MiB
      //       if (fileSize > 5) {
      //         ToastMessage("File size exceeds 5 MB", "success");
      //       } else {
      //         dispatch(
      //           getAWSImageURL({
      //             payload: { type: file.type, file },
      //             callback: (url) => {
      //               if (url) {
      //                 insertFn(url, "alt", url);
      //                 // Resolve with the image source
      //                 // resolve({ data: { link: url, src: url } });
      //               } else {
      //                 window.alert("Failed to Upload");
      //               }
      //             },
      //           })
      //         );
      //       }
      //     },
      //   },
    },
  };

  useEffect(() => {
    i18nChangeLanguage("en");
    setHtml("");
  }, []);

  useEffect(() => {
    if (html?.length) handleStoryChange(html);
  }, [html]);

  // Timely destroy editor, important!
  useEffect(() => {
    return () => {
      if (editor == null) return;
      editor.destroy();
      setEditor(null);
    };
  }, [editor]);

  const submitUpdate = (e) => {
    e.preventDefault();
    if (!updateContent.title) {
      toast.error(" Title can not be empty");
      return;
    }
    if (!updateContent.content) {
      toast.error(" Content can not be empty");
      return;
    }
    if (!updateContent.img) {
      toast.error(" Img can not be empty");
      return;
    }
    const data = {
      title: updateContent.title,
      content: updateContent.content,
      img: updateContent.img,
    };
    dispatch(addBlog({ payload: data, callback: resetValues }));
  };

  const resetValues = () => {
    setHtml("");
    setUpdateContent({ title: "", content: "", img: "" });
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <>
      <Header />
      <div className="relative m-4 items-start w-[95vw] gap-4 max-w-[95vw] ">
        <div className="items-stretch w-full gap-2 mb-8">
          <h3 className="font-semibold text-xl">Add Blog</h3>
        </div>

        <div className="flex flex-col items-stretch w-full gap-4 mb-8 ">
          <p className="font-semibold text-xl">Title</p>
          <input value={updateContent.title} onChange={handleTitle} placeholder="Write title" type="text" className="self-start h-[3rem] p-8 rounded border w-full" />
        </div>
        {/* <div className="flex flex-col items-stretch w-full gap-4 mb-8 ">
          <p className="font-semibold text-xl">Image</p>
          <input onChange={handleImgChange} placeholder="Image" type="file" className="self-start h-[3rem] p-8 rounded border w-full" />
        </div> */}
        <div className="flex flex-col items-stretch w-full gap-4 mb-8 ">
          <p className="font-semibold text-xl">Image</p>
          <input value={updateContent.img} onChange={handleImgChange} placeholder="Image" type="text" className="self-start h-[3rem] p-8 rounded border w-full" />
        </div>
        <div className="items-start w-full gap-2">
          <p className="font-semibold text-xl  mb-8 ">Content</p>
          <div className="items-start w-full gap-2">
            <Toolbar editor={editor} defaultConfig={toolbarConfig} mode="default" className="w-[95vw] border border-black" />
            <Editor defaultConfig={editorConfig} value={html} onCreated={setEditor} onChange={(editor) => setHtml(editor.getHtml())} mode="default" className="h-125 w-full max-w-[95vw] border border-gray-300" />
          </div>
          <div className="flex justify-end w-full mt-2">
            <button className="bg-red-500 text-white py-2 px-4 rounded">Back</button>
            <button onClick={submitUpdate} className="bg-green-500 text-white py-2 px-4 rounded ml-2">
              Submit
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
});

export default AddBlog;
