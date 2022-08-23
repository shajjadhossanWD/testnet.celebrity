import React, { useState, useEffect } from 'react';
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from 'draftjs-to-html';
import { Button, Link, Typography } from "@mui/material";
import axios from "axios";
import htmlToDraft from 'html-to-draftjs';

const NftDetailsPage = () => {
    const [value, setValue] = useState(() => EditorState.createEmpty());
    const data = draftToHtml(convertToRaw(value.getCurrentContent()));

    // useEffect(() => {
    //     // get page by page slug
    //     const getPage = async () => {
    //         await axios.get(`https://backend.dsl.sg/api/v1/page/sr`)
    //             .then(res => {
    //                 const content = res.data.page.content;
    //                 const blocksFromHtml = htmlToDraft(content);
    //                 const { contentBlocks, entityMap } = blocksFromHtml;
    //                 const contentState = ContentState.createFromBlockArray(contentBlocks, entityMap);
    //                 setValue(EditorState.createWithContent(contentState));
    //             })
    //     };
    //     getPage();
    // }, []);

    // const updateHome = event => {
    //     event.preventDefault();
    //     axios.put("https://backend.dsl.sg/api/v1/page/sr", {
    //         content: data
    //     }, {
    //         headers: {
    //             Authorization: `Bearer ${localStorage.getItem("adminID")}`
    //         }
    //     })
    //         .then(res => {
    //             if (res.status === 200) {
    //                 alert(res.data.message)
    //             }
    //         })
    //         .catch(err => {
    //             alert(err.response.data.message)
    //         })
    // }

    return (
        <div className='handleHeightSRMenu text-light'>
            <form
            // onSubmit={updateHome}
            >
                <div className='container'>
                    <h4 className='mt-5 ms-1 marginAlign'>NFT Details</h4>
                    <div className='mt-3 ms-1'>
                        <Editor
                            editorState={value}
                            onEditorStateChange={setValue}
                            wrapperClassName="wrapper-class"
                            editorClassName="editor-class border mt-2 p-2 bg-white text-black"
                            toolbarClassName="toolbar-class text-black"
                            toolbar={{
                                image: {
                                    urlEnabled: true,
                                    uploadEnabled: true,
                                    alignmentEnabled: true,
                                    uploadCallback: undefined,
                                    previewImage: true,
                                    inputAccept: 'image/gif,image/jpeg,image/jpg,image/png,image/svg',
                                    alt: { present: false, mandatory: false },
                                    defaultSize: {
                                        height: 'auto',
                                        width: 'auto',
                                    },
                                    fontFamily: {
                                        options: ['sans-serif', 'Arial', 'Georgia', 'Impact', 'Tahoma', 'Times New Roman', 'Verdana'],
                                        className: undefined,
                                        component: undefined,
                                        dropdownClassName: undefined,
                                    },
                                },
                            }}
                        />
                    </div>
                    <div>
                        <Button className="text-light ms-1 mt-2 bg-primary mb-5 text-uppercase" type='submit'>Update now</Button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default NftDetailsPage;