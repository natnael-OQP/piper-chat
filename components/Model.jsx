import { Fragment, useRef } from "react";
//  recoil
import { modelState } from "../atoms/modelAtom"
// headless ui
import { Dialog,Transition  } from '@headlessui/react'
import { useRecoilState } from "recoil";

import {
    CameraIcon
} from '@heroicons/react/outline';

const Model = () => {
    const [open, setOpen] = useRecoilState(modelState);
    const filePickerRef = useRef(null)
    
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
                            <div
                                onClick={()=> filePickerRef.current.click() }
                                className="mx-auto flex items-center justify-center w-12 h-12 rounded-full ring-[1px] ring-green-600 bg-green-50 cursor-pointer shadow-lg  " >
                                <CameraIcon
                                    className="w-6 h-6 text-green-500 " aria-hidden="true"
                                />
                            </div>
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
                                        ref={filePickerRef}
                                        type="file"
                                        hidden
                                        />
                                </div>
                                <div className="mt-2" >
                                    <input
                                        
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
                                type="button"
                                className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 text-gray-50 font-bold  bg-green-500 sm:text-sm disabled:bg-gray-300 disabled:cursor-not-allowed hover:disabled:bg-green-400 "
                            >
                                Upload a post
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
