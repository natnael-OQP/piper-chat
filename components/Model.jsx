import { Fragment, useRef, useState } from "react";
// atoms
import { modelState } from "../atoms/modelAtom"
// headless ui
import { Dialog,Transition  } from '@headlessui/react'
import { useRecoilState } from "recoil";
// Icons
import { CameraIcon, XIcon } from '@heroicons/react/outline';
// firebase
import { db, storage } from '../database/firebase';
// fireStore
import { addDoc, collection, doc, serverTimestamp, updateDoc } from "@firebase/firestore";
// next-auth
import { useSession } from "next-auth/react";
import { getDownloadURL, ref, uploadString } from "@firebase/storage";

const Model = () => {
    // auth data
    const {data:session} = useSession();
    
    let [open, setOpen] = useRecoilState(modelState);
    const filePickerRef = useRef(null);
    const [selectedFile, setSelectedFile] = useState(null)
    let [loading, setLoading] = useState(false)
    const captionRef = useRef(null);

    // select image
    const addImageToPost = (e) => {
        const reader = new FileReader();
        //  read the file 
        if (e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0]);
        }

        reader.onload = (readerEvent) => {
            setSelectedFile(readerEvent.target.result);
        }
    }

    // upload post
    const uploadPost = async () => {
        if (loading) return;
        setLoading(true);
        
        if (captionRef.current.value) {
            // upload data to firestore
            const docRef = await addDoc(collection(db, 'posts'), {
                username: session.user.name,
                profilePic: session.user.image,
                caption: captionRef.current.value,
                timeStamp: serverTimestamp(),
            })
            // upload to image to storage
            const imageRef = ref(storage, `posts/${docRef.id}/image`);
            await uploadString(imageRef, selectedFile, "data_url").then(async snapshot => {
                const downloadURL = await getDownloadURL(imageRef);
                await updateDoc(doc(db, 'posts', docRef.id), {
                    image:downloadURL 
                })
            })
            
            // close the model
            setOpen(false);
            setLoading(false);
            setSelectedFile(null);
        }

        setLoading(false);
        
    }

    return (
        <Transition.Root show={open} as={Fragment} >
            <Dialog
                as='div'
                className="fixed z-10 inset-0 overflow-y-auto "
                open={open}
                onClose={() => setOpen(false)}
            >
            <div className="flex items-center justify-center min-h-screen p-4 text-center sm:block sm:p-0 " >
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-90  "
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity " />
                </Transition.Child>
                {/* this element is to trick the browser into  into centering   the model content. */}
                <span className="hidden sm:inline-block sm:align-middle sm:h-screen " aria-hidden="true"></span>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div
                        className="inline-block   bg-white rounded-lg  text-left overflow-hidden shadow-lg  transform transition-all my-6 align-middle max-w-sm w-full p-6  " 
                    >
                        <div>
                            {
                                    selectedFile ? (
                                        <div className="relative !max-h-[500px] !overflow-hidden  " >
                                            <img
                                                className=" !max-h-[350px] object-contain w-full cursor-pointer "
                                                src={selectedFile}
                                                alt="post file"
                                            />
                                            <div
                                                onClick={()=>setSelectedFile(null)}
                                                className="hover:scale-105 transition-all duration-300 transform absolute top-1 right-1 flex items-center justify-center w-6 h-6 rounded-full ring-[1px]  ring-red-400 bg-green-50 cursor-pointer shadow-sm" >
                                                <XIcon className="text-red-400 shadow-lg w-5 h-5   " />
                                            </div>
                                        </div>
                                    ):(
                                        <div
                                            onClick={()=> filePickerRef.current.click() }
                                            className="mx-auto flex items-center justify-center w-12 h-12 rounded-full ring-[1px] ring-green-600 bg-green-50 cursor-pointer shadow-lg  " >
                                            <CameraIcon
                                                className="w-6 h-6 text-green-500 " aria-hidden="true"
                                            />
                                        </div>
                                )
                            }
                            <div>
                                <div className="mt-3 text-center sm:mt-5 "> 
                                    <Dialog.Title
                                        as='h3'
                                        className="text-lg leading-6 font-medium text-gray-900 "
                                    >
                                        Upload a photo
                                    </Dialog.Title>
                                </div>
                                <div>
                                    <input
                                        type="file"
                                        hidden
                                        ref={filePickerRef}
                                        onChange={addImageToPost}
                                        />
                                </div>
                                <div className="mt-2" >
                                    <input
                                        ref={captionRef}
                                        type="text"
                                        className="   border-gray-600   px-2 py-1 shadow-md rounded-md focus:ring-[1px]  w-full text-center "
                                        placeholder="Write a caption... "
                                    />
                                </div>
                            </div>
                        </div>                        
                        
                        {/* button */}
                        <div className="mt-5 sm:mt-6" >
                            <button
                                onClick={uploadPost}
                                disabled={!selectedFile}    
                                type="button"
                                className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 text-gray-50 font-bold  bg-green-500 sm:text-sm disabled:bg-gray-400 disabled:cursor-not-allowed hover:bg-gray-300 hover:disabled:bg-green-400 "
                            >
                                {loading?"Uploading...":"Upload a post"}
                            </button>
                        </div>
                        
                    </div>
                </Transition.Child>
            </div>
            </Dialog>
        </Transition.Root>
    )
}

export default Model
